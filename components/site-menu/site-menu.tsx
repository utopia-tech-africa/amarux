"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { amaruxLogo } from "@/assets/img";
import { MenuCloseIcon } from "@/assets/svg";
import { NAV_LINKS } from "@/constants";

type SiteMenuProps = {
  open?: boolean;
  onClose?: () => void;
};

export function SiteMenu({ open = false, onClose }: SiteMenuProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="site-menu-enter fixed inset-0 z-50 flex flex-col bg-navy text-white"
    >
      <div className="flex w-full items-center justify-between py-3 pl-4 pr-6 md:px-5">
        <Link
          href="/"
          onClick={onClose}
          className="relative block size-[50px] shrink-0"
        >
          <Image
            src={amaruxLogo}
            alt="Amarux"
            fill
            className="object-cover"
            sizes="50px"
            priority
          />
        </Link>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex cursor-pointer items-center gap-2 font-heading text-lg font-bold uppercase tracking-wide text-off-white"
          aria-label="Close menu"
        >
          close
          <MenuCloseIcon className="size-8" />
        </button>
      </div>

      <nav className="flex flex-1 items-center px-[var(--page-gutter)] pb-16 pt-10 md:pb-24">
        <ul className="flex w-full flex-col gap-3">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.href}
              className="site-menu-link"
              style={{ animationDelay: `${0.08 + index * 0.06}s` }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="block cursor-pointer font-heading text-[clamp(2.5rem,8vw,3.75rem)] font-bold uppercase leading-[1.2] text-white transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
