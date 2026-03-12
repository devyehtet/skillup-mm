import { mergeRegisteredLearners } from "@/lib/registered-learner-utils";
import type { RegisteredLearner } from "@/types";

export function mergeLearnerCollections(
  primaryLearners: RegisteredLearner[],
  secondaryLearners: RegisteredLearner[],
) {
  return secondaryLearners.reduce(
    (currentLearners, learner) => mergeRegisteredLearners(currentLearners, learner),
    [...primaryLearners],
  );
}
