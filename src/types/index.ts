export type MetricTone = "primary" | "success" | "warning" | "danger" | "neutral";

export interface NavigationItem {
  href: string;
  label: string;
}

export interface Track {
  slug: string;
  title: string;
  description: string;
  courseCount: number;
  estimatedHours: number;
  focusSkills: string[];
}

export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Course {
  slug: string;
  trackSlug: string;
  relatedExamId?: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  durationHours: number;
  lessonCount: number;
  quizCount: number;
  examDurationMinutes: number;
  enrollmentCount: number;
  learningOutcomes: string[];
  modules: CourseModule[];
}

export interface MetricCard {
  label: string;
  value: string;
  helper: string;
  tone?: MetricTone;
}

export interface ProgressItem {
  title: string;
  subtitle: string;
  progress: number;
  href: string;
  status: string;
}

export interface ResultSummary {
  id: string;
  title: string;
  score: string;
  status: string;
  date: string;
}

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableRow {
  [key: string]: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  explanation: string;
  helperText?: string;
  selectionCount?: number;
  selectionMode?: "single" | "multiple";
}

export interface MockExam {
  id: string;
  provider: string;
  catalog: string;
  trackSlug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  questionCount: number;
  passingScore: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  bestFor: string;
  href: string;
}

export interface MockExamQuestion extends QuizQuestion {
  topic: string;
}

export interface StudyRecommendation {
  title: string;
  description: string;
  action: string;
  estimatedMinutes: number;
  href: string;
}

export interface CertificateRecord extends TableRow {
  certificateNo: string;
  course: string;
  status: "Issued" | "Pending Approval" | "Draft";
  issuedAt: string;
  verifier: string;
}

export interface OrganizationSummary extends TableRow {
  name: string;
  activeLearners: string;
  completionRate: string;
  pendingApprovals: string;
}

export interface RegisteredLearner {
  currentLevel: string;
  email: string;
  fullName: string;
  purpose: string;
  registeredAt: string;
  targetPlatform: string;
}
