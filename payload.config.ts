// storage-adapter-import-placeholder
import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { resendAdapter } from "@payloadcms/email-resend";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "@/collections/Media";
import { Projects } from "@/collections/Projects";
import { Reviews } from "@/collections/Reviews";
import { Services } from "@/collections/Services";
import { Users } from "@/collections/Users";
import { ContactPage } from "@/globals/ContactPage";
import { Footer } from "@/globals/Footer";
import { Header } from "@/globals/Header";
import { HomePage } from "@/globals/HomePage";
import { PriceListPage } from "@/globals/PriceListPage";
import { ProjectsPage } from "@/globals/ProjectsPage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [HomePage, PriceListPage, ProjectsPage, ContactPage, Header, Footer],
  collections: [Users, Media, Services, Projects, Reviews],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  sharp,
  email: resendAdapter({
    defaultFromAddress: "studiorevive.os@gmail.com",
    defaultFromName: "Trimex",
    apiKey: process.env.RESEND_API_KEY || "",
  }),
  plugins: [
    payloadCloudPlugin(),
    uploadthingStorage({
      collections: {
        [Media.slug]: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
  ],
});
