import { headers } from "next/headers";
import { Skeleton } from "@/components/ui/skeleton";

export default async function DataCard() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
      <p className="text-sm text-gray-500 text-center">
        User Agent: {userAgent}
      </p>
    </div>
  );
}

export function DataCardSkeleton() {
  return <Skeleton className="w-full h-20 bg-gray-400" />;
}
