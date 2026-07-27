"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Award, Users, Building2, Target, Lightbulb, CheckCircle, ArrowRight, Signal, Home, Flame, Truck, Hammer } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const values = [
  { icon: Target, title: "Reliability", description: "Consistent delivery of quality services across all sectors." },
  { icon: Award, title: "Quality Excellence", description: "ISO-standard processes ensuring international quality benchmarks." },
  { icon: Users, title: "Client Partnership", description: "Long-term relationships built on transparency and trust." },
  { icon: Signal, title: "Innovation", description: "Embracing modern technology for efficient, sustainable solutions." },
  { icon: Building2, title: "Integrity", description: "Ethical practices, honest communication, and accountability." },
  { icon: Lightbulb, title: "Expertise", description: "200+ certified professionals with decades of combined experience." },
]

const milestones = [
  { year: "2000", title: "Company Founded", description: "Established in Benin City, Edo State" },
  { year: "2005", title: "Telecom Division", description: "Expanded into telecommunication services" },
  { year: "2010", title: "Oil & Gas Entry", description: "Became approved vendor for oil & gas sector" },
  { year: "2015", title: "Real Estate Launch", description: "Started property development and sales" },
  { year: "2020", title: "Fleet Expansion", description: "Expanded haulage and transport fleet" },
  { year: "2024", title: "500+ Projects", description: "Celebrating 500+ successful projects nationwide" },
]

const services = [
  { icon: Signal, name: "Telecommunication", desc: "Site maintenance, mast building, fibre optics" },
  { icon: Home, name: "Real Estate", desc: "Property development & leasing" },
  { icon: Flame, name: "Oil and Gas", desc: "Gas equipment & pipeline services" },
  { icon: Truck, name: "Haulage & Transport", desc: "Aggregate haulage & equipment transport" },
  { icon: Hammer, name: "Building & Construction", desc: "General civil works & building" },
]

const leadership = [
  { name: "Slymax Nig. Limited", role: "Company", bio: "Reliable indigenous company with unique business in the telecommunication and industrial sector in Nigeria." },
]

const directors = [
  { name: "Usifoh Santos Sylvester", role: "Director" },
  { name: "Usifoh Osahon Victor", role: "Director" },
  { name: "Excellent Abrewensi", role: "Director" },
]

const clients = [
  "IPT Power Tech",
  "IHS Tower Company",
  "RCC Reynolds Construction Company",
  "Edo State Universal Basic Education",
  "NDDC",
  "BJ BISON",
]

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-blue-100 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full -translate-y-1/3 translate-x-1/3 opacity-20" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full translate-y-1/3 -translate-x-1/4 opacity-20" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              About Slymax Nigeria Limited
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Reliable Indigenous Company
              <br />
              <span className="text-blue-600">in Telecom & Industrial Sector</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Slymax Nig. Limited is a reliable indigenous Company with unique business in the 
              telecommunication and industrial sector in Nigeria.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-white" aria-labelledby="mission-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Our Purpose
              </span>
              <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Slymax Nig. Limited offers services in any of the following areas:
              </p>
              <div className="space-y-4 mb-8">
                {services.map((service) => (
                  <div key={service.name} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <service.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-6 bg-white rounded-2xl border border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white mb-4">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 relative overflow-hidden" aria-labelledby="history-heading">
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full translate-x-1/3 -translate-y-1/3 opacity-25" aria-hidden="true" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 id="history-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Company Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform -translate-x-1/2 hidden lg:block" aria-hidden="true" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex lg:flex-row"
                >
                  <div className={index % 2 === 0 ? "lg:w-1/2 lg:pr-12 lg:text-right" : "lg:w-1/2 lg:pl-12 lg:ml-auto"}>
                    <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-bold text-sm lg:absolute lg:left-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2 lg:ml-0">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? "lg:w-1/2" : "lg:w-1/2"}>
                    <div className="lg:hidden text-center my-4">
                      <div className="inline-block w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-bold text-sm">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden" aria-labelledby="clients-heading">
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-200 rounded-full -translate-x-1/4 -translate-y-1/4 opacity-25" aria-hidden="true" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
              Our Clients
            </span>
            <h2 id="clients-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:shadow-amber-50 transition-all text-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white mx-auto mb-4">
                  <Building2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="font-semibold text-gray-900">{client}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
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
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Join hundreds of satisfied clients who trust Slymax Nigeria Limited for their 
              telecommunication, real estate, oil & gas, and construction needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 shadow-lg" variant="default">
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10" variant="outline">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
