import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { schoolStudents, studentColumns } from "@/lib/mock-data";

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

export default function SchoolAdminStudentsPage() {
  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="School Admin"
        title="Learner directory"
        description="Use this table for school-scoped user management, enrollment oversight, and support workflows."
      />
      <div className="mt-8">
        <Subnav items={schoolAdminNav} currentHref="/school-admin/students" />
      </div>
      <div className="mt-10">
        <DataTable title="Students" columns={studentColumns} rows={schoolStudents} />
      </div>
    </div>
  );
}
