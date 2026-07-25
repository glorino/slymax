"use client"

import Link from "next/link"
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
      
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6"
              >
                <Shield className="h-4 w-4" aria-hidden="true" />
                <span>ISO 9001:2015 Certified | NNPC Approved Vendor | DPR Licensed</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
              >
                Your Trusted Partner in
                <br />
                <span className="text-primary-600">Construction & Industrial Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Slymax Nigeria Limited delivers excellence in construction, steel supply, industrial equipment, and safety solutions across Nigeria. 50+ years of proven expertise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Button asChild size="lg" className="gap-2 px-8 py-3 text-base">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 px-8 py-3 text-base">
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
                className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              >
                {trustBadges.map((badge, index) => (
                  <span key={badge} className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600" aria-hidden="true" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1 bg-gray-900">
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center col-span-2 row-span-1">
                      <HardHat className="h-24 w-24 text-white/20" aria-hidden="true" />
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <Building2 className="h-16 w-16 text-white/20" aria-hidden="true" />
                    </div>
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                      <Flame className="h-16 w-16 text-white/20" aria-hidden="true" />
                    </div>
                    <div className="bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                      <Truck className="h-16 w-16 text-white/20" aria-hidden="true" />
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center row-span-2">
                      <Loader className="h-24 w-24 text-white/20" aria-hidden="true" />
                    </div>
                    <div className="bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                      <Wrench className="h-16 w-16 text-white/20" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 -right-6 grid grid-cols-4 gap-4 p-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <ArrowRight className="h-8 w-8 text-primary-600 rotate-90" />
      </motion.div>
    </section>
  )
}