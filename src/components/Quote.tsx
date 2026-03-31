export function Quote(props: { quote: string; author: string }) {
  return (
    <div className="bg-gray-200 p-24">
      <div className="slide-in m-auto text-xl italic font-light text-center text-gray-800 sm:text-4xl">
        {props.quote}
      </div>
      <p className="mt-4 text-center font-bold capitalize sm:text-2xl">
        - {props.author}
      </p>
    </div>
  );
}
