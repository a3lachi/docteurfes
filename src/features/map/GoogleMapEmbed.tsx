export default function GoogleMapEmbed({ src, title="Carte" }:{ src: string; title?: string }) {
  return <iframe className="iframe" src={src} loading="lazy" title={title} />;
}
