import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import BuildingConstructionPageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Building and Construction Services | Slymax Nigeria Limited",
  description:
    "Building and construction services in Nigeria including general construction, civil works, renovation, project management, and infrastructure development.",
}

export default function BuildingConstructionPage() {
  const pageUrl = `${companyInfo.website}/services/building-construction`
  return (
    <>
      <ServiceSchema
        name="Building and Construction Services"
        description="Building and construction services including general construction, civil works, renovation, and project management."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Building & Construction", url: pageUrl },
        ]}
      />
      <BuildingConstructionPageContent />
    </>
  )
}
