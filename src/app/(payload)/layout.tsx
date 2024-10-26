/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import "@payloadcms/next/css";
import { RootLayout } from "@payloadcms/next/layouts";
import configPromise from "payload.config";
import React from "react";

import { importMap } from "./admin/importMap";
import "./custom.scss";

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => (
  <RootLayout importMap={importMap} config={configPromise}>
    {children}
  </RootLayout>
);

export default Layout;
