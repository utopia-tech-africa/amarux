import type { ReactNode } from "react";
import { cn } from "cn";

type SectionHeadingProps = {
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Stub — title + body only; style when building sections */
export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
    </div>
  );
}
