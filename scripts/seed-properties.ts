/**
 * Delete legacy `_type: "properties"` docs, then seed `_type: "property"`.
 *
 * Usage:
 *   pnpm exec sanity exec scripts/seed-properties.ts --with-user-token
 */
import { createReadStream } from "node:fs";
import { basename, resolve } from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-10-01" });

const PROPERTIES = [
  {
    _id: "property.ridgemanuel-estates",
    name: "Ridgemanuel Estates",
    slug: "ridgemanuel-estates",
    type: "2 bedroom flat",
    status: "Available",
    order: 10,
    imagePath: "assets/img/properties/property-ridgemanuel.png",
  },
  {
    _id: "property.lakeside-estate",
    name: "Lakeside estate",
    slug: "lakeside-estate",
    type: "5 bedroom house",
    status: "Available",
    order: 20,
    imagePath: "assets/img/properties/property-lakeside.png",
  },
  {
    _id: "property.accra-mall",
    name: "Accra mall",
    slug: "accra-mall",
    type: "retail space",
    status: "Available",
    order: 30,
    imagePath: "assets/img/properties/property-accra-mall.png",
  },
  {
    _id: "property.buro",
    name: "Buro",
    slug: "buro",
    type: "Office space",
    status: "Available",
    order: 40,
    imagePath: "assets/img/properties/property-buro.png",
  },
] as const;

const LEGACY_IDS = [
  "properties.ridgemanuel-estates",
  "properties.lakeside-estate",
  "properties.accra-mall",
  "properties.buro",
] as const;

async function uploadImage(relativePath: string) {
  const absolutePath = resolve(process.cwd(), relativePath);
  const filename = basename(absolutePath);

  return client.assets.upload("image", createReadStream(absolutePath), {
    filename,
    contentType: "image/png",
  });
}

async function deleteLegacy() {
  const legacy = await client.fetch<{ _id: string }[]>(
    `*[_type == "properties"]{ _id }`,
  );
  const ids = new Set([
    ...LEGACY_IDS,
    ...legacy.map((doc) => doc._id),
  ]);

  if (!ids.size) return;

  console.log(`Removing ${ids.size} legacy document(s)…`);
  const transaction = client.transaction();
  for (const id of ids) {
    transaction.delete(id);
  }
  await transaction.commit({ visibility: "sync" });
}

async function seed() {
  await deleteLegacy();

  console.log(
    `Seeding ${PROPERTIES.length} properties into ${client.config().projectId}/${client.config().dataset}…`,
  );

  for (const property of PROPERTIES) {
    console.log(`→ ${property.name}`);
    const asset = await uploadImage(property.imagePath);

    await client.createOrReplace({
      _id: property._id,
      _type: "property",
      name: property.name,
      slug: { _type: "slug", current: property.slug },
      type: property.type,
      status: property.status,
      order: property.order,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      },
    });

    console.log(`  ✓ ${property._id}`);
  }

  console.log("Done.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
