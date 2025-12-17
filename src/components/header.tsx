import { GolfIcon } from "@/components/icons";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-card px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-3">
        <GolfIcon className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight text-primary font-headline">
          Caddie Connect
        </h1>
      </div>
    </header>
  );
}
