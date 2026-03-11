import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { reportColumns, reportRows } from "@/lib/mock-data";
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

export default async function AdminReportsPage() {
  await requireSuperAdmin();

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Super Admin"
        title="Platform reporting"
        description="Enrollment, completion, average scores, and question difficulty trends should roll up here."
      />
      <div className="mt-8">
        <Subnav items={adminNav} currentHref="/admin/reports" />
      </div>
      <div className="mt-10">
        <DataTable title="Track performance snapshot" columns={reportColumns} rows={reportRows} />
      </div>
    </div>
  );
}
