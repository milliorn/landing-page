import { HeroImage } from "./HeroImage";

/**
 * @param {{ hText: string; pText: string; bText: string; }} props
 */
export function Hero(props: {
  hText: string;
  pText: string;
  bText: string;
}): JSX.Element {
  return (
    <div className="flex flex-col items-center mx-auto mb-12 sm:flex-row sm:mb-24">
      {/*<!--Left Col-->*/}
      <div className="flex flex-col items-start justify-center w-full px-6 pt-12 pb-24 lg:w-1/2 text-gray-50">
        <h1 className="mx-auto my-4 text-4xl font-bold capitalize md:text-5xl">
          {props.hText}
        </h1>
        <p className="my-4 leading-normal text-center text-gray-200 sm:mx-auto">
          {props.pText}
        </p>
        <button
          type="button"
          className="px-8 py-4 mx-auto my-4 capitalize bg-gray-50 border border-gray-900 shadow hover:animate-pulse hover:bg-blue-900 text-black hover:text-gray-50 rounded-xl hover:shadow-lg hover:border-transparent"
        >
          {props.bText}
        </button>
      </div>
      {/*<!--Right Col-->*/}
      <div className="w-full text-center lg:w-1/2 lg:py-6">
        {/*<!--Add your product image here-->*/}
        <HeroImage />
      </div>
    </div>
  );
}

