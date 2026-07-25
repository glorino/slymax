"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  HardHat, Building2, Wrench, Flame, Truck, Loader, 
  ArrowRight, CheckCircle, ChevronRight, Shield, Award, Truck as TruckIcon, Users
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const services = [
  {
    name: "Construction",
    href: "/services/construction",
    icon: HardHat,
    description: "Complete building and civil engineering solutions from foundation to finish. Residential, commercial, and industrial projects.",
    features: ["Building Construction", "Road & Bridge Works", "Industrial Facilities", "Renovation & Refurbishment", "Project Management", "Quality Assurance"],
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Steel Material Supply",
    href: "/services/steel-material-supply",
    icon: Building2,
    description: "Premium quality steel and structural materials for all construction needs. Certified grades with timely delivery nationwide.",
    features: ["Structural Steel Sections", "Reinforcement Bars", "Steel Pipes & Tubes", "Metal Roofing Sheets", "Plate & Sheet Metal", "Custom Fabrication"],
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
  {
    name: "Scaffold Material",
    href: "/services/scaffold-material",
    icon: Wrench,
    description: "Complete scaffolding systems and accessories for safe working at heights. Sales, rental, and installation services available.",
    features: ["Frame Scaffolding", "Tube & Coupler Systems", "Mobile Access Towers", "Safety Accessories", "Design & Installation", "Inspection & Certification"],
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    name: "Gas Equipment",
    href: "/services/gas-equipment",
    icon: Flame,
    description: "Industrial gas equipment, regulators, valves, and piping systems. Certified for safety and reliability in all applications.",
    features: ["Gas Regulators", "Valves & Fittings", "Piping Systems", "Safety Devices", "Installation Services", "Maintenance & Testing"],
    color: "from-red-500 to-red-700",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    name: "Fire Equipment",
    href: "/services/fire-equipment",
    icon: Flame,
    description: "Comprehensive fire fighting and safety equipment. Installation, maintenance, and certification services available.",
    features: ["Fire Extinguishers", "Hydrant Systems", "Alarm Systems", "Suppression Systems", "Installation & Maintenance", "Certification & Compliance"],
    color: "from-red-600 to-red-800",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
  },
  {
    name: "Heavy Equipment Leasing",
    href: "/services/heavy-equipment-leasing",
    icon: Truck,
    description: "Modern fleet of heavy machinery for rent. Excavators, cranes, bulldozers, and more with certified operators available.",
    features: ["Excavators & Loaders", "Mobile Cranes", "Bulldozers & Graders", "Compactors & Rollers", "Certified Operators", "Flexible Rental Terms"],
    color: "from-yellow-600 to-yellow-800",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    name: "Jib Crane Supply",
    href: "/services/jib-crane-supply",
    icon: Loader,
    description: "Custom jib cranes and lifting solutions for workshops, warehouses, and construction sites. Design, supply, and installation.",
    features: ["Wall-Mounted Jibs", "Floor-Mounted Jibs", "Articulating Jibs", "Custom Fabrication", "Installation & Testing", "Maintenance Contracts"],
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Safety First",
    description: "ISO 45001 certified HSE management with zero-incident track record on major projects.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "ISO 9001:2015 certified processes with rigorous quality control at every stage.",
  },
  {
    icon: TruckIcon,
    title: "Nationwide Delivery",
    description: "Logistics network covering all 36 states and FCT with timely delivery guarantees.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "200+ certified engineers, technicians, and project managers at your service.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
              Our Comprehensive Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Services Tailored to
              <br />
              <span className="text-primary-600">Your Project Needs</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From groundbreaking construction to specialized equipment supply, we deliver quality, 
              safety, and reliability on every project across Nigeria.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={service.href}>
                  <Card className="group h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border-0">
                    <div className={service.iconBg}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                        <service.icon className="h-7 w-7" style={{ color: service.iconColor }} aria-hidden="true" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-6" role="list">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="flex items-center gap-2 text-sm text-primary-600 font-medium">
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            +{service.features.length - 3} more services
                          </li>
                        )}
                      </ul>
                      <Button variant="ghost" className="w-full justify-between px-0 group-hover:text-primary-600" asChild>
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-10 py-3">
              <Link href="/contact">
                Request a Quote for Your Project
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="why-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              Why Partner with Slymax
            </span>
            <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Delivering Excellence Since 1974
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to quality, safety, and client satisfaction sets us apart in the industry
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-100 leading-relaxed mb-8">
              Contact our team for a free consultation and detailed quote tailored to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}