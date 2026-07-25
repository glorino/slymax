"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Flame, ArrowRight, CheckCircle, ChevronRight, Shield, Award, Truck as TruckIcon, Users,
  MapPin, Phone, Mail, Factory, Warehouse, Truck, Package, Layers, HardHat, Building2, Gauge, Wrench, Settings, Bell, Droplet, FireExtinguisher
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const fireProducts = [
  {
    title: "Fire Extinguishers",
    description: "Complete range of portable and wheeled extinguishers for all fire classes.",
    icon: FireExtinguisher,
    items: ["CO2 Extinguishers (2-45kg)", "Dry Powder (ABC/BC)", "Foam Extinguishers", "Water Extinguishers", "Wet Chemical (Class F)", "Wheeled Units (25-150kg)"],
  },
  {
    title: "Fire Hydrant & Hose Systems",
    description: "Complete hydrant systems for industrial, commercial, and municipal applications.",
    icon: Droplet,
    items: ["Pillar Hydrants", "Underground Hydrants", "Landing Valves", "Fire Hose Reels", "Canvas/Rubber Hoses", "Branch Pipes & Nozzles"],
  },
  {
    title: "Sprinkler & Suppression Systems",
    description: "Automatic fire suppression for buildings, industrial plants, and special hazards.",
    icon: Settings,
    items: ["Wet Pipe Sprinklers", "Dry Pipe Sprinklers", "Pre-action Systems", "Deluge Systems", "FM-200/Novec 1230", "CO2 Flooding Systems"],
  },
  {
    title: "Fire Detection & Alarm",
    description: "Early warning systems for life safety and asset protection.",
    icon: Bell,
    items: ["Addressable Fire Panels", "Conventional Panels", "Smoke/Heat Detectors", "Manual Call Points", "Sounders & Beacons", "Aspirating Detection"],
  },
  {
    title: "Fire Pumps & Water Storage",
    description: "Reliable water supply for fire protection systems.",
    icon: Gauge,
    items: ["Electric Fire Pumps", "Diesel Fire Pumps", "Jockey Pumps", "Pressure Booster Sets", "Water Storage Tanks", "Pump Controllers"],
  },
  {
    title: "Passive Fire Protection",
    description: "Fire rated barriers, coatings, and compartmentation systems.",
    icon: Shield,
    items: ["Intumescent Coatings", "Fire Rated Doors", "Fire Dampers", "Penetration Seals", "Fire Curtains", "Cable & Pipe Coatings"],
  },
]

const services = [
  { icon: Shield, title: "System Design & Engineering", description: "Fire protection design to NFPA, BS, and local codes with hydraulic calculations." },
  { icon: Award, title: "Installation & Commissioning", description: "Professional installation, pressure testing, flushing, and system commissioning." },
  { icon: TruckIcon, title: "Inspection & Maintenance", description: "Monthly, quarterly, annual inspections per NFPA 25 and local regulations." },
  { icon: Users, title: "Certification & Compliance", description: "Fire certificates, NFPA compliance reports, and authority approvals." },
  { icon: Bell, title: "Emergency Response", description: "24/7 emergency repair for sprinkler bursts, pump failures, and alarm faults." },
  { icon: Wrench, title: "Training & Drills", description: "Fire warden training, extinguisher handling, and emergency evacuation drills." },
]

const certifications = [
  "NFPA 10 / 13 / 14 / 20 / 25 Compliance",
  "BS 5306 / BS EN 3 Standards",
  "NIS ISO 7165 / 9001 Certification",
  "FM Approved / UL Listed Products",
  "Lagos State Fire Service Approved",
  "Federal Fire Service Registered",
]

export default function FireEquipmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-red-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-6">
                Fire Equipment
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Total Fire Protection
                <br />
                <span className="text-red-600">For Life & Asset Safety</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Complete fire fighting equipment, detection, suppression, and passive protection.
                NFPA compliant installation, maintenance, and certification across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-red-600 hover:bg-red-700">
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">1000+</div>
                <div className="text-sm text-gray-600">Systems Installed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">NFPA</div>
                <div className="text-sm text-gray-600">Compliant Designs</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Certified Technicians</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="products-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-4">
              Our Fire Protection Range
            </span>
            <h2 id="products-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Fire Safety Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From portable extinguishers to total flooding systems - every layer of protection
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {fireProducts.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6 bg-red-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                      <category.icon className="h-7 w-7 text-red-600" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {category.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                      {category.items.length > 4 && (
                        <li className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                          +{category.items.length - 4} more products
                        </li>
                      )}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-red-600 hover:text-red-700" asChild>
                      <Link href="/contact">
                        View Specifications
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

      {/* Services */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-4">
              Life Safety Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              End-to-End Fire Protection Support
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Design, install, maintain, certify - complete lifecycle fire safety management
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 mb-4">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="certs-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-4">
              Standards & Compliance
            </span>
            <h2 id="certs-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Certified Life Safety Systems
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every installation meets national and international fire codes
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors flex-shrink-0">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-medium text-gray-900 text-sm leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
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
              Protect Your People & Assets
            </h2>
            <p className="text-lg text-red-100 leading-relaxed mb-8">
              Get a comprehensive fire safety assessment and tailored protection plan.
              NFPA compliant design, installation, and lifetime maintenance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Schedule Assessment
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <Link href="/services/gas-equipment">
                  Gas Equipment
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}