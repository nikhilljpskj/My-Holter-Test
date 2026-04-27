import { FormEvent, useState } from "react";
import { AlertCircle, CalendarCheck2, CheckCircle2 } from "lucide-react";
import { isValidEmail, sendFormData } from "@/utils/api";

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
        hospital: form.hospitalName.trim(),
        doctor: form.doctorName.trim(),
        days: form.numberOfDays.trim(),
        health_issue: form.healthIssues.trim(),
        message: buildBookingMessage(form),
      });

      setForm(initialForm);
      setStatus("success");
    } catch (submitError) {
      console.error("Booking form submission failed:", submitError);
      setStatus("error");
      setError("Something went wrong");
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
          <CheckCircle2 size={18} /> Request submitted successfully
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-alert error" role="alert">
          <AlertCircle size={18} /> {error}
        </div>
      ) : null}

      <button className="submit-button booking-submit" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Sending..." : "Schedule a Holter Test"}
        <CalendarCheck2 size={18} />
      </button>
    </form>
  );
}

function buildBookingMessage(form: BookingFormState) {
  const details = [
    form.message.trim(),
    form.preferredDate ? `Preferred date: ${form.preferredDate}` : "",
    form.preferredTime ? `Preferred time: ${form.preferredTime}` : "",
    form.location.trim() ? `City / Location: ${form.location.trim()}` : "",
  ].filter(Boolean);

  return details.join("\n");
}
