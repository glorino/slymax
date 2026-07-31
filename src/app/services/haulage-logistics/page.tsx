import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import HaulageTransportPageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Haulage and Logistics Services | Slymax Nigeria Limited",
  description:
    "Reliable haulage and logistics services in Nigeria including aggregate haulage, equipment transport, fleet management, and nationwide delivery solutions.",
}

export default function HaulageTransportPage() {
  const pageUrl = `${companyInfo.website}/services/haulage-logistics`
  return (
    <>
      <ServiceSchema
        name="Haulage and Logistics Services"
        description="Haulage and logistics services including aggregate haulage, equipment transport, fleet management, and nationwide delivery."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Haulage & Logistics", url: pageUrl },
        ]}
      />
      <HaulageTransportPageContent />
    </>
  )
}
