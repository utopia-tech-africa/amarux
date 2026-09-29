import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";

type CtaButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Button>, "children" | "className">;

/** Thin CTA shell — polish when building sections */
export function CtaButton({
  href,
  className,
  children,
  ...props
}: CtaButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn("inline-flex", className)}>
        {children}
      </Link>
    );
  }

  return (
    <Button className={cn(className)} {...props}>
      {children}
    </Button>
  );
}
