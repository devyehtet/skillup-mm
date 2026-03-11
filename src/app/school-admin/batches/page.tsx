import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import Subnav from "@/components/Subnav";
import { batchColumns, schoolBatches } from "@/lib/mock-data";

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

export default function SchoolAdminBatchesPage() {
  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="School Admin"
        title="Batches and course windows"
        description="Batch grouping is the key organizing layer for school delivery, reporting, and exam scheduling."
      />
      <div className="mt-8">
        <Subnav items={schoolAdminNav} currentHref="/school-admin/batches" />
      </div>
      <div className="mt-10">
        <DataTable title="Batches" columns={batchColumns} rows={schoolBatches} />
      </div>
    </div>
  );
}
