import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Terms of Service | Slymax Nigeria Limited",
  description: "Terms of service for Slymax Nigeria Limited. Read the terms governing your use of our website and services.",
}

export default function TermsPage() {
  const pageUrl = `${companyInfo.website}/terms`
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Terms of Service", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
