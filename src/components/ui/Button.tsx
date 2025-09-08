import { ComponentPropsWithoutRef } from "react";
type Props = ComponentPropsWithoutRef<"a"> & { variant?: "primary"|"outline"|"ghost" };
export default function Button({ variant="primary", className="", ...props }: Props) {
  const base = "btn";
  const v = variant==="outline"?"btn--outline":variant==="ghost"?"btn--ghost":"btn--primary";
  return <a {...props} className={`${base} ${v} ${className}`} />;
}
