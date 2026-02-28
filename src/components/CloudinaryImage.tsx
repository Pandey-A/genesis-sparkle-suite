import type { ImgHTMLAttributes } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { buildCloudinaryImage, isCloudinaryConfigured } from '@/lib/cloudinary';

type CloudinaryImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  publicId?: string;
  fallbackSrc?: string;
  cloudinaryWidth?: number;
  cloudinaryHeight?: number;
};

const CloudinaryImage = ({
  publicId,
  fallbackSrc,
  cloudinaryWidth,
  cloudinaryHeight,
  alt,
  ...imgProps
}: CloudinaryImageProps) => {
  if (publicId && isCloudinaryConfigured) {
    const cldImg = buildCloudinaryImage(publicId, {
      width: cloudinaryWidth,
      height: cloudinaryHeight,
    });

    return <AdvancedImage cldImg={cldImg} alt={alt} {...imgProps} />;
  }

  if (!fallbackSrc) {
    return null;
  }

  return <img src={fallbackSrc} alt={alt} {...imgProps} />;
};

export default CloudinaryImage;
