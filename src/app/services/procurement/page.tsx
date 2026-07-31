import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import ProcurementPageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Procurement Services | Slymax Nigeria Limited",
  description:
    "Strategic procurement solutions in Nigeria including material sourcing, vendor management, quality assurance, and logistics for construction and industrial projects.",
}

export default function ProcurementPage() {
  const pageUrl = `${companyInfo.website}/services/procurement`
  return (
    <>
      <ServiceSchema
        name="Procurement Services"
        description="Strategic procurement solutions including material sourcing, vendor management, quality assurance, and logistics."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Procurement", url: pageUrl },
        ]}
      />
      <ProcurementPageContent />
    </>
  )
}
