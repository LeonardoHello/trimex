"use client";

import React from "react";

import { cn } from "@/utils/cn";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "hsl(var(--primary))",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-white",
        className,
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute left-1/4 top-1/4 size-full -translate-x-1/4 -translate-y-1/4 animate-pulse rounded-lg bg-inherit" />
    </button>
  );
}
