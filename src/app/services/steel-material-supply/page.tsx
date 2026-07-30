"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight, Shield, Truck, Factory, HardHat } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const steelServices = [
  {
    title: "Reinforcement Bars Supply",
    description: "High-quality reinforcement bars (rebar) for concrete structures in all grades and sizes.",
    icon: Factory,
    features: ["Grade 60 Rebar", "Cold-Drawn Wire", "Mesh Fabrication", "Cut & Bend Services", "Bulk Supply", "Custom Lengths"],
  },
  {
    title: "Structural Steel",
    description: "Structural steel sections for building frames, bridges, and industrial structures.",
    icon: Shield,
    features: ["I-Beams & Channels", "Angle Irons", "Steel Plates", "Hollow Sections", "Custom Fabrication", "Large Inventory"],
  },
  {
    title: "Steel Fabrication",
    description: "Custom steel fabrication services for construction and industrial applications.",
    icon: HardHat,
    features: ["Metal Structures", "Steel Trusses", "Custom Components", "Welding Services", "CNC Cutting", "Surface Treatment"],
  },
  {
    title: "Bulk Supply & Logistics",
    description: "Reliable bulk steel supply with efficient logistics and timely delivery nationwide.",
    icon: Truck,
    features: ["Nationwide Delivery", "Bulk Pricing", "Just-in-Time Supply", "Warehouse Storage", "Fleet Management", "Order Tracking"],
  },
]

const projectHighlights = [
  {
    title: "High-Rise Building Rebar Supply",
    category: "Commercial",
    location: "Lagos State",
    year: "2024",
    description: "Supply of 500 tonnes of Grade 60 reinforcement bars for a 20-story commercial tower.",
  },
  {
    title: "Bridge Infrastructure Project",
    category: "Infrastructure",
    location: "Edo State",
    year: "2023",
    description: "Supply of structural steel sections for a major bridge construction project.",
  },
  {
    title: "Industrial Factory Framework",
    category: "Industrial",
    location: "Rivers State",
    year: "2024",
    description: "Fabrication and supply of 200 tonnes of steel framework for a manufacturing facility.",
  },
]

export default function SteelMaterialSupplyPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-steel-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-slate-700 text-white text-sm font-medium mb-6">
                Steel Material Supply
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Premium Steel
                <br />
                <span className="text-slate-700">Material Supply</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                High-quality reinforcement bars, structural steel, and custom steel fabrication 
                for construction and industrial projects. Reliable supply chain nationwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-700 hover:bg-slate-800 text-white">
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
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-slate-700 mb-1">10K+</div>
                <div className="text-sm text-gray-600">Tonnes Supplied</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-slate-700 mb-1">150+</div>
                <div className="text-sm text-gray-600">Projects Served</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-slate-700 mb-1">24</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-slate-700 mb-1">100%</div>
                <div className="text-sm text-gray-600">Quality Assured</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
              Our Steel Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Steel Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {steelServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-slate-600 to-slate-800">
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
                          <CheckCircle className="h-4 w-4 text-slate-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-slate-600 hover:text-slate-700" asChild>
                      <Link href="/contact">
                        Request a Quote
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

      <section className="py-20 lg:py-32 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-900 relative overflow-hidden">
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
              Need Reliable Steel Supply?
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for premium steel materials and fabrication services. 
              From bulk orders to custom solutions, we deliver quality and reliability.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-slate-700 hover:bg-slate-50 shadow-lg" variant="default">
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
