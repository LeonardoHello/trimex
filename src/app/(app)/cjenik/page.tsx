import Pricing from "@/components/Prices";
import { Badge } from "@/components/ui/badge";
import ShimmerButton from "@/components/ui/shimmer-button";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function PricesPage() {
  return (
    <main className="flex flex-col bg-[url('/topography.svg')]">
      <Section className="to min-h-fit items-center bg-gradient-to-b from-transparent from-90% to-background !pt-48 text-center">
        <Badge className="-mb-2 bg-primary/30 text-primary">pricing</Badge>
        <h1 className="max-w-[12ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Detaljan cjenik naših usluga
        </h1>
        <p className="max-w-[48ch] text-lg leading-7 text-muted-foreground">
          Istražite naše pristupačne cijene za sve usluge kojima ćemo vašu
          okućnicu učiniti lijepim i urednim.
        </p>
      </Section>

      <Section className="bg-background lg:pt-12">
        <Pricing />
      </Section>
      {/* <Section className="bg-background">
        <div className="relative -top-40 flex grow flex-wrap items-center justify-center gap-8">
          <Price
            title="uređenje vrtova"
            description="Everything you need to start selling."
            price={60}
            className="bg-foreground text-background"
          />
          <Price
            title="košenje"
            description="Everything you need to start selling."
            price={60}
            className="ring ring-primary/60"
          />
          <Price
            title="čišćenje vanjskih površina"
            description="Everything you need to start selling."
            price={60}
            className="ring ring-primary/60"
          />
          <Price
            title="montaža namještaja"
            description="Everything you need to start selling."
            price={60}
            className="ring ring-primary/60"
          />
          <Price
            title="pressure-washing"
            description="Everything you need to start selling."
            price={60}
            className="ring ring-primary/60"
          />
        </div>
      </Section> */}
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
        "flex min-h-screen flex-col justify-center gap-4 px-6 py-14 sm:px-8 md:p-16 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}

function Price({
  className,
  title,
  description,
  price,
}: {
  className?: string;
  title: string;
  description: string;
  price: number;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-card p-8 pb-9 shadow-2xl transition",
        className,
      )}
    >
      <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-primary">
        {title}
      </h2>
      <p className="text-inherit/75 mt-2 text-sm/6">{description}</p>
      <div className="mt-8 flex items-start gap-2">
        <div className="text-5xl font-medium text-inherit">€{price}</div>
        <div className="text-inherit/75 mt-1 text-sm/5">
          <p>EUR</p>
        </div>
      </div>
      <div className="mt-8">
        <Link data-headlessui-state="" href="#">
          <ShimmerButton
            className="rounded-none bg-opacity-50 px-5 py-2"
            background="hsl(var(--primary))"
            shimmerColor="hsl(var(--foreground))"
            shimmerSize="0.125em"
          >
            Pošaljite upit
          </ShimmerButton>
        </Link>
      </div>
      <div className="mt-8">
        <h3 className="text-sm/6 font-medium text-inherit">
          Start selling with:
        </h3>
        <ul className="mt-3 space-y-3">
          <li className="text-inherit/75 data-[disabled]:text-inherit/25 flex items-start gap-4 text-sm/6">
            <span className="inline-flex h-6 items-center">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="size-[0.9375rem] shrink-0 fill-foreground/25"
              >
                <path
                  clipRule="evenodd"
                  d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                ></path>
              </svg>
            </span>
            Up to 3 team members
          </li>
          <li className="text-inherit/75 data-[disabled]:text-inherit/25 flex items-start gap-4 text-sm/6">
            <span className="inline-flex h-6 items-center">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="size-[0.9375rem] shrink-0 fill-foreground/25"
              >
                <path
                  clipRule="evenodd"
                  d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                ></path>
              </svg>
            </span>
            Up to 5 deal progress boards
          </li>
          <li className="text-inherit/75 data-[disabled]:text-inherit/25 flex items-start gap-4 text-sm/6">
            <span className="inline-flex h-6 items-center">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="size-[0.9375rem] shrink-0 fill-foreground/25"
              >
                <path
                  clipRule="evenodd"
                  d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                ></path>
              </svg>
            </span>
            Source leads from select platforms
          </li>
          <li
            data-disabled="true"
            className="text-inherit/75 data-[disabled]:text-inherit/25 flex items-start gap-4 text-sm/6"
          >
            <span className="inline-flex h-6 items-center">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="size-[0.9375rem] shrink-0 fill-foreground/25"
              >
                <path
                  clipRule="evenodd"
                  d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                ></path>
              </svg>
            </span>
            <span className="sr-only">Not included:</span>RadiantAI integrations
          </li>
          <li
            data-disabled="true"
            className="text-inherit/75 data-[disabled]:text-inherit/25 flex items-start gap-4 text-sm/6"
          >
            <span className="inline-flex h-6 items-center">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="size-[0.9375rem] shrink-0 fill-foreground/25"
              >
                <path
                  clipRule="evenodd"
                  d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                ></path>
              </svg>
            </span>
            <span className="sr-only">Not included:</span>Competitor analysis
          </li>
        </ul>
      </div>
    </div>
  );
}
