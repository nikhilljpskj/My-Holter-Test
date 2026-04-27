import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import About from "@/pages/About";
import Book from "@/pages/Book";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Hospitals from "@/pages/Hospitals";
import NotFound from "@/pages/NotFound";
import PatientAccess from "@/pages/PatientAccess";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Services from "@/pages/Services";
import TermsAndConditions from "@/pages/TermsAndConditions";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/book" element={<Book />} />
            <Route path="/patient-access" element={<PatientAccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
