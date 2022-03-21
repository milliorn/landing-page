export function Footer(props) {
  return (
    <footer>
      <a href="https://github.com/milliorn" target="_blank" rel="noreferrer">
        <p className="p-8 text-center text-gray-50 hover:animate-pulse hover:underline">
          <span className="text-lg">&copy;</span> {new Date().getFullYear()}{" "}
          {props.owner}
        </p>
      </a>
    </footer>
  );
}
