import { Copyright } from "./Copyright";
import { navLinkRelAttrs } from "./NavLink";

const githubUrl = "https://github.com/milliorn";

export function Footer(props: { owner: string }) {
  return (
    <footer className="bg-gray-800 pb-4 text-center">
      <Copyright owner={props.owner} />
      <a
        aria-label={`site by ${props.owner}, on GitHub`}
        className="inline-block p-4 text-sm text-gray-400 underline hover:text-gray-200"
        href={githubUrl}
        {...navLinkRelAttrs(githubUrl)}
      >
        site by {props.owner}
      </a>
    </footer>
  );
}
