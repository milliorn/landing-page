import { sectionIds } from "../sectionIds";
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
    {
      href: `${import.meta.env.BASE_URL}#${sectionIds.hero}`,
      id: "nav-hero",
      linkText: linkFirst,
    },
    {
      href: `${import.meta.env.BASE_URL}#${sectionIds.info}`,
      id: "nav-info",
      linkText: linkMiddle,
    },
    {
      href: `${import.meta.env.BASE_URL}#${sectionIds.contact}`,
      id: "nav-contact",
      linkText: linkLast,
    },
  ];

  return (
    <div className="flex content-center w-full pt-4 capitalize sm:w-1/2 sm:justify-end">
      <ul className="flex items-center justify-center flex-1 list-reset sm:flex-none">
        <GenerateNavbarLinks navbarLinksData={navbarLinksData} />
      </ul>
    </div>
  );
}
