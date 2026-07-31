import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "About Us | Slymax Nigeria Limited",
  description: "Learn about Slymax Nigeria Limited - a reliable indigenous company providing telecommunication, real estate, oil & gas, and construction services since 2000.",
}

export default function AboutPage() {
  const pageUrl = `${companyInfo.website}/about`
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "About Us", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
