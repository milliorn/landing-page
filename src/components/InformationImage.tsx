import type { InfoCard } from "../data";

export function InformationImage({ card }: { card: InfoCard }) {
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
