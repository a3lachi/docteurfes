import Section from "@/components/ui/Section";

export default function TrustBar() {
  return (
    <Section id="trust">
      <div className="grid" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
        <div className="muted" style={{textAlign:"center"}}>Mutuelle A</div>
        <div className="muted" style={{textAlign:"center"}}>Mutuelle B</div>
        <div className="muted" style={{textAlign:"center"}}>Association C</div>
        <div className="muted" style={{textAlign:"center"}}>+100 avis ★★★★★</div>
      </div>
    </Section>
  );
}
