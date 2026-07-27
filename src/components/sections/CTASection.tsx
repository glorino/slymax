"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Truck, Users, Phone } from "lucide-react"
import { motion } from "framer-motion"

const guarantees = [
  { icon: Shield, label: "Reliable Service" },
  { icon: Award, label: "Quality Delivery" },
  { icon: Truck, label: "Nationwide Coverage" },
  { icon: Users, label: "Expert Team" },
]

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/3 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full translate-y-1/4 -translate-x-1/4" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Start Your{" "}
              <span className="text-yellow-400">Next Project?</span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-lg">
              Join hundreds of satisfied clients across Nigeria. Let&apos;s build something remarkable together.
              Get a free consultation and detailed quote within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="xl" className="gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0 shadow-lg shadow-orange-500/25 px-8">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="gap-2 bg-white/15 backdrop-blur-md text-white border-white/25 hover:bg-white/25 px-8">
                <Link href="tel:+2348034088880">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Us Now
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {guarantees.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-gray-200 text-sm">
                  <item.icon className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 flex-shrink-0">
                  <Phone className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Call Us</div>
                  <div className="text-white font-medium">+234 803 408 8880</div>
                  <div className="text-white font-medium">+234 802 301 9197</div>
                  <div className="text-white font-medium">+234 806 214 9620</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-yellow-400 rotate-90" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Email Us</div>
                  <div className="text-white font-medium">info@slymaxnig.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 flex-shrink-0">
                  <Shield className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Head Office</div>
                  <div className="text-white font-medium">Plot 82 First East Circular Road</div>
                  <div className="text-gray-200">Benin City, Edo State, Nigeria</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <div className="text-sm text-gray-300 mb-2">Working Hours</div>
              <div className="text-white">Mon - Fri: 8:00 AM - 6:00 PM</div>
              <div className="text-gray-200">Sat: 9:00 AM - 2:00 PM</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
