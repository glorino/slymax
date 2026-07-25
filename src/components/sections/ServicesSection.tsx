"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, HardHat, Building2, Wrench, Flame, Truck, Loader } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    name: "Construction",
    href: "/services/construction",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    description: "Complete building and civil engineering solutions from foundation to finish.",
    features: ["Building Construction", "Road & Bridge Works", "Industrial Facilities"],
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Steel Material Supply",
    href: "/services/steel-material-supply",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    description: "Premium quality steel and structural materials for all construction needs.",
    features: ["Structural Steel", "Reinforcement Bars", "Steel Pipes & Tubes"],
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "Scaffold Material",
    href: "/services/scaffold-material",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    description: "Complete scaffolding systems for safe working at heights.",
    features: ["Frame Scaffolding", "System Scaffolding", "Mobile Towers"],
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Gas Equipment",
    href: "/services/gas-equipment",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    description: "Industrial gas equipment, regulators, valves, and piping systems.",
    features: ["Gas Regulators", "Valves & Fittings", "Safety Devices"],
    color: "from-red-500 to-red-700",
  },
  {
    name: "Fire Equipment",
    href: "/services/fire-equipment",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    description: "Comprehensive fire fighting and safety equipment.",
    features: ["Fire Extinguishers", "Hydrant Systems", "Alarm Systems"],
    color: "from-red-600 to-red-800",
  },
  {
    name: "Heavy Equipment Leasing",
    href: "/services/heavy-equipment-leasing",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    description: "Modern fleet of heavy machinery for rent with certified operators.",
    features: ["Excavators & Loaders", "Mobile Cranes", "Bulldozers & Graders"],
    color: "from-yellow-600 to-yellow-800",
  },
  {
    name: "Jib Crane Supply",
    href: "/services/jib-crane-supply",
    icon: Loader,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    description: "Custom jib cranes and lifting solutions for workshops and warehouses.",
    features: ["Wall-Mounted Jibs", "Floor-Mounted Jibs", "Custom Fabrication"],
    color: "from-purple-500 to-purple-700",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-30" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4"
          >
            Our Comprehensive Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            Services Tailored to{" "}
            <span className="text-primary-600">Your Project Needs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From groundbreaking construction to specialized equipment supply, we deliver quality, 
            safety, and reliability on every project across Nigeria.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link href={service.href}>
                <Card className="group h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="h-12 w-12 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-4" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
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
  )
}
