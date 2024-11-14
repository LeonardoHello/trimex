"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { cn } from "@/utils/cn";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Card = {
  id: number;
  title: string;
  description: string;
  className: string;
  thumbnail: string | StaticImport;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = (card: Card) => {
    document.body.style.overflow = "hidden";
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    document.body.style.overflow = "auto";
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
      {cards.map((card, i) => (
        <div key={i} className={cn("h-32 md:h-48", card.className)}>
          <motion.div
            // @ts-expect-error
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative h-full w-full cursor-pointer overflow-hidden rounded-xl",
              selected?.id === card.id
                ? "fixed inset-0 z-50 m-auto flex h-1/2 w-5/6 cursor-default flex-col flex-wrap items-center justify-center rounded-lg sm:w-2/3 lg:w-1/2"
                : lastSelected?.id === card.id
                  ? "z-10"
                  : "",
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        // @ts-expect-error
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 z-40 h-screen w-screen bg-background opacity-0",
          selected?.id ? "pointer-events-auto" : "pointer-events-none",
        )}
        animate={{
          opacity: selected?.id ? 0.8 : 0,
        }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div
      layoutId={`image-${card.id}-image`}
      // @ts-expect-error
      className={cn("absolute inset-0 transition duration-200")}
    >
      <Image
        src={card.thumbnail}
        alt="thumbnail"
        fill
        sizes="100%"
        placeholder="blur"
        className="object-cover object-center"
      />
    </motion.div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        // @ts-expect-error
        className="absolute inset-0 z-10 h-full w-full bg-black opacity-60"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        // @ts-expect-error
        className="relative z-[70] px-8 pb-4"
      >
        <div>
          <p className="text-xl font-bold text-white md:text-4xl">
            {selected?.title}
          </p>
          <p className="text-base font-normal text-white"></p>
          <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
            {selected?.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
