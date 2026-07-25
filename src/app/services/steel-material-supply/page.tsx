"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, ArrowRight, CheckCircle, ChevronRight, Shield, Award, Truck as TruckIcon, Users,
  MapPin, Phone, Mail, Factory, Warehouse, Truck, Package, Layers
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const steelProducts = [
  {
    title: "Structural Steel Sections",
    description: "Wide range of structural steel profiles for building frames, bridges, and industrial structures.",
    icon: Factory,
    items: ["I-Beams (UB/UC)", "H-Beams", "Channels (U/C)", "Angles (L)", "T-Sections", "Hollow Sections (SHS/RHS/CHS)"],
  },
  {
    title: "Reinforcement Steel",
    description: "High-grade reinforcement bars and mesh for concrete structures meeting Nigerian and international standards.",
    icon: Layers,
    items: ["Deformed Bars (Y10-Y40)", "Plain Round Bars", "Welded Mesh", "Cut & Bend Services", "Couplers & Anchors", "Epoxy Coated Rebar"],
  },
  {
    title: "Steel Pipes & Tubes",
    description: "Comprehensive range of pipes and tubes for structural, mechanical, and piping applications.",
    icon: Truck,
    items: ["Seamless Pipes", "Welded Pipes (ERW/LSAW)", "Structural Tubes", "API Line Pipes", "Casing & Tubing", "Pipe Fittings & Flanges"],
  },
  {
    title: "Roofing & Cladding",
    description: "Quality roofing sheets and cladding systems for residential, commercial, and industrial buildings.",
    icon: Warehouse,
    items: ["Aluzinc/Aluminum Sheets", "Galvanized Sheets (GCI)", "Color Coated Sheets", "Insulated Panels", "Roofing Accessories", "Flashings & Trims"],
  },
  {
    title: "Plate & Sheet Metal",
    description: "Steel plates and sheets in various grades, thicknesses, and finishes for fabrication and construction.",
    icon: Package,
    items: ["Mild Steel Plates", "Chequered Plates", "Hot Rolled Sheets", "Cold Rolled Sheets", "Stainless Steel Sheets", "Custom Cutting Services"],
  },
  {
    title: "Specialty Steel Products",
    description: "Specialized steel products for specific industrial and construction applications.",
    icon: Building2,
    items: ["Railway Tracks & Accessories", "Sheet Piles", "Strand & Wire", "Steel Grating", "Expanded Metal", "Custom Fabrication"],
  },
]

const valueProps = [
  { icon: Shield, title: "Certified Quality", description: "All materials sourced from certified mills with full traceability and test certificates." },
  { icon: Award, title: "Competitive Pricing", description: "Direct mill relationships and bulk purchasing power ensure best market prices." },
  { icon: TruckIcon, title: "Nationwide Delivery", description: "Logistics fleet covering all 36 states and FCT with real-time tracking." },
  { icon: Users, title: "Technical Support", description: "In-house engineers for material selection, specification, and project consultation." },
]

const certifications = [
  "SON Certified Products (NIS ISO 6935)",
  "BS EN 10025 Structural Steel Standards",
  "ASTM A615/A615M Rebar Standards",
  "API 5L Line Pipe Certification",
  "ISO 9001:2015 Supply Chain Management",
  "NNPC/DPR Approved Vendor",
]

export default function SteelMaterialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
                Steel Material Supply
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Premium Steel Materials
                <br />
                <span className="text-gray-600">Delivered Nationwide</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Complete range of certified structural steel, reinforcement, pipes, roofing, and specialty products.
                Direct from mills to your site with full documentation and quality assurance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Request Quote
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
                <div className="text-3xl sm:text-4xl font-bold text-gray-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Steel Grades Stocked</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-600 mb-1">10,000+</div>
                <div className="text-sm text-gray-600">Tons Delivered Annually</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-600 mb-1">36</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Order Support</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="products-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">
              Our Product Range
            </span>
            <h2 id="products-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Comprehensive Steel Inventory
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From structural sections to specialty products - everything your project needs in one place
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {steelProducts.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6 bg-gray-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                      <category.icon className="h-7 w-7 text-gray-600" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {category.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0" aria-hidden="true" />
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
                    <Button variant="ghost" className="w-full justify-start px-0 text-gray-600 hover:text-gray-700" asChild>
                      <Link href="/contact">
                        Inquire About Pricing
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

      {/* Value Proposition */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="value-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">
              Why Choose Slymax Steel
            </span>
            <h2 id="value-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Your Trusted Steel Partner
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              More than just a supplier - we're your partner in project success
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 mb-4">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="certs-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">
              Quality Assurance
            </span>
            <h2 id="certs-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Certified Materials & Processes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every product comes with full documentation and traceability
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white transition-colors flex-shrink-0">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-medium text-gray-900 text-sm leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative overflow-hidden">
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
              Need Steel for Your Project?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Get competitive pricing, technical specifications, and delivery timelines. 
              Our team is ready to support your material requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Get a Quote Today
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