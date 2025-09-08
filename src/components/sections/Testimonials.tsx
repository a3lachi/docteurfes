import Section from "@/components/ui/Section";
import { reviews } from "@/data/reviews";

export default function Testimonials() {
  return (
    <Section id="avis" title="Avis patients">
      <div className="grid" style={{gridTemplateColumns:"1fr",gap:"16px"}}>
        {reviews.map((r, i) => (
          <blockquote key={i} className="card">
            <div style={{color:"#f59e0b"}}>{"★★★★★".slice(0, r.rating)}</div>
            <p style={{marginTop:"8px"}}>“{r.text}”</p>
            <footer className="muted" style={{marginTop:"6px"}}>— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
