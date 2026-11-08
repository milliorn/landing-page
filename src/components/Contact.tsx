import { sectionIds } from "../sectionIds";

export function Contact(props: {
  heading: string;
  body: string;
  buttonLabel: string;
}) {
  return (
    <div
      id={sectionIds.contact}
      className="top-0 left-0 w-full h-full p-12 text-sm text-center sm:text-base text-gray-50 bg-gray-50"
    >
      <div className="relative p-4 mx-auto my-0 bg-gray-900 sm:w-11/12 h-3/6 top-1/4">
        <h2 className="m-4 font-bold capitalize">{props.heading}</h2>
        <p>{props.body}</p>
        <button
          type="button"
          className="px-8 py-4 mx-auto my-4 capitalize bg-gray-50 border border-gray-900 shadow hover:animate-pulse hover:bg-blue-900 text-black hover:text-gray-50 rounded-xl hover:shadow-lg hover:border-transparent"
        >
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
}
