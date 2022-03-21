export function Information(props) {
  return (
    <div className="pb-4 text-gray-900 sm:pb-8 bg-gray-50">
      <h1 className="p-12 text-4xl font-extrabold text-center">
        {props.infoHeading}
      </h1>
      <div className="gap-16 mx-4 space-y-2 md:space-y-0 md:grid md:grid-cols-3">
        <div className="w-full hover:shadow-2xl">
          <img
            src={props.img[ 0 ]}
            alt="image1"
            className="border-4 border-blue-900 rounded-xl " />
          <p className="p-2">{props.paragraph[ 0 ]}</p>
        </div>
        <div className="w-full hover:shadow-2xl">
          <img
            src={props.img[ 1 ]}
            alt="image2"
            className="border-4 border-blue-900 rounded-xl" />
          <p className="p-2">{props.paragraph[ 1 ]}</p>
        </div>
        <div className="w-full hover:shadow-2xl">
          <img
            src={props.img[ 2 ]}
            alt="image3"
            className="border-4 border-blue-900 rounded-xl" />
          <p className="p-2">{props.paragraph[ 2 ]}</p>
        </div>
      </div>
    </div>
  );
}
