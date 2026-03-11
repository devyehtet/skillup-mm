import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { approvalColumns, approvalQueue } from "@/lib/mock-data";
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

export default async function AdminApprovalsPage() {
  await requireSuperAdmin();

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Super Admin"
        title="Cross-school approval queue"
        description="Use this page for escalation, QA audits, and certificate policy enforcement across organizations."
      />
      <div className="mt-8">
        <Subnav items={adminNav} currentHref="/admin/approvals" />
      </div>
      <div className="mt-10">
        <DataTable title="Approval backlog" columns={approvalColumns} rows={approvalQueue} />
      </div>
    </div>
  );
}
