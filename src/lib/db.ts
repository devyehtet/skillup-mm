import {
  approvalQueue,
  courses,
  homeMetrics,
  organizationHealth,
  platformKpis,
  practiceExams,
  questionBankOverview,
  recentResults,
  schoolAdminKpis,
  studyRecommendations,
  studentKpis,
  studentLearningItems,
  tracks,
} from "@/lib/mock-data";
import type { MetricCard, MockExam, ProgressItem, RegisteredLearner, ResultSummary, StudyRecommendation } from "@/types";

export async function getCatalog() {
  return { tracks, courses };
}

function getTrackSlugFromPlatform(targetPlatform: string) {
  const normalizedValue = targetPlatform.toLowerCase();

  if (normalizedValue.includes("google")) {
    return "google-ads";
  }

  if (normalizedValue.includes("meta") || normalizedValue.includes("facebook") || normalizedValue.includes("instagram")) {
    return "meta-ads";
  }

  if (normalizedValue.includes("tiktok")) {
    return "tiktok-ads";
  }

  if (normalizedValue.includes("linkedin")) {
    return "linkedin-ads";
  }

  return "digital-marketing-fundamentals";
}

function isStarterLearner(learner?: RegisteredLearner) {
  return learner?.currentLevel.toLowerCase().includes("beginner") ?? false;
}

function getStarterCourses(targetTrackSlug: string) {
  const orderedCourseSlugs = [
    "digital-marketing-fundamentals-mm",
    courses.find((course) => course.trackSlug === targetTrackSlug)?.slug,
    "google-ads-bootcamp-mm",
    "meta-performance-planner",
  ].filter((slug): slug is string => Boolean(slug));

  return orderedCourseSlugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course, index, allCourses): course is (typeof courses)[number] => {
      if (!course) {
        return false;
      }

      return allCourses.findIndex((item) => item?.slug === course.slug) === index;
    })
    .slice(0, 3);
}

function buildStarterLearningItems(learner: RegisteredLearner): ProgressItem[] {
  const targetTrackSlug = getTrackSlugFromPlatform(learner.targetPlatform);
  const starterCourses = getStarterCourses(targetTrackSlug);

  return starterCourses.map((course, index) => ({
    title: course.title,
    subtitle:
      index === 0
        ? "Start here to build core vocabulary, funnels, KPIs, and reporting basics"
        : index === 1
          ? `Next, move into ${learner.targetPlatform} basics after the foundation lessons`
          : "Keep this as your third step after you finish the first two starter modules",
    progress: 0,
    href: `/courses/${course.slug}`,
    status:
      index === 0
        ? "Start with Module 1 and your first checkpoint quiz"
        : index === 1
          ? "Begin from lesson 1 after you finish the fundamentals track"
          : "Save this for later once your first mock exam is complete",
  }));
}

function buildStarterRecommendations(learner: RegisteredLearner): StudyRecommendation[] {
  return [
    {
      title: "Start with core digital marketing fundamentals",
      description: "Before timed mock exams, build a base in campaign structure, funnels, KPI meaning, and reporting vocabulary.",
      action: "Open Digital Marketing Fundamentals MM and finish the first module this week.",
      estimatedMinutes: 35,
      href: "/courses/digital-marketing-fundamentals-mm",
    },
    {
      title: `Choose one ${learner.targetPlatform} path and stay focused`,
      description: "As a beginner, switching across too many platforms slows you down. Start with the platform you selected during registration.",
      action: `Study the first lessons in your ${learner.targetPlatform} learning path before taking more mocks.`,
      estimatedMinutes: 25,
      href: "/tracks",
    },
    {
      title: "Take your first mock only after the starter lessons",
      description: "You will get more useful score feedback once you already know the terminology and core setup principles.",
      action: "Finish a few foundation lessons, then open the mock exam catalog and take your first attempt.",
      estimatedMinutes: 20,
      href: "/mock-exams",
    },
  ];
}

function buildStarterMetrics(learner: RegisteredLearner): MetricCard[] {
  return [
    { label: "Mock exams taken", value: "0", helper: "You have not started your first timed attempt yet", tone: "primary" },
    { label: "Average score", value: "N/A", helper: "Your score will appear after your first mock exam", tone: "neutral" },
    { label: "Current level", value: learner.currentLevel, helper: `${learner.targetPlatform} starter path selected`, tone: "success" },
    { label: "Start here", value: "Fundamentals", helper: "Begin with KPI basics, campaign structure, and reporting terms", tone: "warning" },
  ];
}

function buildStarterPracticeExams(learner: RegisteredLearner): MockExam[] {
  const targetTrackSlug = getTrackSlugFromPlatform(learner.targetPlatform);
  const difficultyOrder = { Beginner: 0, Intermediate: 1, Advanced: 2 } as const;

  return [...practiceExams].sort((leftExam, rightExam) => {
    const leftTargetScore = leftExam.trackSlug === targetTrackSlug ? 0 : 1;
    const rightTargetScore = rightExam.trackSlug === targetTrackSlug ? 0 : 1;

    if (leftTargetScore !== rightTargetScore) {
      return leftTargetScore - rightTargetScore;
    }

    return difficultyOrder[leftExam.difficulty] - difficultyOrder[rightExam.difficulty];
  });
}

export async function getStudentDashboard(learner?: RegisteredLearner) {
  if (learner && isStarterLearner(learner)) {
    return {
      starterMode: true,
      metrics: buildStarterMetrics(learner),
      learningItems: buildStarterLearningItems(learner),
      recentResults: [] as ResultSummary[],
      practiceExams: buildStarterPracticeExams(learner),
      recommendations: buildStarterRecommendations(learner),
      focusCards: [
        {
          label: "Starting point",
          title: "Digital Marketing Fundamentals MM",
          description: "Build your base first so later mock-exam scores are meaningful.",
        },
        {
          label: "First exam to try",
          title: learner.targetPlatform,
          description: "Finish the starter lessons first, then take your first timed mock exam.",
        },
      ],
    };
  }

  return {
    starterMode: false,
    metrics: studentKpis,
    learningItems: studentLearningItems,
    recentResults,
    practiceExams,
    recommendations: studyRecommendations,
    focusCards: [
      {
        label: "Weakest area",
        title: "Measurement fundamentals",
        description: "Revise conversion tracking and attribution before your next retake.",
      },
      {
        label: "Best next action",
        title: "Retry Meta Media Buying",
        description: "You are only a few points away from the target score.",
      },
    ],
  };
}

export async function getHomePageData() {
  return {
    metrics: homeMetrics,
    practiceExams,
    tracks,
    courses,
    recommendations: studyRecommendations,
  };
}

export async function getSchoolAdminDashboard() {
  return {
    metrics: schoolAdminKpis,
    approvals: approvalQueue,
  };
}

export async function getPlatformDashboard() {
  return {
    metrics: platformKpis,
    organizations: organizationHealth,
    questions: questionBankOverview,
  };
}
