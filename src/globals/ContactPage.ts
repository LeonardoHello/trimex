import type { GlobalConfig } from "payload";

export const ContactPage: GlobalConfig = {
  slug: "contact-page",
  fields: [
    {
      type: "tabs",
      required: true,
      tabs: [
        {
          name: "contactIntroductionSection",
          label: "Introduction Section",
          fields: [
            {
              name: "introductionBadge",
              label: "Badge",
              type: "text",
              required: true,
            },
            {
              name: "introductionTitle",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "introductionParagraph",
              label: "Paragraph",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "informationSection",
          fields: [
            {
              name: "emailInformation",
              type: "group",
              fields: [
                {
                  name: "title",
                  type: "text",
                  required: true,
                },
                {
                  name: "email",
                  type: "email",
                  required: true,
                },
              ],
            },
            {
              name: "phoneInformation",
              type: "group",
              fields: [
                {
                  name: "title",
                  type: "text",
                  required: true,
                },
                {
                  name: "phone",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "addressInformation",
              type: "group",
              fields: [
                {
                  name: "title",
                  type: "text",
                  required: true,
                },
                {
                  name: "address",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "formSection",
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
              name: "nameInput",
              type: "group",
              fields: [
                {
                  name: "label",
                  type: "text",
                  required: true,
                },
                {
                  name: "error",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "emailInput",
              type: "group",
              fields: [
                {
                  name: "label",
                  type: "text",
                  required: true,
                },
                {
                  name: "error",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "messageInput",
              type: "group",
              fields: [
                {
                  name: "label",
                  type: "text",
                  required: true,
                },
                {
                  name: "error",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
