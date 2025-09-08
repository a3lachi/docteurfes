import Section from "@/components/ui/Section";
import { faqs } from "@/data/faqs";

export default function Faq() {
  return (
    <Section id="faq" title="Questions fréquentes">
      <div style={{display:"grid",gap:"12px"}}>
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p className="muted" style={{marginTop:"8px"}}>{f.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
