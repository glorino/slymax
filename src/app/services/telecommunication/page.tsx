import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import TelecommunicationPageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Telecommunication Services | Slymax Nigeria Limited",
  description:
    "Telecom infrastructure services in Nigeria including site maintenance, mast building, fibre optics laying, aviation light installation, and network support.",
}

export default function TelecommunicationPage() {
  const pageUrl = `${companyInfo.website}/services/telecommunication`
  return (
    <>
      <ServiceSchema
        name="Telecommunication Services"
        description="Telecom infrastructure services including site maintenance, mast building, fibre optics laying, aviation light installation, and network support."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Telecommunication", url: pageUrl },
        ]}
      />
      <TelecommunicationPageContent />
    </>
  )
}
