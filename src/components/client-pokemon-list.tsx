"use client";

import { useState } from "react";
import PokemonCard from "@/components/pokemon-card";
import { Pokemon } from "@/db/schema";
import { Button } from "@/components/ui/button";

export default function ClientPokemonList() {
  const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadPokemon = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api");
      const data: Pokemon[] = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Failed to fetch Pokemon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearPokemon = () => {
    setPokemon(null);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex gap-2">
        <Button
          onClick={handleLoadPokemon}
          disabled={isLoading}
          className="flex-1"
        >
          Load Pokemon
        </Button>
        <Button
          onClick={handleClearPokemon}
          disabled={isLoading || !pokemon}
          variant="destructive"
        >
          Clear Pokemon
        </Button>
      </div>

      {pokemon && !isLoading && (
        <div className="w-full grid grid-cols-4 gap-4">
          {pokemon.map((p) => (
            <PokemonCard
              key={p.id}
              id={p.id}
              name={p.name}
              likes={p.likes}
              types={p.types}
            />
          ))}
        </div>
      )}
    </div>
  );
}
