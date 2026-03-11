import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import { certificateColumns, certificates } from "@/lib/mock-data";
import { requireLearner } from "@/lib/session";

export default async function CertificatesPage() {
  await requireLearner("/certificates");

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Certificates"
        title="Issued certificates and approval queue visibility"
        description="Certificates remain organization-aware and approval-driven, which is critical for training schools and reviewer workflows."
      />

      <div className="mt-10">
        <DataTable
          title="Certificate register"
          description="Mock records for issued and pending certificates."
          columns={certificateColumns}
          rows={certificates}
        />
      </div>
    </div>
  );
}
