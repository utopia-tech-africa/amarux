import type { SanityImageSource } from "@sanity/image-url";

export type SanityProperty = {
  _id: string;
  name: string;
  slug: string | null;
  type: string;
  status: string;
  href?: string | null;
  order?: number | null;
  image?: SanityImageSource | null;
  imageUrl?: string | null;
};
