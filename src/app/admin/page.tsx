import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import Subnav from "@/components/Subnav";
import { organizationColumns, organizationHealth, platformKpis } from "@/lib/mock-data";
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

export default async function AdminDashboardPage() {
  await requireSuperAdmin();

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Super Admin"
        title="Global control plane for schools, content, and assessment quality"
        description="This top-level dashboard is where cross-organization visibility, content operations, and reporting should live."
      />

      <div className="mt-8">
        <Subnav items={adminNav} currentHref="/admin" />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {platformKpis.map((metric) => (
          <StatCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-12">
        <DataTable
          title="Organization health"
          description="Use this table to monitor learner volume, completion, and approval backlog at a glance."
          columns={organizationColumns}
          rows={organizationHealth}
        />
      </div>
    </div>
  );
}
