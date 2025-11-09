import { drizzle } from "drizzle-orm/neon-http";
import { pokemonCartTable, pokemonTable } from "./schema";
import { sql, eq } from "drizzle-orm";
import { cacheTag } from "next/cache";

const db = drizzle(process.env.DATABASE_URL!);

export async function getRandomPokemon(limit = 24) {
  const pokemon = await db
    .select()
    .from(pokemonTable)
    .orderBy(sql`RANDOM()`)
    .limit(limit);
  return pokemon;
}

export async function addPokemonToCart(pokemonId: number, quantity = 1) {
  const result = await db
    .insert(pokemonCartTable)
    .values({
      pokemonId,
      quantity,
    })
    .onConflictDoUpdate({
      target: pokemonCartTable.pokemonId,
      set: {
        quantity: sql`${pokemonCartTable.quantity} + ${quantity}`,
        updatedAt: sql`now()`,
      },
    })
    .returning();
  return result[0];
}

export async function getCartPokemon() {
  "use cache";
  cacheTag("cart");

  const cartItems = await db
    .select({
      id: pokemonCartTable.id,
      pokemonId: pokemonCartTable.pokemonId,
      quantity: pokemonCartTable.quantity,
      createdAt: pokemonCartTable.createdAt,
      updatedAt: pokemonCartTable.updatedAt,
      pokemon: {
        id: pokemonTable.id,
        name: pokemonTable.name,
        likes: pokemonTable.likes,
        types: pokemonTable.types,
      },
    })
    .from(pokemonCartTable)
    .innerJoin(pokemonTable, eq(pokemonCartTable.pokemonId, pokemonTable.id))
    .orderBy(pokemonCartTable.createdAt);
  return cartItems;
}

export async function clearCart() {
  const result = await db.delete(pokemonCartTable).returning();
  return result;
}