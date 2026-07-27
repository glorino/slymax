"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hammer, ArrowRight, CheckCircle, ChevronRight, Building2, HardHat, Ruler, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const buildingServices = [
  {
    title: "Building Construction",
    description: "Complete building construction from foundation to finishing for residential and commercial projects.",
    icon: Building2,
    features: ["Residential Buildings", "Commercial Complexes", "Industrial Facilities", "Office Buildings", "Warehouses", "Retail Spaces"],
  },
  {
    title: "Civil Works",
    description: "General civil engineering works including roads, drainage, and infrastructure development.",
    icon: HardHat,
    features: ["Road Construction", "Drainage Systems", "Bridge Works", "Earthworks", "Retaining Walls", "Pavement Works"],
  },
  {
    title: "Renovation & Refurbishment",
    description: "Expert renovation and modernization of existing structures with minimal disruption.",
    icon: Wrench,
    features: ["Building Renovation", "Interior Fit-outs", "Facade Upgrades", "Structural Repairs", "MEP Upgrades", "Interior Design"],
  },
  {
    title: "Project Management",
    description: "Professional project management services ensuring timely and budget-conscious delivery.",
    icon: Ruler,
    features: ["Project Planning", "Cost Management", "Quality Control", "Risk Management", "Stakeholder Reports", "Handover Support"],
  },
]

const projectHighlights = [
  {
    title: "Commercial Complex - Benin City",
    category: "Commercial",
    location: "Edo State",
    year: "2023",
    description: "Construction of a modern commercial complex with offices, retail spaces and parking facilities.",
  },
  {
    title: "Residential Estate - Warri",
    category: "Residential",
    location: "Delta State",
    year: "2024",
    description: "Development of a 50-unit residential estate with roads, drainage and landscaping.",
  },
  {
    title: "Industrial Warehouse - Lagos",
    category: "Industrial",
    location: "Lagos State",
    year: "2023",
    description: "Construction of a 10,000 sqm industrial warehouse with office block and loading bay.",
  },
]

export default function BuildingConstructionPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-purple-100 via-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full translate-x-1/3 -translate-y-1/3 opacity-20" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                Building & Construction
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Quality Building
                <br />
                <span className="text-purple-600">& Construction Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                General building construction, civil works, and infrastructure development projects. 
                Quality craftsmanship and reliable project delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-2xl border border-purple-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">300+</div>
                <div className="text-sm text-gray-600">Buildings Completed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-purple-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-purple-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">36</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-purple-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Quality Delivery</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-purple-50/30 to-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              Our Construction Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Comprehensive Building Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {buildingServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-purple-500 to-purple-700">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-purple-600 hover:text-purple-700" asChild>
                      <Link href="/contact">
                        Discuss Your Project
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-lg text-purple-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for quality building and construction services. 
              From concept to completion, we deliver excellence.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-purple-600 hover:bg-purple-50 shadow-lg" variant="default">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
