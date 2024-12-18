import React from "react";
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};
export default function NavLink({ href, children }: NavLinkProps) {
  return <a className="font-normal text-base hover:text-primary" href={href}>{children}</a>;
}
