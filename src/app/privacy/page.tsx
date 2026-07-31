import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Privacy Policy | Slymax Nigeria Limited",
  description: "Privacy policy for Slymax Nigeria Limited. Learn how we collect, use, and protect your personal data when you use our website and services.",
}

export default function PrivacyPage() {
  const pageUrl = `${companyInfo.website}/privacy`
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Privacy Policy", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
