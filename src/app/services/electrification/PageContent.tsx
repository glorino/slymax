"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight, Zap, Sun, Settings, Shield } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const electrificationServices = [
  {
    title: "Power Distribution",
    description: "Complete power distribution system design, installation, and maintenance.",
    icon: Zap,
    features: ["HT/LT Distribution", "Substation Setup", "Cable Laying", "Panel Installation", "Load Management", "Power Quality"],
  },
  {
    title: "Solar Installation",
    description: "Solar power system installation for residential, commercial, and industrial applications.",
    icon: Sun,
    features: ["Solar Panels", "Inverter Systems", "Battery Storage", "Grid-Tie Systems", "Off-Grid Solutions", "Maintenance Plans"],
  },
  {
    title: "Transformer Setup",
    description: "Transformer procurement, installation, and commissioning for power distribution.",
    icon: Settings,
    features: ["Transformer Supply", "Installation Works", "Commissioning", "Oil Testing", "Maintenance", "Upgrades"],
  },
  {
    title: "Grid Connection",
    description: "Complete grid connection services from application to energization.",
    icon: Shield,
    features: ["Utility Liaison", "Application Processing", "Infrastructure Setup", "Testing & Commissioning", "Documentation", "Compliance"],
  },
]

const projectHighlights = [
  {
    title: "Rural Electrification Project",
    category: "Rural",
    location: "Edo State",
    year: "2024",
    description: "Electrification of 50 rural communities including distribution lines and transformer stations.",
  },
  {
    title: "Industrial Solar Installation",
    category: "Commercial",
    location: "Lagos State",
    year: "2023",
    description: "500kW solar power installation for a manufacturing facility reducing energy costs by 40%.",
  },
  {
    title: "Estate Power Distribution",
    category: "Residential",
    location: "Rivers State",
    year: "2024",
    description: "Complete power distribution system for a 200-unit residential estate with dedicated transformer.",
  },
]

export default function ElectrificationPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
                Electrification Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Complete
                <br />
                <span className="text-yellow-600">Electrification Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Power distribution, solar installation, transformer setup, and grid connection. 
                Bringing reliable electricity to communities and businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-yellow-600 hover:bg-yellow-700 text-white">
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
              <div className="bg-white p-6 rounded-2xl border border-yellow-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-yellow-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">50MW</div>
                <div className="text-sm text-gray-600">Capacity Installed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-yellow-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Communities Served</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-yellow-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Safety Compliance</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
              Our Electrification Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Powering Communities & Businesses
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {electrificationServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-yellow-500 to-yellow-700">
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
                          <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-yellow-600 hover:text-yellow-700" asChild>
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

      <section className="py-20 lg:py-32 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 relative overflow-hidden">
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
              Bring Reliable Power to Your Project
            </h2>
            <p className="text-lg text-yellow-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for complete electrification solutions. 
              From grid connections to solar installations, we power your success.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-yellow-600 hover:bg-yellow-50 shadow-lg" variant="default">
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
