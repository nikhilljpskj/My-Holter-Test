import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  schema?: Record<string, unknown>;
};

const siteUrl = "https://myholtertest.com";
const defaultKeywords =
  "Holter monitoring, cardiac monitoring, ECG monitoring services, remote patient monitoring, heart health diagnostics";

export function SEO({
  title,
  description,
  keywords = defaultKeywords,
  path = "/",
  schema,
}: SEOProps) {
  const fullTitle = `${title} | My Holter Test`;
  const canonical = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}/myholtertest.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(
          schema ?? {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "My Holter Test",
            url: siteUrl,
            logo: `${siteUrl}/myholtertest.svg`,
            medicalSpecialty: "Cardiovascular",
            areaServed: "South India",
            serviceType: "Holter monitoring and ECG monitoring services",
          },
        )}
      </script>
    </Helmet>
  );
}
