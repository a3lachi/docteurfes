import { PropsWithChildren, ReactNode } from "react";
export default function Card({ title, icon, children }: PropsWithChildren<{ title: string; icon?: ReactNode }>) {
  return (
    <div className="card">
      <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"}}>
        {icon}<h3 className="card__title">{title}</h3>
      </div>
      <div className="muted">{children}</div>
    </div>
  );
}
