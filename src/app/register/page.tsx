import { redirect } from "next/navigation";

import RegisterForm from "@/components/RegisterForm";
import { getCurrentLearner, normalizeReturnPath } from "@/lib/session";
import SectionTitle from "@/components/SectionTitle";
import { registerBenefits } from "@/lib/mock-data";

interface RegisterPageProps {
  searchParams: Promise<{ next?: string }>;
}

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const [learner, resolvedSearchParams] = await Promise.all([getCurrentLearner(), searchParams]);
  const nextPath = normalizeReturnPath(resolvedSearchParams.next) ?? "/mock-exams";

  if (learner) {
    redirect(nextPath === "/register" ? "/dashboard" : nextPath);
  }

  return (
    <div className="container-shell py-14 md:py-16">
      <SectionTitle
        eyebrow="Registration"
        title="Create your learner account and start practicing"
        description="This experience is designed for self-registration. Sign up, choose the exam track you want to prepare for, and start taking mock exams right away."
      />

      <div className="mt-10 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          {registerBenefits.map((benefit) => (
            <article key={benefit.title} className="card-surface rounded-[1.5rem] p-6 sm:p-7">
              <span className="soft-chip">Why register</span>
              <h2 className="mt-5 text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-slate-950">
                {benefit.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 md:text-[1rem]">{benefit.description}</p>
            </article>
          ))}
        </section>

        <RegisterForm nextPath={nextPath} />
      </div>
    </div>
  );
}
