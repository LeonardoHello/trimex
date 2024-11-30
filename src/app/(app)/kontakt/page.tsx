import Link from "next/link";

import dynamicIconImports from "lucide-react/dynamicIconImports";

import { ContactForm } from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import { payload } from "@/utils/payload";

export default async function KontaktPage() {
  const contactPage = await payload.findGlobal({
    slug: "contact-page",
  });

  return (
    <main>
      <div className="bg-[url('/bank-note.svg')]">
        <Section className="min-h-[60vh] items-center bg-gradient-to-b from-accent/5 from-60% to-background !pt-20 text-center lg:min-h-[75vh]">
          <Badge className="-mb-2 bg-accent/30 text-accent">
            {contactPage.contactIntroductionSection.introductionBadge}
          </Badge>
          <h1 className="max-w-[15ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {contactPage.contactIntroductionSection.introductionTitle}
          </h1>
          <p className="max-w-[50ch] leading-7 text-accent">
            {contactPage.contactIntroductionSection.introductionParagraph}
          </p>
        </Section>
      </div>

      <Section className="!pt-0">
        <div className="flex flex-col items-center justify-center gap-x-8 gap-y-12 self-stretch md:flex-row">
          <GridItem
            iconName="mail"
            title={contactPage.informationSection.addressInformation.title}
          >
            <Link
              href={`mailto:${contactPage.informationSection.addressInformation.address}`}
              className="font-medium text-accent hover:underline"
            >
              {contactPage.informationSection.addressInformation.address}
            </Link>
          </GridItem>
          <GridItem
            iconName="phone"
            title={contactPage.informationSection.phoneInformation.title}
          >
            <p className="font-medium text-accent">
              {contactPage.informationSection.phoneInformation.phone}
            </p>
          </GridItem>
          <GridItem
            iconName="map-pin"
            title={contactPage.informationSection.addressInformation.title}
          >
            <p className="font-medium text-accent">
              {contactPage.informationSection.addressInformation.address}
            </p>
          </GridItem>
        </div>
      </Section>

      <Section
        id="upit"
        className="mt-14 min-h-screen items-center bg-background !pt-0 text-center md:mt-16 lg:mt-20"
      >
        <Badge className="-mb-2 bg-accent/30 text-accent">
          {contactPage.formSection.badge}
        </Badge>
        <h2 className="mb-12 max-w-[20ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
          {contactPage.formSection.title}
        </h2>

        <ContactForm
          formSection={contactPage.formSection}
          email={contactPage.informationSection.addressInformation.address}
        />
      </Section>
    </main>
  );
}

function Section({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "flex flex-col justify-center gap-4 px-6 py-14 sm:px-8 md:p-16 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}

type IconNames = keyof typeof dynamicIconImports;

function GridItem({
  children,
  title,
  iconName,
}: {
  children: React.ReactNode;
  title: string;
  iconName: IconNames;
}) {
  return (
    <div className="flex w-[250px] flex-col items-center justify-center gap-3 text-center">
      <div className="rounded-full bg-accent/10 p-8">
        <Icon
          name={iconName}
          className="size-8 stroke-[1.4] text-foreground md:size-10"
        />
      </div>
      <h3 className="scroll-m-20 font-bold tracking-tight">{title}</h3>
      {children}
    </div>
  );
}
