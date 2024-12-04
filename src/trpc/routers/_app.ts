import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  collection: createTRPCRouter({
    services: baseProcedure.query((opts) => {
      return opts.ctx.payload.find({
        collection: "services",
      });
    }),
    projects: baseProcedure.query((opts) => {
      return opts.ctx.payload.find({
        collection: "projects",
      });
    }),
    reviews: baseProcedure.query((opts) => {
      return opts.ctx.payload.find({
        collection: "reviews",
      });
    }),
  }),
  global: createTRPCRouter({
    page: createTRPCRouter({
      home: baseProcedure.query((opts) => {
        return opts.ctx.payload.findGlobal({
          slug: "home-page",
        });
      }),
      priceList: baseProcedure.query((opts) => {
        return opts.ctx.payload.findGlobal({
          slug: "price-list-page",
        });
      }),
      projects: baseProcedure.query((opts) => {
        return opts.ctx.payload.findGlobal({
          slug: "projects-page",
        });
      }),
      contact: baseProcedure.query((opts) => {
        return opts.ctx.payload.findGlobal({
          slug: "contact-page",
        });
      }),
    }),
    header: baseProcedure.query((opts) => {
      return opts.ctx.payload.findGlobal({
        slug: "header",
      });
    }),
    footer: baseProcedure.query((opts) => {
      return opts.ctx.payload.findGlobal({
        slug: "footer",
      });
    }),
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
