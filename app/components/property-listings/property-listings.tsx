import Link from "next/link";
import type { StaticImageData } from "next/image";
import { PROPERTY_IMAGES } from "@/assets/img";
import { ArrowSquareUpRightIcon } from "@/assets/svg";
import { Container } from "@/components/container";
import {
  client,
  hasSanityConfig,
  propertiesQuery,
  propertyImageUrl,
  type SanityProperty,
} from "@/lib/sanity";
import { PropertyCard } from "./property-card";

type ListingProperty = {
  id: string;
  name: string;
  type: string;
  status: string;
  href: string;
  image: StaticImageData | string;
};

/** Original homepage listings kept for reference — not used as a runtime fallback. */
export const HARDCODED_PROPERTIES: ListingProperty[] = [
  {
    id: "ridgemanuel",
    name: "Ridgemanuel Estates",
    type: "2 bedroom flat",
    status: "Available",
    href: "#",
    image: PROPERTY_IMAGES.ridgemanuel,
  },
  {
    id: "lakeside",
    name: "Lakeside estate",
    type: "5 bedroom house",
    status: "Available",
    href: "#",
    image: PROPERTY_IMAGES.lakeside,
  },
  {
    id: "accra-mall",
    name: "Accra mall",
    type: "retail space",
    status: "Available",
    href: "#",
    image: PROPERTY_IMAGES.accraMall,
  },
  {
    id: "buro",
    name: "Buro",
    type: "Office space",
    status: "Available",
    href: "#",
    image: PROPERTY_IMAGES.buro,
  },
];

async function getProperties(): Promise<ListingProperty[]> {
  if (!hasSanityConfig || !client) {
    return [];
  }

  const properties = await client.fetch<SanityProperty[]>(propertiesQuery);

  return properties.map((property) => ({
    id: property._id,
    name: property.name,
    type: property.type,
    status: property.status || "Available",
    href: property.href || "#",
    image:
      property.imageUrl ||
      (property.image ? propertyImageUrl(property.image) : "") ||
      "",
  }));
}

export async function PropertyListings() {
  const properties = await getProperties();

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
            {properties.map((property, index) => (
              <li key={property.id}>
                <PropertyCard
                  name={property.name}
                  type={property.type}
                  status={property.status}
                  image={property.image}
                  href={property.href}
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
