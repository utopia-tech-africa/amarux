"use client";

import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteMenu } from "@/components/site-menu";

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const overlay = pathname === "/" || pathname === "/lets-talk";

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header
        variant={overlay ? "overlay" : "default"}
        onMenuClick={() => setMenuOpen(true)}
      />
      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
