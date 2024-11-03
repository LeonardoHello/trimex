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
          "relative -top-20 h-36 w-auto self-start opacity-0 blur transition-all duration-300 lg:block lg:w-44",
          {
            "top-0 opacity-100 blur-none": isTop,
            hidden: !isTop,
          },
        )}
      />

      <Image
        src={"/logo-icon-only.svg"}
        alt="Trimex logo"
        width={64}
        height={64}
        className={cn(
          "h-12 w-auto self-start transition-all duration-300 lg:hidden lg:w-44",
          {
            "hidden h-24": isTop,
          },
        )}
      />
    </>
  );
}
