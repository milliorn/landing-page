import { GenerateInformationCards } from "./GenerateInformationCards";

export function Information(props: {
  infoHeading: string;
  img: readonly [string, string, string];
  paragraph: readonly [string, string, string, string, string];
}) {
  return (
    <div className="pb-4 text-gray-900 sm:pb-8 bg-gray-50">
      <h1 className="p-12 text-4xl font-extrabold text-center">
        {props.infoHeading}
      </h1>
      <GenerateInformationCards img={props.img} paragraph={props.paragraph} />
    </div>
  );
}
