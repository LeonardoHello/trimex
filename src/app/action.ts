"use server";

import type { FormSchemaType } from "@/components/ProfileForm";
import { payload } from "@/utils/payload";

export async function create(data: FormSchemaType) {
  return payload.sendEmail({
    from: `${data.email} <onboarding@resend.dev>`,
    to: "studiorevive.os@gmail.com",
    subject: `Upit - ${data.name}`,
    reply_to: data.email,
    text: data.message,
  });
}
