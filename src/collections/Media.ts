import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    disableLocalStorage: true,
    adminThumbnail: ({ doc }) => `https://utfs.io/f/${doc._key}`,
  },
};
