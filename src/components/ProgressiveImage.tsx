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

function getBlurImageUrl(src: string) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${LOW_QUALITY_WIDTH}&q=${LOW_QUALITY}`;
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
      quality={90}
      style={style}
      onLoad={onLoad}
    />
  );
}
