export interface NavLink {
  href: string;
  linkText: string;
}

export function navLinkRelAttrs(href: string) {
  return /^https?:\/\//i.test(href)
    ? { target: "_blank" as const, rel: "noreferrer" as const }
    : {};
}
