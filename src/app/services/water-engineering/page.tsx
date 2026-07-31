import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Water Engineering Services | Slymax Nigeria Limited",
  description: "Complete water engineering solutions in Nigeria including borehole drilling, water treatment, distribution systems, and maintenance.",
}

export default function WaterEngineeringPage() {
  const pageUrl = `${companyInfo.website}/services/water-engineering`
  return (
    <>
      <ServiceSchema
        name="Water Engineering Services"
        description="Complete water engineering solutions including borehole drilling, water treatment, distribution systems, and maintenance."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Water Engineering", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
