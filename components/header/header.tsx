import Image from "next/image";
import Link from "next/link";
import { amaruxLogo } from "@/assets/img";
import { MenuListIcon } from "@/assets/svg";
import { cn } from "cn";

type HeaderProps = {
  variant?: "default" | "overlay";
  onMenuClick?: () => void;
};

export function Header({ variant = "default", onMenuClick }: HeaderProps) {
  const overlay = variant === "overlay";

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 w-full",
        overlay ? "fixed" : "relative",
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between py-3 pl-4 pr-6 md:px-5",
          overlay && "bg-black/35 backdrop-blur-[5px]",
        )}
      >
        <Link href="/" className="relative block size-[50px] shrink-0">
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
          onClick={onMenuClick}
          className={cn(
            "inline-flex cursor-pointer items-center gap-2 font-heading text-lg font-bold uppercase tracking-wide",
            overlay ? "text-off-white" : "text-navy",
          )}
          aria-label="Open menu"
        >
          Menu
          <MenuListIcon className="size-5" />
        </button>
      </div>
    </header>
  );
}
