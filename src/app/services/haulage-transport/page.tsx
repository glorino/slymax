"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, ArrowRight, CheckCircle, ChevronRight, Package, Truck as TruckIcon, Route, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const haulageServices = [
  {
    title: "Aggregate Haulage",
    description: "Haulage of granite, sharp sand, laterite materials and other construction aggregates.",
    icon: Package,
    features: ["Granite Haulage", "Sharp Sand Transport", "Laterite Materials", "Gravel Supply", "Fill Materials", "Quarry Products"],
  },
  {
    title: "Equipment Transport",
    description: "Transport services for cars, trucks, heavy equipment and machinery across Nigeria.",
    icon: TruckIcon,
    features: ["Heavy Equipment", "Machinery Transport", "Vehicle Haulage", "Oversize Loads", "Specialized Trailers", "Nationwide Delivery"],
  },
  {
    title: "Fleet Management",
    description: "Comprehensive fleet management and logistics solutions for construction projects.",
    icon: Route,
    features: ["Fleet Planning", "Route Optimization", "Fuel Management", "Driver Management", "GPS Tracking", "Maintenance Scheduling"],
  },
  {
    title: "Logistics Support",
    description: "End-to-end logistics support for construction and industrial projects.",
    icon: Clock,
    features: ["Project Logistics", "Warehouse Support", "Last-Mile Delivery", "Inventory Management", "Supply Chain", "24/7 Operations"],
  },
]

const fleetStats = [
  { value: "50+", label: "Heavy Trucks" },
  { value: "20+", label: "Trailers" },
  { value: "36", label: "States Covered" },
  { value: "24/7", label: "Operations" },
]

export default function HaulageTransportPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-yellow-100 via-yellow-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full translate-x-1/3 -translate-y-1/3 opacity-20" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
                Haulage & Transport
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Reliable Haulage
                <br />
                <span className="text-yellow-600">& Transport Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Haulage of aggregates (granites), sharp sand, laterite materials, and transport services for 
                cars, trucks and heavy equipment. Nationwide coverage with modern fleet.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-yellow-600 hover:bg-yellow-700 text-white">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {fleetStats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-2xl border border-yellow-100 text-center shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-yellow-50/30 to-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
              Our Haulage Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Transport Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {haulageServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-yellow-500 to-amber-600">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-yellow-600 hover:text-yellow-700" asChild>
                      <Link href="/contact">
                        Request Transport Quote
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

      <section className="py-20 lg:py-32 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700 relative overflow-hidden">
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
              Need Reliable Transport for Your Project?
            </h2>
            <p className="text-lg text-yellow-100 leading-relaxed mb-8">
              From aggregate haulage to heavy equipment transport, we have the fleet and expertise to deliver.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-yellow-600 hover:bg-yellow-50 shadow-lg" variant="default">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
