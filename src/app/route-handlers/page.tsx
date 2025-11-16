import RouteHandlerPokemonList from "@/components/route-handler-pokemon-list";

export default function RouteHandlersPage() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col items-center max-w-2xl py-4 px-16 space-y-4">
        <h1 className="text-4xl">Route Handler</h1>
        <p className="text-sm text-gray-500 text-center">
          We can cache the data returned from the route handler as well. This
          page fetches cached data from the API route handler and displays it.
        </p>
        <RouteHandlerPokemonList />
      </main>
    </div>
  );
}
