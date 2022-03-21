export function NavBar(props) {
  return (
    <nav className="w-full p-2 mt-0">
      <div className="flex flex-wrap items-center mx-auto ">
        <div className="flex justify-center w-full text-gray-50 sm:w-1/2 sm:justify-start">
          <a
            className="no-underline text-gray-50 hover:text-gray-50 hover:no-underline"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="pl-4 text-2xl capitalize hover:animate-pulse">
              {props.logo}
            </span>
          </a>
        </div>
        <div className="flex content-center w-full pt-4 capitalize sm:w-1/2 sm:justify-end">
          <ul className="flex items-center justify-center flex-1 list-reset sm:flex-none">
            <li className="mr-3 sm:mb-2">
              <a
                className="inline-block px-4 py-2 text-gray-200 no-underline hover:animate-pulse hover:text-gray-200"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                {props.linkFirst}
              </a>
            </li>
            <li className="mr-3 sm:mb-2">
              <a
                className="inline-block px-4 py-2 text-gray-200 no-underline hover:animate-pulse hover:text-gray-200 hover:text-underline"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                {props.linkMiddle}
              </a>
            </li>
            <li className="mr-3 sm:mb-2">
              <a
                className="inline-block px-4 py-2 text-gray-200 no-underline hover:animate-pulse hover:text-gray-200 hover:text-underline"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                {props.linkLast}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
