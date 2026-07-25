"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, HardHat, Truck, Loader, Flame, Wrench, MapPin, ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    title: "Industrial Complex - Port Harcourt",
    category: "Construction",
    location: "Rivers State",
    year: "2023",
    description: "Complete EPC of 50,000 sqm industrial facility including warehouses, offices, and utilities.",
    icon: Building2,
    image: "/projects/industrial-complex.jpg",
  },
  {
    title: "Steel Bridge Construction - Onitsha",
    category: "Construction",
    location: "Anambra State",
    year: "2023",
    description: "Design, fabrication, and erection of 200m span steel bridge over Niger River tributary.",
    icon: HardHat,
    image: "/projects/steel-bridge.jpg",
  },
  {
    title: "Oil & Gas Facility Scaffolding - Warri",
    category: "Scaffold Material",
    location: "Delta State",
    year: "2024",
    description: "Full scaffolding system supply and installation for major refinery maintenance shutdown.",
    icon: Wrench,
    image: "/projects/scaffolding-warri.jpg",
  },
  {
    title: "Fire Protection System - Lagos Mall",
    category: "Fire Equipment",
    location: "Lagos State",
    year: "2023",
    description: "Complete fire suppression, detection, and alarm system for 120,000 sqm shopping complex.",
    icon: Flame,
    image: "/projects/fire-protection.jpg",
  },
  {
    title: "Heavy Equipment Fleet - Abuja Project",
    category: "Heavy Equipment Leasing",
    location: "FCT Abuja",
    year: "2024",
    description: "Long-term lease of excavators, cranes, and bulldozers for federal road construction project.",
    icon: Truck,
    image: "/projects/heavy-equipment.jpg",
  },
  {
    title: "Jib Crane Installation - Kano Factory",
    category: "Jib Crane Supply",
    location: "Kano State",
    year: "2023",
    description: "Design, supply, and installation of 5-ton wall-mounted jib cranes for manufacturing facility.",
    icon: Loader,
    image: "/projects/jib-crane.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white" aria-labelledby="projects-heading">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              Featured Projects
            </span>
            <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Delivering Excellence Across Nigeria
            </h2>
          </div>
          <Button asChild variant="outline" size="lg" className="hidden sm:inline-flex">
            <Link href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full border-0 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-gray-300" aria-hidden="true" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                      <MapPin className="h-3 w-3 text-primary-600" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">{project.location}</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                      <span className="text-sm font-medium text-gray-700">{project.year}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <Button variant="ghost" className="w-full justify-between px-0 group-hover:text-primary-600" asChild>
                    <Link href="/projects">
                      View Project Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="px-10 py-3">
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