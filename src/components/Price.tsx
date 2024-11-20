import Link from "next/link";

import { CheckIcon } from "@radix-ui/react-icons";

import type prices from "@/api/prices.json";
import { Button } from "@/components/ui/button";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};

export default function Price({ price }: { price: (typeof prices)[number] }) {
  return (
    <div
      key={price.id}
      className="relative flex w-full flex-col gap-4 overflow-hidden rounded-2xl border bg-card p-4 sm:w-80"
    >
      <div className="flex items-center">
        <div className="ml-4">
          <h2 className="text-base font-semibold leading-7">{price.name}</h2>
          <p className="h-16 text-sm leading-5 text-foreground/70">
            {price.description}
          </p>
        </div>
      </div>

      <Link href={"/kontakt"}>
        <Button className="group relative w-full transform-gpu gap-2 overflow-hidden text-lg font-medium tracking-tighter ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
          <p>Pošaljite upit</p>
        </Button>
      </Link>

      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
      {price.features && price.features.length > 0 && (
        <ul className="flex flex-col gap-2 font-normal">
          {price.features.map((feature: any, idx: any) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-xs font-medium"
            >
              <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px]" />
              <span className="flex">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
