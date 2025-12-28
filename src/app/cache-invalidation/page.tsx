import { Suspense } from "react";
import { getRandomPokemon } from "@/db";
import { CartPokemonList } from "@/components/cart-pokemon-list";
import PokemonCard from "@/components/pokemon-card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ClearCartButton } from "@/components/clear-cart-button";
import { Spinner } from "@/components/ui/spinner";
import { AddToCartPokemonListSkeleton } from "@/components/ui/skeleton";

async function AddToCartPokemonList() {
  const pokemon = await getRandomPokemon(8);

  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {pokemon.map((p) => (
        <div key={p.id} className="flex flex-col gap-2">
          <PokemonCard
            id={p.id}
            name={p.name}
            likes={p.likes}
            types={p.types}
          />
          <AddToCartButton pokemonId={p.id} />
        </div>
      ))}
    </div>
  );
}

export default function CacheInvalidationPage() {
  return (
    <div className="flex justify-center">
      <main className="flex-1 flex flex-col items-center max-w-6xl py-4 px-16 space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-4xl">Cache Invalidation</h1>
          <p className="text-sm text-gray-500 max-w-2xl">
            See how cache tags work with real data, the cart pokemon list is
            cached and will be invalidated when a new pokemon is added to the
            cart.
          </p>
          <div className="flex justify-center">
            <ClearCartButton />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 w-full">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-center">Cart Pokemon</h2>
            <Suspense
              fallback={
                <div className="flex justify-center">
                  <Spinner />
                </div>
              }
            >
              <CartPokemonList />
            </Suspense>
          </div>

          <div className="w-px bg-gray-300"></div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-center">Add Pokemon to Cart</h2>
            <Suspense fallback={<AddToCartPokemonListSkeleton />}>
              <AddToCartPokemonList />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
