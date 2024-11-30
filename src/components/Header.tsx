import { payload } from "@/utils/payload";
import HeaderContent from "./HeaderContent";

export default async function Header() {
  const header = await payload.findGlobal({
    slug: "header",
    select: { navigation: true, callToAction: true },
  });

  return <HeaderContent header={header} />;
}
