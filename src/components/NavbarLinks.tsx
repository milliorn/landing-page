import { GenerateNavbarLinks } from "./GenerateNavbarLinks";

/**
 * @param {{ logo: string; linkFirst: string; linkMiddle: string; linkLast: string; }} props
 */
export function NavbarLinks({
  props,
}: {
  props: {
    logo: string;
    linkFirst: string;
    linkMiddle: string;
    linkLast: string;
  };
}): JSX.Element {
  const navbarLinksData = [
    { href: "/", linkText: props.linkFirst },
    { href: "/", linkText: props.linkMiddle },
    { href: "/", linkText: props.linkLast },
  ];

  return (
    <div className="flex content-center w-full pt-4 capitalize sm:w-1/2 sm:justify-end">
      <ul className="flex items-center justify-center flex-1 list-reset sm:flex-none">
        {GenerateNavbarLinks({ navbarLinksData })}
      </ul>
    </div>
  );
}
