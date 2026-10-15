import { navLinkRelAttrs, type NavLink } from "./NavLink";

export function GenerateNavbarLinks({
  navbarLinksData,
}: {
  navbarLinksData: NavLink[];
}) {
  return (
    <>
      {navbarLinksData.map((link) => (
        <li className="mr-3 sm:mb-2" key={link.linkText}>
          <a
            className="inline-block px-4 py-2 text-gray-200 no-underline hover:animate-pulse hover:text-gray-200"
            href={link.href}
            {...navLinkRelAttrs(link.href)}
          >
            {link.linkText}
          </a>
        </li>
      ))}
    </>
  );
}
