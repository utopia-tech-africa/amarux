import Image, { type StaticImageData } from "next/image";
import { ArrowDownLeftIcon } from "@/assets/svg";

type ServiceCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  href?: string;
};

export function ServiceCard({
  title,
  description,
  image,
  href = "#",
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className="group relative block aspect-[302/414] w-full cursor-pointer"
    >
      {/* Frame — clips image + navy panel only */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent from-[69%] to-black/70 transition-opacity duration-300 group-hover:opacity-0"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-0 bg-navy transition-[height] duration-500 ease-out group-hover:h-full"
          aria-hidden
        />

        {/* Default white title — rises further, then vanishes */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-500 ease-out group-hover:-translate-y-28 group-hover:opacity-0 md:group-hover:-translate-y-36">
          <h3 className="font-heading text-lg font-bold uppercase leading-[1.3] text-off-white">
            {title}
          </h3>
        </div>

        {/* Hover copy — same title (gold) + description, enter from below */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex translate-y-8 flex-col gap-2 p-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:gap-3">
          <h3 className="font-heading text-lg font-bold uppercase leading-[1.3] text-gold">
            {title}
          </h3>
          <p className="font-[Verdana,Geneva,sans-serif] text-base leading-[1.3] text-[#dfdfdf]">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow slides in from top-right on hover only */}
      <ArrowDownLeftIcon className="pointer-events-none absolute top-3 right-3 z-30 size-8 -translate-y-14 translate-x-14 text-off-white opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:size-10" />
    </a>
  );
}
