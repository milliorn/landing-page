import { Copyright } from "./Copyright";

export function Footer(props: { owner: string }) {
  const url = "https://github.com/milliorn";
  return (
    <footer className="bg-gray-800">
      <a href={url} target="_blank" rel="noreferrer">
        <Copyright props={props} />
      </a>
    </footer>
  );
}
