import { Copyright } from "./Copyright";

/**
 * @param {{ owner: string; }} props
 */
export function Footer(props: { owner: string }): JSX.Element {
  const url = "https://github.com/milliorn" as string;
  return (
    <footer className="bg-gray-800">
      <a href={url} target="_blank" rel="noreferrer">
        <Copyright props={props} />
      </a>
    </footer>
  );
}
