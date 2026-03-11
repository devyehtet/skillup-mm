interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description: string;
  invert?: boolean;
}

export default function SectionTitle({ eyebrow, title, description, invert = false }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-4 md:space-y-5">
      {eyebrow ? <p className={invert ? "soft-chip soft-chip-dark" : "eyebrow-pill"}>{eyebrow}</p> : null}
      <h2
        className={`text-[2rem] font-semibold leading-[1.16] tracking-tight md:text-[2.55rem] ${
          invert ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`max-w-2xl text-base leading-8 md:text-[1.08rem] md:leading-9 ${
          invert ? "text-blue-50" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
