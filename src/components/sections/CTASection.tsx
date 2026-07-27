"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Truck, Users, Phone } from "lucide-react"
import { motion } from "framer-motion"

const guarantees = [
  { icon: Shield, label: "Zero Incident Safety" },
  { icon: Award, label: "ISO 9001 Certified" },
  { icon: Truck, label: "Nationwide Delivery" },
  { icon: Users, label: "200+ Expert Team" },
]

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
      {/* Background - jib crane */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1920&q=85"
          alt="Industrial jib crane equipment"
          fill
          className="object-cover"
        />
        {/* Heavy overlay for text visibility */}
        <div className="absolute inset-0 bg-gray-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80" />
      </div>

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
                <Link href="tel:+2348031234567">
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

          {/* Contact Info Card */}
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
                  <div className="text-white font-medium">+234 805 555 9758</div>
                  <div className="text-white font-medium">+234 802 301 9197</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-yellow-400 rotate-90" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Email Us</div>
                  <div className="text-white font-medium">info@slymaxnig.com</div>
                  <div className="text-white font-medium">sales@slymaxnig.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 flex-shrink-0">
                  <Shield className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Head Office</div>
                  <div className="text-white font-medium">21 Philip Omosigho Street</div>
                  <div className="text-gray-200">EKEA off Sapele Road, Benin City, Edo State</div>
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
