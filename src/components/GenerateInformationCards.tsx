import { InformationImage } from "./InformationImage";

export function GenerateInformationCards({
  props,
}: {
  props: {
    infoHeading: string;
    img: readonly [string, string, string];
    paragraph: readonly [string, string, string, string, string];
  };
}) {
  const informationCardsData = [
    {
      imgSrc: props.img[0],
      alt: "image1",
      pText: props.paragraph[0],
      width: 1470,
      height: 980,
    },
    {
      imgSrc: props.img[1],
      alt: "image2",
      pText: props.paragraph[1],
      width: 935,
      height: 624,
    },
    {
      imgSrc: props.img[2],
      alt: "image3",
      pText: props.paragraph[2],
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
