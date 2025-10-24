import { getRandomPokemon } from "@/db";
import PokemonCard from "./pokemon-card";
import { cacheLife } from "next/cache";

export default async function PokemonList() {
  "use cache";
  cacheLife("max");
  const pokemon = await getRandomPokemon(12);

  return (
    <div className="grid grid-cols-4 gap-4">
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          likes={pokemon.likes}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export async function DynamicPokemonList() {
  const pokemon = await getRandomPokemon(12);

  return (
    <div className="grid grid-cols-4 gap-4">
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          likes={pokemon.likes}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}
