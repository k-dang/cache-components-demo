import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="flex gap-4 p-4 justify-center">
      <Link href="/">Home</Link>
      <Link href="/static">Static</Link>
      <Link href="/dynamic">Dynamic</Link>
    </div>
  );
}
