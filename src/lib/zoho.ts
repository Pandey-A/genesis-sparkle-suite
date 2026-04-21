export type ZohoLeadPayload = {
  source: "hero" | "contact";
  service: string;
  name: string;
  phone: string;
  email?: string;
};

const zohoLeadExecuteUrl = import.meta.env.VITE_ZOHO_CRM_LEAD_EXECUTE_URL;
const zohoLeadCookie = import.meta.env.VITE_ZOHO_CRM_COOKIE;

export const isZohoLeadServiceConfigured = Boolean(zohoLeadExecuteUrl);

export const createZohoLead = async (payload: ZohoLeadPayload) => {
  if (!isZohoLeadServiceConfigured) {
    throw new Error("Zoho CRM lead endpoint is not configured");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (zohoLeadCookie) {
    headers.Cookie = zohoLeadCookie;
  }

  const response = await fetch(zohoLeadExecuteUrl as string, {
    method: "POST",
    headers,
    body: JSON.stringify({
      Name: payload.name,
      Email: payload.email || "",
      Phone: payload.phone,
      Description: `Source: ${payload.source}; Service: ${payload.service}`,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Zoho CRM lead creation failed (${response.status}): ${errorText}`);
  }

  return response;
};
