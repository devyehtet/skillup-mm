import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import { platformRoadmap, schoolAdminKpis } from "@/lib/mock-data";

export default function ForSchoolsPage() {
  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="For Schools"
        title="Run one platform across multiple schools, batches, and approval workflows"
        description="The MVP is structured as a multi-organization training platform instead of a single public LMS. That keeps learner access, batch assignment, and reporting boundaries clear from day one."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {schoolAdminKpis.map((metric) => (
          <StatCard key={metric.label} metric={metric} />
        ))}
      </div>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Why this model fits training centers</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <li>• School admins only see their own learners, batches, results, approvals, and certificates.</li>
            <li>• Master courses and question banks stay global so content quality remains centralized.</li>
            <li>• Batch-based assignments make it easy to onboard new learner groups with minimal admin work.</li>
            <li>• Approval queues support manual checks before certificate issuance.</li>
          </ul>
        </div>

        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Recommended roadmap</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            {platformRoadmap.map((item, index) => (
              <li key={item}>
                <span className="font-semibold text-slate-950">{index + 1}.</span> {item}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
