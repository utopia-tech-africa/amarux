import { HomeIcon } from "@sanity/icons/Home";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Properties")
        .icon(HomeIcon)
        .child(
          S.documentTypeList("property")
            .title("Properties")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "property",
      ),
    ]);
