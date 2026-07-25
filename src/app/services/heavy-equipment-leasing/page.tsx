"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Truck, ArrowRight, CheckCircle, ChevronRight, Shield, Award, Truck as TruckIcon, Users,
  MapPin, Phone, Mail, Factory, Warehouse, HardHat, Building2, Gauge, Wrench, Settings, Loader, Cpu, Zap
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const equipmentFleet = [
  {
    title: "Excavators",
    description: "Crawler and wheeled excavators for excavation, trenching, and material handling.",
    icon: Loader,
    items: ["Mini Excavators (1-8T)", "Standard Excavators (20-35T)", "Large Excavators (40-80T)", "Long Reach Excavators", "Amphibious Excavators", "Demolition Excavators"],
  },
  {
    title: "Mobile Cranes",
    description: "All-terrain and rough-terrain cranes for lifting operations across all sectors.",
    icon: Cpu,
    items: ["Rough Terrain (30-80T)", "All Terrain (50-200T)", "Truck Mounted (25-100T)", "Crawler Cranes (50-300T)", "Pick & Carry Cranes", "Spider Cranes"],
  },
  {
    title: "Bulldozers & Graders",
    description: "Earthmoving and grading equipment for site preparation and road works.",
    icon: Settings,
    items: ["Crawler Dozers (D6-D10)", "Wheel Dozers", "Motor Graders (12-16ft)", "Compact Track Loaders", "Skid Steer Loaders", "Angle Dozers"],
  },
  {
    title: "Compaction Equipment",
    description: "Soil and asphalt compaction for foundations, roads, and pavements.",
    icon: Zap,
    items: ["Smooth Drum Rollers (10-15T)", "Padfoot Rollers", "Pneumatic Rollers", "Tandem Rollers (3-12T)", "Plate Compactors", "Trench Rollers"],
  },
  {
    title: "Wheel Loaders & Backhoes",
    description: "Material loading and handling for quarries, construction, and logistics.",
    icon: Warehouse,
    items: ["Wheel Loaders (3-50T)", "Backhoe Loaders", "Telehandlers", "Forklifts (2-45T)", "Reach Stackers", "Container Handlers"],
  },
  {
    title: "Specialized Equipment",
    description: "Specialized machinery for unique project requirements.",
    icon: HardHat,
    items: ["Piling Rigs", "Drilling Rigs", "Trenchers", "Concrete Pumps", "Asphalt Pavers", "Milling Machines"],
  },
]

const rentalOptions = [
  { icon: Shield, title: "Operated Rental", description: "Equipment with certified operators, fuel, and maintenance included. Daily/weekly/monthly rates." },
  { icon: Award, title: "Dry Hire", description: "Equipment only for clients with their own certified operators. Flexible terms from 1 day." },
  { icon: TruckIcon, title: "Long-term Lease", description: "12-60 month leases with fixed monthly rates, maintenance packages, and upgrade options." },
  { icon: Users, title: "Project Packages", description: "Turnkey equipment packages for specific projects with dedicated fleet and management." },
  { icon: Gauge, title: "Maintenance & Support", description: "24/7 breakdown support, preventive maintenance, and on-site service technicians." },
  { icon: Wrench, title: "Operator Training", description: "Certified operator training programs, assessments, and competency verification." },
]

const certifications = [
  "ISO 9001:2015 Fleet Management",
  "ISO 45001:2018 Safety Certified",
  "CPCS Certified Operators",
  "NUPRC/DPR Approved Vendor",
  "Federal Ministry of Works Grade A",
  "Lagos State Equipment Registry",
]

export default function HeavyEquipmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-yellow-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
                Heavy Equipment Leasing
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Power Your Projects with
                <br />
                <span className="text-yellow-600">Modern Heavy Machinery</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Modern fleet of excavators, cranes, bulldozers, and specialized equipment.
                Operated rental, dry hire, or long-term lease with certified operators nationwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/contact">
                    Request Equipment
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
                <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">150+</div>
                <div className="text-sm text-gray-600">Equipment Units</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Fleet Availability</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">36</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Hotline</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Equipment Fleet */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="fleet-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
              Our Equipment Fleet
            </span>
            <h2 id="fleet-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Modern, Maintained, Ready to Work
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Late-model equipment from top manufacturers - Caterpillar, Komatsu, Liebherr, and more
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {equipmentFleet.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6 bg-yellow-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                      <category.icon className="h-7 w-7 text-yellow-600" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {category.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                      {category.items.length > 4 && (
                        <li className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                          +{category.items.length - 4} more models
                        </li>
                      )}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-yellow-600 hover:text-yellow-700" asChild>
                      <Link href="/contact">
                        Check Availability
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

      {/* Rental Options */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="rental-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
              Flexible Rental Solutions
            </span>
            <h2 id="rental-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Rental Terms to Fit Your Project
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From single-day hire to multi-year leases - we structure deals around your needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rentalOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 mb-4">
                  <option.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 leading-relaxed">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="certs-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
              Safety & Compliance
            </span>
            <h2 id="certs-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Certified Operations Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every machine, operator, and process meets the highest industry standards
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors flex-shrink-0">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-medium text-gray-900 text-sm leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-900 relative overflow-hidden">
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
              Need Equipment for Your Next Project?
            </h2>
            <p className="text-lg text-yellow-100 leading-relaxed mb-8">
              Get equipment recommendations, rates, and availability within 2 hours.
              Our fleet managers are ready to support your project planning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-yellow-600 hover:bg-yellow-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Get Equipment Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <Link href="/services/jib-crane-supply">
                  Jib Crane Supply
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}