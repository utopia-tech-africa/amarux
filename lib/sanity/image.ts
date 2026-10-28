import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { dataset, hasSanityConfig, projectId } from "./client";

const builder = hasSanityConfig
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlForImage(source: SanityImageSource) {
  if (!builder) {
    throw new Error("Sanity is not configured");
  }

  return builder.image(source);
}

export function propertyImageUrl(source: SanityImageSource, width = 800) {
  return urlForImage(source).width(width).height(1008).fit("crop").auto("format").url();
}
