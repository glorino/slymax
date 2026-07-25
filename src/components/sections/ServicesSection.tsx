"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, HardHat, Building2, Wrench, Flame, Truck, Loader } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const services = [
  {
    name: "Construction",
    href: "/services/construction",
    icon: HardHat,
    description: "Complete building and civil engineering solutions from foundation to finish. Residential, commercial, and industrial projects.",
    features: ["Building Construction", "Road & Bridge Works", "Industrial Facilities", "Renovation & Refurbishment"],
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    name: "Steel Material Supply",
    href: "/services/steel-material-supply",
    icon: Building2,
    description: "Premium quality steel and structural materials for all construction needs. Certified grades with timely delivery nationwide.",
    features: ["Structural Steel", "Reinforcement Bars", "Steel Pipes & Tubes", "Metal Roofing Sheets"],
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50",
    iconBg: "bg-gray-100",
  },
  {
    name: "Scaffold Material",
    href: "/services/scaffold-material",
    icon: Wrench,
    description: "Complete scaffolding systems and accessories for safe working at heights. Sales, rental, and installation services.",
    features: ["Frame Scaffolding", "Tube & Coupler Systems", "Mobile Towers", "Safety Accessories"],
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    name: "Gas Equipment",
    href: "/services/gas-equipment",
    icon: Flame,
    description: "Industrial gas equipment, regulators, valves, and piping systems. Certified for safety and reliability in all applications.",
    features: ["Gas Regulators", "Valves & Fittings", "Piping Systems", "Safety Devices"],
    color: "from-red-500 to-red-700",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    name: "Fire Equipment",
    href: "/services/fire-equipment",
    icon: Flame,
    description: "Comprehensive fire fighting and safety equipment. Installation, maintenance, and certification services available.",
    features: ["Fire Extinguishers", "Hydrant Systems", "Alarm Systems", "Suppression Systems"],
    color: "from-red-600 to-red-800",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    name: "Heavy Equipment Leasing",
    href: "/services/heavy-equipment-leasing",
    icon: Truck,
    description: "Modern fleet of heavy machinery for rent. Excavators, cranes, bulldozers, and more with certified operators.",
    features: ["Excavators & Loaders", "Mobile Cranes", "Bulldozers & Graders", "Compactors & Rollers"],
    color: "from-yellow-600 to-yellow-800",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-100",
  },
  {
    name: "Jib Crane Supply",
    href: "/services/jib-crane-supply",
    icon: Loader,
    description: "Custom jib cranes and lifting solutions for workshops, warehouses, and construction sites. Design, supply, and installation.",
    features: ["Wall-Mounted Jibs", "Floor-Mounted Jibs", "Articulating Jibs", "Custom Fabrication"],
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            Our Core Services
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Comprehensive Industrial & Construction Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From groundbreaking construction to specialized equipment supply, we deliver quality, safety, and reliability on every project across Nigeria.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={service.href}>
                <Card className="group h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border-0">
                  <div className={cn("p-6 pb-0", service.iconBg)}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                      <service.icon className="h-7 w-7 text-primary-600" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
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
            <Link href="/services">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}