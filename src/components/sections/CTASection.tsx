"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Truck, Users } from "lucide-react"
import { motion } from "framer-motion"

const trustIndicators = [
  { icon: Shield, label: "ISO 9001:2015 Certified", description: "Quality management standards" },
  { icon: Award, label: "50+ Years Experience", description: "Industry expertise since 1974" },
  { icon: Truck, label: "Nationwide Coverage", description: "Service across all 36 states" },
  { icon: Users, label: "200+ Expert Team", description: "Certified engineers & technicians" },
]

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" aria-hidden="true" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            Ready to Start Your Project?
          </span>
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Partner with Nigeria's Trusted Industrial & Construction Leader
          </h2>
          <p className="text-lg text-primary-100 leading-relaxed">
            Join hundreds of satisfied clients who trust Slymax Nigeria Limited for quality, safety, and on-time delivery.
            Let's build something remarkable together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {trustIndicators.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="font-semibold text-white">{item.label}</div>
                <div className="text-sm text-primary-200">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl">
            <a href="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
            <a href="/about">
              Learn More About Us
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}