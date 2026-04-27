import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  schema?: Record<string, unknown>;
};

const siteUrl = "https://myholtertest.com";
const globalTitle =
  "Holter Test Booking Online | 24/48 Hour ECG Monitoring Services";
const globalDescription =
  "Book Holter test online with advanced cardiac monitoring services. 24-hour and 48-hour ECG monitoring for accurate heart rhythm diagnosis at home or hospitals.";
const defaultKeywords =
  "holter test booking, holter monitoring, ECG monitoring, 24 hour holter test, 48 hour ECG test, cardiac monitoring services, ambulatory ECG, heart rhythm monitoring, ECG test near me, portable ECG device, arrhythmia detection, cardiac diagnostics India, ECG at home service, holter monitor cost India, online ECG booking";

export function SEO({
  title = globalTitle,
  description = globalDescription,
  keywords = defaultKeywords,
  path = "/",
  schema,
}: SEOProps) {
  const canonical = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{globalTitle}</title>
      <meta name="description" content={description || globalDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Holter Test Booking Online | Advanced Cardiac Monitoring" />
      <meta
        property="og:description"
        content="Book Holter test online for accurate heart monitoring and ECG diagnostics."
      />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}/hero-bg.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={globalTitle} />
      <meta name="twitter:description" content={description || globalDescription} />
      <script type="application/ld+json">
        {JSON.stringify(
          schema ?? {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "My Holter Test",
            url: siteUrl,
            logo: `${siteUrl}/myholtertest.svg`,
            description: "Online Holter test booking and ECG monitoring services",
            medicalSpecialty: "Cardiology",
            areaServed: "India",
            availableService: {
              "@type": "MedicalTest",
              name: "Holter Monitoring",
              description:
                "24-48 hour ECG monitoring for detecting arrhythmias and heart rhythm issues",
            },
          },
        )}
      </script>
    </Helmet>
  );
}
