import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/og-image.jpg",
  ogType = "website",
  schema,
}: SEOHeadProps) {
  const fullTitle = `${title} | Holter Test India - Doorstep ECG Monitoring`;
  const baseUrl = "https://holtertest.in";

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Holter Test India",
    description:
      "Doorstep Holter Test services across South India. 24-hour ECG monitoring at your home.",
    url: baseUrl,
    telephone: "+91-9447355775",
    email: "info@redeemertechnologies.com",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 13.0827,
        longitude: 80.2707,
      },
      geoRadius: "500000",
    },
    medicalSpecialty: "Cardiology",
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Holter Test India" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="Holter Test India" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
