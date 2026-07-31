import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Operation & Maintenance Services | Slymax Nigeria Limited",
  description: "Reliable O&M services in Nigeria including facility management, preventive maintenance, repairs, and 24/7 technical support.",
}

export default function OperationMaintenancePage() {
  const pageUrl = `${companyInfo.website}/services/operation-maintenance`
  return (
    <>
      <ServiceSchema
        name="Operation & Maintenance Services"
        description="Reliable O&M services including facility management, preventive maintenance, repairs, and 24/7 technical support."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Operation & Maintenance", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
