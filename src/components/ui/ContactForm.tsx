"use client";

import { useState, type FormEvent } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { siteConfig } from "@/config/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-coral bg-coral-tint p-8 text-center">
        <h3 className="font-display text-xl font-medium text-coral-deep">
          Thanks — we&rsquo;ll get back to you within 24 hours.
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          In the meantime, feel free to reach us on WhatsApp for anything
          urgent.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-4 text-sm text-teal hover:text-teal-light underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="rounded-2xl border border-line bg-enamel-dim p-8 text-center">
        <h3 className="font-display text-xl font-medium text-ink">
          Something went wrong.
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Please try WhatsApp instead — it&rsquo;s the fastest way to reach us.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton number={siteConfig.whatsappNumber} />
        </div>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-4 text-sm text-teal hover:text-teal-light underline"
        >
          Try the form again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-ink"
        >
          Name <span className="text-coral">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
          placeholder="Dr. Ahmed Khan"
        />
      </div>

      <div>
        <label
          htmlFor="clinic"
          className="mb-1 block text-sm font-medium text-ink"
        >
          Clinic name <span className="text-coral">*</span>
        </label>
        <input
          type="text"
          id="clinic"
          name="clinic"
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
          placeholder="Khan Dental Care"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-ink"
        >
          Phone number <span className="text-coral">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
          placeholder="+92 300 1234567"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-ink"
        >
          Message <span className="text-ink-soft">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral resize-y"
          placeholder="Tell us about your clinic and what you're looking for..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-coral px-7 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-coral-deep hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
