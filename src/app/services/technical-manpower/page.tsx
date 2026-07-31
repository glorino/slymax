import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import TechnicalManpowerPageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Technical Manpower Services | Slymax Nigeria Limited",
  description:
    "Skilled technical manpower supply in Nigeria including engineers, technicians, project managers, and safety officers for construction and industrial projects.",
}

export default function TechnicalManpowerPage() {
  const pageUrl = `${companyInfo.website}/services/technical-manpower`
  return (
    <>
      <ServiceSchema
        name="Technical Manpower Services"
        description="Skilled technical manpower supply including engineers, technicians, project managers, and safety officers."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Technical Manpower", url: pageUrl },
        ]}
      />
      <TechnicalManpowerPageContent />
    </>
  )
}
