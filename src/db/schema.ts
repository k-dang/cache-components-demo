import {
  uniqueIndex,
  integer,
  pgTable,
  text,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";

export const pokemonTable = pgTable(
  "pokemon",
  {
    id: integer().notNull().primaryKey(),
    name: text().notNull(),
    likes: integer().notNull().default(0),
    types: text().array().notNull().default([]),
  },
  (table) => [uniqueIndex("name_idx").on(table.name)]
);

export type Pokemon = typeof pokemonTable.$inferSelect;

export const pokemonCartTable = pgTable(
  "pokemon_cart",
  {
    id: serial("id").primaryKey(),
    pokemonId: integer("pokemon_id")
      .notNull()
      .references(() => pokemonTable.id, { onDelete: "cascade" }),
    quantity: integer("quantity").notNull().default(1),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [uniqueIndex("pokemon_id_idx").on(table.pokemonId)]
);

export type PokemonCart = typeof pokemonCartTable.$inferSelect;
