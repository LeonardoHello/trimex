import { Suspense } from "react";

import PriceTable from "@/components/PriceTable";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/trpc/server";
import { cn } from "@/utils/cn";

export default async function pricesPage() {
  const [pricesPage, services] = await Promise.all([
    trpc.global.page.priceList(),
    trpc.collection.services(),
  ]);

  return (
    <main>
      <div className="bg-[url('/leaf.svg')]">
        <Section className="min-h-[60vh] items-center bg-gradient-to-b from-primary/5 from-60% to-background !pt-20 text-center lg:min-h-[75vh]">
          <Badge className="-mb-2 bg-primary/30 text-primary">
            {pricesPage.badge}
          </Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {pricesPage.title}
          </h1>
          <p className="max-w-[50ch] leading-7 text-primary">
            {pricesPage.paragraph}
          </p>
        </Section>
      </div>

      <Section id="tablica" className="!pt-0">
        <Suspense fallback={<p>Loading...</p>}>
          <PriceTable services={services.docs} />
        </Suspense>
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
        "md:p-18 flex flex-col justify-center gap-4 px-6 py-14 sm:px-8 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
