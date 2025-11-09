"use server";

import { addPokemonToCart, clearCart } from "@/db";
import { updateTag } from "next/cache";

export async function upsertPokemonCart(pokemonId: number, quantity = 1) {
  const result = await addPokemonToCart(pokemonId, quantity);
  updateTag("cart");
  return result;
}

export async function clearPokemonCart() {
  const result = await clearCart();
  updateTag("cart");
  return result;
}
