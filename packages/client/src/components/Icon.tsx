export default function Icon({
  name,
  alt = "",
}: {
  name: string;
  alt?: string;
}) {
  return (
    <figure>
      <img
        srcSet={`/images/${name}.png, /images/${name}@2x.png 2x`}
        src={`/images/${name}.png`}
        alt={alt}
      />
    </figure>
  );
}
