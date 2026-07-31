"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Signal, Home, Flame, Truck, Hammer, ArrowRight, CheckCircle, Shield, Award, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    name: "Oil and Gas",
    href: "/services/oil-and-gas",
    icon: Flame,
    description: "Construction, steel material supply, scaffold material, gas equipment, fire equipment, heavy equipment leasing, pipeline services, and oil & gas support solutions.",
    features: ["Construction", "Steel Material Supply", "Scaffold Material", "Gas Equipment", "Fire Equipment", "Heavy Equipment Leasing"],
    gradient: "from-red-500 to-red-700",
    bgColor: "bg-red-50",
    iconBg: "bg-gradient-to-br from-red-500 to-red-700",
    border: "border-red-100",
  },
  {
    name: "Telecommunication Services",
    href: "/services/telecommunication",
    icon: Signal,
    description: "Site maintenance, site construction, mast building, fibre optics laying, and aviation light installation.",
    features: ["Site Maintenance", "Mast Construction", "Fibre Optics Laying", "Aviation Light Installation", "Network Support", "24/7 Technical Support"],
    gradient: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
    border: "border-blue-100",
  },
  {
    name: "Real Estate",
    href: "/services/real-estate",
    icon: Home,
    description: "Land development, property development, property leasing, and general civil works.",
    features: ["Property Development", "Land Sales", "Property Leasing", "Civil Works", "Investment Advisory", "Title Processing"],
    gradient: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-50",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    border: "border-emerald-100",
  },
  {
    name: "Haulage & Logistics",
    href: "/services/haulage-logistics",
    icon: Truck,
    description: "Haulage of aggregates, sharp sand, laterite materials, and transport for cars, trucks and heavy equipment.",
    features: ["Aggregate Haulage", "Sand & Laterite Transport", "Equipment Transport", "Fleet Management", "GPS Tracking", "Nationwide Delivery"],
    gradient: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
    border: "border-blue-100",
  },
  {
    name: "Building & Construction",
    href: "/services/building-construction",
    icon: Hammer,
    description: "General building construction, civil works, and infrastructure development projects.",
    features: ["Building Construction", "Civil Works", "Renovation", "Infrastructure", "Project Management", "Quality Assurance"],
    gradient: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-700",
    border: "border-purple-100",
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
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Logistics network covering all 36 states and FCT with timely delivery guarantees.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "200+ certified engineers, technicians, and project managers at your service.",
  },
]

export default function ServicesContent() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              Our Comprehensive Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Services Tailored to
              <br />
              <span className="text-blue-600">Your Project Needs</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From telecommunication services to real estate development, oil & gas to haulage 
              — we deliver quality, safety, and reliability on every project across Nigeria.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={service.href}>
                  <Card className={`group h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border-0 ${service.bgColor}`}>
                    <div className={`p-6 bg-gradient-to-r ${service.gradient}`}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-md">
                        <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-6" role="list">
                        {service.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="ghost" className="w-full justify-start px-0 group-hover:text-blue-600" asChild>
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
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-30 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              Why Partner with Slymax
            </span>
            <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Delivering Excellence Since 2000
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-indigo-100 hover:shadow-lg hover:shadow-indigo-50 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white mb-4">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Contact our team for a free consultation and detailed quote tailored to your requirements.
            </p>
            <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl" variant="default">
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
