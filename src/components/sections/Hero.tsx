"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, Shield, Award, Users, Clock, HardHat, Building2, Truck, Flame, Wrench, Loader } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

const stats = [
  { value: "500+", label: "Projects Completed", icon: Building2 },
  { value: "50+", label: "Years Experience", icon: Award },
  { value: "200+", label: "Expert Team Members", icon: Users },
  { value: "36", label: "States Covered", icon: Truck },
]

const serviceHighlights = [
  { icon: HardHat, label: "Construction" },
  { icon: Building2, label: "Steel Supply" },
  { icon: Wrench, label: "Scaffolding" },
  { icon: Flame, label: "Gas & Fire" },
  { icon: Truck, label: "Heavy Equipment" },
  { icon: Loader, label: "Jib Cranes" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background - construction site */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85"
          alt="Construction site with steel reinforcement and cranes"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/20" />
      </div>

      <Container className="relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-6 border border-white/20"
          >
            <Shield className="h-4 w-4 text-green-400" aria-hidden="true" />
            <span>ISO 9001:2015 Certified | NNPC Approved | DPR Licensed</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Your Trusted Partner in{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Construction & Industrial Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
          >
            From steel reinforcement to heavy equipment leasing, scaffolding to fire protection 
            — we deliver end-to-end construction and industrial solutions across Nigeria with 50+ years of proven expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button asChild size="lg" className="gap-2 px-8 py-4 text-base bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0 shadow-lg shadow-orange-500/25">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 px-8 py-4 text-base bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
              <Link href="/services">
                Our Services
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Service icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.08 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-white text-sm"
              >
                <service.icon className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                {service.label}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
              >
                <stat.icon className="h-5 w-5 text-yellow-400 mx-auto mb-2" aria-hidden="true" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
