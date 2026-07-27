"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Signal, Home, Flame, Truck, Hammer } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    name: "Telecommunication Services",
    href: "/services/telecommunication",
    icon: Signal,
    description: "Site maintenance, site construction, mast building, fibre optics laying, and aviation light installation.",
    features: ["Site Maintenance", "Mast Construction", "Fibre Optics Laying", "Aviation Light Installation"],
    gradient: "from-blue-600 to-blue-800",
    bgCard: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Real Estate",
    href: "/services/real-estate",
    icon: Home,
    description: "Land development, property development, property leasing, and general civil works.",
    features: ["Property Development", "Land Sales", "Property Leasing", "Civil Works"],
    gradient: "from-emerald-600 to-emerald-800",
    bgCard: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    name: "Oil and Gas",
    href: "/services/oil-and-gas",
    icon: Flame,
    description: "Industrial gas equipment, pipeline services, and oil & gas support solutions.",
    features: ["Gas Equipment", "Pipeline Services", "Oil & Gas Support", "Equipment Supply"],
    gradient: "from-red-600 to-red-800",
    bgCard: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    name: "Haulage & Transport",
    href: "/services/haulage-transport",
    icon: Truck,
    description: "Haulage of aggregates, sharp sand, laterite materials, and transport for cars, trucks and heavy equipment.",
    features: ["Aggregate Haulage", "Sand & Laterite", "Equipment Transport", "Fleet Services"],
    gradient: "from-yellow-600 to-amber-800",
    bgCard: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    name: "Building & Construction",
    href: "/services/building-construction",
    icon: Hammer,
    description: "General building construction, civil works, and infrastructure development projects.",
    features: ["Building Construction", "Civil Works", "Infrastructure", "Project Management"],
    gradient: "from-purple-600 to-purple-800",
    bgCard: "bg-purple-50",
    iconColor: "text-purple-600",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-slate-50" aria-labelledby="services-heading">
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 blur-3xl" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4"
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
            <span className="text-orange-600">Your Project Needs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From telecommunication services to real estate development, we deliver quality, 
            safety, and reliability on every project across Nigeria.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={service.href}>
                <Card className={`group h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 ${service.bgCard}`}>
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                  <CardContent className="p-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-md mb-4`}>
                      <service.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-4" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className={`h-4 w-4 ${service.iconColor} flex-shrink-0`} aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-orange-600 font-medium text-sm group-hover:gap-3 gap-2 transition-all">
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
          <Button asChild size="lg" className="px-10 py-3 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white">
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
