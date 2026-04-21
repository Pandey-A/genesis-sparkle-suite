/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CLOUDINARY_CLOUD_NAME?: string;
	readonly VITE_CLOUDINARY_HERO_PUBLIC_ID?: string;
	readonly VITE_EMAILJS_SERVICE_ID?: string;
	readonly VITE_EMAILJS_TEMPLATE_ID?: string;
	readonly VITE_EMAILJS_PUBLIC_KEY?: string;
	readonly VITE_ZOHO_CRM_LEAD_EXECUTE_URL?: string;
	readonly VITE_ZOHO_CRM_COOKIE?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
