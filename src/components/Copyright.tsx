export function Copyright({ owner }: { owner: string }) {
  return (
    <p className="p-8 text-center text-gray-50">
      <span className="text-lg">&copy;</span> {new Date().getFullYear()} {owner}
    </p>
  );
}
