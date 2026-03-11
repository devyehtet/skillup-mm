export type AppRole = "guest" | "student" | "schoolAdmin" | "superAdmin";
export type AdminRole = Exclude<AppRole, "guest" | "student">;

export interface DemoSession {
  name: string;
  email: string;
  organization: string;
  role: AppRole;
}

export interface AdminSession extends DemoSession {
  role: AdminRole;
}

export const adminLoginAccount = {
  email: "info@yehtet.com",
  password: "12345",
  name: "Ye Htet Aung",
  organization: "SkillUp MM",
  role: "superAdmin" as const,
};

export const demoSessions: Record<Exclude<AppRole, "guest">, DemoSession> = {
  student: {
    name: "မဇင်မာဦး",
    email: "zinmar@skillup-mm.demo",
    organization: "Yangon Marketing Institute",
    role: "student",
  },
  schoolAdmin: {
    name: "ကိုမင်းထက်",
    email: "admin@ymi.demo",
    organization: "Yangon Marketing Institute",
    role: "schoolAdmin",
  },
  superAdmin: {
    name: "SkillUp MM Platform",
    email: "ops@skillup-mm.demo",
    organization: "SkillUp MM",
    role: "superAdmin",
  },
};

export function getDemoSession(role: Exclude<AppRole, "guest"> = "student") {
  return demoSessions[role];
}

export function authenticateAdmin(email: string, password: string): AdminSession | null {
  if (
    email.trim().toLowerCase() !== adminLoginAccount.email.toLowerCase() ||
    password.trim() !== adminLoginAccount.password
  ) {
    return null;
  }

  return {
    email: adminLoginAccount.email,
    name: adminLoginAccount.name,
    organization: adminLoginAccount.organization,
    role: adminLoginAccount.role,
  };
}
