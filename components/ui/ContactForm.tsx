"use client";

import { useState, useRef } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function isValidEmail(s: string): boolean {
  return /^\S+@\S+\.\S+$/.test(s);
}

export function validateForm(state: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!state.name.trim()) errors.name = "Name is required.";
  if (!state.email.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(state.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!state.message.trim()) errors.message = "Message is required.";
  return errors;
}

const fieldStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "0.875rem 1rem",
  borderRadius: "0.75rem",
  backgroundColor: "#f5f5f7",
  border: "1px solid #d2d2d7",
  fontSize: "0.9375rem",
  color: "#1d1d1f",
  fontFamily: "var(--font-body)",
  lineHeight: 1.5,
  outline: "none",
  transition: "border-color 0.15s ease",
  boxSizing: "border-box",
};

const fieldErrorStyle: React.CSSProperties = {
  ...fieldStyle,
  borderColor: "#d93025",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.6875rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: "#86868b",
  marginBottom: "0.5rem",
  fontFamily: "var(--font-heading)",
};

export default function ContactForm() {
  const [form, setForm]         = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [status, setStatus]     = useState<SubmitStatus>("idle");
  const [apiError, setApiError] = useState("");
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    setApiError("");
    try {
      const res  = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        successTimer.current = setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setApiError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setApiError("Connection failed. Please check your internet and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: "100%" }}>

      {/* Name */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="contact-name" style={labelStyle}>Your Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          maxLength={100}
          placeholder="e.g. Sarah Jenkins"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          style={errors.name ? fieldErrorStyle : fieldStyle}
        />
        {errors.name && (
          <p id="name-error" style={{ fontSize: "0.75rem", color: "#d93025", marginTop: "0.375rem" }}>
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="contact-email" style={labelStyle}>Email Address</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="e.g. sarah@company.com"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          style={errors.email ? fieldErrorStyle : fieldStyle}
        />
        {errors.email && (
          <p id="email-error" style={{ fontSize: "0.75rem", color: "#d93025", marginTop: "0.375rem" }}>
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div style={{ marginBottom: "2rem" }}>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          maxLength={2000}
          rows={6}
          placeholder="Tell me about your project, architecture requirements, or opportunity..."
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          style={{
            ...(errors.message ? fieldErrorStyle : fieldStyle),
            resize: "vertical",
            minHeight: "10rem",
          }}
        />
        {errors.message && (
          <p id="message-error" style={{ fontSize: "0.75rem", color: "#d93025", marginTop: "0.375rem" }}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Send message"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.875rem 2rem",
          borderRadius: "9999px",
          backgroundColor: "#1d1d1f",
          color: "#ffffff",
          fontSize: "0.875rem",
          fontWeight: 600,
          fontFamily: "var(--font-heading)",
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.6 : 1,
          transition: "opacity 0.15s ease",
        }}
      >
        {status === "loading" ? (
          <>
            <span
              style={{
                display: "inline-block",
                width: "0.875rem",
                height: "0.875rem",
                border: "2px solid #ffffff",
                borderTopColor: "transparent",
                borderRadius: "9999px",
                animation: "spin 0.7s linear infinite",
              }}
            />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 11L11 3M11 3H5M11 3V9" />
            </svg>
          </>
        )}
      </button>

      {/* Feedback */}
      {status === "success" && (
        <p
          role="status"
          style={{ marginTop: "1rem", fontSize: "0.875rem", fontWeight: 600, color: "#0066cc" }}
        >
          ✓ Message sent. I&apos;ll respond to your email shortly.
        </p>
      )}
      {status === "error" && apiError && (
        <p
          role="alert"
          style={{ marginTop: "1rem", fontSize: "0.875rem", fontWeight: 600, color: "#d93025" }}
        >
          {apiError}
        </p>
      )}
    </form>
  );
}
