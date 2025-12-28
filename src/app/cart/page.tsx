import { Suspense } from "react";
import { CartPokemonList } from "@/components/cart-pokemon-list";
import { Spinner } from "@/components/ui/spinner";

export default function CartPage() {
  return (
    <div className="flex justify-center">
      <main className="flex-1 flex flex-col items-center max-w-6xl py-4 px-16 space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-4xl">Cart</h1>
          <p className="text-sm text-gray-500 max-w-2xl">
            View all pokemon in your cart
          </p>
        </div>

        <div className="w-full">
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
      </main>
    </div>
  );
}

