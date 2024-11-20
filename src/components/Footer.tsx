import Link from "next/link";

import LogoIcon from "./LogoIcon";

interface Icon {
  icon: React.JSX.Element;
  url: string;
}

const icons: Icon[] = [
  {
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="hsl(var(--foreground))"
      >
        <title>Facebook</title>
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
      </svg>
    ),
    url: "https://www.facebook.com/profile.php?id=61550282615915",
  },
  {
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="hsl(var(--foreground))"
      >
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    url: "https://api.whatsapp.com/send?phone=919541432",
  },
];

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "Home", url: "/" },
  { text: "Cjenik", url: "/cjenik" },
  { text: "Radovi", url: "/radovi" },
  { text: "Kontakt", url: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-y-5 bg-black px-7 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <LogoIcon className="h-16 w-auto fill-foreground" />

        <div className="flex gap-x-2">
          {icons.map((icon, index) => (
            <Link
              key={index}
              href={icon.url}
              className="flex h-5 w-5 items-center justify-center text-neutral-400 transition-all duration-100 ease-linear hover:opacity-60 dark:font-medium dark:text-neutral-500"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 text-neutral-500 md:flex-row md:items-center">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:opacity-60"
            >
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-neutral-500">
          <p>All right reserverd.</p>
        </div>
      </div>
    </footer>
  );
}
