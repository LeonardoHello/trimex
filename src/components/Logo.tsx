import Image from "next/image";

import { cn } from "@/utils/cn";

export default function Logo({ isTop }: { isTop: boolean }) {
  return (
    <Image
      src={isTop ? "/logo.svg" : "/logo-icon-only.svg"}
      alt="Trimex logo"
      width={64}
      height={64}
      className={cn("self-start transition-all", isTop ? "size-28" : "size-14")}
    />
  );
}
