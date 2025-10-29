import PokemonList, { DynamicPokemonList } from "@/components/pokemon-list";
import { Suspense } from "react";
import { PokemonListSkeleton } from "@/components/pokemon-list";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col items-center max-w-6xl py-4 px-16 space-y-4">
        <h1 className="text-4xl">Pokemon</h1>
        <p className="text-sm text-gray-500 text-center">
          This is a demo of cache components
        </p>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 w-full">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-center">Cached Pokemon</h2>
            <PokemonList />
          </div>
          <div className="w-px bg-gray-300"></div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-center">Dynamic Pokemon</h2>
            <Suspense fallback={<PokemonListSkeleton />}>
              <DynamicPokemonList />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
