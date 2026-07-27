"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Building2, Award, Shield, Users, Target, Globe, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero-incident safety culture with comprehensive HSE programs and continuous training for all personnel.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "ISO 9001:2015 certified processes ensuring every project meets international quality standards.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Long-term relationships built on transparency, reliability, and exceeding client expectations.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Ethical business practices, honest communication, and accountability in every interaction.",
  },
]

const highlights = [
  { number: "50+", label: "Years of Excellence", icon: Award },
  { number: "500+", label: "Projects Delivered", icon: Building2 },
  { number: "36", label: "States Covered", icon: Globe },
  { number: "200+", label: "Expert Team", icon: Users },
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden" aria-labelledby="about-heading">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side - Construction engineers at site */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image - engineers reviewing plans on construction site */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=85"
                  alt="Slymax engineers reviewing construction blueprints on site"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Second image - steel structure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden lg:block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80"
                  alt="Steel structure framework"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-primary-600 to-primary-800 text-white p-5 rounded-2xl shadow-xl"
              >
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-primary-200 text-sm">Years of Excellence</div>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary-200 rounded-2xl" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              About Slymax Nigeria Limited
            </span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Building Nigeria&apos;s Future Since{" "}
              <span className="text-primary-600">1974</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              From a modest construction firm in Owerri to one of Nigeria&apos;s leading integrated industrial solutions providers.
              Our journey is built on trust, quality, and unwavering commitment to client success.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We specialize in construction, steel material supply, scaffolding, gas & fire equipment, 
              heavy equipment leasing, and jib crane supply — providing end-to-end solutions for industrial 
              and commercial projects across all 36 states.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 flex-shrink-0">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="gap-2">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
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
              className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mx-auto mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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
