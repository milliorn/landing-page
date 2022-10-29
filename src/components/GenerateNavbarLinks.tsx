import uuid from "react-uuid";
/**
 * @param {{ href: string; linkText: string }} props
 */
export function GenerateNavbarLinks({
  navbarLinksData,
}: {
  navbarLinksData: { href: string; linkText: string }[];
}): JSX.Element[] {
  return navbarLinksData.map((link) => (
    <li className="mr-3 sm:mb-2" key={uuid()}>
      <a
        className="inline-block px-4 py-2 text-gray-200 no-underline hover:animate-pulse hover:text-gray-200"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        {link.linkText}
      </a>
    </li>
  ));
}
