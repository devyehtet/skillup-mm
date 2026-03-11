import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { approvalColumns, approvalQueue } from "@/lib/mock-data";

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

export default function SchoolAdminApprovalsPage() {
  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="School Admin"
        title="Approval queue"
        description="Approvals tie completed learning, passed exams, and certificate issuance together."
      />
      <div className="mt-8">
        <Subnav items={schoolAdminNav} currentHref="/school-admin/approvals" />
      </div>
      <div className="mt-10">
        <DataTable title="Pending approvals" columns={approvalColumns} rows={approvalQueue} />
      </div>
    </div>
  );
}
