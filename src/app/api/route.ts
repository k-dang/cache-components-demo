import { getRandomPokemon } from "@/db";
import { cacheLife } from "next/cache";

export async function GET() {
  const pokemon = await getPokemon();

  return Response.json(pokemon);
}

async function getPokemon() {
  "use cache";
  cacheLife("hours");

  return await getRandomPokemon(4);
}
