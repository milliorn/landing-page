import { Copyright } from "./Copyright";
import { navLinkRelAttrs } from "./NavLink";

export function Footer(props: { owner: string }) {
  const githubLink = {
    external: true,
    href: "https://github.com/milliorn",
    linkText: "github",
  };

  return (
    <footer className="bg-gray-800">
      <a href={githubLink.href} {...navLinkRelAttrs(githubLink)}>
        <Copyright owner={props.owner} />
      </a>
    </footer>
  );
}
