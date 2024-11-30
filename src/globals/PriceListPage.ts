import type { GlobalConfig } from "payload";

export const PriceListPage: GlobalConfig = {
  slug: "price-list-page",
  fields: [
    {
      name: "badge",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "paragraph",
      label: "Paragraph",
      type: "text",
      required: true,
    },
  ],
};
