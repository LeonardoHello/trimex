import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { CheckIcon } from "@radix-ui/react-icons";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};
const demoPrices = [
  {
    id: "price_1",
    name: "Basic",
    description: "A basic plan for startups and individual users",
    features: [
      "AI-powered analytics",
      "Basic support",
      "5 projects limit",
      "Access to basic AI tools",
    ],
    monthlyPrice: 1000,
    yearlyPrice: 10000,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Premium",
    description: "A premium plan for growing businesses",
    features: [
      "Advanced AI insights",
      "Priority support",
      "Unlimited projects",
      "Access to all AI tools",
      "Custom integrations",
    ],
    monthlyPrice: 2000,
    yearlyPrice: 20000,
    isMostPopular: true,
  },
  {
    id: "price_5",
    name: "Enterprise",
    description:
      "An enterprise plan with advanced features for large organizations",
    features: [
      "Custom AI solutions",
      "24/7 dedicated support",
      "Unlimited projects",
      "Access to all AI tools",
      "Custom integrations",
      "Data security and compliance",
    ],
    monthlyPrice: 5000,
    yearlyPrice: 50000,
    isMostPopular: false,
  },
  {
    id: "price_6",
    name: "Ultimate",
    description: "The ultimate plan with all features for industry leaders",
    features: [
      "Bespoke AI development",
      "White-glove support",
      "Unlimited projects",
      "Priority access to new AI tools",
      "Custom integrations",
      "Highest data security and compliance",
    ],
    monthlyPrice: 8000,
    yearlyPrice: 80000,
    isMostPopular: false,
  },
  {
    id: "price_7",
    name: "Ultimate",
    description: "The ultimate plan with all features for industry leaders",
    features: [
      "Bespoke AI development",
      "White-glove support",
      "Unlimited projects",
      "Priority access to new AI tools",
      "Custom integrations",
      "Highest data security and compliance",
    ],
    monthlyPrice: 8000,
    yearlyPrice: 80000,
    isMostPopular: false,
  },
];

export default function Pricing() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {demoPrices.map((price, idx) => (
        <div
          key={price.id}
          className="relative flex w-full flex-col gap-4 overflow-hidden rounded-2xl border bg-card p-4 sm:w-80"
        >
          <div className="flex items-center">
            <div className="ml-4">
              <h2 className="text-base font-semibold leading-7">
                {price.name}
              </h2>
              <p className="h-16 text-sm leading-5 text-foreground/70">
                {price.description}
              </p>
            </div>
          </div>

          <Button className="group relative w-full transform-gpu gap-2 overflow-hidden text-lg font-medium tracking-tighter ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
            <p>Pošaljite upit</p>
          </Button>

          <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
          {price.features && price.features.length > 0 && (
            <ul className="flex flex-col gap-2 font-normal">
              {price.features.map((feature: any, idx: any) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-xs font-medium"
                >
                  <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px]" />
                  <span className="flex">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
