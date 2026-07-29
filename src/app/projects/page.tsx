"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Signal, Home, Flame, Truck, Hammer, MapPin, ArrowRight, Calendar, FileText, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1, title: "Telecom Mast Construction - Edo State", category: "Telecommunication", location: "Edo State", year: "2024", duration: "6 months", value: "₦180M",
    description: "Construction and maintenance of multiple telecommunication masts for major network operators across Edo State.",
    image: "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Mast Construction", "Equipment Installation", "Power Systems", "Lightning Protection", "Site Commissioning", "Maintenance Contract"],
  },
  {
    id: 2, title: "Estate Development - Benin City", category: "Real Estate", location: "Edo State", year: "2023", duration: "18 months", value: "₦350M",
    description: "Real estate development project including residential buildings, roads, and infrastructure in Benin City.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["50 Residential Units", "Road Network", "Drainage System", "Security Infrastructure", "Landscaping", "Utility Connections"],
  },
  {
    id: 3, title: "Gas Pipeline Installation - Rivers", category: "Oil and Gas", location: "Rivers State", year: "2024", duration: "8 months", value: "₦420M",
    description: "Gas regulation station equipment supply and pipeline installation services for industrial facility.",
    image: "https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Pipeline Installation", "Gas Regulation Station", "SCADA Integration", "Safety Systems", "Commissioning", "Testing & Certification"],
  },
  {
    id: 4, title: "Aggregate Haulage - Federal Roads", category: "Haulage & Transport", location: "FCT Abuja", year: "2023", duration: "12 months", value: "₦250M",
    description: "Large-scale haulage of aggregates, granite, sand and laterite for federal road construction projects.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Granite Haulage (50,000T)", "Sand Transport", "Laterite Supply", "Fleet of 30+ Trucks", "GPS Tracking", "24/7 Operations"],
  },
  {
    id: 5, title: "Fibre Optics Laying - South South", category: "Telecommunication", location: "Delta State", year: "2024", duration: "4 months", value: "₦320M",
    description: "Fibre optics cable laying and installation across multiple sites in the South South region.",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Underground Ducting", "Fibre Splicing", "OTDR Testing", "Cable Jointing", "Commissioning", "Documentation"],
  },
  {
    id: 6, title: "Commercial Building - Lagos", category: "Building & Construction", location: "Lagos State", year: "2023", duration: "14 months", value: "₦500M",
    description: "General building construction of commercial complex including offices, retail spaces and parking.",
    image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["4-Storey Complex", "Retail Spaces", "Parking Facility", "MEP Systems", "Interior Fit-out", "Landscaping"],
  },
  {
    id: 7, title: "Aviation Light Installation - Nigeria", category: "Telecommunication", location: "Multiple States", year: "2024", duration: "3 months", value: "₦85M",
    description: "Installation of aviation warning lights on telecom masts across multiple states in Nigeria.",
    image: "https://images.pexels.com/photos/6804600/pexels-photo-6804600.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Solar Aviation Lights", "LED Obstruction Lights", "Installation", "Testing", "Monthly Inspections", "Maintenance"],
  },
  {
    id: 8, title: "Residential Estate - Warri", category: "Real Estate", location: "Delta State", year: "2024", duration: "24 months", value: "₦600M",
    description: "Development of a luxury residential estate with 80 housing units and modern amenities.",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["80 Housing Units", "Swimming Pool", "Club House", "Sports Facilities", "CCTV Security", "Green Areas"],
  },
]

const filterCategories = ["All", "Telecommunication", "Real Estate", "Oil and Gas", "Haulage & Transport", "Building & Construction"]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-25 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">Project Portfolio</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Delivering Excellence<br /><span className="text-emerald-600">Across Nigeria</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A showcase of landmark projects demonstrating our capability across telecom, real estate, oil & gas, and construction.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50" aria-labelledby="projects-heading">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter projects by category">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
                }`}
                aria-pressed={activeFilter === category}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-700">{project.category}</Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                          <MapPin className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                          <span className="text-sm font-medium text-gray-700">{project.location}</span>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                          <span className="text-sm font-medium text-gray-700">{project.year}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-slate-50 rounded-xl">
                        <div><p className="text-xs text-blue-600 uppercase tracking-wide font-medium">Duration</p><p className="font-medium text-gray-900">{project.duration}</p></div>
                        <div><p className="text-xs text-blue-600 uppercase tracking-wide font-medium">Value</p><p className="font-medium text-gray-900">{project.value}</p></div>
                      </div>
                      <ul className="space-y-1.5 mb-6" role="list">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <Button variant="ghost" className="px-0 text-blue-600 hover:text-blue-700" asChild>
                          <Link href="/contact">
                            Discuss Similar Project
                            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                          </Link>
                        </Button>
                        <span className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                          Completed {project.year}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">Numbers That Define Our Journey</h2>
            <p className="text-lg text-gray-300 leading-relaxed">Two decades of building trust, one project at a time</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ value: "500+", label: "Projects Completed", icon: FileText }, { value: "50+", label: "Years Experience", icon: Calendar }, { value: "36", label: "States Covered", icon: MapPin }, { value: "200+", label: "Expert Team", icon: Building2 }].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 mx-auto mb-4 border border-white/20"><stat.icon className="h-7 w-7 text-sky-400" aria-hidden="true" /></div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">Let&apos;s Build Your Next Success Story</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">From concept to completion, we bring the expertise and dedication to make your project a landmark achievement.</p>
            <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 shadow-lg" variant="default">
              <Link href="/contact">Start Your Project<ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
