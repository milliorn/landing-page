import { GenerateInformationCards } from "./GenerateInformationCards";

/**
 * @param {{ infoHeading: string; img: (string | undefined)[]; paragraph: (string | undefined)[]; }} props
 */
export function Information(props: {
  infoHeading: string;
  img: (string | undefined)[];
  paragraph: (string | undefined)[];
}): JSX.Element {
  return (
    <div className="pb-4 text-gray-900 sm:pb-8 bg-gray-50">
      <h1 className="p-12 text-4xl font-extrabold text-center">
        {props.infoHeading}
      </h1>
      <GenerateInformationCards props={props} />
    </div>
  );
}
