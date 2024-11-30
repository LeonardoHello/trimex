import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "jobTitle",
      type: "text",
      required: true,
    },
    {
      name: "companyName",
      type: "text",
      required: true,
    },
    {
      name: "review",
      type: "text",
      required: true,
    },
  ],
};
