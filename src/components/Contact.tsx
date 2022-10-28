/**
 * @param {{ h2: string; p: string; button: string; }} props
 */
export function Contact(props: { h2: string; p: string; button: string }): JSX.Element {
  return (
    <div className="top-0 left-0 w-full h-full p-12 text-sm text-center sm:text-base text-gray-50 bg-gray-50">
      <div className="relative p-4 mx-auto my-0 bg-blue-500 sm:w-11/12 h-3/6 top-1/4">
        <h2 className="m-4 font-bold capitalize">{props.h2}</h2>
        <p>{props.p}</p>
        <button className="px-8 py-4 mx-auto my-4 capitalize bg-blue-500 border shadow border-gray-50 hover:animate-pulse hover:bg-blue-900 text-blue-50 hover:text-gray-50 rounded-xl hover:shadow-lg hover:border-transparent">
          {props.button}
        </button>
      </div>
    </div>
  );
}
