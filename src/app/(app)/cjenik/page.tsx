import prices from "@/api/prices.json";
import Price from "@/components/Price";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";

export default function CjenikPage() {
  return (
    <main className="flex flex-col bg-[url('/topography.svg')]">
      <Section className="to min-h-fit items-center bg-gradient-to-b from-transparent from-90% to-background !pt-48 text-center">
        <Badge className="-mb-2 bg-primary/30 text-primary">pricing</Badge>
        <h1 className="max-w-[16ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Detaljan cjenik naših usluga
        </h1>
        <p className="max-w-[48ch] leading-7 text-muted-foreground">
          Istražite naše pristupačne cijene za sve usluge kojima ćemo vašu
          okućnicu učiniti lijepim i urednim.
        </p>
      </Section>

      <Section className="bg-background lg:pt-12">
        <div className="flex flex-wrap justify-center gap-6">
          {prices.map((price) => (
            <Price key={price.id} price={price} />
          ))}
        </div>
      </Section>
    </main>
  );
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "md:p-18 flex min-h-screen flex-col justify-center gap-4 px-6 py-14 sm:px-8 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
