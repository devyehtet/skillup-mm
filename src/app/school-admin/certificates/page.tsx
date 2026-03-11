import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { certificateColumns, certificates } from "@/lib/mock-data";

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

export default function SchoolAdminCertificatesPage() {
  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="School Admin"
        title="Certificate register"
        description="Certificates remain tied to both the learner and organization, which becomes important for verification and reissue flows."
      />
      <div className="mt-8">
        <Subnav items={schoolAdminNav} currentHref="/school-admin/certificates" />
      </div>
      <div className="mt-10">
        <DataTable title="Certificates" columns={certificateColumns} rows={certificates} />
      </div>
    </div>
  );
}
