import type { Metadata } from "next"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { companyInfo } from "@/lib/constants"
import PageContent from "./PageContent"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Slymax Nigeria Limited services: oil & gas, telecommunication, real estate, haulage & logistics, and building & construction across Nigeria.",
}

export default function ServicesPage() {
  const pageUrl = `${companyInfo.website}/services`
  return (
    <>
      <ServiceSchema name="Engineering & Construction Services" description="Oil & gas, telecommunication, real estate, haulage & logistics, and building & construction services in Nigeria." url={pageUrl} />
      <BreadcrumbSchema items={[
        { name: "Home", url: companyInfo.website },
        { name: "Services", url: pageUrl },
      ]} />
      <PageContent />
    </>
  )
}
