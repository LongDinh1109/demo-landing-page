import logo from "../assets/cpu-logo.svg";
import Button from "./Button";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SidePanel from "./SidePanel";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const renderNavLinks = () => {
    return (
      <>
        <NavLink href="#">Playground</NavLink>
        <NavLink href="#">How it works</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Case Study</NavLink>
      </>
    );
  };
  return (
    <div className="flex justify-between items-center py-3 px-5 md:px-12 lg:px-24">
      <a href="#">
        <img
          className="border-2 rounded-full border-secondary p-1 bg-white"
          src={logo}
          alt="logo"
        />
      </a>
      <div className="sm:flex items-center hidden sm:gap-6 md:gap-10 lg:gap-16">
        {renderNavLinks()}
        <Button>Sign Up</Button>
      </div>
      <div className="sm:hidden flex items-center gap-5">
        <Button>Sign Up</Button>
        <Bars3Icon
          className="w-8 h-8 border border-secondary rounded p-1 bg-white text-primary"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <SidePanel onClose={() => setIsOpen(false)}>
            {renderNavLinks()}
          </SidePanel>
        )}
      </div>
    </div>
  );
}
