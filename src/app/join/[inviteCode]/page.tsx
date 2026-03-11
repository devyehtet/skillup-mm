import { notFound } from "next/navigation";

import SectionTitle from "@/components/SectionTitle";

interface JoinPageProps {
  params: Promise<{ inviteCode: string }>;
}

export default async function JoinPage({ params }: JoinPageProps) {
  const { inviteCode } = await params;

  if (!inviteCode) {
    notFound();
  }

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Invite Flow"
        title={`Join with invite code: ${inviteCode}`}
        description="This screen is ready for school-specific invite validation, membership creation, and automatic batch enrollment."
      />

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Invite payload preview</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p className="flex justify-between gap-4">
              <span>Organization</span>
              <span className="font-semibold text-slate-950">Yangon Marketing Institute</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Batch</span>
              <span className="font-semibold text-slate-950">YMI 2026-A</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Default role</span>
              <span className="font-semibold text-slate-950">Student</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Assigned courses</span>
              <span className="font-semibold text-slate-950">2</span>
            </p>
          </div>
        </div>

        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Next backend hooks</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <li>• Validate invite token and expiration.</li>
            <li>• Create organization membership and batch assignment.</li>
            <li>• Trigger onboarding checklist and course enrollment.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
