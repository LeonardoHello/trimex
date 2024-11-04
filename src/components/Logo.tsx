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
          "relative -top-20 hidden h-36 w-auto self-start opacity-0 blur transition-all duration-300 lg:block lg:w-44",
          {
            "top-0 opacity-100 blur-none": isTop,
          },
        )}
      />

      <div className="flex flex-col self-start lg:hidden">
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
          className={cn(
            "-mt-3 h-20 w-auto transition-all duration-300 lg:w-44",
            {
              "h-12 opacity-0 blur-sm": !isTop,
            },
          )}
        />
      </div>
    </>
  );
}
