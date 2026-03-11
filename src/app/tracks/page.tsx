import SectionTitle from "@/components/SectionTitle";
import TrackCard from "@/components/TrackCard";
import { tracks } from "@/lib/mock-data";

export default function TracksPage() {
  return (
    <div className="container-shell py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
        <SectionTitle
          eyebrow="Tracks"
          title="Choose the platform you want to practice first"
          description="Each track combines Burmese lessons, quick quizzes, and official-style mock exams so you can move from weak topics to stronger scores."
        />

        <div className="card-surface rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Track overview</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="info-tile rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Platforms</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">Google, Meta, TikTok, LinkedIn, and fundamentals</p>
            </div>
            <div className="info-tile rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Learning style</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">Mock exam first, then topic-based study repair</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {tracks.map((track) => (
          <TrackCard key={track.slug} track={track} />
        ))}
      </div>
    </div>
  );
}
