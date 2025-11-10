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

export function PokemonListSkeleton() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-[140px] w-full" />
      ))}
    </div>
  );
}

export function AddToCartPokemonListSkeleton() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Skeleton className="h-[140px] w-full min-w-[108px]" />
          <Skeleton className="h-9 w-full" />
        </div>
      ))}
    </div>
  );
}
