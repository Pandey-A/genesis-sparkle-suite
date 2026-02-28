import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const isCloudinaryConfigured = Boolean(cloudinaryCloudName);

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: cloudinaryCloudName || 'dus4afwtj',
  },
});

export const buildCloudinaryImage = (
  publicId: string,
  options?: {
    width?: number;
    height?: number;
  }
) => {
  const cleanedPublicId = publicId.replace(/^\/+/, '');

  const image = cloudinary.image(cleanedPublicId).format('auto').quality('auto');

  if (options?.width && options?.height) {
    image.resize(auto().gravity(autoGravity()).width(options.width).height(options.height));
  }

  return image;
};

export const buildCloudinaryVideoUrl = (publicId: string): string => {
  const cleanedPublicId = publicId.replace(/^\/+/, '');

  return `https://res.cloudinary.com/${cloudinaryCloudName || 'dus4afwtj'}/video/upload/f_auto,q_auto/${cleanedPublicId}`;
};
