"use client"

import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight, CheckCircle, ChevronRight, MapPin, Building2, Key, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const realEstateServices = [
  {
    title: "Property Development",
    description: "Complete property development from land acquisition to construction and handover.",
    icon: Building2,
    features: ["Residential Estates", "Commercial Complexes", "Mixed-Use Developments", "Land Surveying", "Building Design", "Project Management"],
  },
  {
    title: "Land Sales & Flipping",
    description: "Strategic land acquisition, development, and sales across prime locations in Nigeria.",
    icon: MapPin,
    features: ["Prime Land Acquisition", "Land Documentation", "Title Processing", "Survey & Mapping", "Investment Advisory", "Market Analysis"],
  },
  {
    title: "Property Leasing",
    description: "Commercial and residential property leasing services with management support.",
    icon: Key,
    features: ["Office Space Leasing", "Residential Leasing", "Commercial Properties", "Lease Negotiation", "Tenant Management", "Property Maintenance"],
  },
  {
    title: "Real Estate Blogging",
    description: "Expert real estate insights, market analysis, and investment guidance.",
    icon: FileText,
    features: ["Market Reports", "Investment Guides", "Property Valuations", "Legal Guidance", "Tax Advisory", "ROI Analysis"],
  },
]

const whyChooseUs = [
  "Strategic locations across Nigeria",
  "Transparent documentation process",
  "Competitive pricing and flexible payments",
  "Professional property management",
  "Legal title verification",
  "ROI-focused investment advisory",
]

export default function RealEstatePageContent() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/real-estate-hero.jpg" alt="Real estate development" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                Real Estate Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Real Estate
                <br />
                <span className="text-emerald-400">Development & Leasing</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
                Land development, property development, property leasing, and general civil works. 
                Trusted by investors and developers across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 bg-white/15 backdrop-blur-sm text-white border-white/25 hover:bg-white/25">
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
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Properties Developed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Estates Plotted</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-1">₦5B+</div>
                <div className="text-sm text-gray-600">Portfolio Value</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Title Documentation</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Our Real Estate Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Real Estate Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {realEstateServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-emerald-500 to-emerald-700">
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
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-emerald-600 hover:text-emerald-700" asChild>
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

      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Real Estate Projects
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse of our property development and real estate projects.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0, duration: 0.5 }} className="relative h-72 rounded-2xl overflow-hidden group">
              <Image src="/estate-gallery-1.jpg" alt="Residential estate development" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Residential Estates</p>
                <p className="text-gray-300 text-sm">Modern housing development</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="relative h-72 rounded-2xl overflow-hidden group">
              <Image src="/estate-gallery-2.jpg" alt="Property development" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Property Development</p>
                <p className="text-gray-300 text-sm">Commercial & residential buildings</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="relative h-72 rounded-2xl overflow-hidden group">
              <Image src="/estate-gallery-3.jpg" alt="Estate planning" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Estate Planning</p>
                <p className="text-gray-300 text-sm">Land surveying & documentation</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-900 relative overflow-hidden">
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
              Invest in Nigeria&apos;s Future
            </h2>
            <p className="text-lg text-emerald-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for premium real estate opportunities. 
              From land acquisition to property development, we deliver value.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg" variant="default">
              <Link href="/contact">
                Start Your Investment
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
