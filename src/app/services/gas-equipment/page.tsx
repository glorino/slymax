import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Gas Equipment Solutions | Slymax Nigeria Limited",
  description: "Quality gas equipment solutions in Nigeria including regulators, cylinder supply, safety equipment, and professional installation.",
}

export default function GasEquipmentPage() {
  const pageUrl = `${companyInfo.website}/services/gas-equipment`
  return (
    <>
      <ServiceSchema
        name="Gas Equipment Solutions"
        description="Quality gas equipment solutions including regulators, cylinder supply, safety equipment, and professional installation."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Gas Equipment", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
