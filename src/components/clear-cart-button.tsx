"use client";

import { useTransition } from "react";
import { clearPokemonCart } from "@/lib/actions";
import { Button } from "@/components/ui/button";

export function ClearCartButton() {
  const [isPending, startTransition] = useTransition();

  const handleClearCart = () => {
    startTransition(async () => {
      await clearPokemonCart();
    });
  };

  return (
    <Button
      onClick={handleClearCart}
      disabled={isPending}
      variant="destructive"
    >
      {isPending ? "Clearing..." : "Clear Cart"}
    </Button>
  );
}
