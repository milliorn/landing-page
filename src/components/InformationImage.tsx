export function InformationImage({
  card,
}: {
  card: {
    imgSrc: string;
    alt: string;
    pText: string;
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
