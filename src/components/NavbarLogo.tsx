export function NavbarLogo({ logo }: { logo: string }) {
  return (
    <div className="flex justify-center w-full text-gray-50 sm:w-1/2 sm:justify-start">
      <a
        className="no-underline text-gray-50 hover:text-gray-50 hover:no-underline"
        href="/"
      >
        <span className="pl-4 text-2xl capitalize hover:animate-pulse">
          {logo}
        </span>
      </a>
    </div>
  );
}
