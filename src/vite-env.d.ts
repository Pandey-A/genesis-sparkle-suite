/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CLOUDINARY_CLOUD_NAME?: string;
	readonly VITE_CLOUDINARY_HERO_PUBLIC_ID?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
