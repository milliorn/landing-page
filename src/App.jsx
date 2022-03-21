import "./App.css";

function NavBar(props) {
  return (
    <nav className="w-full p-2 mt-0">
      <div className="container flex flex-wrap items-center mx-auto">
        <div className="flex justify-center w-full text-gray-50 sm:w-1/2 sm:justify-start">
          <a
            className="no-underline text-gray-50 hover:text-gray-50 hover:no-underline"
            href="/"
          >
            <span className="pl-4 text-2xl hover:animate-pulse">
              <i className=""></i>
              {props.logo}
            </span>
          </a>
        </div>
        <div className="flex content-center justify-between w-full pt-4 sm:w-1/2 sm:justify-end">
          <ul className="flex items-center justify-between flex-1 list-reset sm:flex-none">
            <li className="mr-3 sm:mb-2">
              <a
                className="inline-block px-4 py-2 text-gray-200 no-underline hover:animate-pulse hover:text-gray-200"
                href="/"
              >
                {props.linkFirst}
              </a>
            </li>
            <li className="mr-3 sm:mb-2">
              <a
                className="inline-block px-4 py-2 text-gray-200 no-underline hover:animate-pulse hover:text-gray-200 hover:text-underline"
                href="/"
              >
                {props.linkMiddle}
              </a>
            </li>
            <li className="mr-3 sm:mb-2">
              <a
                className="inline-block px-4 py-2 text-gray-200 no-underline hover:animate-pulse hover:text-gray-200 hover:text-underline"
                href="/"
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

function Hero(props) {
  return (
    <div className="container flex flex-col items-center mx-auto mb-12 sm:flex-row sm:mb-24">
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

function Information(props) {
  return (
    <div className="pb-4 text-gray-900 sm:pb-8 bg-gray-50">
      <h1 className="p-12 text-4xl font-extrabold text-center">
        {props.infoHeading}
      </h1>
      <div className="gap-16 mx-4 space-y-2 md:space-y-0 md:grid md:grid-cols-3">
        <div className="w-full hover:shadow-2xl">
          <img
            src={props.img[0]}
            alt="image1"
            className="border-4 border-blue-900 rounded-xl "
          />
          <p className="p-2">{props.paragraph[0]}</p>
        </div>
        <div className="w-full hover:shadow-2xl">
          <img
            src={props.img[1]}
            alt="image2"
            className="border-4 border-blue-900 rounded-xl"
          />
          <p className="p-2">{props.paragraph[1]}</p>
        </div>
        <div className="w-full hover:shadow-2xl">
          <img
            src={props.img[2]}
            alt="image3"
            className="border-4 border-blue-900 rounded-xl"
          />
          <p className="p-2">{props.paragraph[2]}</p>
        </div>
      </div>
    </div>
  );
}

function Quote(props) {
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

function Contact(props) {
  return (
    <div className="top-0 left-0 w-full h-full p-12 text-sm text-center sm:text-base text-gray-50 bg-gray-50">
      <div className="relative p-4 mx-auto my-0 bg-blue-500 sm:w-11/12 h-3/6 top-1/4">
        <h2 className="m-4 font-bold">{props.h2}</h2>
        <p>{props.p}</p>
        <button className="px-8 py-4 mx-auto my-4 capitalize bg-blue-500 border shadow border-gray-50 hover:animate-pulse hover:bg-blue-900 text-blue-50 hover:text-gray-50 rounded-xl hover:shadow-lg hover:border-transparent">
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const img = [
    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  const paragraphText = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos ea nostrum, quas molestias autem veniam natus deserunt et obcaecati commodi eveniet illum aliquid quo, voluptate est ipsum idperferendis?",
    "Lorem ipsum dolor sit amet consectetur adipisicing. Culpa, soluta molestiae nihil nam, at ea dolore debitis maxime aliquam adipisci, illum amet pariatur corrupti ipsam delectus repellat quod repudiandae minus?",
    "Lorem ipsum dolor sit amet consectetur. Tempora, nihil quo. Aliquam excepturi quaerat exercitationem reprehenderit, maxime saepe! Nostrum repudiandae, amet culpa iusto recusandae aliquid. Dolor iure saepe nobis fugit.",
    "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Sign up for more lorem ipsum",
  ];

  const links = ["link 1", "link 2", "link 3"];

  const headingText = "react tailwind";
  const buttonText = "sign up";
  const informationHeading = "Information Heading";
  const quoteText =
    "Nihil et nobis aperiam natus quod quos quisquam quasi earum possimus amet obcaecati excepturi debitis, ratione reprehenderit! Rem, in!";
  const quoteAuthor = "anonymous";
  const navbarLogo = "Header Logo";
  const contactHeading = "Join us! Lorem ipsum";
  const contactButton = "Sign Up";

  return (
    <div className="bg-gray-800">
      <NavBar
        logo={navbarLogo}
        linkFirst={links[0]}
        linkMiddle={links[1]}
        linkLast={links[2]}
      />
      <Hero hText={headingText} pText={paragraphText[3]} bText={buttonText} />
      <Information
        img={img}
        infoHeading={informationHeading}
        paragraph={paragraphText}
      />
      <Quote quote={quoteText} author={quoteAuthor} />
      <Contact
        h2={contactHeading}
        p={paragraphText[4]}
        button={contactButton}
      />
    </div>
  );
}
