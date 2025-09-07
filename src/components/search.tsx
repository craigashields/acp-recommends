"use client";

import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [term, setTerm] = useState<string>(searchParams.get("search") ?? "");

  // Sync local term when the URL's search param changes (e.g., back/forward)
  useEffect(() => {
    const current = searchParams.get("search") ?? "";
    setTerm(current);
  }, [searchParams]);

  // Debounce search term changes and replace URL to avoid history spam.
  // Only reacts to local `term` changes, not other URL param changes.
  useEffect(() => {
    const id = setTimeout(() => {
      const params = new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : ""
      );
      // Reset page when search changes
      params.delete("page");

      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
      }

      startTransition(() => {
        router.replace(`/?${params.toString()}`);
      });
    }, 300);

    return () => clearTimeout(id);
  }, [term, router, startTransition]);

  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search comics..."
        className="w-full md:w-[300px]"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {isPending && (
        <div className="absolute right-2 top-2.5 h-5 w-5 animate-spin rounded-full border-2 border-primary border-r-transparent" />
      )}
    </div>
  );
}
