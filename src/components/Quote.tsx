/**
 * @param {{ quote: string; author: string; }} props
 */
export function Quote(props: { quote: string; author: string }): JSX.Element {
  return (
    <div className="bg-gray-200">
      <p className="p-24 m-auto text-xl italic font-light text-center text-gray-800 sm:text-4xl">
        <span>{props.quote}</span>
        <span className="ml-4 font-bold text-center capitalize sm:text-2xl">
          - {props.author}
        </span>
      </p>
    </div>
  );
}
