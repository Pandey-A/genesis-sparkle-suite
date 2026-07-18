import emailjs from "@emailjs/browser";

export type LeadEmailPayload = {
  source: "hero" | "contact";
  service: string;
  name: string;
  phone: string;
  email?: string;
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailServiceConfigured =
  Boolean(serviceId) && Boolean(templateId) && Boolean(publicKey);

export const sendLeadEmail = async (payload: LeadEmailPayload) => {
  if (!isEmailServiceConfigured) {
    throw new Error("EmailJS is not configured");
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      form_source: payload.source,
      service: payload.service,
      from_name: payload.name,
      from_email: payload.email || "N/A",
      phone: payload.phone,
      submitted_at: new Date().toISOString(),
      page_url: window.location.href,
      referrer: document.referrer || "Direct / No referrer",
    },
    {
      publicKey,
    },
  );
};
