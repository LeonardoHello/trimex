import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Logo({
  src,
  size,
}: {
  src: string | StaticImport;
  size: number;
}) {
  return (
    <Image
      src={src}
      alt="website logo"
      width={size}
      height={size}
      className="self-start transition-all"
    />
  );
}
