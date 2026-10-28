"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  useEffect(() => {
    if (isStudio) return;

    const lenis = new Lenis({ autoRaf: true });
    return () => {
      lenis.destroy();
    };
  }, [isStudio]);

  return children;
}
