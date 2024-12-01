import { unstable_cache } from "next/cache";

import { payload } from "@/utils/payload";

export const getServices = unstable_cache(
  async () => {
    return await payload.find({
      collection: "services",
    });
  },
  ["services"],
  { revalidate: 3600, tags: ["services"] },
);

export const getProjects = unstable_cache(
  async () => {
    return await payload.find({
      collection: "projects",
    });
  },
  ["projects"],
  { revalidate: 3600, tags: ["projects"] },
);

export const getReviews = unstable_cache(
  async () => {
    return await payload.find({
      collection: "reviews",
    });
  },
  ["reviews"],
  { revalidate: 3600, tags: ["reviews"] },
);
