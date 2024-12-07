"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Project } from "payload-types";

import { cn } from "@/utils/cn";

export const LayoutGrid = ({ projects }: { projects: Project[] }) => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lastSelected, setLastSelected] = useState<Project | null>(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = (project: Project) => {
    document.body.style.overflow = "hidden";
    setLastSelected(selected);
    setSelected(project);
  };

  const handleOutsideClick = () => {
    document.body.style.overflow = "auto";
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {projects.map((project, i) => (
        <div
          key={i}
          className={cn(
            {
              "col-span-1": project.colSpan === "one",
              "md:col-span-2": project.colSpan === "two",
              "md:col-span-3": project.colSpan === "three",
            },
            "h-32 md:h-48",
          )}
        >
          <div
            onClick={handleOutsideClick}
            className={cn("z-50 size-full transition-colors duration-300", {
              "fixed inset-0 place-content-center overflow-y-scroll bg-black/60 px-4 py-20":
                selected?.id === project.id,
            })}
          >
            <motion.div
              // @ts-expect-error
              onClick={(e) => {
                e.stopPropagation();
                handleClick(project);
              }}
              className={cn(
                {
                  "col-span-1": project.colSpan === "one",
                  "md:col-span-2": project.colSpan === "two",
                  "md:col-span-3": project.colSpan === "three",
                },
                "relative size-full cursor-pointer overflow-hidden rounded-xl",
                selected?.id === project.id
                  ? "mx-auto flex h-96 max-w-4xl cursor-default flex-col flex-wrap items-center justify-center rounded-lg md:h-[450px]"
                  : lastSelected?.id === project.id
                    ? "z-10"
                    : "",
              )}
              layoutId={`card-${project.id}`}
            >
              {selected?.id === project.id && (
                <SelectedCard selected={selected} />
              )}
              <ImageComponent project={project} />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layoutId={`image-${project.id}-image`}
      // @ts-expect-error
      className={cn("absolute inset-0 transition duration-200")}
    >
      {typeof project.image !== "number" && (
        <Image
          src={project.image.url || ""}
          alt={project.image.alt || ""}
          blurDataURL="data:image/png;base64,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"
          placeholder="blur"
          fill
          sizes="100%"
          className="object-cover object-center"
        />
      )}
    </motion.div>
  );
};

const SelectedCard = ({ selected }: { selected: Project | null }) => {
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
        className="relative z-[70] my-4 overflow-y-scroll px-8"
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
