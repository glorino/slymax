import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Civil & Structural Engineering Services | Slymax Nigeria Limited",
  description: "Expert civil and structural engineering services in Nigeria including road construction, bridge building, foundation works, and structural analysis.",
}

export default function CivilStructuralPage() {
  const pageUrl = `${companyInfo.website}/services/civil-structural`
  return (
    <>
      <ServiceSchema
        name="Civil & Structural Engineering Services"
        description="Expert civil and structural engineering services including road construction, bridge building, foundation works, and structural analysis."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Civil & Structural", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
