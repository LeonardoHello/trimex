import React from "react";
import Image from "next/image";
import Link from "next/link";

import LogoHorizontal from "./LogoHorizontal";

type Icon = { name: string; url: string };

const icons: Icon[] = [
  {
    name: "facebook",
    url: "https://www.facebook.com/profile.php?id=61550282615915",
  },
  {
    name: "whatsapp",
    url: "https://api.whatsapp.com/send?phone=919541432",
  },
];

const links = [
  { text: "Home", url: "/" },
  { text: "Cjenik", url: "/cjenik" },
  { text: "Radovi", url: "/radovi" },
  { text: "Kontakt", url: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-y-5 bg-black px-7 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <LogoHorizontal className="h-12 w-auto fill-white" />

        <div className="flex gap-x-2">
          {icons.map((icon, index) => (
            <Icon key={index} name={icon.name} url={icon.url} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 md:flex-row md:items-center">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-white transition-opacity ease-linear hover:opacity-60"
            >
              <Link href={link.url}>{link.text}</Link>
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

export default function Icon({ name, url }: Icon) {
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
