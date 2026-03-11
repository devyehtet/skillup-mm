import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { organizationColumns, organizationHealth } from "@/lib/mock-data";
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

export default async function AdminOrganizationsPage() {
  await requireSuperAdmin();

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Super Admin"
        title="Organizations"
        description="Organizations are the top tenant boundary for schools and training centers."
      />
      <div className="mt-8">
        <Subnav items={adminNav} currentHref="/admin/organizations" />
      </div>
      <div className="mt-10">
        <DataTable title="Organization registry" columns={organizationColumns} rows={organizationHealth} />
      </div>
    </div>
  );
}
