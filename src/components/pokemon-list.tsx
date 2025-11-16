import { getRandomPokemon } from "@/db";
import PokemonCard from "@/components/pokemon-card";
import { cacheLife } from "next/cache";
import { Skeleton } from "@/components/ui/skeleton";

export default async function PokemonList() {
  "use cache";
  cacheLife("max");
  const pokemon = await getRandomPokemon(12);

  return (
    <div className="w-full grid grid-cols-4 gap-4">
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
    <div className="w-full grid grid-cols-4 gap-4">
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
