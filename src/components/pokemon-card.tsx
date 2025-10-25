import Image from "next/image";

import { Pokemon } from "@/db/schema";

export default function PokemonCard({ id, name }: Pokemon) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg h-[140px] w-full">
      <Image
        width={84}
        height={84}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className="cursor-pointer duration-200 hover:scale-110"
        unoptimized
        preload={false}
      />
      <div className="text-gray-500 text-sm truncate w-full text-center overflow-hidden">
        {name}
      </div>
    </div>
  );
}
