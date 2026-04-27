export type FormPayload = {
  name: string;
  email: string;
  mobile: string;
  hospital: string;
  doctor: string;
  days: string;
  health_issue: string;
  message: string;
};

const endpoint =
  "https://careers.redeemertechnologies.com/myholtertest-mail/send-mail.php";

export async function sendFormData(formData: FormPayload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const contentType = response.headers.get("content-type") ?? "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  console.log("Form submission response:", data);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return data;
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
