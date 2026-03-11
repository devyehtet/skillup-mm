import type { MetricCard, MetricTone } from "@/types";

const toneClasses: Record<MetricTone, string> = {
  primary: "bg-[rgba(238,240,255,0.92)] text-[color:var(--primary)] ring-1 ring-[rgba(47,39,139,0.1)]",
  success: "bg-[rgba(230,255,244,0.92)] text-[color:var(--success)] ring-1 ring-[rgba(73,230,168,0.22)]",
  warning: "bg-[rgba(255,246,219,0.92)] text-[color:var(--warning)] ring-1 ring-[rgba(184,121,11,0.18)]",
  danger: "bg-[rgba(255,235,239,0.92)] text-[color:var(--danger)] ring-1 ring-[rgba(190,56,92,0.16)]",
  neutral: "bg-[rgba(238,255,247,0.92)] text-[color:var(--foreground)] ring-1 ring-[rgba(73,230,168,0.18)]",
};

interface StatCardProps {
  metric: MetricCard;
}

export default function StatCard({ metric }: StatCardProps) {
  const tone = metric.tone ?? "neutral";

  return (
    <article className="card-surface flex h-full flex-col rounded-[1.6rem] p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${toneClasses[tone]}`}
        >
          {metric.label}
        </span>
        <span className="status-dot h-9 w-9 rounded-full" />
      </div>
      <p className="mt-6 text-[2.2rem] font-semibold leading-none tracking-tight text-slate-950 sm:text-4xl">
        {metric.value}
      </p>
      <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-9 text-slate-600 md:text-[1.02rem]">
        {metric.helper}
      </p>
    </article>
  );
}
