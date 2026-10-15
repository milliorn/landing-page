import type { InfoCard } from "../data";
import { InformationImage } from "./InformationImage";

export function GenerateInformationCards({
  cards,
}: {
  cards: readonly InfoCard[];
}) {
  return (
    <div className="gap-16 mx-4 space-y-2 md:space-y-0 md:grid md:grid-cols-3">
      {cards.map((card) => (
        <div className="w-full hover:shadow-2xl" key={card.alt}>
          <InformationImage card={card} />
          <p className="p-2">{card.pText}</p>
        </div>
      ))}
    </div>
  );
}
