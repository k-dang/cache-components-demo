import PokemonList, { DynamicPokemonList } from "@/components/pokemon-list";
import DataCard, { DataCardSkeleton } from "@/components/data-card";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-xl flex-col items-center py-16 px-16 space-y-4">
        <h1 className="text-4xl">Pokemon</h1>
        <p className="text-sm text-gray-500 text-center">
          This is a demo of cache components, the PokemonList component is
          cached for the maximum amount of time.
        </p>
        <PokemonList />
        <p className="text-sm text-gray-500 text-center">
          The following PokemonList component is dynamic and will be re-rendered on each request.
        </p>
        <Suspense fallback={<Skeleton className="w-full h-20 bg-gray-400" />}>
          <DynamicPokemonList />
        </Suspense>
        <Suspense fallback={<DataCardSkeleton />}>
          <DataCard />
        </Suspense>
      </main>
    </div>
  );
}
