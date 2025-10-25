import PokemonList from "@/components/pokemon-list";
import { cacheLife } from "next/cache";

export default async function StaticPage() {
  "use cache";
  cacheLife("max");

  return (
    <div className="flex justify-center">
      <main className="flex flex-col items-center max-w-2xl py-4 px-16 space-y-4">
        <h1 className="text-4xl">Static Page</h1>
        <p className="text-sm text-gray-500 text-center">
          This entire page is a cached component and will be displayed
          immediately without re-rendering on each request. The contents should
          match the contents of the home page.
        </p>
        <PokemonList />
      </main>
    </div>
  );
}
