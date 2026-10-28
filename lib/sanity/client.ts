import { createClient } from "next-sanity";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uhvp4ikk";

export const hasSanityConfig = Boolean(projectId);

/** Server-only read token — never expose to the browser. */
export const token = process.env.SANITY_API_READ_TOKEN;

export const client = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
    })
  : null;
