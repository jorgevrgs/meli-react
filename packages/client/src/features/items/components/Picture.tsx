interface PictureProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Picture({ src, alt, className }: PictureProps) {
  return <img src={src} alt={alt} className={className} />;
}
