import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Fire Safety Equipment & Services | Slymax Nigeria Limited",
  description: "Complete fire safety solutions in Nigeria including extinguishers, alarm systems, safety training, and maintenance services.",
}

export default function FireEquipmentPage() {
  const pageUrl = `${companyInfo.website}/services/fire-equipment`
  return (
    <>
      <ServiceSchema
        name="Fire Safety Equipment & Services"
        description="Complete fire safety solutions including extinguishers, alarm systems, safety training, and maintenance services."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Fire Equipment", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
