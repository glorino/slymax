"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Building2, Award, Users, Target, Globe, ArrowRight, Signal, Home, Flame, Truck } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "Consistent delivery of quality services across telecom, real estate, oil & gas, and construction sectors.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "ISO-standard processes ensuring every project meets international quality benchmarks.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Long-term relationships built on transparency, reliability, and exceeding client expectations.",
  },
  {
    icon: Signal,
    title: "Innovation",
    description: "Embracing modern technology and methods for efficient, sustainable solutions across all service areas.",
  },
]

const highlights = [
  { number: "17", label: "Years of Excellence", icon: Award },
  { number: "500+", label: "Projects Delivered", icon: Building2 },
  { number: "36", label: "States Covered", icon: Globe },
  { number: "200+", label: "Expert Team", icon: Users },
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white" aria-labelledby="about-heading">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-40 blur-3xl" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/profile-images/page8_Im55.jpg"
                  alt="Slymax telecom engineer working on mast"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden lg:block"
              >
                <Image
                  src="/profile-images/page7_Im49.jpg"
                  alt="Oil and gas equipment"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-3xl font-bold mb-1">17</div>
                <div className="text-blue-200 text-sm">Years of Excellence</div>
              </motion.div>
              <div className="absolute -top-2 -left-2 w-20 h-20 border-4 border-blue-200 rounded-2xl" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              About Slymax Nigeria Limited
            </span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Building Nigeria&apos;s Future Since{" "}
              <span className="text-blue-600">2000</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Slymax Nig. Limited is a reliable indigenous Company with unique business in the 
              telecommunication and industrial sector in Nigeria.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We offer services in Telecommunication, Real Estate, Oil and Gas, Haulage & Logistics, 
              Building & Construction, Steel Material Supply, Scaffold Material, Gas Equipment, Fire Equipment, 
              Heavy Equipment Leasing, and more — providing end-to-end solutions for industrial and commercial 
              projects across all 36 states.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="relative bg-white p-6 rounded-2xl border border-blue-100 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{item.number}</div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
