"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ArrowRight, Shield, Award, Users, Building2, Signal, Home, Flame, Truck, Hammer, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion, AnimatePresence } from "framer-motion"

const heroImages = [
  { src: "/WhatsApp Image 2026-07-27 at 5.05.33 PM (1).jpeg", alt: "Building construction site with cranes" },
  { src: "/WhatsApp Image 2026-07-27 at 5.05.33 PM.jpeg", alt: "Telecommunication tower infrastructure" },
  { src: "/WhatsApp Image 2026-07-27 at 5.05.34 PM (1).jpeg", alt: "Oil and gas pipeline facility" },
  { src: "/WhatsApp Image 2026-07-27 at 5.05.34 PM.jpeg", alt: "Heavy truck on highway" },
  { src: "/WhatsApp Image 2026-07-27 at 5.05.35 PM.jpeg", alt: "Modern building architecture" },
  { src: "/WhatsApp Image 2026-07-27 at 5.12.52 PM.jpeg", alt: "Residential estate development" },
]

const captions = [
  { highlight: "Welcome to Slymax Nigeria Limited" },
  { highlight: "Building Nigeria's Future" },
  { highlight: "Real Estate Development" },
  { highlight: "Oil & Gas Expertise" },
  { highlight: "Reliable Haulage & Logistics" },
  { highlight: "Trusted Since 2000" },
]

const captionsSubtext = [
  "Your trusted partner in telecommunication, real estate, oil & gas, haulage & logistics, and building & construction across Nigeria.",
  "Quality craftsmanship and reliable project delivery nationwide.",
  "Premium land development, property leasing & civil works.",
  "Gas equipment, pipeline services & safety systems.",
  "Aggregates, sand, laterite & heavy equipment transport.",
  "Over 500 successful projects and counting.",
]

const stats = [
  { value: "500+", label: "Projects Completed", icon: Building2 },
  { value: "17", label: "Years Experience", icon: Award },
  { value: "200+", label: "Expert Team Members", icon: Users },
  { value: "36", label: "States Covered", icon: Truck },
]

const serviceHighlights = [
  { icon: Signal, label: "Telecom Services" },
  { icon: Home, label: "Real Estate" },
  { icon: Flame, label: "Oil & Gas" },
  { icon: Truck, label: "Haulage & Logistics" },
  { icon: Hammer, label: "Building & Construction" },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentCaption, setCurrentCaption] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentCaption((prev) => (prev + 1) % captions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gray-900/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/30 to-gray-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center gap-2 px-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-sky-400" 
                : "w-4 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white/30 transition-all hidden md:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white/30 transition-all hidden md:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <Container className="relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-medium mb-6 border border-white/20"
          >
            <Shield className="h-4 w-4 text-green-400" aria-hidden="true" />
            <span>Telecom | Real Estate | Oil & Gas | Haulage & Logistics | Building & Construction</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Your Trusted Partner in{" "}
            <span className="text-sky-400 block sm:inline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentCaption}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {captions[currentCaption].highlight}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <div className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl min-h-[3rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentCaption}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {captionsSubtext[currentCaption]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button asChild size="lg" className="gap-2 px-8 py-4 text-base bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0 shadow-lg shadow-blue-500/25">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 px-8 py-4 text-base bg-white/15 backdrop-blur-md text-white border-white/25 hover:bg-white/25">
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
            className="flex flex-wrap gap-3 mb-12"
          >
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.08 }}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white text-sm"
              >
                <service.icon className="h-4 w-4 text-sky-400" aria-hidden="true" />
                {service.label}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
              >
                <stat.icon className="h-5 w-5 text-sky-400 mx-auto mb-2" aria-hidden="true" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
