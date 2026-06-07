"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { SearchIcon } from "lucide-react";

export function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [term, setTerm] = useState<string>(searchParams.get("search") ?? "");

  useEffect(() => {
    const current = searchParams.get("search") ?? "";
    setTerm(current);
  }, [searchParams]);

  useEffect(() => {
    const id = setTimeout(() => {
      const params = new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : ""
      );
      params.delete("page");

      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
      }

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    }, 300);

    return () => clearTimeout(id);
  }, [term, router, pathname, startTransition]);

  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search comics..."
        className="pl-10 w-full"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {isPending && (
        <div className="absolute right-2 top-2.5 h-5 w-5 animate-spin rounded-full border-2 border-primary border-r-transparent" />
      )}
    </div>
  );
}
