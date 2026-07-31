import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import RealEstatePageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Real Estate Services | Slymax Nigeria Limited",
  description:
    "Real estate services in Nigeria including property development, land sales, property leasing, and investment advisory. Trusted developers across Nigeria.",
}

export default function RealEstatePage() {
  const pageUrl = `${companyInfo.website}/services/real-estate`
  return (
    <>
      <ServiceSchema
        name="Real Estate Services"
        description="Real estate services including property development, land sales, property leasing, and investment advisory."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Real Estate", url: pageUrl },
        ]}
      />
      <RealEstatePageContent />
    </>
  )
}
