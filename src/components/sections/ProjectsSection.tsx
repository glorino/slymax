"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, HardHat, Truck, Loader, Flame, Wrench, MapPin, ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Industrial Complex - Port Harcourt",
    category: "Construction",
    location: "Rivers State",
    year: "2023",
    value: "₦2.4B",
    description: "Complete EPC of 50,000 sqm industrial facility including warehouses, offices, and infrastructure.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    icon: Building2,
  },
  {
    id: 2,
    title: "Steel Bridge - Onitsha Crossing",
    category: "Construction",
    location: "Anambra State",
    year: "2023",
    value: "₦850M",
    description: "Design, fabrication, and erection of 200m span steel truss bridge.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    icon: HardHat,
  },
  {
    id: 3,
    title: "Refinery Scaffolding - Warri",
    category: "Scaffold Material",
    location: "Delta State",
    year: "2024",
    value: "₦320M",
    description: "Full scaffolding system supply, erection, and inspection for refinery turnaround.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Fire Protection - Lagos Mega Mall",
    category: "Fire Equipment",
    location: "Lagos State",
    year: "2023",
    value: "₦450M",
    description: "Complete fire suppression, detection, and alarm system for 120,000 sqm complex.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    icon: Flame,
  },
  {
    id: 5,
    title: "Heavy Equipment Fleet - Abuja Roads",
    category: "Heavy Equipment Leasing",
    location: "FCT Abuja",
    year: "2024",
    value: "₦1.2B",
    description: "Long-term lease of earthmoving fleet for federal highway construction.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    icon: Truck,
  },
  {
    id: 6,
    title: "Jib Crane Installation - Kano Factory",
    category: "Jib Crane Supply",
    location: "Kano State",
    year: "2023",
    value: "₦180M",
    description: "Design, supply, and installation of 12 wall-mounted jib cranes.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    icon: Loader,
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative" aria-labelledby="projects-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4"
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
            <span className="text-primary-600">Across Nigeria</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            A showcase of landmark projects demonstrating our capability across construction, 
            industrial equipment, and material supply sectors.
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
              <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-lg font-bold text-primary-600">{project.value}</div>
                    <Link href="/contact" className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
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
