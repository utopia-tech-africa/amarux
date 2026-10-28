import { groq } from "next-sanity";

export const propertiesQuery = groq`
  *[_type == "property"] | order(order asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    type,
    status,
    href,
    order,
    image,
    "imageUrl": image.asset->url
  }
`;
