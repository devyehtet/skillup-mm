"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { registerLearner, type RegisterActionState } from "@/app/register/actions";

const initialState: RegisterActionState = {};

const inputClassName =
  "brand-input mt-2 rounded-2xl px-4 py-3.5 outline-none";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      disabled={pending}
      type="submit"
    >
      {pending ? "Creating account..." : "Continue to mock exams"}
    </button>
  );
}

export default function RegisterForm() {
  const [state, formAction] = useActionState(registerLearner, initialState);

  return (
    <section className="card-surface rounded-[1.5rem] p-6 sm:p-8">
      <span className="soft-chip">Account setup</span>
      <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-slate-950 sm:text-2xl">
        Create your account
      </h2>
      <p className="mt-3 text-sm leading-8 text-slate-600 md:text-[1rem]">
        Fill in your details once. We will sign you in and send you straight to the mock exam catalog.
      </p>

      <form action={formAction} className="mt-7 space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium leading-7 text-slate-700">
            <span>Full name</span>
            <input
              autoComplete="name"
              className={inputClassName}
              defaultValue={state.values?.fullName ?? ""}
              name="fullName"
              placeholder="ဥပမာ - မဇင်မာဦး"
              type="text"
            />
          </label>

          <label className="block text-sm font-medium leading-7 text-slate-700">
            <span>Email</span>
            <input
              autoComplete="email"
              className={inputClassName}
              defaultValue={state.values?.email ?? ""}
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </label>

          <label className="block text-sm font-medium leading-7 text-slate-700">
            <span>Target platform</span>
            <input
              className={inputClassName}
              defaultValue={state.values?.targetPlatform ?? ""}
              name="targetPlatform"
              placeholder="Google Ads / Meta Ads / TikTok"
              type="text"
            />
          </label>

          <label className="block text-sm font-medium leading-7 text-slate-700">
            <span>Current level</span>
            <input
              className={inputClassName}
              defaultValue={state.values?.currentLevel ?? ""}
              name="currentLevel"
              placeholder="Beginner / Intermediate"
              type="text"
            />
          </label>
        </div>

        <label className="block text-sm font-medium leading-7 text-slate-700">
          <span>Why are you practicing?</span>
          <textarea
            className={`${inputClassName} min-h-32 resize-y`}
            defaultValue={state.values?.purpose ?? ""}
            name="purpose"
            placeholder="I want to assess my readiness before the official exam."
          />
        </label>

        {state.error ? <p className="text-sm font-medium leading-7 text-rose-600">{state.error}</p> : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <div className="w-full sm:w-auto">
            <SubmitButton />
          </div>
          <Link href="/tracks" className="btn-secondary w-full sm:w-auto">
            Explore study tracks
          </Link>
        </div>
      </form>
    </section>
  );
}
