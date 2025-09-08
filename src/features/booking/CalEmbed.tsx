export default function CalEmbed({ url, height = 720 }:{ url: string; height?: number }) {
  return <iframe src={url} className="iframe" style={{ height }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
}
