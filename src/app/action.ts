"use server";

import type { FormSchemaType } from "@/components/ContactForm";
import { payload } from "@/utils/payload";

export async function create(data: FormSchemaType & { to: string }) {
  return payload.sendEmail({
    from: `${data.email} <onboarding@resend.dev>`,
    to: data.to,
    subject: "TRIMEX - UPIT",
    reply_to: data.email,
    text: data.message,
  });
}
