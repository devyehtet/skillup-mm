import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { globalCourseColumns, globalCourses } from "@/lib/mock-data";
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

export default async function AdminCoursesPage() {
  await requireSuperAdmin();

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Super Admin"
        title="Global course catalog"
        description="Master courses remain centrally managed, then assigned to schools or batches later."
      />
      <div className="mt-8">
        <Subnav items={adminNav} currentHref="/admin/courses" />
      </div>
      <div className="mt-10">
        <DataTable title="Master courses" columns={globalCourseColumns} rows={globalCourses} />
      </div>
    </div>
  );
}
