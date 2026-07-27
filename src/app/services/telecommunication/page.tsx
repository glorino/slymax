"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Signal, ArrowRight, CheckCircle, ChevronRight, Shield, Award, Truck as TruckIcon, Users, Wifi, Radio, Zap, Cable } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const telecomServices = [
  {
    title: "Site Maintenance",
    description: "Regular and preventive maintenance of telecom sites to ensure optimal network performance.",
    icon: Shield,
    features: ["Preventive Maintenance", "Corrective Maintenance", "Site Surveys", "Equipment Monitoring", "Generator Servicing", "Battery & Charger Maintenance"],
  },
  {
    title: "Site Construction",
    description: "Complete telecom site construction from foundation to equipment installation and commissioning.",
    icon: Signal,
    features: ["Site Preparation", "Foundation Works", "Equipment Installation", "Power Systems", "Grounding & Lightning", "Commissioning"],
  },
  {
    title: "Mast Building",
    description: "Construction and erection of communication masts and towers for network operators.",
    icon: Radio,
    features: ["Guyed Masts", "Self-Supporting Towers", "Monopole Installation", "Tower Inspection", "Structural Analysis", "Maintenance & Repair"],
  },
  {
    title: "Fibre Optics Laying",
    description: "Underground and aerial fibre optic cable laying, splicing, and testing services.",
    icon: Cable,
    features: ["Underground Ducting", "Aerial Cable Laying", "Fibre Splicing", "OTDR Testing", "Fusion Splicing", "Cable Jointing"],
  },
  {
    title: "Aviation Light Installation",
    description: "Installation and maintenance of aviation warning lights on telecom structures.",
    icon: Zap,
    features: ["Obstruction Light Installation", "Solar Aviation Lights", "Light Monitoring Systems", "FAA Compliance", "Monthly Inspections", "Emergency Replacement"],
  },
  {
    title: "Network Support",
    description: "Comprehensive network support and infrastructure management services.",
    icon: Wifi,
    features: ["24/7 Technical Support", "Remote Monitoring", "Fault Resolution", "Infrastructure Management", "Spare Parts Supply", "Performance Reporting"],
  },
]

const clients = [
  "IPT Power Tech",
  "IHS Tower Company",
  "MTN Nigeria",
  "Glo Mobile",
  "Airtel Networks",
  "9Mobile",
]

const certifications = [
  "SON Certified Equipment",
  "ISO 9001:2015 Quality Management",
  "NCC Approved Contractor",
  "Nigerian Society of Engineers Member",
  "COREN Registered Engineers",
  "HSE Compliance Certified",
]

export default function TelecommunicationPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                Telecommunication Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Reliable Telecom
                <br />
                <span className="text-blue-600">Infrastructure Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Complete telecommunication services - site maintenance, construction, mast building, 
                fibre optics laying, and aviation light installation. Trusted by major network operators across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/services">
                    All Services
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Sites Maintained</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Masts Built</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">36</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Our Telecom Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              End-to-End Telecom Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {telecomServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-700">
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
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-blue-600 hover:text-blue-700" asChild>
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

      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50" aria-labelledby="clients-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Our Clients
            </span>
            <h2 id="clients-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow text-center"
              >
                <p className="font-semibold text-gray-900">{client}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
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
              Ready to Build Your Telecom Infrastructure?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for reliable telecommunication services. 
              From site construction to fibre optics, we deliver quality and on-time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 shadow-lg" variant="default">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
