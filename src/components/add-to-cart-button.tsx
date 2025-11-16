"use client";

import { useTransition } from "react";
import { upsertPokemonCart } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface AddToCartButtonProps {
  pokemonId: number;
}

export function AddToCartButton({ pokemonId }: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    startTransition(async () => {
      await upsertPokemonCart(pokemonId, 1);
    });
  };

  return (
    <Button
      variant="outline"
      onClick={handleAddToCart}
      disabled={isPending}
      className="w-full"
    >
      {isPending ? <Spinner /> : <span className="truncate">Add</span>}
    </Button>
  );
}
