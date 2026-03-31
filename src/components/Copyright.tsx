/**
 * @param {{ owner: string }} props
 */
export function Copyright({ props }: { props: { owner: string } }) {
  return (
    <p className="p-8 text-center text-gray-50 hover:animate-pulse hover:underline">
      <span className="text-lg">&copy;</span> {new Date().getFullYear()}{" "}
      {props.owner}
    </p>
  );
}
