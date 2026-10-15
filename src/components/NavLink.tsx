export interface NavLink {
  external?: boolean;
  href: string;
  linkText: string;
}

export function navLinkRelAttrs(link: NavLink) {
  return link.external
    ? { target: "_blank" as const, rel: "noreferrer" as const }
    : {};
}
