import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Mechanical Services | Slymax Nigeria Limited",
  description: "Professional mechanical services in Nigeria including equipment installation, piping systems, HVAC solutions, and preventive maintenance.",
}

export default function MechanicalServicesPage() {
  const pageUrl = `${companyInfo.website}/services/mechanical-services`
  return (
    <>
      <ServiceSchema
        name="Mechanical Services"
        description="Professional mechanical services including equipment installation, piping systems, HVAC solutions, and preventive maintenance."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Mechanical Services", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
