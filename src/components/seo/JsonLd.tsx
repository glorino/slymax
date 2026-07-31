import { companyInfo } from "@/lib/constants";

interface OrganizationSchemaProps {
  page?: string;
  description?: string;
  url?: string;
}

export function OrganizationSchema({ page, description, url }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: companyInfo.website,
    logo: `${companyInfo.website}/logo.png`,
    description: description || "Slymax Nigeria Limited provides oil & gas, telecommunication, real estate, haulage & logistics, and building & construction services across Nigeria.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21 Philip Omosigho Street, EKEA off Sapele Road",
      addressLocality: "Benin City",
      addressRegion: "Edo State",
      postalCode: "",
      addressCountry: "NG",
    },
    contactPoint: companyInfo.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: `+234${phone.substring(1)}`,
      contactType: "customer service",
      availableLanguage: "English",
    })),
    sameAs: Object.values(companyInfo.social),
    foundingDate: String(companyInfo.founded),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 100,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  if (url) {
    (schema as Record<string, unknown>).url = url;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  url?: string;
  description?: string;
}

export function LocalBusinessSchema({ url, description }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    url: url || companyInfo.website,
    logo: `${companyInfo.website}/logo.png`,
    description: description || "Engineering and construction company in Benin City, Nigeria",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21 Philip Omosigho Street, EKEA off Sapele Road",
      addressLocality: "Benin City",
      addressRegion: "Edo State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.335,
      longitude: 5.627,
    },
    telephone: `+234${companyInfo.phone.substring(1)}`,
    email: companyInfo.email,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: companyInfo.name,
      url: companyInfo.website,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
