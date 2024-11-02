import Image from "next/image";

import { cn } from "@/utils/cn";

export default function Logo() {
  return (
    <Image
      src={"/logo-icon-only.svg"}
      alt="Trimex logo"
      width={64}
      height={64}
      className={cn("w-auto self-stretch transition-all", {})}
    />
  );
}
