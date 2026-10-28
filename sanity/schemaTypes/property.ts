import { HomeIcon } from "@sanity/icons/Home";
import { defineField, defineType } from "sanity";

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Property name",
      type: "string",
      description:
        "The public name shown on the homepage card (e.g. Ridgemanuel Estates).",
      validation: (rule) => rule.required().min(2).max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "URL-friendly ID generated from the name. Used if you add property detail pages later.",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Property type",
      type: "string",
      description:
        "Short label under the card — e.g. “2 bedroom flat”, “Office space”, or “Retail space”.",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "status",
      title: "Availability status",
      type: "string",
      description:
        "Shown in the blue/white status pill on the card. Update this when a listing sells or is reserved.",
      options: {
        list: [
          { title: "Available", value: "Available" },
          { title: "Sold", value: "Sold" },
          { title: "Reserved", value: "Reserved" },
          { title: "Coming soon", value: "Coming soon" },
        ],
        layout: "radio",
      },
      initialValue: "Available",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Card image",
      type: "image",
      description:
        "Portrait photo for the listings carousel. Drag the hotspot to set the crop focus — aim for the building façade or main feature.",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Card link",
      type: "url",
      description:
        "Optional. Where the card should go when clicked (full URL). Leave empty to keep “#” / no destination.",
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description:
        "Controls carousel order. Lower numbers appear first (0, then 1, then 2…). Leave gaps (10, 20, 30) if you expect to insert items later.",
      initialValue: 0,
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Manual order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type",
      media: "image",
      status: "status",
      order: "order",
    },
    prepare({ title, subtitle, media, status, order }) {
      const orderLabel =
        typeof order === "number" ? `#${order}` : undefined;
      return {
        title: title || "Untitled property",
        subtitle: [orderLabel, subtitle, status].filter(Boolean).join(" · "),
        media: media || HomeIcon,
      };
    },
  },
});
