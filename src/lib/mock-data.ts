import type {
  CertificateRecord,
  Course,
  MetricCard,
  MockExam,
  MockExamQuestion,
  OrganizationSummary,
  ProgressItem,
  QuizQuestion,
  ResultSummary,
  StudyRecommendation,
  TableColumn,
  TableRow,
  Track,
} from "@/types";
import { digitalMarketingStarterQuestionBank } from "@/lib/digitalMarketingStarterQuestionBank";
import { googleAdsDisplayQuestionBank } from "@/lib/googleAdsDisplayQuestionBank";
import { googleAdsSearchQuestionBank } from "@/lib/googleAdsSearchQuestionBank";
import { googleAdsVideoQuestionBank } from "@/lib/googleAdsVideoQuestionBank";
import { metaMediaBuyingQuestionBank } from "@/lib/metaMediaBuyingQuestionBank";
import { metaMediaPlanningQuestionBank } from "@/lib/metaMediaPlanningQuestionBank";

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/tracks", label: "Tracks" },
  { href: "/mock-exams", label: "Mock Exams" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/my-learning", label: "Study Plan" },
];

export const tracks: Track[] = [
  {
    slug: "google-ads",
    title: "Google Ads Fundamentals",
    description: "Burmese study path for search campaigns, keyword planning, bidding, and measurement.",
    courseCount: 4,
    estimatedHours: 26,
    focusSkills: ["Search campaigns", "Keyword research", "Bidding", "Conversion tracking"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Blueprint",
    description: "Prepare for official-style Meta exam topics with audience, creative, and optimization coverage.",
    courseCount: 3,
    estimatedHours: 18,
    focusSkills: ["Campaign setup", "Audience strategy", "Creative testing", "Optimization"],
  },
  {
    slug: "tiktok-ads",
    title: "TikTok Ads Academy",
    description: "Practice-ready TikTok ads learning path focused on creative strategy and performance review.",
    courseCount: 2,
    estimatedHours: 12,
    focusSkills: ["Creative strategy", "Spark ads", "Catalog ads", "Performance review"],
  },
  {
    slug: "linkedin-ads",
    title: "LinkedIn Marketing Labs",
    description: "B2B lead-generation study path for LinkedIn campaign planning and reporting.",
    courseCount: 2,
    estimatedHours: 10,
    focusSkills: ["Lead gen", "Audience targeting", "Funnel planning", "Attribution"],
  },
  {
    slug: "digital-marketing-fundamentals",
    title: "Digital Marketing Foundations",
    description: "Self-paced Burmese introduction to channels, funnels, analytics, and reporting basics.",
    courseCount: 5,
    estimatedHours: 30,
    focusSkills: ["Funnels", "Messaging", "Analytics", "Campaign planning"],
  },
];

export const courses: Course[] = [
  {
    slug: "google-ads-bootcamp-mm",
    trackSlug: "google-ads",
    relatedExamId: "google-ads-search-certification",
    title: "Google Ads Bootcamp MM",
    description: "Study the same concepts that appear in official-style Google Ads mock exams, explained in Burmese.",
    level: "Beginner",
    durationHours: 14,
    lessonCount: 28,
    quizCount: 7,
    examDurationMinutes: 120,
    enrollmentCount: 420,
    learningOutcomes: [
      "Understand account hierarchy, campaign types, and keyword intent in Burmese.",
      "Write stronger search ads and match bidding strategies to business goals.",
      "Diagnose weak areas from practice-exam results and study the right lessons next.",
    ],
    modules: [
      {
        title: "Module 1: Google Ads Overview",
        lessons: ["Platform concepts", "Account structure", "Campaign types"],
      },
      {
        title: "Module 2: Search Campaign Setup",
        lessons: ["Keyword research", "Ad groups", "Writing effective ads"],
      },
      {
        title: "Module 3: Measurement & Optimization",
        lessons: ["Conversion tracking", "Bidding basics", "Optimization workflow"],
      },
    ],
  },
  {
    slug: "meta-performance-planner",
    trackSlug: "meta-ads",
    relatedExamId: "meta-certified-media-planning-professional",
    title: "Meta Performance Planner",
    description: "Build Meta Ads exam confidence through audience, creative, and optimization practice.",
    level: "Intermediate",
    durationHours: 11,
    lessonCount: 21,
    quizCount: 6,
    examDurationMinutes: 90,
    enrollmentCount: 275,
    learningOutcomes: [
      "Match objective selection to the right funnel stage and optimization event.",
      "Recognize delivery, frequency, and creative-fatigue signals from mock-exam feedback.",
      "Turn wrong answers into a prioritized study plan before the next attempt.",
    ],
    modules: [
      {
        title: "Module 1: Objective Planning",
        lessons: ["Awareness vs performance", "Signal quality", "Budget planning"],
      },
      {
        title: "Module 2: Creative Testing",
        lessons: ["Hook writing", "Creative matrix", "Winning asset rollout"],
      },
    ],
  },
  {
    slug: "digital-marketing-fundamentals-mm",
    trackSlug: "digital-marketing-fundamentals",
    relatedExamId: "digital-marketing-fundamentals-self-check",
    title: "Digital Marketing Fundamentals MM",
    description: "Use this course to strengthen fundamentals before sitting any platform-specific mock exam.",
    level: "Beginner",
    durationHours: 16,
    lessonCount: 32,
    quizCount: 8,
    examDurationMinutes: 120,
    enrollmentCount: 610,
    learningOutcomes: [
      "Explain core funnel, messaging, and channel-planning concepts in Burmese.",
      "Understand reporting basics that appear across Google, Meta, and TikTok exam formats.",
      "Use score feedback to decide what to revise before retrying a mock exam.",
    ],
    modules: [
      {
        title: "Module 1: Marketing Foundations",
        lessons: ["Funnel overview", "Audience personas", "Messaging basics"],
      },
      {
        title: "Module 2: Channel Planning",
        lessons: ["Search", "Social", "Measurement"],
      },
      {
        title: "Module 3: Reporting",
        lessons: ["KPIs", "Dashboards", "Optimization cadence"],
      },
    ],
  },
];

type MockExamBlueprint = Omit<MockExam, "questionCount" | "href"> & {
  questionCount?: number;
  topicAreas: string[];
};

const DEFAULT_QUESTION_COUNT_PER_EXAM = 80;

const googleExamBlueprints: MockExamBlueprint[] = [
  {
    id: "google-ads-search-certification",
    provider: "Google",
    catalog: "Google Skillshop",
    trackSlug: "google-ads",
    title: "Google Ads Search Certification",
    summary: "Search Ads campaign strategy, keyword targeting, bidding, and optimization in an official-style mock format.",
    durationMinutes: 120,
    passingScore: 80,
    difficulty: "Intermediate",
    bestFor: "Learners preparing for Google Search Ads certification topics",
    topicAreas: [
      "keyword targeting",
      "match types",
      "ad rank",
      "smart bidding",
      "responsive search ads",
      "search terms analysis",
      "ad assets",
      "conversion tracking",
    ],
  },
  {
    id: "google-ads-display-certification",
    provider: "Google",
    catalog: "Google Skillshop",
    trackSlug: "google-ads",
    title: "Google Ads Display Certification",
    summary: "Google Display Network strategy, creative formats, audience targeting, and display optimization.",
    durationMinutes: 110,
    passingScore: 80,
    difficulty: "Intermediate",
    bestFor: "Marketers studying GDN banner and audience strategy",
    topicAreas: [
      "audience segments",
      "managed placements",
      "remarketing",
      "responsive display creatives",
      "viewable reach",
      "brand safety",
      "frequency control",
      "display optimization",
    ],
  },
  {
    id: "google-ads-video-certification",
    provider: "Google",
    catalog: "Google Skillshop",
    trackSlug: "google-ads",
    title: "Google Ads Video Certification",
    summary: "YouTube Ads campaign formats, audience intent, sequencing, and video measurement.",
    durationMinutes: 100,
    passingScore: 80,
    difficulty: "Intermediate",
    bestFor: "Learners preparing for YouTube and video campaign topics",
    topicAreas: [
      "video campaign formats",
      "audience intent signals",
      "video creative hooks",
      "CPV bidding",
      "video action campaigns",
      "sequence planning",
      "brand lift measurement",
      "remarketing with video viewers",
    ],
  },
  {
    id: "google-ads-shopping-certification",
    provider: "Google",
    catalog: "Google Skillshop",
    trackSlug: "google-ads",
    title: "Google Ads Shopping Certification",
    summary: "Merchant Center setup, product feeds, Shopping campaign structure, and ecommerce optimization.",
    durationMinutes: 115,
    passingScore: 80,
    difficulty: "Intermediate",
    bestFor: "Ecommerce teams studying Shopping ads and feed operations",
    topicAreas: [
      "merchant center setup",
      "product feed quality",
      "product groups",
      "shopping bidding",
      "pricing competitiveness",
      "performance max retail signals",
      "remarketing lists",
      "shopping performance analysis",
    ],
  },
  {
    id: "google-ads-apps-certification",
    provider: "Google",
    catalog: "Google Skillshop",
    trackSlug: "google-ads",
    title: "Google Ads Apps Certification",
    summary: "Mobile app install and in-app action promotion with measurement and optimization best practices.",
    durationMinutes: 100,
    passingScore: 78,
    difficulty: "Intermediate",
    bestFor: "Growth teams promoting app installs and in-app engagement",
    topicAreas: [
      "app install campaigns",
      "in-app action optimization",
      "SDK measurement",
      "deep linking",
      "audience expansion",
      "creative asset groups",
      "value-based bidding",
      "retention signals",
    ],
  },
  {
    id: "google-ads-measurement-certification",
    provider: "Google",
    catalog: "Google Skillshop",
    trackSlug: "google-ads",
    title: "Google Ads Measurement Certification",
    summary: "Conversion tracking, attribution, analytics, and measurement design for better optimization decisions.",
    durationMinutes: 120,
    passingScore: 82,
    difficulty: "Advanced",
    bestFor: "Learners focused on attribution, reporting, and analytics quality",
    topicAreas: [
      "conversion actions",
      "attribution models",
      "GA4 integration",
      "enhanced conversions",
      "offline conversion imports",
      "value rules",
      "cross-device measurement",
      "incrementality thinking",
    ],
  },
  {
    id: "google-ads-creative-certification",
    provider: "Google",
    catalog: "Google Skillshop",
    trackSlug: "google-ads",
    title: "Google Ads Creative Certification",
    summary: "Creative strategy, message-market fit, experimentation, and performance-focused ad assets.",
    durationMinutes: 90,
    passingScore: 78,
    difficulty: "Intermediate",
    bestFor: "Teams improving ad creative strategy for Google surfaces",
    topicAreas: [
      "message hierarchy",
      "creative variety",
      "audience relevance",
      "call to action design",
      "landing page alignment",
      "creative experiments",
      "fatigue signals",
      "performance storytelling",
    ],
  },
  {
    id: "google-ads-ai-powered-performance-ads-certification",
    provider: "Google",
    catalog: "Google Skillshop",
    trackSlug: "google-ads",
    title: "Google Ads AI-Powered Performance Ads Certification",
    summary: "Performance Max, automation, asset groups, audience signals, and AI-guided bidding strategy.",
    durationMinutes: 120,
    passingScore: 82,
    difficulty: "Advanced",
    bestFor: "Marketers preparing for automation-first Google Ads workflows",
    topicAreas: [
      "performance max setup",
      "asset groups",
      "audience signals",
      "smart bidding value signals",
      "creative combinations",
      "insights interpretation",
      "feed quality for automation",
      "budget pacing with AI",
    ],
  },
];

const metaExamBlueprints: MockExamBlueprint[] = [
  {
    id: "meta-certified-digital-marketing-associate",
    provider: "Meta",
    catalog: "Meta Blueprint",
    trackSlug: "meta-ads",
    title: "Meta Certified Digital Marketing Associate",
    summary: "Beginner-friendly Meta Ads basics, ad account setup, campaign structure, and simple reporting.",
    durationMinutes: 90,
    passingScore: 75,
    difficulty: "Beginner",
    bestFor: "New learners starting with Meta Ads fundamentals",
    topicAreas: [
      "ad account basics",
      "campaign structure",
      "pixels and events",
      "placements",
      "creative basics",
      "budget controls",
      "reporting basics",
      "policy awareness",
    ],
  },
  {
    id: "meta-certified-media-buying-professional",
    provider: "Meta",
    catalog: "Meta Blueprint",
    trackSlug: "meta-ads",
    title: "Meta Certified Media Buying Professional",
    summary: "Campaign setup, optimization, delivery analysis, and media buying strategy for performance advertisers.",
    durationMinutes: 105,
    passingScore: 82,
    difficulty: "Intermediate",
    bestFor: "Performance marketers preparing for hands-on Meta buying topics",
    topicAreas: [
      "objective selection",
      "audience strategy",
      "placements optimization",
      "budget and bidding",
      "learning phase management",
      "A/B testing",
      "reporting and diagnostics",
      "performance troubleshooting",
    ],
  },
  {
    id: "meta-certified-media-planning-professional",
    provider: "Meta",
    catalog: "Meta Blueprint",
    trackSlug: "meta-ads",
    title: "Meta Certified Media Planning Professional",
    summary: "Budget allocation, media planning, audience development, and forecast thinking across the funnel.",
    durationMinutes: 105,
    passingScore: 82,
    difficulty: "Advanced",
    bestFor: "Strategists building media plans and budget frameworks",
    topicAreas: [
      "funnel planning",
      "reach vs conversion planning",
      "budget allocation",
      "audience research",
      "frequency strategy",
      "forecast logic",
      "planning KPIs",
      "cross-campaign pacing",
    ],
  },
  {
    id: "meta-certified-marketing-science-professional",
    provider: "Meta",
    catalog: "Meta Blueprint",
    trackSlug: "meta-ads",
    title: "Meta Certified Marketing Science Professional",
    summary: "Measurement, attribution, experiments, and analytics interpretation for Meta performance analysis.",
    durationMinutes: 120,
    passingScore: 84,
    difficulty: "Advanced",
    bestFor: "Analysts and strategists studying Meta measurement deeply",
    topicAreas: [
      "attribution design",
      "lift studies",
      "experiment setup",
      "event quality",
      "conversion reporting",
      "incrementality",
      "data interpretation",
      "measurement governance",
    ],
  },
  {
    id: "meta-certified-creative-strategy-professional",
    provider: "Meta",
    catalog: "Meta Blueprint",
    trackSlug: "meta-ads",
    title: "Meta Certified Creative Strategy Professional",
    summary: "Ad creative performance strategy, hook design, fatigue management, and test planning for Meta placements.",
    durationMinutes: 100,
    passingScore: 80,
    difficulty: "Intermediate",
    bestFor: "Creative strategists focused on performance outcomes",
    topicAreas: [
      "hook creation",
      "creative formats",
      "audience-message fit",
      "creative testing matrices",
      "fatigue management",
      "UGC-style performance",
      "briefing production teams",
      "creative reporting",
    ],
  },
];

const fundamentalsExamBlueprints: MockExamBlueprint[] = [
  {
    id: "digital-marketing-fundamentals-self-check",
    provider: "SkillUp MM",
    catalog: "Starter Self-Assessment",
    trackSlug: "digital-marketing-fundamentals",
    title: "Digital Marketing Fundamentals Self-Check",
    summary: "Beginner-friendly self-check for learners who are just starting digital marketing and want to assess their core understanding.",
    durationMinutes: 55,
    questionCount: 50,
    passingScore: 70,
    difficulty: "Beginner",
    bestFor: "New learners who want to test their digital marketing basics before choosing a track",
    topicAreas: [
      "digital marketing basics",
      "marketing funnel",
      "SEO and websites",
      "content marketing",
      "social media marketing",
      "PPC and analytics",
    ],
  },
];

const mockExamBlueprints = [...googleExamBlueprints, ...metaExamBlueprints, ...fundamentalsExamBlueprints];

export const practiceExams: MockExam[] = mockExamBlueprints.map((exam) => ({
  ...exam,
  questionCount: exam.questionCount ?? DEFAULT_QUESTION_COUNT_PER_EXAM,
  href: `/exam/${exam.id}`,
}));

export const googlePracticeExams = practiceExams.filter((exam) => exam.catalog === "Google Skillshop");
export const metaPracticeExams = practiceExams.filter((exam) => exam.catalog === "Meta Blueprint");
export const starterPracticeExams = practiceExams.filter((exam) => exam.catalog === "Starter Self-Assessment");

export const homeMetrics: MetricCard[] = [
  {
    label: "Official-style mock exams",
    value: `${practiceExams.length}`,
    helper: "Google Skillshop + Meta Blueprint exam formats",
    tone: "primary",
  },
  {
    label: "Practice questions",
    value: practiceExams.reduce((sum, exam) => sum + exam.questionCount, 0).toLocaleString("en-US"),
    helper: "Mixed question banks for certification prep and beginner self-checks",
    tone: "success",
  },
  { label: "Study tracks", value: "5", helper: "Structured lessons for weak-topic recovery", tone: "neutral" },
];

export const learnerJourneySteps = [
  "Register yourself with email and choose the Google or Meta certification path you want to practice.",
  "Take an official-style mock exam with 80 questions, timer, and question navigation.",
  "See your score, weak topics, and the sections where you are below the passing target.",
  "Follow the recommended Burmese lessons, then retry the same certification mock when you are ready.",
];

interface MockQuestionContext {
  audience: string;
  blueprint: MockExamBlueprint;
  cue: string;
  focusMetric: string;
  goal: string;
  relatedTopic: string;
  reportView: string;
  reviewWindow: string;
  studyAction: string;
  supportSignal: string;
  topic: string;
}

interface MockQuestionArchetype {
  getExplanation: (context: MockQuestionContext) => string;
  getOptions: (context: MockQuestionContext) => string[];
  getQuestion: (context: MockQuestionContext) => string;
}

const mockQuestionGoals = [
  "qualified leads",
  "high-intent purchases",
  "cost-efficient conversions",
  "stronger remarketing performance",
  "better lead quality",
  "stable scale without wasted spend",
  "higher conversion value",
  "cleaner reporting for optimization",
];

const mockQuestionSignals = [
  "first-party conversion signal quality",
  "search or audience intent data",
  "creative-to-landing-page alignment",
  "change history and experiment notes",
  "optimization-event readiness",
  "bidding signal density",
  "asset or feed coverage",
  "analytics tagging accuracy",
];

const mockQuestionMetrics = [
  "cost per qualified result",
  "conversion rate trend",
  "impression-to-click quality",
  "post-click engagement signal",
  "conversion value efficiency",
  "frequency and fatigue signal",
  "coverage of eligible inventory",
  "week-over-week stability",
];

const mockQuestionCues = [
  "results dropped after several account edits",
  "traffic volume increased but quality fell",
  "the learning signal is too thin to trust early results",
  "reporting shows mixed signals across placements",
  "stakeholders want scale without losing efficiency",
  "the campaign is spending but downstream quality is weak",
  "creative refreshes did not improve conversion quality",
  "the account has enough data for structured testing",
];

const mockQuestionReportViews = [
  "change history with performance trend",
  "segment-level breakdown report",
  "search term or audience breakdown",
  "asset-level diagnostic report",
  "conversion-path reporting",
  "quality-score or relevance view",
  "time-lag and attribution view",
  "budget pacing dashboard",
];

const mockQuestionReviewWindows = [
  "the first 24 hours",
  "the first 3 days",
  "one learning cycle",
  "a weekly reporting window",
  "the next optimization round",
  "the next budget reset",
  "the next creative review",
  "the next reporting cadence",
];

const mockQuestionStudyActions = [
  "map the business goal to the optimization signal first",
  "review the report before touching settings",
  "compare intent quality before expanding reach",
  "clean up measurement inputs before scaling",
  "validate message-to-offer alignment before judging the tactic",
  "stabilize the signal before making budget jumps",
  "document the test hypothesis and success metric",
  "check downstream conversion quality before declaring a winner",
];

const mockQuestionAudiences = [
  "an entry-level learner",
  "a performance marketer",
  "a growth team lead",
  "an agency account manager",
  "a reporting analyst",
  "a media planner",
  "an ecommerce operator",
  "a creative strategist",
];

const mockQuestionArchetypes: MockQuestionArchetype[] = [
  {
    getQuestion: ({ blueprint, topic, goal }) =>
      `${blueprint.title} practice scenario: a learner wants ${goal} while improving ${topic}. Which answer shows the strongest best-practice decision?`,
    getOptions: ({ topic, goal, supportSignal, reportView, relatedTopic }) => [
      `${topic} ကို ${goal} နဲ့ချိတ်ပြီး ${supportSignal} နဲ့ ${reportView} ကိုတူတူစစ်ပြီးဆုံးဖြတ်ခြင်း`,
      `${topic} ကိုမစစ်ဘဲ ${relatedTopic} budget ပဲတိုးကြည့်ခြင်း`,
      `${goal} ရဖို့ cheapest metric တစ်ခုတည်းကိုပဲရွေးခြင်း`,
      `${reportView} မကြည့်ဘဲ random setting changes လုပ်ခြင်း`,
    ],
    getExplanation: ({ topic, goal, supportSignal, reportView }) =>
      `${topic} ကို ${goal} နဲ့ချိတ်ပြီး ${supportSignal} နဲ့ ${reportView} ကိုပြန်စစ်တာက exam best practice ဖြစ်ပါတယ်။`,
  },
  {
    getQuestion: ({ blueprint, topic, cue }) =>
      `${blueprint.provider} exam case: ${topic} performance မှာ ${cue}. First diagnostic step အဖြစ် ဘာလုပ်သင့်လဲ?`,
    getOptions: ({ topic, reportView, focusMetric, relatedTopic }) => [
      `${topic} နဲ့ဆက်စပ်တဲ့ ${reportView} ကိုဖွင့်ပြီး ${focusMetric} ဘယ်နေရာမှာကျနေလဲ စစ်ခြင်း`,
      `${relatedTopic} ကိုအရင်ပြောင်းပြီး ${topic} report ကိုနောက်မှကြည့်ခြင်း`,
      `diagnostic မလုပ်ဘဲ broad scale-up လုပ်ခြင်း`,
      `stakeholder pressure ကြောင့် manual override ချက်ချင်းလုပ်ခြင်း`,
    ],
    getExplanation: ({ topic, reportView, focusMetric }) =>
      `${topic} ကျသွားတဲ့အခါ ${reportView} ထဲမှာ ${focusMetric} ကိုအရင်ဖတ်တာက အမှန်ဆုံး first diagnostic step ဖြစ်ပါတယ်။`,
  },
  {
    getQuestion: ({ blueprint, topic, focusMetric, goal }) =>
      `${blueprint.title} မှာ ${topic} နဲ့ပတ်သက်တဲ့ ${focusMetric} မကောင်းနေတယ်ဆိုရင် ${goal} အတွက် အမှန်ဆုံး interpretation က ဘာလဲ?`,
    getOptions: ({ topic, focusMetric, supportSignal, goal }) => [
      `${focusMetric} ကို ${goal} နဲ့ချိတ်ပြီး ${supportSignal} ပြည့်လားမပြည့်လား အရင်သဘောပေါက်ရမယ်`,
      `${focusMetric} မကောင်းရင် account တစ်ခုလုံးကို reset လုပ်ရမယ်`,
      `${goal} ကိုမကြည့်ဘဲ impression ပိုများတာနဲ့ အောင်မြင်တယ်လို့ယူဆခြင်း`,
      `${topic} data မပြည့်သေးခင် final conclusion ဆုံးဖြတ်ခြင်း`,
    ],
    getExplanation: ({ focusMetric, goal, supportSignal }) =>
      `${focusMetric} ကို ${goal} နဲ့ချိတ်ပြီး ${supportSignal} ပြည့်/မပြည့်ကိုတူတူဖတ်ရတာက exam interpretation best practice ပါ။`,
  },
  {
    getQuestion: ({ blueprint, topic, relatedTopic, audience }) =>
      `${blueprint.provider} certification prep မှာ ${audience} တစ်ယောက်က ${topic} နဲ့ ${relatedTopic} ကြား priority မသိဘူး။ ဘယ် approach ကမှန်လဲ?`,
    getOptions: ({ topic, relatedTopic, goal, studyAction }) => [
      `${goal} အတွက် direct impact ပိုရှိတဲ့ ${topic} ကိုရွေးပြီး ${studyAction}`,
      `${relatedTopic} ပိုစိတ်ဝင်စားလို့ data မကြည့်ဘဲအဲဒါကိုရွေးခြင်း`,
      `priority မသတ်မှတ်ဘဲ task နှစ်ခုလုံးကို တစ်ပြိုင်တည်းလှုပ်ခြင်း`,
      `report review မလုပ်ဘဲ team opinion နဲ့ပဲဆုံးဖြတ်ခြင်း`,
    ],
    getExplanation: ({ topic, goal, studyAction }) =>
      `${goal} အပေါ် direct impact ပေးနိုင်တဲ့ ${topic} ကိုအရင်ရွေးပြီး ${studyAction} လုပ်တာက exam-ready prioritization ဖြစ်ပါတယ်။`,
  },
  {
    getQuestion: ({ blueprint, topic, reviewWindow }) =>
      `${blueprint.title} mock question: ${topic} ကို ${reviewWindow} အတွင်း optimize လုပ်မယ်ဆိုရင် safest testing approach က ဘာလဲ?`,
    getOptions: ({ topic, focusMetric, reviewWindow }) => [
      `${reviewWindow} အတွင်း ${focusMetric} တစ်ခုသတ်မှတ်ပြီး ${topic} မှာ change တစ်ခုချင်းစီကို test လုပ်ခြင်း`,
      `${topic} settings အများကြီးကိုတစ်ခါတည်းပြောင်းပြီး winner ခန့်မှန်းခြင်း`,
      `${focusMetric} မသတ်မှတ်ဘဲ team preference အလိုက် test လုပ်ခြင်း`,
      `${reviewWindow} မစောင့်ဘဲ half-day data နဲ့ဆုံးဖြတ်ခြင်း`,
    ],
    getExplanation: ({ topic, focusMetric, reviewWindow }) =>
      `${topic} ကို ${reviewWindow} အတွင်း test လုပ်တဲ့အခါ ${focusMetric} တစ်ခုသတ်မှတ်ပြီး isolated change စမ်းတာက strongest answer ဖြစ်ပါတယ်။`,
  },
  {
    getQuestion: ({ blueprint, topic }) =>
      `${blueprint.provider} ads scenario: ${topic} ကို automation-friendly ဖြစ်စေဖို့ ဘယ် signal practice ကမှန်သလဲ?`,
    getOptions: ({ topic, supportSignal, relatedTopic }) => [
      `${topic} အတွက် ${supportSignal} ကိုရှင်းလင်းအောင်လုပ်ပြီး ${relatedTopic} report နဲ့ cross-check လုပ်ခြင်း`,
      `${supportSignal} မရှိသေးခင် budget ကိုအရင်တိုးခြင်း`,
      `automation လုပ်မယ်ဆိုပြီး measurement cleanup မလိုဘူးလို့ယူဆခြင်း`,
      `${topic} နဲ့မဆိုင်တဲ့ vanity metric ကို optimization signal လုပ်ခြင်း`,
    ],
    getExplanation: ({ topic, supportSignal, relatedTopic }) =>
      `${topic} automation ကောင်းစေဖို့ ${supportSignal} ကိုရှင်းလင်းပြီး ${relatedTopic} report နဲ့ cross-check လုပ်ရပါတယ်။`,
  },
  {
    getQuestion: ({ blueprint, topic, audience }) =>
      `${blueprint.title} results review မှာ ${audience} တစ်ယောက်က ${topic} status update ပေးရမယ်။ ဘယ် reporting action ကအကောင်းဆုံးလဲ?`,
    getOptions: ({ topic, reportView, focusMetric, goal }) => [
      `${reportView} ကိုသုံးပြီး ${topic} က ${goal} အပေါ်ဘယ်လိုသက်ရောက်လဲနဲ့ ${focusMetric} ကိုတင်ပြခြင်း`,
      `${topic} အတွက် click volume တစ်ခုပဲထုတ်ပြီး report ပိတ်ခြင်း`,
      `context မပါဘဲ raw data dump ပေးခြင်း`,
      `goal မပါဘဲ “performance better” လို့ပဲပြောခြင်း`,
    ],
    getExplanation: ({ topic, reportView, goal, focusMetric }) =>
      `${topic} reporting က ${reportView} နဲ့ ${goal} အပေါ်သက်ရောက်မှု၊ ${focusMetric} ကိုချိတ်ပြသရတာပါ။`,
  },
  {
    getQuestion: ({ blueprint, topic, cue }) =>
      `${blueprint.provider} official-style prep မှာ ${topic} နဲ့ပတ်သက်ပြီး "${cue}" လို့မြင်ရတဲ့အခါ avoid လုပ်သင့်တဲ့ mistake က ဘာလဲ?`,
    getOptions: ({ topic, focusMetric }) => [
      `${focusMetric} မပြည့်သေးခင် premature conclusion ချခြင်း`,
      `${topic} change log ကိုပြန်ဖတ်ခြင်း`,
      `stakeholder goal ကိုပြန်အတည်ပြုခြင်း`,
      `signal quality ကိုပြန်စစ်ခြင်း`,
    ],
    getExplanation: ({ focusMetric }) =>
      `Exam context မှာ common mistake က ${focusMetric} မပြည့်သေးခင် conclusion အမြန်ချလိုက်တာပါ။`,
  },
  {
    getQuestion: ({ blueprint, topic }) =>
      `${blueprint.title} retake မလုပ်ခင် ${topic} weak area ကိုပြင်မယ်ဆိုရင် best next step က ဘာလဲ?`,
    getOptions: ({ topic, studyAction, reviewWindow, relatedTopic }) => [
      `${topic} ကို ${studyAction} လုပ်ပြီး ${reviewWindow} အတွင်း re-check လုပ်ခြင်း`,
      `${relatedTopic} ပဲဖတ်ပြီး ${topic} ကိုမပြန်သုံးသပ်ခြင်း`,
      `retake အရင်ဝင်ပြီး wrong answers ကိုနောက်မှကြည့်ခြင်း`,
      `summary တစ်ခုပဲဖတ်ပြီး hands-on review မလုပ်ခြင်း`,
    ],
    getExplanation: ({ topic, studyAction, reviewWindow }) =>
      `${topic} weak area ကို retake မတိုင်ခင် ${studyAction} လုပ်ပြီး ${reviewWindow} အတွင်းပြန်စစ်တာက best next step ဖြစ်ပါတယ်။`,
  },
  {
    getQuestion: ({ blueprint, topic }) =>
      `${blueprint.provider} certification readiness ကို ${topic} ဘက်က prove လုပ်ချင်တယ်ဆိုရင် ဘယ် evidence pattern က အကောင်းဆုံးလဲ?`,
    getOptions: ({ topic, goal, supportSignal, reportView }) => [
      `${topic} က ${goal} ကိုထောက်ပံ့ကြောင်း ${supportSignal} နဲ့ ${reportView} နှစ်ခုလုံးကပြသနိုင်ခြင်း`,
      `${goal} မရသေးပေမယ့် reach volume တက်တာတစ်ခုတည်းကိုပြခြင်း`,
      `${topic} quality မသိဘဲ spend တိုးလာတာကို success လို့ယူဆခြင်း`,
      `evidence မပါဘဲ “algorithm will learn” လို့ပဲပြောခြင်း`,
    ],
    getExplanation: ({ topic, goal, supportSignal, reportView }) =>
      `${topic} readiness ကို prove လုပ်ဖို့ ${goal} အပေါ်သက်ရောက်မှုကို ${supportSignal} နဲ့ ${reportView} နှစ်ဖက်လုံးကပံ့ပိုးပေးရပါတယ်။`,
  },
];

export const studentKpis: MetricCard[] = [
  { label: "Mock exams taken", value: "6", helper: "Across Google Skillshop and Meta Blueprint", tone: "primary" },
  { label: "Average score", value: "78%", helper: "Up 9 points from last month", tone: "success" },
  { label: "Closest to passing", value: "79%", helper: "Meta Media Buying mock is 3 points short", tone: "warning" },
  { label: "Needs study", value: "Measurement", helper: "Most-missed topic in Google Search practice", tone: "danger" },
];

export const studentLearningItems: ProgressItem[] = [
  {
    title: "Google Ads Bootcamp MM",
    subtitle: "Study before retrying Google Ads Search Certification",
    progress: 68,
    href: "/courses/google-ads-bootcamp-mm",
    status: "Focus on keyword match types and conversion tracking",
  },
  {
    title: "Meta Performance Planner",
    subtitle: "Recommended after your latest Meta Certified Media Buying Professional mock",
    progress: 41,
    href: "/courses/meta-performance-planner",
    status: "Review learning phase, event volume, and budget allocation",
  },
  {
    title: "Digital Marketing Fundamentals MM",
    subtitle: "Foundation track to improve cross-platform exam confidence",
    progress: 83,
    href: "/courses/digital-marketing-fundamentals-mm",
    status: "Revise KPIs, funnel mapping, and reporting cadence",
  },
];

export const studyRecommendations: StudyRecommendation[] = [
  {
    title: "Revisit conversion tracking before your next Google attempt",
    description: "You lost marks on setup, attribution windows, and lead-vs-purchase signal quality.",
    action: "Study Module 3 lessons 1-2, then retake Google Ads Search Certification mock.",
    estimatedMinutes: 35,
    href: "/courses/google-ads-bootcamp-mm",
  },
  {
    title: "Strengthen Meta learning-phase decisions",
    description: "Your Meta attempt showed weak accuracy around objective-event fit and budget signal density.",
    action: "Review Objective Planning and then retake Meta Certified Media Buying Professional mock.",
    estimatedMinutes: 25,
    href: "/courses/meta-performance-planner",
  },
  {
    title: "Use fundamentals to raise every platform score",
    description: "Weak KPI interpretation is hurting both your Google and Meta practice results.",
    action: "Finish the Reporting module and then sit the Foundations Check again.",
    estimatedMinutes: 30,
    href: "/courses/digital-marketing-fundamentals-mm",
  },
];

export const recentResults: ResultSummary[] = [
  {
    id: "google-ads-search-certification",
    title: "Google Ads Search Certification",
    score: "74%",
    status: "Ready for targeted revision",
    date: "2026-03-08",
  },
  {
    id: "meta-certified-media-buying-professional",
    title: "Meta Certified Media Buying Professional",
    score: "79%",
    status: "Almost exam-ready",
    date: "2026-03-05",
  },
  {
    id: "google-ads-measurement-certification",
    title: "Google Ads Measurement Certification",
    score: "88%",
    status: "Strong measurement readiness",
    date: "2026-02-27",
  },
];

export const resultHighlights: MetricCard[] = [
  { label: "Latest mock score", value: "74%", helper: "Google Ads Search Certification", tone: "warning" },
  { label: "Passing target", value: "80%", helper: "You are 6 points away", tone: "primary" },
  { label: "Best section", value: "Ad copy", helper: "88% accuracy", tone: "success" },
  { label: "Weakest section", value: "Measurement", helper: "61% accuracy", tone: "danger" },
];

export const resultBreakdown: TableRow[] = [
  {
    area: "Keyword strategy",
    score: "78%",
    benchmark: "80%",
    nextStep: "Review match types and search intent mapping",
  },
  {
    area: "Ad copywriting",
    score: "88%",
    benchmark: "80%",
    nextStep: "Maintain; use as a confidence section on retake",
  },
  {
    area: "Bidding & budgets",
    score: "72%",
    benchmark: "80%",
    nextStep: "Practice automated vs manual bidding use cases",
  },
  {
    area: "Measurement",
    score: "61%",
    benchmark: "80%",
    nextStep: "Study conversion tracking and attribution basics first",
  },
];

export const resultBreakdownColumns: TableColumn[] = [
  { key: "area", label: "Topic" },
  { key: "score", label: "Your score" },
  { key: "benchmark", label: "Target" },
  { key: "nextStep", label: "Study next" },
];

export const registerBenefits = [
  {
    title: "Register yourself",
    description: "No school invite needed. Create your account and start practicing immediately.",
  },
  {
    title: "Take official-style mocks",
    description: "Timed exam experience with question navigation and instant scoring.",
  },
  {
    title: "Know what to study next",
    description: "Every result includes weak-topic analysis and Burmese lesson recommendations.",
  },
];

export const certificates: CertificateRecord[] = [
  {
    certificateNo: "READINESS-2026-00128",
    course: "Google Ads Measurement Certification",
    status: "Issued",
    issuedAt: "2026-03-01",
    verifier: "Strong measurement readiness",
  },
  {
    certificateNo: "READINESS-2026-00144",
    course: "Meta Certified Media Buying Professional",
    status: "Draft",
    issuedAt: "Retry recommended",
    verifier: "Need 3 more points",
  },
];

export const lessonResources = [
  "Myanmar transcript PDF",
  "Practice worksheet for weak topics",
  "Answer explanation sheet",
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "QZ-101",
    question: "Google Ads မှာ CTR အဓိပ္ပါယ်က ဘာလဲ?",
    options: ["Click Through Rate", "Cost Through Rate", "Campaign Target Reach", "Creative Test Result"],
    explanation: "CTR က impression တစ်ရာမှာ click ဘယ်နှစ်ချက်ရသလဲဆိုတာကို ပြတဲ့ metric ပါ။",
  },
  {
    id: "QZ-102",
    question: "Meta Ads မှာ learning phase ကြာနေလို့ စစ်သင့်တဲ့ အချက်က ဘာလဲ?",
    options: ["Conversion signal volume", "Logo color", "Thumbnail size only", "Profile bio"],
    explanation: "Optimization event နဲ့ signal volume မလုံလောက်ရင် learning phase က မပြီးနိုင်ပါဘူး။",
  },
];

export const examNavigator = Array.from({ length: 12 }, (_, index) => ({
  label: `Q${index + 1}`,
  status: index < 7 ? "Answered" : index === 7 ? "Marked" : "Pending",
}));

export const platformKpis: MetricCard[] = [
  { label: "Organizations", value: "14", helper: "8 active school admins", tone: "primary" },
  { label: "Active learners", value: "1,240", helper: "Monthly active", tone: "success" },
  { label: "Question bank", value: "1,040", helper: "13 exam paths x 80 questions", tone: "neutral" },
  { label: "Approval backlog", value: "21", helper: "Cross-school review queue", tone: "warning" },
];

export const schoolAdminKpis: MetricCard[] = [
  { label: "Active learners", value: "186", helper: "Across 7 live batches", tone: "primary" },
  { label: "Exam pass rate", value: "78%", helper: "Last 30 days", tone: "success" },
  { label: "Pending approvals", value: "12", helper: "Needs reviewer action", tone: "warning" },
  { label: "Certificates issued", value: "94", helper: "Quarter to date", tone: "neutral" },
];

export const approvalColumns: TableColumn[] = [
  { key: "learner", label: "Learner" },
  { key: "course", label: "Course" },
  { key: "batch", label: "Batch" },
  { key: "score", label: "Score" },
  { key: "status", label: "Status" },
];

export const approvalQueue: TableRow[] = [
  {
    learner: "မဇင်မာဦး",
    course: "Google Ads Bootcamp MM",
    batch: "YMI 2026-A",
    score: "84%",
    status: "Needs school approval",
  },
  {
    learner: "ကိုဟိန်းခန့်",
    course: "Digital Marketing Fundamentals MM",
    batch: "Mandalay Growth Lab",
    score: "89%",
    status: "Ready for certificate issue",
  },
  {
    learner: "မဝတ်ရည်",
    course: "Meta Performance Planner",
    batch: "Yangon Performance Batch",
    score: "Manual review",
    status: "Short-answer review pending",
  },
];

export const studentColumns: TableColumn[] = [
  { key: "name", label: "Learner" },
  { key: "batch", label: "Batch" },
  { key: "courses", label: "Assigned courses" },
  { key: "progress", label: "Progress" },
  { key: "status", label: "Status" },
];

export const schoolStudents: TableRow[] = [
  {
    name: "မဇင်မာဦး",
    batch: "YMI 2026-A",
    courses: "3 active",
    progress: "68%",
    status: "Exam eligible soon",
  },
  {
    name: "ကိုဟိန်းခန့်",
    batch: "YMI 2026-B",
    courses: "2 active",
    progress: "92%",
    status: "Certificate pending",
  },
  {
    name: "မစုစု",
    batch: "YMI 2026-A",
    courses: "1 active",
    progress: "34%",
    status: "Needs follow-up",
  },
];

export const batchColumns: TableColumn[] = [
  { key: "batch", label: "Batch" },
  { key: "learners", label: "Learners" },
  { key: "assignedCourses", label: "Assigned courses" },
  { key: "passRate", label: "Pass rate" },
  { key: "status", label: "Status" },
];

export const schoolBatches: TableRow[] = [
  {
    batch: "YMI 2026-A",
    learners: "48",
    assignedCourses: "Google Ads, Fundamentals",
    passRate: "74%",
    status: "In progress",
  },
  {
    batch: "YMI 2026-B",
    learners: "36",
    assignedCourses: "Meta, Fundamentals",
    passRate: "81%",
    status: "Exam window open",
  },
];

export const courseAssignmentColumns: TableColumn[] = [
  { key: "course", label: "Course" },
  { key: "target", label: "Assigned to" },
  { key: "owner", label: "Owner" },
  { key: "window", label: "Exam window" },
  { key: "status", label: "Status" },
];

export const courseAssignments: TableRow[] = [
  {
    course: "Google Ads Bootcamp MM",
    target: "YMI 2026-A",
    owner: "U Min Htet",
    window: "Mar 12 - Mar 18",
    status: "Live",
  },
  {
    course: "Digital Marketing Fundamentals MM",
    target: "All new intakes",
    owner: "Platform Content Team",
    window: "Rolling",
    status: "Always available",
  },
];

export const attemptColumns: TableColumn[] = [
  { key: "learner", label: "Learner" },
  { key: "exam", label: "Exam" },
  { key: "submittedAt", label: "Submitted" },
  { key: "score", label: "Score" },
  { key: "flag", label: "Review" },
];

export const attemptRows: TableRow[] = [
  {
    learner: "ကိုဟိန်းခန့်",
    exam: "Digital Marketing Final Exam",
    submittedAt: "2026-03-07 10:42",
    score: "89%",
    flag: "Clean",
  },
  {
    learner: "မဝတ်ရည်",
    exam: "Meta Performance Planner Final",
    submittedAt: "2026-03-06 14:12",
    score: "Manual",
    flag: "Short-answer review",
  },
];

export const certificateColumns: TableColumn[] = [
  { key: "certificateNo", label: "Certificate No" },
  { key: "course", label: "Course" },
  { key: "status", label: "Status" },
  { key: "issuedAt", label: "Issued / Queue" },
  { key: "verifier", label: "Verification" },
];

export const organizationColumns: TableColumn[] = [
  { key: "name", label: "Organization" },
  { key: "activeLearners", label: "Active learners" },
  { key: "completionRate", label: "Completion rate" },
  { key: "pendingApprovals", label: "Pending approvals" },
];

export const organizationHealth: OrganizationSummary[] = [
  {
    name: "Yangon Marketing Institute",
    activeLearners: "186",
    completionRate: "73%",
    pendingApprovals: "6",
  },
  {
    name: "Mandalay Growth Lab",
    activeLearners: "124",
    completionRate: "68%",
    pendingApprovals: "3",
  },
  {
    name: "Digital Skills Academy",
    activeLearners: "92",
    completionRate: "81%",
    pendingApprovals: "1",
  },
];

export const adminUserColumns: TableColumn[] = [
  { key: "name", label: "User" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "organization", label: "Organization" },
  { key: "status", label: "Status" },
];

export const adminUsers: TableRow[] = [
  {
    name: "ကိုမင်းထက်",
    email: "admin@ymi.demo",
    role: "School Admin",
    organization: "Yangon Marketing Institute",
    status: "Active",
  },
  {
    name: "မချိုသက်",
    email: "reviewer@skillup-mm.demo",
    role: "Reviewer",
    organization: "SkillUp MM",
    status: "On duty",
  },
  {
    name: "Content Team",
    email: "content@skillup-mm.demo",
    role: "Instructor",
    organization: "SkillUp MM",
    status: "Publishing",
  },
];

export const globalCourseColumns: TableColumn[] = [
  { key: "title", label: "Course" },
  { key: "track", label: "Track" },
  { key: "level", label: "Level" },
  { key: "orgs", label: "Assigned orgs" },
  { key: "status", label: "Status" },
];

export const globalCourses: TableRow[] = courses.map((course) => ({
  title: course.title,
  track: tracks.find((track) => track.slug === course.trackSlug)?.title ?? course.trackSlug,
  level: course.level,
  orgs: course.slug === "digital-marketing-fundamentals-mm" ? "14" : "9",
  status: "Published",
}));

export const questionBankOverview = [
  { label: "MCQ", value: "1,040 questions" },
  { label: "Multi-select", value: "Planned next phase" },
  { label: "True / False", value: "Planned next phase" },
  { label: "Short answer", value: "Not enabled in MVP" },
];

export const reportColumns: TableColumn[] = [
  { key: "track", label: "Track" },
  { key: "enrollments", label: "Enrollments" },
  { key: "completion", label: "Completion" },
  { key: "averageScore", label: "Avg score" },
  { key: "risk", label: "Risk signal" },
];

export const reportRows: TableRow[] = [
  {
    track: "Google Ads",
    enrollments: "412",
    completion: "71%",
    averageScore: "82%",
    risk: "Keyword strategy lesson drop-off",
  },
  {
    track: "Meta Ads",
    enrollments: "286",
    completion: "66%",
    averageScore: "78%",
    risk: "Creative fatigue questions hard",
  },
  {
    track: "Foundations",
    enrollments: "542",
    completion: "80%",
    averageScore: "84%",
    risk: "Healthy",
  },
];

export const platformRoadmap = [
  "Phase 1: Learner self-registration, official-style mocks, and score-driven study plans.",
  "Phase 2: Rich analytics by topic, more platform tracks, and personal progress history.",
  "Phase 3: Adaptive mock exam generation and smarter revision recommendations.",
];

export function getTrackBySlug(slug: string) {
  return tracks.find((track) => track.slug === slug);
}

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getMockExamById(id: string) {
  return practiceExams.find((exam) => exam.id === id);
}

function getMockExamBlueprintById(id: string) {
  return mockExamBlueprints.find((exam) => exam.id === id);
}

function rotateOptions(options: string[], offset: number) {
  const normalized = offset % options.length;
  return [...options.slice(normalized), ...options.slice(0, normalized)];
}

function normalizeQuestionKey(question: string) {
  return question.replaceAll(/\s+/g, " ").trim().toLowerCase();
}

function buildMockQuestionContext(blueprint: MockExamBlueprint, index: number): MockQuestionContext {
  const topicIndex = index % blueprint.topicAreas.length;
  const variantIndex = Math.floor(index / blueprint.topicAreas.length);

  return {
    audience: mockQuestionAudiences[(topicIndex + variantIndex) % mockQuestionAudiences.length],
    blueprint,
    cue: mockQuestionCues[(topicIndex * 2 + variantIndex) % mockQuestionCues.length],
    focusMetric: mockQuestionMetrics[(topicIndex + variantIndex * 3) % mockQuestionMetrics.length],
    goal: mockQuestionGoals[(topicIndex + variantIndex) % mockQuestionGoals.length],
    relatedTopic: blueprint.topicAreas[(topicIndex + variantIndex + 1) % blueprint.topicAreas.length],
    reportView: mockQuestionReportViews[(topicIndex * 3 + variantIndex) % mockQuestionReportViews.length],
    reviewWindow: mockQuestionReviewWindows[(topicIndex + variantIndex * 2) % mockQuestionReviewWindows.length],
    studyAction: mockQuestionStudyActions[(topicIndex * 2 + variantIndex) % mockQuestionStudyActions.length],
    supportSignal: mockQuestionSignals[(topicIndex + variantIndex * 2) % mockQuestionSignals.length],
    topic: blueprint.topicAreas[topicIndex],
  };
}

function buildGeneratedMockExamQuestions(blueprint: MockExamBlueprint): MockExamQuestion[] {
  const questionCount = blueprint.questionCount ?? DEFAULT_QUESTION_COUNT_PER_EXAM;

  return Array.from({ length: questionCount }, (_, index) => {
    const context = buildMockQuestionContext(blueprint, index);
    const archetype = mockQuestionArchetypes[Math.floor(index / blueprint.topicAreas.length) % mockQuestionArchetypes.length];
    const question = archetype.getQuestion(context);
    const options = rotateOptions(archetype.getOptions(context), index);

    return {
      id: `${blueprint.id}-q${String(index + 1).padStart(2, "0")}`,
      topic: context.topic,
      question,
      options,
      explanation: archetype.getExplanation(context),
    };
  });
}

export function getMockExamQuestions(id: string): MockExamQuestion[] {
  const blueprint = getMockExamBlueprintById(id);

  if (!blueprint) {
    return [];
  }

  const generatedQuestions = buildGeneratedMockExamQuestions(blueprint);
  const questionCount = blueprint.questionCount ?? DEFAULT_QUESTION_COUNT_PER_EXAM;

  if (id === "digital-marketing-fundamentals-self-check") {
    return digitalMarketingStarterQuestionBank.slice(0, questionCount).map((question, index) => ({
      ...question,
      id: `${blueprint.id}-q${String(index + 1).padStart(2, "0")}`,
    }));
  }

  if (id === "google-ads-display-certification") {
    return googleAdsDisplayQuestionBank.slice(0, questionCount).map((question, index) => ({
      ...question,
      id: `${blueprint.id}-q${String(index + 1).padStart(2, "0")}`,
    }));
  }

  if (id === "google-ads-video-certification") {
    const curatedByNumber = new Map(
      googleAdsVideoQuestionBank.map((question) => [question.questionNumber, question]),
    );

    return Array.from({ length: questionCount }, (_, index) => {
      const questionNumber = index + 1;
      const curatedQuestion = curatedByNumber.get(questionNumber);
      const question = curatedQuestion ?? generatedQuestions[index];

      return {
        ...question,
        id: `${blueprint.id}-q${String(questionNumber).padStart(2, "0")}`,
      };
    });
  }

  if (id === "meta-certified-media-buying-professional") {
    return metaMediaBuyingQuestionBank.slice(0, questionCount).map((question, index) => ({
      ...question,
      id: `${blueprint.id}-q${String(index + 1).padStart(2, "0")}`,
    }));
  }

  if (id === "meta-certified-media-planning-professional") {
    return metaMediaPlanningQuestionBank.slice(0, questionCount).map((question, index) => ({
      ...question,
      id: `${blueprint.id}-q${String(index + 1).padStart(2, "0")}`,
    }));
  }

  if (id !== "google-ads-search-certification") {
    return generatedQuestions;
  }

  const seenQuestions = new Set<string>();
  const curatedQuestions: MockExamQuestion[] = [];

  for (const question of googleAdsSearchQuestionBank) {
    const key = normalizeQuestionKey(question.question);

    if (seenQuestions.has(key)) {
      continue;
    }

    seenQuestions.add(key);
    curatedQuestions.push(question);
  }

  for (const question of generatedQuestions) {
    if (curatedQuestions.length >= questionCount) {
      break;
    }

    const key = normalizeQuestionKey(question.question);

    if (seenQuestions.has(key)) {
      continue;
    }

    seenQuestions.add(key);
    curatedQuestions.push(question);
  }

  return curatedQuestions.slice(0, questionCount).map((question, index) => ({
    ...question,
    id: `${blueprint.id}-q${String(index + 1).padStart(2, "0")}`,
  }));
}

export function getMockExamNavigator(questionCount: number) {
  return Array.from({ length: questionCount }, (_, index) => ({
    label: `Q${index + 1}`,
    status: index === 0 ? "Current" : index < 6 ? "Ready" : "Pending",
  }));
}

export function getResultSummaryByExamId(id: string): ResultSummary {
  const exam = getMockExamById(id);

  if (!exam) {
    return recentResults[0];
  }

  return (
    recentResults.find((item) => item.id === id) ?? {
      id,
      title: exam.title,
      score: exam.provider === "Google" ? "76%" : "79%",
      status: exam.provider === "Google" ? "Ready for targeted revision" : "Almost exam-ready",
      date: "2026-03-10",
    }
  );
}

export function getResultHighlightsForExam(id: string): MetricCard[] {
  const exam = getMockExamById(id);
  const blueprint = getMockExamBlueprintById(id);
  const topics = blueprint?.topicAreas ?? ["core strategy", "optimization", "measurement", "creative"];

  if (!exam) {
    return resultHighlights;
  }

  return [
    {
      label: "Latest mock score",
      value: exam.provider === "Google" ? "76%" : "79%",
      helper: exam.title,
      tone: exam.provider === "Google" ? "warning" : "success",
    },
    { label: "Passing target", value: `${exam.passingScore}%`, helper: "Current mock target score", tone: "primary" },
    { label: "Best section", value: topics[1], helper: "Strongest answered topic set", tone: "success" },
    { label: "Weakest section", value: topics[3], helper: "Study this before your retake", tone: "danger" },
  ];
}

export function getResultBreakdownForExam(id: string): TableRow[] {
  const blueprint = getMockExamBlueprintById(id);

  if (!blueprint) {
    return resultBreakdown;
  }

  return blueprint.topicAreas.slice(0, 4).map((topic, index) => ({
    area: topic,
    score: `${82 - index * 7}%`,
    benchmark: `${blueprint.passingScore}%`,
    nextStep:
      index < 2
        ? `${topic} ကို best-practice workflow နဲ့ ပြန်လေ့လာပါ`
        : `${topic} နဲ့ reporting interpretation ကို အရင် focus လုပ်ပါ`,
  }));
}
