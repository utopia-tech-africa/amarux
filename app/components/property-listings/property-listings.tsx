import Link from "next/link";
import { PROPERTY_IMAGES } from "@/assets/img";
import { ArrowSquareUpRightIcon } from "@/assets/svg";
import { Container } from "@/components/container";
import { PropertyCard } from "./property-card";

const PROPERTIES = [
  {
    name: "Ridgemanuel Estates",
    type: "2 bedroom flat",
    image: PROPERTY_IMAGES.ridgemanuel,
  },
  {
    name: "Lakeside estate",
    type: "5 bedroom house",
    image: PROPERTY_IMAGES.lakeside,
  },
  {
    name: "Accra mall",
    type: "retail space",
    image: PROPERTY_IMAGES.accraMall,
  },
  {
    name: "Buro",
    type: "Office space",
    image: PROPERTY_IMAGES.buro,
  },
] as const;

export function PropertyListings() {
  return (
    <section
      id="properties"
      aria-label="Property listings"
      className="bg-white py-16 md:py-20"
    >
      <Container className="flex flex-col gap-6 md:gap-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-[40rem] flex-col gap-3">
            <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase leading-[1.3] text-navy">
              your new home awaits you
            </h2>
            <p className="max-w-[32rem] [font-family:var(--font-roboto)] text-lg leading-[1.5] text-black">
              A 360° partnership across property, dispute resolution, and
              paralegal services. Everything you need under one trusted roof.
            </p>
          </div>

          <Link
            href="/lets-talk"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2.5 px-6 py-3 font-heading text-lg font-bold uppercase leading-[1.3] text-navy transition-opacity hover:opacity-80"
          >
            Let’s talk
            <ArrowSquareUpRightIcon className="size-6" />
          </Link>
        </div>

        <div className="-mx-[var(--page-gutter)] overflow-x-auto px-[var(--page-gutter)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max items-start gap-6 py-5 md:gap-8 md:py-10">
            {PROPERTIES.map((property, index) => (
              <li key={property.name}>
                <PropertyCard
                  {...property}
                  offset={index % 2 === 0 ? "up" : "down"}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
