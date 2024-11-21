import { Info } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const services = [
  {
    service: "Basic Plan",
    description:
      "Essential features for small businesses, including customer management, basic reporting, and up to 1,000 transactions per month. Ideal for startups and sole proprietors looking to streamline their operations.",
    price: "€99.99",
    status: "Popular",
  },
  {
    service: "Pro Plan",
    description:
      "Advanced features for growing businesses, including API access, advanced analytics, priority support, and up to 10,000 transactions per month. Perfect for small to medium-sized businesses aiming to scale their operations efficiently.",
    price: "€199.99",
    status: "Recommended",
  },
  {
    service: "Enterprise Plan",
    description:
      "Custom solutions for large organizations, featuring unlimited transactions, dedicated account manager, custom integrations, and advanced security features. Tailored for corporations and large-scale operations requiring robust, scalable solutions.",
    price: "€499.99",
    status: "Enterprise",
  },
  {
    service: "Starter Pack",
    description:
      "Get started with our basic toolkit, including essential business tools, simple invoicing, and basic customer management. Designed for freelancers and new businesses just beginning their journey.",
    price: "€49.99",
    status: "New",
  },
  {
    service: "Analytics Add-on",
    description:
      "In-depth data analysis and reporting add-on, providing advanced insights, custom dashboards, and predictive analytics. Enhance your decision-making process with powerful data visualization and trend analysis tools.",
    price: "€149.99",
    status: "Add-on",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>
        Our comprehensive service offerings and pricing.
      </TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-inherit">
          <TableHead>Service</TableHead>
          <TableHead className="hidden md:table-cell">Description</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.service}>
            <TableCell className="font-medium text-foreground">
              {service.service}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <p className="max-w-prose">{service.description}</p>
            </TableCell>
            <TableCell className="text-right">{service.price}</TableCell>
            <TableCell className="w-[50px] md:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <Info />
                </PopoverTrigger>
                <PopoverContent>
                  <p className="max-w-prose">{service.description}</p>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
