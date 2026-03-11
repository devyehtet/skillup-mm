import { notFound } from "next/navigation";

import CourseCard from "@/components/CourseCard";
import MockExamCard from "@/components/MockExamCard";
import SectionTitle from "@/components/SectionTitle";
import { courses, getTrackBySlug, practiceExams } from "@/lib/mock-data";

interface TrackDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TrackDetailPage({ params }: TrackDetailPageProps) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);

  if (!track) {
    notFound();
  }

  const trackCourses = courses.filter((course) => course.trackSlug === track.slug);
  const trackExams = practiceExams.filter((exam) => exam.trackSlug === track.slug);

  return (
    <div className="container-shell py-16">
      <SectionTitle eyebrow="Track detail" title={track.title} description={track.description} />

      <div className="gradient-panel mt-10 grid gap-6 rounded-[1.75rem] p-8 text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-blue-100">What you will improve</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {track.focusSkills.map((skill) => (
              <span key={skill} className="dark-card rounded-full px-3 py-2 text-sm text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="dark-card rounded-3xl p-5">
            <p className="text-sm text-blue-100">Courses</p>
            <p className="mt-2 text-3xl font-semibold">{track.courseCount}</p>
          </div>
          <div className="dark-card rounded-3xl p-5">
            <p className="text-sm text-blue-100">Estimated hours</p>
            <p className="mt-2 text-3xl font-semibold">{track.estimatedHours}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {trackCourses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      {trackExams.length > 0 ? (
        <div className="mt-12 space-y-6">
          <SectionTitle
            eyebrow="Recommended Mock"
            title="Practice the exam format for this track"
            description="Sit the track-specific mock after reviewing the lessons below. Use the result page to find your weak topics."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {trackExams.map((exam) => (
              <MockExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
