import { trpc } from "@/trpc/server";
import HeaderContent from "./HeaderContent";

export default async function Header() {
  const header = await trpc.global.header();

  return <HeaderContent header={header} />;
}
