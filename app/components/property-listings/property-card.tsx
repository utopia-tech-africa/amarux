import Image, { type StaticImageData } from "next/image";

type PropertyCardProps = {
  name: string;
  type: string;
  status?: string;
  image: StaticImageData | string;
  href?: string;
  offset?: "up" | "down";
};

export function PropertyCard({
  name,
  type,
  status = "Available",
  image,
  href = "#",
  offset,
}: PropertyCardProps) {
  return (
    <a
      href={href}
      className={[
        "group flex w-[min(85vw,20rem)] shrink-0 cursor-pointer flex-col gap-2 md:w-[22rem] lg:w-[24rem] xl:w-[25.5rem]",
        offset === "up" ? "-translate-y-4 md:-translate-y-10" : "",
        offset === "down" ? "translate-y-4 md:translate-y-10" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative aspect-[352/444] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
          sizes="(max-width: 768px) 85vw, 448px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-[69%] to-black/70"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <h3 className="font-heading text-2xl font-bold uppercase leading-[1.3] text-off-white">
            {name}
          </h3>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex items-center justify-between gap-4 bg-white px-2 py-1 transition-transform duration-500 ease-out group-hover:-translate-y-full sm:gap-6">
          <span className="min-w-0 flex-1 font-heading text-base font-bold uppercase leading-[1.3] text-ink sm:text-lg">
            {type}
          </span>
          <span className="shrink-0 font-heading text-sm font-bold uppercase leading-[1.3] text-blue sm:text-base">
            {status}
          </span>
        </div>

        <div className="absolute inset-x-0 top-0 flex translate-y-full items-center justify-between gap-4 bg-navy px-2 py-1 transition-transform duration-500 ease-out group-hover:translate-y-0 sm:gap-6">
          <span className="min-w-0 flex-1 font-heading text-base font-bold uppercase leading-[1.3] text-gold sm:text-lg">
            {type}
          </span>
          <span className="shrink-0 font-heading text-sm font-bold uppercase leading-[1.3] text-off-white sm:text-base">
            {status}
          </span>
        </div>
      </div>
    </a>
  );
}
