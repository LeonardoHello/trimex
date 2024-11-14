import { TableDemo } from "@/components/Table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";

export default function CjenikPage() {
  return (
    <main className="flex flex-col bg-[url('/topography.svg')]">
      <Section className="items-center bg-gradient-to-b from-transparent from-60% to-background !pb-32 !pt-44 text-center">
        <Badge className="-mb-2 bg-primary/30 text-primary">pricing</Badge>
        <h1 className="max-w-[15ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Detaljan cjenik naših usluga
        </h1>
        <p className="max-w-[50ch] leading-7 text-muted-foreground">
          Istražite naše pristupačne cijene za sve usluge kojima ćemo vašu
          okućnicu učiniti lijepim i urednim.
        </p>
      </Section>

      <Section className="bg-background !pt-0">
        <TableDemo />
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
        "md:p-18 flex flex-col justify-center gap-4 px-6 py-14 sm:px-8 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
