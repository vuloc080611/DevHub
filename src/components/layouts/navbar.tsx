"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="h-14 border-b border-gray-200 dark:border-gray-800 flex items-center justify-end px-4 bg-white dark:bg-gray-900">
      {session?.user && (
        <div className="flex items-center gap-3">
          <span className="text-sm">{session.user.name}</span>
          <Button variant="secondary" onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
      )}
    </header>
  );
}
