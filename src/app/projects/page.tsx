import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Our Projects | Slymax Nigeria Limited",
  description: "Explore our completed projects across telecommunication, real estate, oil & gas, haulage & logistics, and building & construction in Nigeria.",
}

export default function ProjectsPage() {
  const pageUrl = `${companyInfo.website}/projects`
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Projects", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
