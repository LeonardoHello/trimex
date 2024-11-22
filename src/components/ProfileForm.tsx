"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Molimo da upišete ime." }),
  email: z.string().email({ message: "Molimo da upišete ispravni email." }),
  phone: z
    .string()
    .refine((value) => value === "" || isValidPhoneNumber(value, "HR"), {
      message: "Molimo da upišete ispravni broj mobitela.",
    }),
  message: z.string().min(2, { message: "Molimo da upišete poruku." }),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative w-full overflow-hidden rounded-md border bg-primary/10 px-6 py-8 text-left xl:w-2/3"
      >
        <BackgroundImage />
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">
                  ime <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">mobitel</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="capitalize">
                  email <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="capitalize">
                  poruka <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea className="h-[150px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button size={"lg"} type="submit" className="mt-6">
          Pošaljite upit
        </Button>
      </form>
    </Form>
  );
}

function BackgroundImage() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 to-foreground/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full fill-foreground stroke-foreground/100 mix-blend-overlay"
        >
          <defs>
            <pattern
              id=":r1o:"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              x="-12"
              y="4"
            >
              <path d="M.5 20V.5H20" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#:r1o:)"
          ></rect>
          <svg x="-12" y="4" className="overflow-visible">
            <rect strokeWidth="0" width="21" height="21" x="140" y="80"></rect>
            <rect strokeWidth="0" width="21" height="21" x="180" y="60"></rect>
            <rect strokeWidth="0" width="21" height="21" x="140" y="60"></rect>
            <rect strokeWidth="0" width="21" height="21" x="200" y="60"></rect>
            <rect strokeWidth="0" width="21" height="21" x="140" y="120"></rect>
          </svg>
        </svg>
      </div>
    </div>
  );
}
