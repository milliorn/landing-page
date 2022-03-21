export function Hero(props) {
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
        <button className="px-8 py-4 mx-auto my-4 capitalize bg-blue-500 border border-gray-900 shadow hover:animate-pulse hover:bg-blue-900 text-blue-50 hover:text-gray-50 rounded-xl hover:shadow-lg hover:border-transparent">
          {props.bText}
        </button>
      </div>
      {/*<!--Right Col-->*/}
      <div className="w-full text-center lg:w-1/2 lg:py-6">
        {/*<!--Add your product image here-->*/}
        <svg
          className="w-3/5 mx-auto text-gray-900 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      </div>
    </div>
  );
}
