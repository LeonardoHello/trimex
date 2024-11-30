import type { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "home",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            {
              name: "heroBadge",
              label: "Badge",
              type: "text",
              required: true,
            },
            {
              name: "heroTitle",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "heroParagraph",
              label: "Paragraph",
              type: "text",
              required: true,
            },
            {
              name: "heroVideo",
              label: "Video",
              type: "upload",
              relationTo: "media",
              filterOptions: {
                mimeType: { contains: "video" },
              },
              required: true,
            },
            {
              name: "heroCallToAction",
              label: "CTA",
              type: "text",
              required: true,
            },
          ],
        },
        {
          label: "Services Section",
          fields: [
            {
              name: "ServicesBadge",
              label: "Badge",
              type: "text",
              required: true,
            },
            {
              name: "servicesTitle",
              label: "Title",
              type: "text",
              required: true,
            },
          ],
        },
        {
          label: "Projects Section",
          fields: [
            {
              name: "projectsBadge",
              label: "Badge",
              type: "text",
              required: true,
            },
            {
              name: "projectsTitle",
              label: "Title",
              type: "text",
              required: true,
            },
          ],
        },
        {
          label: "Review Section",
          fields: [
            {
              name: "reviewBadge",
              label: "Badge",
              type: "text",
              required: true,
            },
            {
              name: "reviewTitle",
              label: "Title",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
