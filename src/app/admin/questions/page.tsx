import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import Subnav from "@/components/Subnav";
import { questionBankOverview } from "@/lib/mock-data";
import { requireSuperAdmin } from "@/lib/session";

const adminNav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/organizations", label: "Organizations" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/questions", label: "Questions" },
  { href: "/admin/approvals", label: "Approvals" },
  { href: "/admin/reports", label: "Reports" },
];

export default async function AdminQuestionsPage() {
  await requireSuperAdmin();

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Super Admin"
        title="Question bank overview"
        description="Question types, review workloads, and coverage by track all belong at the global platform layer."
      />
      <div className="mt-8">
        <Subnav items={adminNav} currentHref="/admin/questions" />
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {questionBankOverview.map((item) => (
          <StatCard
            key={item.label}
            metric={{ label: item.label, value: item.value, helper: "Global question bank coverage", tone: "neutral" }}
          />
        ))}
      </div>
    </div>
  );
}
