import type { ReactNode } from "react";
import { cn } from "cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
};

export function Container({
  children,
  className,
  as: Comp = "div",
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "w-full px-[var(--page-gutter)]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
