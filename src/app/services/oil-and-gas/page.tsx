import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import OilAndGasPageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Oil and Gas Services | Slymax Nigeria Limited",
  description:
    "Comprehensive oil and gas services in Nigeria including construction, steel material supply, gas equipment, fire equipment, heavy equipment leasing, and pipeline services.",
}

export default function OilGasPage() {
  const pageUrl = `${companyInfo.website}/services/oil-and-gas`
  return (
    <>
      <ServiceSchema
        name="Oil and Gas Services"
        description="Comprehensive oil and gas services including construction, steel material supply, scaffold material, gas equipment, fire equipment, heavy equipment leasing, pipeline services, and oil & gas support solutions."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Oil and Gas", url: pageUrl },
        ]}
      />
      <OilAndGasPageContent />
    </>
  )
}
