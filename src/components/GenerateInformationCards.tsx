import uuid from "react-uuid";
import { InformationImage } from "./InformationImage";

/**
 * @param {{ infoHeading: string; img: (string | undefined)[]; paragraph: (string | undefined)[]; }}
 */
export function GenerateInformationCards({
  props,
}: {
  props: {
    infoHeading: string;
    img: (string | undefined)[];
    paragraph: (string | undefined)[];
  };
}): JSX.Element {
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
        <div className="w-full hover:shadow-2xl" key={uuid()}>
          <InformationImage card={card} />
          <p className="p-2">{card.pText}</p>
        </div>
      ))}
    </div>
  );
}
