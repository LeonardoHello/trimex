"use client";

import React, { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "h-32 md:h-48")}>
          <div
            onClick={handleOutsideClick}
            className={cn("z-50 size-full transition-colors duration-300", {
              "fixed inset-0 place-content-center overflow-y-scroll bg-black/60 px-4 py-20":
                selected?.id === card.id,
            })}
          >
            <motion.div
              // @ts-expect-error
              onClick={(e) => {
                e.stopPropagation();
                handleClick(card);
              }}
              className={cn(
                card.className,
                "relative size-full cursor-pointer overflow-hidden rounded-xl",
                selected?.id === card.id
                  ? "mx-auto flex h-96 max-w-4xl cursor-default flex-col flex-wrap items-center justify-center rounded-lg md:h-[450px]"
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
        </div>
      ))}
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
          opacity: 0.4,
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
          <p className="text-2xl font-bold text-white md:text-4xl">
            {selected?.title}
          </p>
          <p className="my-4 max-w-lg text-white/80">{selected?.description}</p>
        </div>
      </motion.div>
    </div>
  );
};
