import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  theme?: "primary" | "secondary";
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
  children,
  theme = "primary",
  icon,
  ...props
}: ButtonProps) {
  const ThemeStyle = {
    primary: {
      button: "bg-purple-gradient text-white",
      icon: "bg-white text-primary",
    },
    secondary: {
      button: "bg-white text-primary border border-primary",
      icon: "bg-primary text-white",
    },
  };
  const style = ThemeStyle[theme];
  const renderIcon = () => {
    if (icon) {
      return (
        <div className={`flex justify-between items-center md:gap-10 gap-2`}>
          {children}
          <div className={`p-1 rounded-full ${style.icon}`}>{icon}</div>
        </div>
      );
    }
    return <>{children}</>;
  };
  return (
    <button
      className={` ${
        icon ? "pl-5 pr-2" : "px-5"
      } py-2 rounded-full text-[16px] hover:opacity-50 ${style.button}`}
      {...props}
    >
      {renderIcon()}
    </button>
  );
}
