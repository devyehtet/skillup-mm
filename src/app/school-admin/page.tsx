import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import Subnav from "@/components/Subnav";
import DataTable from "@/components/DataTable";
import { approvalColumns, approvalQueue, schoolAdminKpis } from "@/lib/mock-data";

const schoolAdminNav = [
  { href: "/school-admin", label: "Overview" },
  { href: "/school-admin/students", label: "Students" },
  { href: "/school-admin/batches", label: "Batches" },
  { href: "/school-admin/courses", label: "Courses" },
  { href: "/school-admin/assignments", label: "Assignments" },
  { href: "/school-admin/results", label: "Results" },
  { href: "/school-admin/approvals", label: "Approvals" },
  { href: "/school-admin/certificates", label: "Certificates" },
];

export default function SchoolAdminDashboardPage() {
  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="School Admin"
        title="Organization dashboard for learner operations"
        description="This route group is reserved for school-specific visibility only: learners, batches, assignments, approvals, and certificates."
      />

      <div className="mt-8">
        <Subnav items={schoolAdminNav} currentHref="/school-admin" />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {schoolAdminKpis.map((metric) => (
          <StatCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-12">
        <DataTable
          title="Pending approvals"
          description="Approvals need either a school-admin decision or reviewer handoff before certificate issuance."
          columns={approvalColumns}
          rows={approvalQueue}
        />
      </div>
    </div>
  );
}
