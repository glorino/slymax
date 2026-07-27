"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, ExternalLink, Signal, Home, Flame, Truck, Hammer } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Telecom Mast Construction - Edo State",
    category: "Telecommunication",
    location: "Edo State",
    year: "2024",
    value: "₦180M",
    description: "Construction and maintenance of multiple telecommunication masts for major network operators.",
    icon: Signal,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "Estate Development - Benin City",
    category: "Real Estate",
    location: "Edo State",
    year: "2023",
    value: "₦350M",
    description: "Real estate development project including residential buildings and infrastructure.",
    icon: Home,
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    id: 3,
    title: "Gas Pipeline Installation - Rivers",
    category: "Oil and Gas",
    location: "Rivers State",
    year: "2024",
    value: "₦420M",
    description: "Gas regulation station equipment supply and pipeline installation services.",
    icon: Flame,
    gradient: "from-red-500 to-red-700",
  },
  {
    id: 4,
    title: "Aggregate Haulage - Federal Roads",
    category: "Haulage & Transport",
    location: "FCT Abuja",
    year: "2023",
    value: "₦250M",
    description: "Large-scale haulage of aggregates, granite, sand and laterite for road construction projects.",
    icon: Truck,
    gradient: "from-yellow-500 to-amber-700",
  },
  {
    id: 5,
    title: "Fibre Optics Laying - South South",
    category: "Telecommunication",
    location: "Delta State",
    year: "2024",
    value: "₦320M",
    description: "Fibre optics cable laying and installation across multiple sites in the South South region.",
    icon: Signal,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 6,
    title: "Commercial Building - Lagos",
    category: "Building & Construction",
    location: "Lagos State",
    year: "2023",
    value: "₦500M",
    description: "General building construction of commercial complex including offices and retail spaces.",
    icon: Hammer,
    gradient: "from-purple-500 to-purple-700",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50" aria-labelledby="projects-heading">
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-200 rounded-full translate-x-1/3 -translate-y-1/3 opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full -translate-x-1/4 translate-y-1/4 opacity-25" aria-hidden="true" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
          >
            Project Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            Delivering Excellence{" "}
            <span className="text-emerald-600">Across Nigeria</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            A showcase of landmark projects demonstrating our capability across telecom, 
            real estate, oil & gas, and construction sectors.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <project.icon className="h-20 w-20 text-white/30" aria-hidden="true" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-700">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-white text-sm">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.location}
                    </div>
                    <div className="text-white text-sm font-medium">{project.year}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-lg font-bold text-emerald-600">{project.value}</div>
                    <Link href="/contact" className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                      Discuss Similar
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="px-10 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white">
            <Link href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
