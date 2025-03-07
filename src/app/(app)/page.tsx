import Link from "next/link";

import type dynamicIconImports from "lucide-react/dynamicIconImports";
import { Service } from "payload-types";

import Icon from "@/components/Icon";
import SliderProject from "@/components/SliderProject";
import ReviewSlider from "@/components/SliderReview";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";
import PulsatingButton from "@/components/ui/pulsating-button";
import { trpc } from "@/trpc/server";
import { cn } from "@/utils/cn";

type IconName = keyof typeof dynamicIconImports;

export default async function HomePage() {
  const [homePage, services, projects, reviews] = await Promise.all([
    trpc.global.page.home(),
    trpc.collection.services(),
    trpc.collection.projects(),
    trpc.collection.reviews(),
  ]);

  return (
    <main>
      <Section
        badge={homePage.heroSection.heroBadge}
        className="relative !pt-20 text-white"
      >
        <video
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 -z-10 h-full w-screen object-cover object-bottom brightness-[0.65]"
          aria-label="Video player"
        >
          <source src={"/background-video.webm"} type={"video/webm"} />
          Your browser does not support the video tag.
        </video>

        <h1 className="mb-4 max-w-[15ch] scroll-m-20 text-5xl font-extrabold tracking-tight md:text-6xl">
          {homePage.heroSection.heroTitle}
        </h1>

        <p className="max-w-[50ch] leading-7">
          {homePage.heroSection.heroParagraph}
        </p>

        <Link href={"/kontakt#upit"}>
          <PulsatingButton className="px-8 active:scale-95">
            {homePage.heroSection.heroCallToAction}
          </PulsatingButton>
        </Link>
      </Section>

      <Section
        badge={homePage.projectsSection.projectsBadge}
        className="min-h-[80vh] bg-[hsl(120_25%_10%)] bg-[url('/texture.svg')] text-white md:items-center md:text-center"
      >
        <h2 className="mb-12 max-w-[24ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
          {homePage.projectsSection.projectsTitle}
        </h2>
        <div className="grid place-items-center gap-4 self-stretch md:grid-cols-2 xl:grid-cols-3">
          {services.docs.map((service) => (
            <GridItem key={service.id} service={service} />
          ))}
        </div>
      </Section>

      <Section
        badge={homePage.servicesSection.ServicesBadge}
        className="min-h-[80vh] overflow-hidden bg-white bg-[url('/texture.svg')] text-[hsl(120_25%_10%)] md:items-center md:text-center"
      >
        <h2 className="mb-12 max-w-[24ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
          {homePage.servicesSection.servicesTitle}
        </h2>
        <SliderProject projects={projects.docs} />
      </Section>

      <div className="bg-white">
        <Section
          badge={homePage.reviewSection.reviewBadge}
          className="min-h-[80vh] overflow-hidden bg-primary/40 bg-[url('/texture.svg')] text-white"
        >
          <h2 className="mb-12 max-w-[24ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
            {homePage.reviewSection.reviewTitle}
          </h2>
          <ReviewSlider reviews={reviews.docs} />
        </Section>
      </div>
    </main>
  );
}

function Section({
  children,
  badge,
  className,
}: {
  children: React.ReactNode;
  badge: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-14 text-center sm:px-8 md:items-start md:p-16 md:text-left lg:px-32 lg:py-20",
        className,
      )}
    >
      <Badge className="bg-[hsl(142_55%_42%/0.3)] text-[hsl(142_55%_42%)]">
        {badge}
      </Badge>

      {children}
    </section>
  );
}

function GridItem({ service }: { service: Service }) {
  return (
    <Link
      href={{
        pathname: "/cjenik",
        query: { id: service.id },
        hash: "tablica",
      }}
      className="self-stretch rounded-lg border border-[hsl(120_15%_25%/0.4)] bg-[hsl(120_25%_10%)] transition duration-300 hover:border-primary/40"
    >
      <MagicCard
        className="flex flex-col items-center gap-4 p-8 text-center"
        gradientColor="hsl(var(--primary))"
        gradientOpacity={0.2}
      >
        <Icon
          name={service.lucideIcon as IconName}
          className="size-10 transition-colors duration-300 md:size-12"
        />

        <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
          {service.name}
        </h3>

        <p className="text-sm font-light leading-7">{service.description}</p>
      </MagicCard>
    </Link>
  );
}
