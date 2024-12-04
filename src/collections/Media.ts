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
    },
  ],
  upload: {
    disableLocalStorage: true,
    adminThumbnail: ({ doc }) =>
      //@ts-expect-error
      `https://utfs.io/f/${doc.sizes.thumbnail._key}`,
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
      },
    ],
  },
};
