import React from "react";
type BadgeProps = {
  className?: string;
  icon?: string;
  children: React.ReactNode;
};
export default function Badge({ icon, children, className }: BadgeProps) {
  return (
    <div className={`rounded-full px-3 py-2 flex gap-5 text-sm font-semibold bg-white ${className}`}>
      {children}
      {icon && <img src={icon} />}
    </div>
  );
}
