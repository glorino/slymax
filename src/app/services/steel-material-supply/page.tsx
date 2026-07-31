import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Steel Material Supply | Slymax Nigeria Limited",
  description: "Premium steel material supply in Nigeria including reinforcement bars, structural steel, custom fabrication, and nationwide delivery.",
}

export default function SteelMaterialSupplyPage() {
  const pageUrl = `${companyInfo.website}/services/steel-material-supply`
  return (
    <>
      <ServiceSchema
        name="Steel Material Supply"
        description="Premium steel material supply including reinforcement bars, structural steel, custom fabrication, and nationwide delivery."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Steel Material Supply", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
