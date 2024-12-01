import { getHeader } from "@/api/getGlobal";
import HeaderContent from "./HeaderContent";

export default async function Header() {
  const header = await getHeader();

  return <HeaderContent header={header} />;
}
