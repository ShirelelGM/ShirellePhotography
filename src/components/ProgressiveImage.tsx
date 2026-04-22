"use client";

import Image, { type ImageProps } from "next/image";

type ProgressiveImageProps = Omit<
  ImageProps,
  "src" | "alt" | "placeholder" | "blurDataURL"
> & {
  src: string;
  alt: string;
};

const LOW_QUALITY_WIDTH = 32;
const LOW_QUALITY = 20;
const DEFAULT_QUALITY = 75;

export function getOptimizedImageUrl(src: string, width: number, quality: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

function getBlurImageUrl(src: string) {
  return getOptimizedImageUrl(src, LOW_QUALITY_WIDTH, LOW_QUALITY);
}

export function ProgressiveImage({
  src,
  alt,
  className,
  style,
  onLoad,
  ...props
}: ProgressiveImageProps) {
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={[
        "progressive-image",
        className,
        props.fill ? "progressive-image--fill" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      placeholder="blur"
      blurDataURL={getBlurImageUrl(src)}
      quality={props.quality ?? DEFAULT_QUALITY}
      style={style}
      onLoad={onLoad}
    />
  );
}
