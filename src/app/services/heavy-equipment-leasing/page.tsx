import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Heavy Equipment Leasing | Slymax Nigeria Limited",
  description: "Premium heavy equipment leasing in Nigeria including excavators, cranes, bulldozers, loaders, and complete fleet management.",
}

export default function HeavyEquipmentLeasingPage() {
  const pageUrl = `${companyInfo.website}/services/heavy-equipment-leasing`
  return (
    <>
      <ServiceSchema
        name="Heavy Equipment Leasing"
        description="Premium heavy equipment leasing including excavators, cranes, bulldozers, loaders, and complete fleet management."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Heavy Equipment Leasing", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
