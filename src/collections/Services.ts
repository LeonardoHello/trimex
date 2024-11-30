import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "lucideIcon",
      type: "text",
      required: true,
    },
  ],
};
