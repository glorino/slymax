import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Scaffold Material Supply & Services | Slymax Nigeria Limited",
  description: "Professional scaffolding solutions in Nigeria including supply, erection, safety compliance, and project support services.",
}

export default function ScaffoldMaterialPage() {
  const pageUrl = `${companyInfo.website}/services/scaffold-material`
  return (
    <>
      <ServiceSchema
        name="Scaffold Material Supply & Services"
        description="Professional scaffolding solutions including supply, erection, safety compliance, and project support services."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Services", url: `${companyInfo.website}/services` },
          { name: "Scaffold Material", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
