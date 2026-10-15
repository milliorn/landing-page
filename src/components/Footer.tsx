import { Copyright } from "./Copyright";
import { navLinkRelAttrs } from "./NavLink";

const githubUrl = "https://github.com/milliorn";

export function Footer(props: { owner: string }) {
  return (
    <footer className="bg-gray-800">
      <a href={githubUrl} {...navLinkRelAttrs(githubUrl)}>
        <Copyright owner={props.owner} />
      </a>
    </footer>
  );
}
