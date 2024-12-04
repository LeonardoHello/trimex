import type { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  fields: [
    {
      type: "tabs",
      required: true,
      tabs: [
        {
          name: "heroSection",
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
              name: "heroCallToAction",
              label: "CTA",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "servicesSection",
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
          name: "projectsSection",
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
          name: "reviewSection",
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
