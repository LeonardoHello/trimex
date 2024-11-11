"use client";

import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { cn } from "@/utils/cn";

type Card = {
  title: string;
  src: StaticImport;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link href={`/radovi/${card.title}`}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative h-60 w-full overflow-hidden rounded-lg transition-all duration-300 ease-out md:h-96",
          hovered !== null && hovered !== index && "scale-[0.98] blur-sm",
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          placeholder="blur"
          sizes="100%"
          fill
          className="absolute inset-0 object-cover"
        />
        <div
          className={cn(
            "absolute inset-0 flex items-end bg-background/50 px-4 py-8 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-medium text-transparent md:text-2xl">
            {card.title}
          </div>
        </div>
      </div>
    </Link>
  ),
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </>
  );
}
