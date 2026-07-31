import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Contact Us | Slymax Nigeria Limited",
  description: "Get in touch with Slymax Nigeria Limited for project consultations, quotes, and service inquiries. We respond within 2 hours.",
}

export default function ContactPage() {
  const pageUrl = `${companyInfo.website}/contact`
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: companyInfo.website },
          { name: "Contact Us", url: pageUrl },
        ]}
      />
      <PageContent />
    </>
  )
}
