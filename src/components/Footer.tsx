import React from "react";
import Image from "next/image";
import Link from "next/link";

import { trpc } from "@/trpc/server";
import LogoHorizontal from "./LogoHorizontal";

export async function Footer() {
  const footer = await trpc.global.footer();

  return (
    <footer className="flex flex-col gap-y-5 bg-black px-7 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <LogoHorizontal className="h-12 w-auto fill-white" />

        <div className="flex gap-x-2">
          {footer.socials.map((social, index) => (
            <Icon key={index} name={social.simpleIcon} url={social.url} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 md:flex-row md:items-center">
          {footer.navigation.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-white transition-opacity ease-linear hover:opacity-60"
            >
              <Link href={link.href}>{link.route}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-muted-foreground">
          <p>All right reserverd.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Icon({ name, url }: { name: string; url: string }) {
  return (
    <Link
      href={url}
      className="flex items-center justify-center rounded-full bg-white p-1 transition-opacity ease-linear hover:opacity-60"
    >
      <Image
        height="16"
        width="16"
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${name}.svg`}
        alt={`${name} icon`}
      />
    </Link>
  );
}
