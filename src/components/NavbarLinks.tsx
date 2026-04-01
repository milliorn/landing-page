import { GenerateNavbarLinks } from "./GenerateNavbarLinks";

export function NavbarLinks({
  linkFirst,
  linkMiddle,
  linkLast,
}: {
  linkFirst: string;
  linkMiddle: string;
  linkLast: string;
}) {
  const navbarLinksData = [
    { href: "/", linkText: linkFirst },
    { href: "/", linkText: linkMiddle },
    { href: "/", linkText: linkLast },
  ];

  return (
    <div className="flex content-center w-full pt-4 capitalize sm:w-1/2 sm:justify-end">
      <ul className="flex items-center justify-center flex-1 list-reset sm:flex-none">
        <GenerateNavbarLinks navbarLinksData={navbarLinksData} />
      </ul>
    </div>
  );
}
