import { NavbarLinks } from "./NavbarLinks";
import { NavbarLogo } from "./NavbarLogo";

/**
 * @param {{ logo: string; linkFirst: string; linkMiddle: string; linkLast: string; }} props
 */
export function NavBar(props: {
  logo: string;
  linkFirst: string;
  linkMiddle: string;
  linkLast: string;
}): JSX.Element {
  return (
    <nav className="w-full p-2 mt-0 bg-gray-800">
      <div className="flex flex-wrap items-center mx-auto ">
        <NavbarLogo props={props} />
        <NavbarLinks props={props} />
      </div>
    </nav>
  );
}
