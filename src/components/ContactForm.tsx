import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { isValidEmail, sendFormData } from "@/utils/api";

type FormState = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

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

    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim()) {
      setStatus("error");
      setError("Something went wrong");
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus("error");
      setError("Something went wrong");
      return;
    }

    try {
      await sendFormData({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        hospital: "",
        doctor: "",
        days: "",
        health_issue: "",
        message: form.message.trim(),
      });

      setForm(initialForm);
      setStatus("success");
    } catch (submitError) {
      console.error("Contact form submission failed:", submitError);
      setStatus("error");
      setError("Something went wrong");
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
        Mobile
        <input
          required
          type="tel"
          autoComplete="tel"
          value={form.mobile}
          onChange={(event) => setForm({ ...form, mobile: event.target.value })}
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
          <CheckCircle2 size={18} /> Request submitted successfully
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
