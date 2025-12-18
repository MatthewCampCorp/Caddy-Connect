"use client";

import { LogOut } from "lucide-react";
import { GolfIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";

export function Header() {
  const { signOut, user } = useAuth();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-card px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-3">
        <GolfIcon className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight text-primary font-headline">
          Caddie Connect
        </h1>
      </div>
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden md:inline">
            {user.email}
          </span>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      )}
    </header>
  );
}
