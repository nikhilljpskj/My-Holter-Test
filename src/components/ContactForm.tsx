import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const recipients = [
  { email: "nikhiljp.skj@gmail.com" },
  { email: "info@redeemertechnologies.com" },
];

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const apiKey = import.meta.env.VITE_BREVO_API_KEY;
    const senderEmail =
      import.meta.env.VITE_BREVO_SENDER_EMAIL ?? "info@redeemertechnologies.com";

    if (!apiKey) {
      setStatus("error");
      setError("Brevo is not configured. Add VITE_BREVO_API_KEY to the frontend environment.");
      return;
    }

    const structuredData = {
      source: "My Holter Test website",
      submittedAt: new Date().toISOString(),
      ...form,
    };

    const htmlContent = `
      <div style="font-family:Inter,Arial,sans-serif;color:#0f172a;line-height:1.6">
        <h2 style="margin:0 0 12px;color:#0369a1">New My Holter Test inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(form.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(form.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(form.phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(form.message).replace(/\n/g, "<br />")}</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0" />
        <h3 style="margin:0 0 8px">JSON structured data</h3>
        <pre style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;white-space:pre-wrap">${escapeHtml(
          JSON.stringify(structuredData, null, 2),
        )}</pre>
      </div>
    `;

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: "My Holter Test Website", email: senderEmail },
          to: recipients,
          replyTo: { email: form.email, name: form.name },
          subject: `New Holter monitoring inquiry from ${form.name}`,
          htmlContent,
          textContent: JSON.stringify(structuredData, null, 2),
        }),
      });

      if (!response.ok) {
        throw new Error(`Brevo returned ${response.status}`);
      }

      setForm(initialForm);
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your message right now.",
      );
    }
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Your full name"
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label>
        Phone
        <input
          required
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
          placeholder="+91 98765 43210"
        />
      </label>

      <label>
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Tell us about the patient, hospital partnership, or report support you need."
        />
      </label>

      {status === "success" ? (
        <div className="form-alert success" role="status">
          <CheckCircle2 size={18} /> Message sent. Our team will get back to you shortly.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-alert error" role="alert">
          <AlertCircle size={18} /> {error}
        </div>
      ) : null}

      <button className="submit-button" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Sending..." : "Send Message"} <Send size={18} />
      </button>
    </form>
  );
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}
