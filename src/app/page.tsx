import PokemonList, { DynamicPokemonList } from "@/components/pokemon-list";
import { Suspense } from "react";
import { PokemonListSkeleton } from "@/components/pokemon-list";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col items-center max-w-2xl py-4 px-16 space-y-4">
        <h1 className="text-4xl">Pokemon</h1>
        <p className="text-sm text-gray-500 text-center">
          This is a demo of cache components, the following list of Pokemon are
          cached and will be displayed immediately.
        </p>
        <PokemonList />
        <p className="text-sm text-gray-500 text-center">
          The following list of pokemon are dynamic and will change on each
          request. The contents are streamed in when the component is rendered.
        </p>
        <Suspense fallback={<PokemonListSkeleton />}>
          <DynamicPokemonList />
        </Suspense>
      </main>
    </div>
  );
}
