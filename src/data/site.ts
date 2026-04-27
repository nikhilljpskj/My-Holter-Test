import {
  Activity,
  BadgeCheck,
  Building2,
  Clock3,
  HeartPulse,
  Home,
  LineChart,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

export const reportAccessUrl =
  "https://monitoring.myholtertest.com/public/patient/access";

export const contact = {
  phone: "+91 94473 55775",
  phoneHref: "tel:+919447355775",
  whatsapp:
    "https://wa.me/919447355775?text=Hi%2C%20I%20want%20to%20book%20a%20Holter%20test",
  email: "info@redeemertechnologies.com",
  secondaryEmail: "nikhiljp.skj@gmail.com",
  company: "Redeemer Technologies",
  area: "South India",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Book Test", href: "/book" },
  { label: "Patient Access", href: "/patient-access" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "10k+", label: "Cardiac monitoring tests supported" },
  { value: "100+", label: "Hospital and clinic partners" },
  { value: "300+", label: "Referring doctors" },
  { value: "24-48h", label: "Typical report turnaround" },
];

export const services = [
  {
    icon: HeartPulse,
    title: "Holter Monitoring",
    description:
      "Continuous ECG monitoring for 24 to 48 hours to help detect arrhythmias, palpitations, dizziness, syncope, and intermittent rhythm changes.",
  },
  {
    icon: Home,
    title: "Doorstep ECG Setup",
    description:
      "Trained technicians visit the patient, place electrodes, explain the process, and collect the device after monitoring is complete.",
  },
  {
    icon: Activity,
    title: "Remote Patient Monitoring",
    description:
      "A streamlined workflow for patients, doctors, and hospitals who need cardiac monitoring without repeated hospital visits.",
  },
  {
    icon: LineChart,
    title: "Report Coordination",
    description:
      "Captured ECG data is processed into structured reports so physicians can review rhythm trends and clinical events quickly.",
  },
];

export const features = [
  {
    icon: ShieldCheck,
    title: "Clinical-Grade Workflow",
    description:
      "A disciplined process for device setup, patient instructions, data capture, and report delivery.",
  },
  {
    icon: Clock3,
    title: "Convenient Scheduling",
    description:
      "Home and hospital-based appointments designed around patient comfort and care team timelines.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Network",
    description:
      "Built for collaboration with cardiologists, physicians, diagnostic centers, hospitals, and clinics.",
  },
  {
    icon: Users,
    title: "Human Support",
    description:
      "Clear communication before, during, and after the test so patients know exactly what to expect.",
  },
];

export const hospitals = [
  "Apollo Hospitals",
  "Aster Medcity",
  "KIMSHEALTH",
  "VPS Lakeshore Hospital",
  "MIOT International",
  "MGM Healthcare",
  "Sri Ramachandra Medical Centre",
  "Kauvery Hospital",
  "Narayana Health",
  "Manipal Hospitals",
  "Yashoda Hospitals",
  "CARE Hospitals",
  "Continental Hospitals",
  "Amrita Hospital",
  "Baby Memorial Hospital",
  "Meitra Hospital",
  "SUT Hospital",
  "Rela Hospital",
  "SIMS Hospital",
  "PSG Hospitals",
  "GKNM Hospital",
  "Vijaya Hospital",
  "Fortis Hospital",
  "Medicover Hospitals",
];

export const partnerTypes = [
  {
    icon: Building2,
    title: "Hospitals",
    description:
      "Add Holter monitoring capacity without owning every operational step.",
  },
  {
    icon: Stethoscope,
    title: "Doctors",
    description:
      "Refer patients for cardiac monitoring and receive organized report support.",
  },
  {
    icon: Activity,
    title: "Diagnostic Centers",
    description:
      "Expand ECG monitoring services with a practical, field-ready workflow.",
  },
];

export const testimonials = [
  {
    quote:
      "The doorstep workflow makes cardiac monitoring easier for elderly patients and families who struggle with repeat hospital visits.",
    name: "Consultant Cardiologist",
    role: "Chennai",
  },
  {
    quote:
      "Reports are coordinated quickly, and the team is responsive when our physicians need support with patient scheduling.",
    name: "Hospital Operations Lead",
    role: "Kochi",
  },
  {
    quote:
      "A practical service for palpitations and intermittent symptoms where a short ECG is often not enough.",
    name: "Internal Medicine Physician",
    role: "Bengaluru",
  },
];

export const cities = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Bengaluru",
  "Mysuru",
  "Hyderabad",
  "Secunderabad",
  "Visakhapatnam",
  "Vijayawada",
  "Kochi",
  "Thiruvananthapuram",
  "Kozhikode",
];
