import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  transpilePackages: ["lucide-react"],
};

export default withPayload(nextConfig);
