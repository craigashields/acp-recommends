"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

interface InfiniteScrollProps {
  hasNextPage: boolean;
}

export function InfiniteScroll({ hasNextPage }: InfiniteScrollProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const previousPage = useRef("");
  const prevInView = useRef(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !prevInView.current && hasNextPage) {
      const params = new URLSearchParams(searchParams);
      const currentPage = Number(params.get("page")) || 1;
      params.set("page", (currentPage + 1).toString());
      const next = params.toString();
      if (previousPage.current === next) return;
      previousPage.current = next;
      router.push(`/?${params.toString()}`, { scroll: false });
    }
    // Track edge changes for inView
    prevInView.current = inView;
  }, [inView, hasNextPage, router, searchParams]);

  if (!hasNextPage) return null;

  return (
    <div ref={ref} className="flex justify-center p-4">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
    </div>
  );
}
