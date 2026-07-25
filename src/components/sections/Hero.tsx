"use client"

import Link from "next/link"
import Image from "next/image"
import { Building2, Truck, HardHat, Flame, Wrench, Loader, CheckCircle, ArrowRight, Shield, Award, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

const stats = [
  { value: "500+", label: "Projects Completed", icon: CheckCircle },
  { value: "50+", label: "Years Experience", icon: Award },
  { value: "200+", label: "Expert Team Members", icon: Users },
  { value: "24/7", label: "Emergency Support", icon: Clock },
]

const trustBadges = [
  "ISO 9001:2015 Certified",
  "CAC Registered",
  "NNPC Approved Vendor",
  "DPR Licensed",
  "NSE Corporate Member",
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site panorama"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Container className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-6 border border-white/20"
              >
                <Shield className="h-4 w-4 text-green-400" aria-hidden="true" />
                <span>ISO 9001:2015 Certified | NNPC Approved Vendor | DPR Licensed</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
              >
                Your Trusted Partner in
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Construction & Industrial Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl"
              >
                Slymax Nigeria Limited delivers excellence in construction, steel supply, industrial equipment, and safety solutions across Nigeria. 50+ years of proven expertise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Button asChild size="lg" className="gap-2 px-8 py-3 text-base bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0 shadow-lg shadow-orange-500/25">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 px-8 py-3 text-base bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
                  <Link href="/services">
                    Our Services
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center gap-3 text-sm"
              >
                {trustBadges.map((badge, index) => (
                  <span key={badge} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-white/80">
                    <CheckCircle className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right side - Image grid with stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                    alt="Heavy construction equipment at work"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>

                {/* Floating stat cards */}
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                    className={`absolute bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20 ${
                      index === 0 ? "-bottom-4 -left-4" :
                      index === 1 ? "-bottom-4 right-8" :
                      index === 2 ? "-top-4 -left-4" :
                      "-top-4 right-8"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                        <stat.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </motion.div>

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
