import { NavbarLinks } from "./NavbarLinks";
import { NavbarLogo } from "./NavbarLogo";

export function NavBar(props: {
  logo: string;
  linkFirst: string;
  linkMiddle: string;
  linkLast: string;
}) {
  return (
    <nav className="w-full p-2 mt-0 bg-gray-800">
      <div className="flex flex-wrap items-center mx-auto ">
        <NavbarLogo logo={props.logo} />
        <NavbarLinks
          linkFirst={props.linkFirst}
          linkMiddle={props.linkMiddle}
          linkLast={props.linkLast}
        />
      </div>
    </nav>
  );
}
