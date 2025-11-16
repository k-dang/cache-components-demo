import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

function PokemonListSkeleton() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-[140px] w-full" />
      ))}
    </div>
  );
}

function AddToCartPokemonListSkeleton() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2 w-full">
          <Skeleton className="h-[140px] w-full rounded-lg" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      ))}
    </div>
  );
}

export { Skeleton, PokemonListSkeleton, AddToCartPokemonListSkeleton };
