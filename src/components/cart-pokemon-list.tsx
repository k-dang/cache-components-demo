import { getCartPokemon } from "@/db";
import PokemonCard from "@/components/pokemon-card";

export async function CartPokemonList() {
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

