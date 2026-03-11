import type { TableColumn, TableRow } from "@/types";

interface DataTableProps {
  title: string;
  description?: string;
  columns: TableColumn[];
  rows: TableRow[];
}

export default function DataTable({ title, description, columns, rows }: DataTableProps) {
  return (
    <section className="card-surface overflow-hidden rounded-[1.5rem]">
      <div className="border-b px-6 py-5" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
        {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm" style={{ borderColor: "var(--border)" }}>
          <thead className="table-head">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left font-semibold uppercase tracking-[0.15em] text-slate-500"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white/80" style={{ borderTop: "1px solid rgba(47, 39, 139, 0.08)" }}>
            {rows.map((row, index) => (
              <tr
                key={`${title}-${index}`}
                className="align-top"
                style={{
                  borderTop: index === 0 ? "0" : "1px solid rgba(47, 39, 139, 0.06)",
                }}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-slate-700">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
