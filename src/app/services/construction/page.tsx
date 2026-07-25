"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  HardHat, Building2, Wrench, Flame, Truck, 
  ArrowRight, CheckCircle, ChevronRight, Shield, Award, Truck as TruckIcon, Users,
  MapPin, Phone, Mail, ClipboardList, Settings, Factory, Home, Warehouse
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const constructionServices = [
  {
    title: "Building Construction",
    description: "Complete residential, commercial, and institutional building construction from foundation to handover.",
    icon: Home,
    features: ["Residential Estates", "Commercial Complexes", "Educational Facilities", "Healthcare Facilities", "Religious Buildings", "Government Buildings"],
  },
  {
    title: "Civil Engineering Works",
    description: "Major infrastructure projects including roads, bridges, drainage, and earthworks.",
    icon: Factory,
    features: ["Road Construction", "Bridge Construction", "Drainage Systems", "Earthworks & Grading", "Retaining Walls", "Pavement Works"],
  },
  {
    title: "Industrial Facilities",
    description: "Specialized construction for manufacturing, oil & gas, and processing facilities.",
    icon: Warehouse,
    features: ["Factories & Warehouses", "Oil & Gas Facilities", "Power Plants", "Processing Plants", "Storage Tanks", "Piping Systems"],
  },
  {
    title: "Renovation & Refurbishment",
    description: "Expert renovation and modernization of existing structures with minimal disruption.",
    icon: Settings,
    features: ["Building Renovation", "Facade Upgrades", "Interior Fit-outs", "Structural Strengthening", "MEP Upgrades", "Heritage Restoration"],
  },
]

const projectHighlights = [
  {
    title: "Federal Secretariat Complex - Abuja",
    category: "Government Building",
    location: "FCT Abuja",
    year: "2022",
    description: "Complete construction of 15-storey federal government office complex with 50,000 sqm floor area.",
    icon: Building2,
  },
  {
    title: "Lagos-Ibadan Expressway Section",
    category: "Road Construction",
    location: "Ogun State",
    year: "2023",
    description: "Reconstruction of 40km dual carriageway with bridges, drainage, and street lighting.",
    icon: HardHat,
  },
  {
    title: "NNPC Depot Expansion - Warri",
    category: "Industrial Facility",
    location: "Delta State",
    year: "2021",
    description: "Expansion of petroleum storage depot including 10 new tanks, loading gantry, and fire systems.",
    icon: Factory,
  },
  {
    title: "University Teaching Hospital - Owerri",
    category: "Healthcare Facility",
    location: "Imo State",
    year: "2020",
    description: "Construction of 500-bed teaching hospital with theaters, labs, and staff accommodation.",
    icon: Home,
  },
]

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 45001:2018 Occupational Health & Safety",
  "COREN Registered Engineering Firm",
  "Federal Ministry of Works Grade A Contractor",
  "NNPC/DPR Approved Contractor",
  "State Government Approved Contractors",
]

export default function ConstructionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                Construction Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Building Nigeria's
                <br />
                <span className="text-blue-600">Future, One Project at a Time</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Complete building and civil engineering solutions delivered with precision, safety, and quality.
                50+ years of construction excellence across residential, commercial, and industrial sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/projects">
                    View Projects
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
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">36</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Expert Team</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Offered */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              Our Construction Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From concept to completion, we handle every aspect of your construction project
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {constructionServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6 bg-blue-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                      <service.icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
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

      {/* Project Highlights */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="projects-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              Featured Projects
            </span>
            <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Delivering Landmark Projects Across Nigeria
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A portfolio of successful construction projects demonstrating our capability and commitment to excellence
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projectHighlights.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6 bg-gray-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                      <project.icon className="h-8 w-8 text-gray-400" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge variant="outline">{project.year}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.location}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <Button variant="ghost" className="w-full justify-start px-0 text-blue-600 hover:text-blue-700" asChild>
                      <Link href="/projects">
                        View Project Details
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

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="certs-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              Standards & Compliance
            </span>
            <h2 id="certs-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Certified for Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We maintain the highest industry standards through rigorous certifications and approvals
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-medium text-gray-900 text-sm leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
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
              Ready to Build Your Vision?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for your next construction project. 
              From concept to completion, we deliver quality, safety, and on-time delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <Link href="/services">
                  Explore All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}