import { Suspense } from "react";
import { getCartPokemon, getRandomPokemon } from "@/db";
import PokemonCard from "@/components/pokemon-card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ClearCartButton } from "@/components/clear-cart-button";
import { Spinner } from "@/components/ui/spinner";

async function CartPokemonList() {
  const cartItems = await getCartPokemon();

  if (cartItems.length === 0) {
    return <p className="text-gray-500 text-center">No pokemon in cart yet.</p>;
  }

  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {cartItems.map((item) => (
        <PokemonCard
          key={item.id}
          id={item.pokemon.id}
          name={item.pokemon.name}
          likes={item.pokemon.likes}
          types={item.pokemon.types}
        />
      ))}
    </div>
  );
}

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
      <main className="flex flex-col items-center max-w-2xl py-4 px-16 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl">Cache Invalidation</h1>
          <p className="text-sm text-gray-500 max-w-2xl">
            See how cache tags work with real data, the cart pokemon list is
            cached and will be invalidated when a new pokemon is added to the
            cart.
          </p>
        </div>
        <div className="w-full space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-center flex-1">Cart Pokemon</h2>
            </div>
            <div className="flex justify-center">
              <ClearCartButton />
            </div>
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
          <div className="space-y-4">
            <h2 className="text-2xl text-center">Add Pokemon to Cart</h2>
            <Suspense
              fallback={
                <div className="flex justify-center">
                  <Spinner />
                </div>
              }
            >
              <AddToCartPokemonList />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
