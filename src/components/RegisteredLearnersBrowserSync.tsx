"use client";

import { useEffect } from "react";

import {
  mergeRegisteredLearners,
  REGISTERED_LEARNERS_STORAGE_KEY,
} from "@/lib/registered-learner-utils";
import type { RegisteredLearner } from "@/types";

interface RegisteredLearnersBrowserSyncProps {
  learners: RegisteredLearner[];
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

export default function RegisteredLearnersBrowserSync({
  learners,
}: RegisteredLearnersBrowserSyncProps) {
  useEffect(() => {
    if (!learners.length || typeof window === "undefined") {
      return;
    }

    try {
      const mergedLearners = learners.reduce(
        (currentLearners, learner) => mergeRegisteredLearners(currentLearners, learner),
        readBrowserRegisteredLearners(),
      );

      window.localStorage.setItem(
        REGISTERED_LEARNERS_STORAGE_KEY,
        JSON.stringify(mergedLearners),
      );
    } catch {
      // Ignore browser storage failures and keep rendering the rest of the app.
    }
  }, [learners]);

  return null;
}
