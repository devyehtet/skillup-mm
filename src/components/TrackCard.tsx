import Link from "next/link";

import type { Track } from "@/types";

interface TrackCardProps {
  track: Track;
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <article className="card-surface flex h-full flex-col rounded-[1.6rem] p-7 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="soft-chip">Track</p>
        <span className="brand-badge rounded-full px-3 py-1 text-xs font-medium">
          {track.courseCount} courses
        </span>
      </div>

      <h3 className="mt-6 text-[1.58rem] font-semibold leading-[1.26] tracking-tight text-slate-950 sm:text-[1.72rem]">
        {track.title}
      </h3>
      <p className="mt-4 text-[0.98rem] leading-9 text-slate-600 md:text-[1.02rem]">{track.description}</p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {track.focusSkills.map((skill) => (
          <span
            key={skill}
            className="brand-tag rounded-full px-3 py-1.5 text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-slate-500">{track.estimatedHours} total study hours</p>
        <Link href={`/tracks/${track.slug}`} className="brand-link text-sm">
          View track
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
