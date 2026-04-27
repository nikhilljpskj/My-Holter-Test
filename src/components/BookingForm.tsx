import { FormEvent, useState } from "react";
import { AlertCircle, CalendarCheck2, CheckCircle2 } from "lucide-react";

type BookingFormState = {
  name: string;
  email: string;
  mobile: string;
  hospitalName: string;
  doctorName: string;
  numberOfDays: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  healthIssues: string;
  message: string;
};

const initialForm: BookingFormState = {
  name: "",
  email: "",
  mobile: "",
  hospitalName: "",
  doctorName: "",
  numberOfDays: "24 hours",
  preferredDate: "",
  preferredTime: "",
  location: "",
  healthIssues: "",
  message: "",
};

const recipients = [
  { email: "nikhiljp.skj@gmail.com" },
  { email: "info@redeemertechnologies.com" },
];

export function BookingForm() {
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
      type: "Holter test booking request",
      source: "My Holter Test homepage booking form",
      submittedAt: new Date().toISOString(),
      ...form,
    };

    const htmlContent = `
      <div style="font-family:Inter,Arial,sans-serif;color:#0f172a;line-height:1.6">
        <h2 style="margin:0 0 12px;color:#0369a1">New Holter Test Booking Request</h2>
        ${renderRow("Name", form.name)}
        ${renderRow("Email", form.email)}
        ${renderRow("Mobile", form.mobile)}
        ${renderRow("Hospital Name", form.hospitalName)}
        ${renderRow("Doctor Name", form.doctorName)}
        ${renderRow("Number of Days", form.numberOfDays)}
        ${renderRow("Preferred Date", form.preferredDate)}
        ${renderRow("Preferred Time", form.preferredTime)}
        ${renderRow("City / Location", form.location)}
        <p><strong>Health Issues:</strong></p>
        <p>${escapeHtml(form.healthIssues).replace(/\n/g, "<br />")}</p>
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
          sender: { name: "My Holter Test Booking", email: senderEmail },
          to: recipients,
          replyTo: { email: form.email, name: form.name },
          subject: `Schedule Holter Test: ${form.name}`,
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
          : "Unable to send your booking request right now.",
      );
    }
  }

  return (
    <form className="booking-form reveal" onSubmit={handleSubmit}>
      <div className="booking-form-header">
        <span>
          <CalendarCheck2 size={18} /> Priority booking request
        </span>
        <h2>Schedule a Holter Test</h2>
        <p>
          Share patient and referral details. Our coordination team will confirm
          timing, setup location, and next steps.
        </p>
      </div>

      <div className="form-grid">
        <label>
          Name
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Patient or attendant name"
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

      <div className="form-grid">
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
          Number of Days
          <select
            required
            value={form.numberOfDays}
            onChange={(event) => setForm({ ...form, numberOfDays: event.target.value })}
          >
            <option>24 hours</option>
            <option>48 hours</option>
            <option>72 hours</option>
            <option>Other / Doctor advised</option>
          </select>
        </label>
      </div>

      <div className="form-grid">
        <label>
          Hospital Name
          <input
            value={form.hospitalName}
            onChange={(event) =>
              setForm({ ...form, hospitalName: event.target.value })
            }
            placeholder="Hospital or clinic name"
          />
        </label>
        <label>
          Doctor Name
          <input
            value={form.doctorName}
            onChange={(event) =>
              setForm({ ...form, doctorName: event.target.value })
            }
            placeholder="Referring doctor name"
          />
        </label>
      </div>

      <div className="form-grid">
        <label>
          Preferred Date
          <input
            type="date"
            value={form.preferredDate}
            onChange={(event) =>
              setForm({ ...form, preferredDate: event.target.value })
            }
          />
        </label>
        <label>
          Preferred Time
          <input
            type="time"
            value={form.preferredTime}
            onChange={(event) =>
              setForm({ ...form, preferredTime: event.target.value })
            }
          />
        </label>
      </div>

      <label>
        City / Location
        <input
          required
          value={form.location}
          onChange={(event) => setForm({ ...form, location: event.target.value })}
          placeholder="City, area, or setup address"
        />
      </label>

      <label>
        Health Issues
        <textarea
          required
          rows={4}
          value={form.healthIssues}
          onChange={(event) =>
            setForm({ ...form, healthIssues: event.target.value })
          }
          placeholder="Mention symptoms such as palpitations, dizziness, syncope, chest discomfort, or doctor notes."
        />
      </label>

      <label>
        Message
        <textarea
          rows={4}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Add preferred coordination details, patient age, special requirements, or urgent timing."
        />
      </label>

      {status === "success" ? (
        <div className="form-alert success" role="status">
          <CheckCircle2 size={18} /> Booking request sent. Our team will contact you shortly.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-alert error" role="alert">
          <AlertCircle size={18} /> {error}
        </div>
      ) : null}

      <button className="submit-button booking-submit" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Scheduling..." : "Schedule a Holter Test"}
        <CalendarCheck2 size={18} />
      </button>
    </form>
  );
}

function renderRow(label: string, value: string) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value || "Not provided")}</p>`;
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
