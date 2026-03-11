"use client";

import { useEffect, useState } from "react";

import DataTable from "@/components/DataTable";
import {
  formatRegisteredLearnerRow,
  normalizeLearnerEmail,
  REGISTERED_LEARNERS_STORAGE_KEY,
} from "@/lib/registered-learner-utils";
import type { RegisteredLearner, TableColumn, TableRow } from "@/types";

interface AdminUsersTableProps {
  columns: TableColumn[];
  rows: TableRow[];
  title: string;
}

function readBrowserRegisteredLearners() {
  if (typeof window === "undefined") {
    return [] as RegisteredLearner[];
  }

  try {
    const rawValue = window.localStorage.getItem(REGISTERED_LEARNERS_STORAGE_KEY);

    if (!rawValue) {
      return [] as RegisteredLearner[];
    }

    const parsedValue = JSON.parse(rawValue);

    return Array.isArray(parsedValue) ? (parsedValue as RegisteredLearner[]) : [];
  } catch {
    return [] as RegisteredLearner[];
  }
}

function mergeRowsWithBrowserLearners(serverRows: TableRow[]) {
  const localRows = readBrowserRegisteredLearners().map(formatRegisteredLearnerRow);

  if (!localRows.length) {
    return serverRows;
  }

  const seenEmails = new Set(localRows.map((row) => normalizeLearnerEmail(row.email ?? "")));

  return [
    ...localRows,
    ...serverRows.filter((row) => !seenEmails.has(normalizeLearnerEmail(row.email ?? ""))),
  ];
}

export default function AdminUsersTable({ columns, rows, title }: AdminUsersTableProps) {
  const [mergedRows, setMergedRows] = useState(rows);

  useEffect(() => {
    setMergedRows(mergeRowsWithBrowserLearners(rows));
  }, [rows]);

  return <DataTable title={title} columns={columns} rows={mergedRows} />;
}
