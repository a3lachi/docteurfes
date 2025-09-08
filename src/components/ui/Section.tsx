import { ReactNode } from "react";
import Container from "@/components/layout/Container";

export default function Section({ id, title, subtitle, children }:{
  id: string; title?: string; subtitle?: string; children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <Container>
        {title && <h2 className="section__title">{title}</h2>}
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        <div className={title || subtitle ? "section__body" : ""}>{children}</div>
      </Container>
    </section>
  );
}
