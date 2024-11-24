import React from "react";
import Link from "next/link";

import * as si from "simple-icons";

import LogoHorizontal from "./LogoHorizontal";

type Icon = Exclude<keyof typeof si, "default">;

const icons: { name: Icon; url: string }[] = [
  {
    name: "siFacebook",
    url: "https://www.facebook.com/profile.php?id=61550282615915",
  },
  {
    name: "siWhatsapp",
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
    <footer className="flex flex-col gap-y-5 bg-black px-7 py-5 text-white md:px-10">
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
              className="text-[15px]/normal font-medium transition-all duration-100 ease-linear hover:opacity-60"
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

export default function Icon({ name, url }: { name: Icon; url: string }) {
  return (
    <Link
      href={url}
      className="flex h-5 w-5 items-center justify-center transition-all duration-100 ease-linear hover:opacity-60"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        className="fill-white"
      >
        <title>{si[name]["title"]}</title>
        <path d={si[name]["path"]} />
      </svg>
    </Link>
  );
}
