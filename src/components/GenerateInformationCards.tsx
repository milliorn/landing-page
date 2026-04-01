import { InformationImage } from "./InformationImage";

export function GenerateInformationCards({
  img,
  paragraph,
}: {
  img: readonly [string, string, string];
  paragraph: readonly [string, string, string, string, string];
}) {
  const informationCardsData = [
    {
      imgSrc: img[0],
      alt: "image1",
      pText: paragraph[0],
      width: 1470,
      height: 980,
    },
    {
      imgSrc: img[1],
      alt: "image2",
      pText: paragraph[1],
      width: 935,
      height: 624,
    },
    {
      imgSrc: img[2],
      alt: "image3",
      pText: paragraph[2],
      width: 935,
      height: 624,
    },
  ];

  return (
    <div className="gap-16 mx-4 space-y-2 md:space-y-0 md:grid md:grid-cols-3">
      {informationCardsData.map((card) => (
        <div className="w-full hover:shadow-2xl" key={card.alt}>
          <InformationImage card={card} />
          <p className="p-2">{card.pText}</p>
        </div>
      ))}
    </div>
  );
}
