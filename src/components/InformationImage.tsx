/**
 * @param {{ imgSrc: string | undefined; alt: string; pText: string | undefined; width: number height: number; }}
 */
export function InformationImage({
  card,
}: {
  card: {
    imgSrc: string | undefined;
    alt: string;
    pText: string | undefined;
    width: number;
    height: number;
  };
}) {
  return (
    <div className="border-4 border-blue-900 rounded-xl ">
      <img
        alt={card.alt}
        height={card.height}
        src={card.imgSrc}
        width={card.width}
        loading="lazy"
      />
    </div>
  );
}
