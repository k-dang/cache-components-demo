import { DynamicPokemonList } from "@/components/pokemon-list";
import { Suspense } from "react";
import { PokemonListSkeleton } from "@/components/ui/skeleton";

export default async function DynamicPage() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col items-center max-w-2xl py-4 px-16 space-y-4">
        <h1 className="text-4xl">Dynamic Page</h1>
        <p className="text-sm text-gray-500 text-center">
          The following list of pokemon are dynamic and will be re-rendered on
          each request / visit to this page. The contents should not match the
          contents of the home page.
        </p>
        <Suspense fallback={<PokemonListSkeleton />}>
          <DynamicPokemonList />
        </Suspense>
      </main>
    </div>
  );
}
