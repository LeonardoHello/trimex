import Image from "next/image";

import { cn } from "@/utils/cn";

export default function Logo({ isTop }: { isTop: boolean }) {
  return (
    <>
      <Image
        src={"/logo.svg"}
        alt="Trimex logo"
        width={144}
        height={144}
        className={cn(
          "relative top-0 hidden h-36 min-w-44 self-start opacity-100 blur-none transition-all duration-300 lg:block",
          {
            "-top-20 h-0 opacity-0 blur": !isTop,
          },
        )}
      />

      <div className="flex self-start lg:hidden">
        <Image
          src={"/logo-icon.svg"}
          alt="Trimex logo"
          width={64}
          height={64}
          className={cn("h-12 w-auto transition-all duration-300 lg:w-44", {
            "h-20": isTop,
          })}
        />
        <Image
          src={"/logo-text.svg"}
          alt="Trimex logo"
          width={64}
          height={64}
          className={cn("h-20 w-auto transition-all duration-300 lg:w-44", {
            "h-12": !isTop,
          })}
        />
      </div>
    </>
  );
}
