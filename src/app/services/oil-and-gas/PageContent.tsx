"use client"

import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame, ArrowRight, CheckCircle, ChevronRight, Shield, Award, Wrench, Settings, HardHat } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const oilGasServices = [
  {
    title: "Construction",
    description: "General construction services for oil & gas facilities, industrial plants, and related infrastructure.",
    icon: Flame,
    features: ["Facility Construction", "Industrial Plants", "Storage Tanks", "Process Piping", "Structural Steel", "Commissioning"],
  },
  {
    title: "Steel Material Supply",
    description: "Supply of steel materials, reinforcement bars, structural steel, and related products for oil & gas projects.",
    icon: Wrench,
    features: ["Reinforcement Bars", "Structural Steel", "Steel Fabrication", "Pipe Supports", "Bulk Supply", "Quality Certified"],
  },
  {
    title: "Scaffold Material",
    description: "Supply and erection of scaffolding systems for construction, maintenance, and turnaround projects.",
    icon: Shield,
    features: ["Scaffolding Supply", "Erection Services", "Safety Compliance", "Inspection", "Dismantling", "Project Support"],
  },
  {
    title: "Gas Equipment",
    description: "Supply of industrial gas equipment including regulators, valves, piping systems and accessories.",
    icon: Settings,
    features: ["Gas Regulators", "Valves & Fittings", "Piping Systems", "Pressure Gauges", "Safety Devices", "Flow Meters"],
  },
  {
    title: "Fire Equipment",
    description: "Supply and installation of fire safety equipment, extinguishers, and alarm systems for oil & gas facilities.",
    icon: Shield,
    features: ["Fire Extinguishers", "Alarm Systems", "Fire Suppression", "Safety Training", "Maintenance", "Compliance"],
  },
  {
    title: "Heavy Equipment Leasing",
    description: "Leasing of heavy equipment including excavators, cranes, bulldozers, and loaders for oil & gas operations.",
    icon: HardHat,
    features: ["Excavators", "Cranes", "Bulldozers", "Loaders", "Operators Available", "Flexible Terms"],
  },
  {
    title: "Pipeline Services",
    description: "Pipeline construction, installation, maintenance, and repair services for oil & gas facilities.",
    icon: Wrench,
    features: ["Pipeline Installation", "Pipeline Maintenance", "Leak Detection", "Cathodic Protection", "Pigging Services", "Hydrostatic Testing"],
  },
  {
    title: "Oil & Gas Support",
    description: "Comprehensive support services for upstream, midstream, and downstream operations.",
    icon: Settings,
    features: ["Equipment Rental", "Technical Support", "Maintenance Contracts", "Spare Parts Supply", "Project Management", "HSE Compliance"],
  },
]

const safetyFeatures = [
  "ISO 45001 HSE Management",
  "DPR/NLNG Compliance",
  "Zero-incident track record",
  "Regular safety audits",
  "Emergency response teams",
  "HSE training programs",
]

export default function OilAndGasPageContent() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/oil-gas-hero.jpg" alt="Oil and gas facility" fill className="object-cover" priority />
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
                Oil and Gas
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Oil & Gas
                <br />
                <span className="text-red-400">Equipment & Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
                Construction, steel material supply, scaffold material, gas equipment, fire equipment, 
                heavy equipment leasing, pipeline services, and comprehensive oil & gas support solutions. 
                Trusted by major operators across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-red-600 hover:bg-red-700 text-white">
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
              <div className="bg-white p-6 rounded-2xl border border-red-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Safety Record</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">DPR</div>
                <div className="text-sm text-gray-600">Approved Vendor</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Support</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              Our Oil & Gas Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Comprehensive Oil & Gas Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From construction and material supply to equipment leasing and pipeline services — 
              we deliver end-to-end solutions for the oil & gas industry.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {oilGasServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-red-500 to-red-700">
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
                          <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-red-600 hover:text-red-700" asChild>
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
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Oil & Gas Projects
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse of our oil & gas operations and equipment in action across Nigeria.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.5 }}
              className="relative h-72 rounded-2xl overflow-hidden group"
            >
              <Image src="/oil-gallery-1.jpg" alt="Oil pipeline installation" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Pipeline Installation</p>
                <p className="text-gray-300 text-sm">Gas pipeline construction & laying</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative h-72 rounded-2xl overflow-hidden group"
            >
              <Image src="/oil-gallery-2.jpg" alt="Pipeline maintenance" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Pipeline Maintenance</p>
                <p className="text-gray-300 text-sm">Routine inspection & repair services</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative h-72 rounded-2xl overflow-hidden group"
            >
              <Image src="/oil-gallery-3.jpg" alt="Pipeline facility" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Gas Facility</p>
                <p className="text-gray-300 text-sm">Gas regulation & metering stations</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-r from-red-600 via-red-700 to-red-900 relative overflow-hidden">
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
              Partner with Trusted Oil & Gas Experts
            </h2>
            <p className="text-lg text-red-100 leading-relaxed mb-8">
              From gas equipment to pipeline services, we deliver safe, reliable solutions for the oil & gas industry.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-red-600 hover:bg-red-50 shadow-lg" variant="default">
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
