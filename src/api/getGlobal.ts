import { unstable_cache } from "next/cache";

import { payload } from "@/utils/payload";

export const getHomePage = unstable_cache(
  async () => {
    return await payload.findGlobal({
      slug: "home-page",
    });
  },
  ["homePage"],
  { revalidate: 3600, tags: ["homePage"] },
);

export const getPriceListPage = unstable_cache(
  async () => {
    return await payload.findGlobal({
      slug: "price-list-page",
    });
  },
  ["priceListPage"],
  { revalidate: 3600, tags: ["priceListPage"] },
);

export const getProjectsPage = unstable_cache(
  async () => {
    return await payload.findGlobal({
      slug: "projects-page",
    });
  },
  ["projectsPage"],
  { revalidate: 3600, tags: ["projectsPage"] },
);

export const getContactPage = unstable_cache(
  async () => {
    return await payload.findGlobal({
      slug: "contact-page",
    });
  },
  ["contactPage"],
  { revalidate: 3600, tags: ["contactPage"] },
);

export const getHeader = unstable_cache(
  async () => {
    return await payload.findGlobal({
      slug: "header",
    });
  },
  ["header"],
  { revalidate: 3600, tags: ["header"] },
);

export const getFooter = unstable_cache(
  async () => {
    return await payload.findGlobal({
      slug: "footer",
    });
  },
  ["footer"],
  { revalidate: 3600, tags: ["footer"] },
);
