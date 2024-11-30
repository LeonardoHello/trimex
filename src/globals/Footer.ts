import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "navigation",
      type: "array",
      required: true,
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: "route",
          type: "text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "socials",
      type: "array",
      required: true,
      fields: [
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "simpleIcon",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "copyrightNotice",
      type: "text",
      required: true,
    },
  ],
};
