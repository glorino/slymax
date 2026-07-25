"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Wrench, ArrowRight, CheckCircle, ChevronRight, Shield, Award, Truck as TruckIcon, Users,
  MapPin, Phone, Mail, Factory, Warehouse, Truck, Package, Layers, HardHat, Building2, Layout
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const scaffoldProducts = [
  {
    title: "Frame Scaffolding Systems",
    description: "Modular frame scaffolding for quick assembly and versatile access solutions.",
    icon: Factory,
    items: ["Walk-through Frames", "Masonry Frames", "Ladder Frames", "Snap-on Braces", "Base Plates & Jacks", "Guardrail Systems"],
  },
  {
    title: "Tube & Coupler Scaffolding",
    description: "Traditional tube and fitting system for complex geometries and heavy-duty applications.",
    icon: Layers,
    items: ["Steel Tubes (48.3mm)", "Right-angle Couplers", "Swivel Couplers", "Sleeve Couplers", "Base Plates", "Tie Testing Equipment"],
  },
  {
    title: "System Scaffolding (Ringlock/Cuplock)",
    description: "Modern modular systems for industrial, commercial, and infrastructure projects.",
    icon: Building2,
    items: ["Ringlock Standards", "Ringlock Ledgers", "Ringlock Braces", "Cuplock Standards", "Cuplock Ledgers", "Adapters & Accessories"],
  },
  {
    title: "Mobile Access Towers",
    description: "Lightweight aluminum towers for quick, safe access to heights up to 12m.",
    icon: Truck,
    items: ["Single Width Towers", "Double Width Towers", "Staircase Towers", "Folding Towers", "Outriggers & Stabilizers", "Toe Board Sets"],
  },
  {
    title: "Suspended & Specialty Access",
    description: "Specialized access solutions for facade maintenance, bridges, and industrial plants.",
    icon: HardHat,
    items: ["Suspended Platforms", "Bosun Chairs", "Rope Access Gear", "Mast Climbers", "Bridge Access Systems", "Tank & Vessel Access"],
  },
  {
    title: "Safety & Accessories",
    description: "Complete range of safety equipment and accessories for compliant scaffold installations.",
    icon: Shield,
    items: ["Toe Boards & Guardrails", "Ladder Access Gates", "Scaffold Tags & Signage", "Safety Netting", "Sheeting & Containment", "Inspection & Tagging Systems"],
  },
]

const services = [
  { icon: Shield, title: "Sales & Supply", description: "New scaffolding materials from leading manufacturers with full certification." },
  { icon: Award, title: "Rental Services", description: "Flexible short and long-term rental with delivery, erection, and dismantling." },
  { icon: TruckIcon, title: "Installation & Dismantling", description: "Certified scaffolders for safe erection, alteration, and dismantling." },
  { icon: Users, title: "Inspection & Certification", description: "Weekly statutory inspections, handover certificates, and tagging systems." },
  { icon: Layout, title: "Design & Planning", description: "Scaffold design drawings, method statements, and risk assessments." },
  { icon: Building2, title: "Training & Supervision", description: "Scaffold safety training, competent person courses, and site supervision." },
]

const certifications = [
  "NASC SG4:15 Compliance",
  "BS EN 12811 Standards",
  "ISO 9001:2015 Quality Management",
  "ISO 45001:2018 OH&S Management",
  "CISRS Certified Scaffolders",
  "HSE Compliant Inspections",
]

export default function ScaffoldMaterialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-6">
                Scaffold Material
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Safe Access Solutions
                <br />
                <span className="text-orange-600">For Every Height</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Complete scaffolding systems - sales, rental, installation, and inspection. 
                NASC compliant, CISRS certified teams, nationwide coverage across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-orange-600 hover:bg-orange-700">
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
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Served</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">NASC Compliant</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Response</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Certified Scaffolders</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="products-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-4">
              Our Scaffolding Range
            </span>
            <h2 id="products-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Access Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From traditional tube & coupler to modern system scaffolding - every system for every application
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {scaffoldProducts.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6 bg-orange-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                      <category.icon className="h-7 w-7 text-orange-600" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {category.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                      {category.items.length > 4 && (
                        <li className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                          +{category.items.length - 4} more items
                        </li>
                      )}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-orange-600 hover:text-orange-700" asChild>
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
            <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-4">
              Comprehensive Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              End-to-End Scaffolding Support
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              More than materials - complete project support from design to dismantling
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
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
            <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-4">
              Standards & Compliance
            </span>
            <h2 id="certs-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Safety Standards Certified
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every installation meets and exceeds industry safety standards
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors flex-shrink-0">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-medium text-gray-900 text-sm leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-900 relative overflow-hidden">
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
              Need Safe Access for Your Project?
            </h2>
            <p className="text-lg text-orange-100 leading-relaxed mb-8">
              Get expert scaffolding solutions tailored to your project requirements.
              Sales, rental, installation, and inspection - all from one trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Request Scaffold Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <Link href="/services/construction">
                  Construction Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}