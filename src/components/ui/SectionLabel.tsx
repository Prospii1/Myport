export default function SectionLabel({
  index,
  label,
}: {
  index?: string;
  label: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      {index && <span className="mono-label text-cyan">{index}</span>}
      <span className="mono-label text-muted">{label}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
