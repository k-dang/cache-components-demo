import Image from "next/image";

import { Pokemon } from "@/db/schema";

export default function PokemonCard({ id, name }: Pokemon) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
      <Image
        width={76}
        height={76}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className="cursor-pointer duration-200 hover:scale-110"
        unoptimized
        preload={false}
      />
      <div className="text-sm text-gray-500 text-center">{name}</div>
    </div>
  );
}
