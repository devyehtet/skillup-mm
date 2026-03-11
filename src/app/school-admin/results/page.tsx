import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { attemptColumns, attemptRows } from "@/lib/mock-data";

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

export default function SchoolAdminResultsPage() {
  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="School Admin"
        title="Exam attempts and review flags"
        description="Attempt review stays school-scoped so instructors and admins can inspect issues without exposing other organizations."
      />
      <div className="mt-8">
        <Subnav items={schoolAdminNav} currentHref="/school-admin/results" />
      </div>
      <div className="mt-10">
        <DataTable title="Attempt review" columns={attemptColumns} rows={attemptRows} />
      </div>
    </div>
  );
}
