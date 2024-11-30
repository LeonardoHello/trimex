import type { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",
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
      type: "text",
      name: "callToAction",
      required: true,
    },
  ],
};
