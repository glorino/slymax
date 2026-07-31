import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Electrification Services | Slymax Nigeria Limited",
  description: "Complete electrification solutions in Nigeria including power distribution, solar installation, transformer setup, and grid connection services.",
}

export default function ElectrificationPage() {
  const pageUrl = `${companyInfo.website}/services/electrification`
  return (
    <>
      <ServiceSchema
        name="Electrification Services"
        description="Complete electrification solutions including power distribution, solar installation, transformer setup, and grid connection."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Electrification", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
