"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, CheckCircle, ChevronRight, Shield, Award, Truck, Truck as TruckIcon, Users,
  MapPin, Phone, Mail, Factory, Warehouse, HardHat, Building2, Gauge, Wrench, Settings, Loader, Cpu, Zap, RotateCcw, Maximize2
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const craneTypes = [
  {
    title: "Wall-Mounted Jib Cranes",
    description: "Space-saving cranes mounted on building columns or walls for workstation coverage.",
    icon: Building2,
    items: ["200° & 360° Rotation", "Capacities: 125kg - 10T", "Boom Lengths: 2-10m", "Cantilever & Tie-rod Designs", "Manual & Motorized Rotation", "IP54/IP65 Hoist Options"],
  },
  {
    title: "Floor-Mounted (Free-standing) Jibs",
    description: "Independent column-mounted cranes for flexible layout and maximum coverage.",
    icon: Maximize2,
    items: ["360° Continuous Rotation", "Capacities: 250kg - 20T", "Boom Lengths: 3-15m", "Base Plate & Anchor Bolt", "Foundation Design Included", "Indoor & Outdoor Rated"],
  },
  {
    title: "Articulating Jib Cranes",
    description: "Dual-arm cranes for reaching around obstacles and into machines.",
    icon: RotateCcw,
    items: ["Primary + Secondary Arm", "Capacities: 125kg - 2T", "Reach: 4-12m Total", "180°+180° Articulation", "Ergonomic Workstation Access", "Cleanroom Options Available"],
  },
  {
    title: "Mast-Type Jib Cranes",
    description: "Heavy-duty floor-to-ceiling mounted for maximum capacity and span.",
    icon: Factory,
    items: ["Floor & Ceiling Braced", "Capacities: 1T - 20T", "Spans: 4-20m", "360° Rotation", "High Cycle Duty", "Explosion Proof Options"],
  },
  {
    title: "Portable & Mobile Jibs",
    description: "Forklift-mounted and base-weighted cranes for temporary or relocatable needs.",
    icon: Truck,
    items: ["Fork Pocket Mounted", "Base Weighted (No Anchors)", "Capacities: 250kg - 5T", "Quick Relocation", "Construction Site Rated", "Rental Fleet Available"],
  },
  {
    title: "Custom Engineered Solutions",
    description: "Bespoke lifting systems for unique applications and environments.",
    icon: Settings,
items: ["Stainless Steel (Food/Pharma)", "Explosion Proof (Oil & Gas)", "Cleanroom Class 100/1000", "Outdoor Marine Grade", "Automated/Positioning", "Integrated with Conveyors"],
  }
]

const services = [
  { icon: Shield, title: "Design & Engineering", description: "Structural calculations, GA drawings, FEA analysis, and code compliance (ASME B30.11, EN 13155)." },
  { icon: Award, title: "Fabrication & Manufacturing", description: "In-house fabrication - cutting, welding, machining, painting, and quality testing." },
  { icon: TruckIcon, title: "Installation & Commissioning", description: "Foundation works, erection, alignment, load testing, and handover certification." },
  { icon: Users, title: "Inspection & Certification", description: "Annual thorough examinations, LOLER compliance, load testing, and certification." },
  { icon: Gauge, title: "Maintenance & Repair", description: "Preventive maintenance contracts, breakdown repair, parts supply, and modernization." },
  { icon: Wrench, title: "Operator Training", description: "Accredited crane operator training, slinger/signaller courses, and refresher training." },
]

const certifications = [
  "ASME B30.11 Monorail & Underhung Cranes",
  "EN 13155 Cranes - Safety Requirements",
  "ISO 9001:2015 Manufacturing Quality",
  "ISO 3834 Welding Quality Requirements",
  "LOLER 1998 Thorough Examination",
  "NASC & CMAA Member Standards",
]

export default function JibCranePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-purple-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6">
                Jib Crane Supply
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Precision Lifting Solutions
                <br />
                <span className="text-purple-600">Engineered for Your Workspace</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Custom jib cranes - wall-mounted, floor-mounted, articulating, and portable.
                Design, fabrication, installation, and lifetime support across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">
                    Request Design
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
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Cranes Installed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">20T</div>
                <div className="text-sm text-gray-600">Max Capacity</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">15m</div>
                <div className="text-sm text-gray-600">Max Span</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">10yr</div>
                <div className="text-sm text-gray-600">Warranty Available</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Crane Types */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="types-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
              Our Jib Crane Range
            </span>
            <h2 id="types-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Every Lifting Challenge Solved
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From compact workstation cranes to heavy-duty mast systems - configured for your application
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {craneTypes.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6 bg-purple-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                      <category.icon className="h-7 w-7 text-purple-600" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {category.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                      {category.items.length > 4 && (
                        <li className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                          +{category.items.length - 4} more specs
                        </li>
                      )}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-purple-600 hover:text-purple-700" asChild>
                      <Link href="/contact">
                        View Technical Data
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
            <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
              Complete Lifecycle Support
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              From Concept to Certification
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Full engineering, fabrication, installation, and lifetime maintenance services
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-4">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="process-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Streamlined Delivery
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Proven methodology from inquiry to certified installation
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { step: "01", title: "Consultation", desc: "Site survey, requirements analysis, and concept proposal" },
              { step: "02", title: "Engineering", desc: "Structural design, calculations, GA drawings, and approvals" },
              { step: "03", title: "Fabrication", desc: "In-house manufacturing with quality control at every stage" },
              { step: "04", title: "Installation", desc: "Professional erection, alignment, and load testing" },
              { step: "05", title: "Certification", desc: "Thorough examination, certification, and handover" },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                {index < 4 && (
                  <div className="absolute top-8 left-[50%] right-[50%] h-0.5 bg-gray-200 hidden lg:block" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="certs-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
              Standards & Compliance
            </span>
            <h2 id="certs-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Engineered to International Standards
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every crane meets rigorous design, manufacturing, and safety codes
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors flex-shrink-0">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-medium text-gray-900 text-sm leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
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
              Ready to Lift Efficiency?
            </h2>
            <p className="text-lg text-purple-100 leading-relaxed mb-8">
              Get a free site survey, concept design, and budget quote.
              Our crane engineers will help you select the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Get Free Design Proposal
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <Link href="/services/heavy-equipment-leasing">
                  Heavy Equipment Leasing
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}