import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { adminUserColumns } from "@/lib/mock-data";
import { getAdminUserRows } from "@/lib/registered-learners";
import { requireSuperAdmin } from "@/lib/session";

export const dynamic = "force-dynamic";

const adminNav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/organizations", label: "Organizations" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/questions", label: "Questions" },
  { href: "/admin/approvals", label: "Approvals" },
  { href: "/admin/reports", label: "Reports" },
];

export default async function AdminUsersPage() {
  await requireSuperAdmin();
  const adminRows = await getAdminUserRows();

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Super Admin"
        title="User management"
        description="Global operators can inspect school admins, reviewers, instructors, and platform staff from one place."
      />
      <div className="mt-8">
        <Subnav items={adminNav} currentHref="/admin/users" />
      </div>
      <div className="mt-10">
        <DataTable title="Platform users" columns={adminUserColumns} rows={adminRows} />
      </div>
    </div>
  );
}
