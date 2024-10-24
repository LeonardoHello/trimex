import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={"/logo.png"}
      alt="website logo"
      width={96}
      height={96}
      className="transition-all"
    />
  );
}
