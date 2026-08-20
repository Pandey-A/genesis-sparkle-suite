export type BabygenLeadPayload = {
  source: "hero" | "contact";
  service: string;
  name: string;
  phone: string;
  email?: string;
};

const webhookUrl = import.meta.env.VITE_BABYGEN_CRM_WEBHOOK_URL;
const webhookKey = import.meta.env.VITE_BABYGEN_CRM_WEBHOOK_KEY;

export const isBabygenCrmConfigured = Boolean(webhookUrl) && Boolean(webhookKey);

export const createBabygenLead = async (payload: BabygenLeadPayload) => {
  if (!isBabygenCrmConfigured) {
    throw new Error("Babygen CRM webhook is not configured");
  }

  // Content-Type is deliberately "text/plain", not "application/json".
  // Apps Script web apps don't implement a CORS preflight (OPTIONS)
  // handler, so a browser fetch with an "application/json" Content-Type
  // triggers a preflight request that Apps Script can't answer, and the
  // browser blocks the real POST as a result. "text/plain" keeps this a
  // CORS "simple request" — no preflight — and the Apps Script side
  // parses the JSON string out of the raw body regardless of what
  // Content-Type was declared, so nothing is lost by doing this.
  const response = await fetch(webhookUrl as string, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      babygen_key: webhookKey,
      lead_ref: crypto.randomUUID(),
      source: payload.source,
      service: payload.service,
      name: payload.name,
      phone: payload.phone,
      email: payload.email || "",
      page_url: window.location.href,
      referrer: document.referrer || "",
      submitted_at: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Babygen CRM lead creation failed (${response.status}): ${errorText}`);
  }

  return response;
};
