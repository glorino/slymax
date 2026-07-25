"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, HardHat, Truck, Loader, Flame, Wrench, MapPin, ArrowRight, 
  ExternalLink, Calendar, FileText, Image as ImageIcon
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const projects = [
  {
    id: 1,
    title: "Industrial Complex - Port Harcourt",
    category: "Construction",
    location: "Rivers State",
    year: "2023",
    duration: "18 months",
    value: "₦2.4B",
    description: "Complete EPC of 50,000 sqm industrial facility including warehouses, offices, utilities, and infrastructure for major manufacturing client.",
    image: "/projects/industrial-complex.jpg",
    icon: Building2,
    features: ["3 Warehouses (15,000 sqm each)", "Admin Building (3 storeys)", "Power Substation (33/11kV)", "Water Treatment Plant", "Effluent Treatment", "Internal Roads & Drainage"],
  },
  {
    id: 2,
    title: "Steel Bridge - Onitsha Crossing",
    category: "Construction",
    location: "Anambra State",
    year: "2023",
    duration: "14 months",
    value: "₦850M",
    description: "Design, fabrication, and erection of 200m span steel truss bridge over Niger River tributary with approach roads.",
    image: "/projects/steel-bridge.jpg",
    icon: HardHat,
    features: ["200m Main Span", "Steel Truss Design", "Concrete Pile Foundations", "Asphalt Deck Surfacing", "Pedestrian Walkways", "Street Lighting"],
  },
  {
    id: 3,
    title: "Refinery Scaffolding - Warri",
    category: "Scaffold Material",
    location: "Delta State",
    year: "2024",
    duration: "6 months",
    value: "₦320M",
    description: "Full scaffolding system supply, erection, and inspection for major refinery turnaround maintenance shutdown.",
    image: "/projects/scaffolding-warri.jpg",
    icon: Wrench,
    features: ["System Scaffolding (50,000 m²)", "Tube & Fitter (20,000 m²)", "Mobile Access Towers", "Suspended Access", "Daily Inspections", "Certified Scaffolders"],
  },
  {
    id: 4,
    title: "Fire Protection - Lagos Mega Mall",
    category: "Fire Equipment",
    location: "Lagos State",
    year: "2023",
    duration: "10 months",
    value: "₦450M",
    description: "Complete fire suppression, detection, and alarm system for 120,000 sqm shopping complex with 300+ retail units.",
    image: "/projects/fire-protection.jpg",
    icon: Flame,
    features: ["Wet Pipe Sprinklers (8 zones)", "FM-200 Server Rooms", "Addressable Fire Alarm", "Fire Pumps (3×450 m³/hr)", "Water Storage (500m³)", "BMS Integration"],
  },
  {
    id: 5,
    title: "Heavy Equipment Fleet - Abuja Roads",
    category: "Heavy Equipment Leasing",
    location: "FCT Abuja",
    year: "2024",
    duration: "24 months",
    value: "₦1.2B",
    description: "Long-term lease of earthmoving fleet for federal highway construction project with full maintenance support.",
    image: "/projects/heavy-equipment.jpg",
    icon: Truck,
    features: ["8× Excavators (30-40T)", "4× Motor Graders", "6× Dump Trucks (30T)", "2× Padfoot Rollers", "2× Water Bowsers", "24/7 Maintenance Crew"],
  },
  {
    id: 6,
    title: "Jib Crane Installation - Kano Factory",
    category: "Jib Crane Supply",
    location: "Kano State",
    year: "2023",
    duration: "3 months",
    value: "₦180M",
    description: "Design, supply, and installation of 12 wall-mounted jib cranes (1-5T) for automotive parts manufacturing facility.",
    image: "/projects/jib-crane.jpg",
    icon: Loader,
    features: ["6× 5T Wall-Mounted", "4× 2T Wall-Mounted", "2× 1T Articulating", "360° Rotation All Units", "Radio Remote Controls", "Load Testing & Certification"],
  },
  {
    id: 7,
    title: "Gas Regulation Station - Port Harcourt",
    category: "Gas Equipment",
    location: "Rivers State",
    year: "2022",
    duration: "8 months",
    value: "₦650M",
    description: "EPC of city gate gas regulation and metering station for power plant supply with SCADA integration.",
    image: "/projects/gas-station.jpg",
    icon: Flame,
    features: ["3× Regulator Runs (DN300)", "Ultrasonic Metering", "Odorant Injection", "SCADA System", "Fire & Gas Detection", "Emergency Shutdown"],
  },
  {
    id: 8,
    title: "Steel Supply - 3rd Mainland Bridge",
    category: "Steel Material Supply",
    location: "Lagos State",
    year: "2022",
    duration: "6 months",
    value: "₦950M",
    description: "Supply of structural steel, reinforcement, and plate materials for major bridge rehabilitation project.",
    image: "/projects/steel-supply.jpg",
    icon: Building2,
    features: ["2,500T Structural Steel", "15,000T Rebar (Y16-Y40)", "500T Steel Plate", "Custom Fabrication", "Just-in-Time Delivery", "Mill Certificates"],
  },
]

const filterCategories = [
  "All",
  "Construction",
  "Steel Material Supply",
  "Scaffold Material",
  "Gas Equipment",
  "Fire Equipment",
  "Heavy Equipment Leasing",
  "Jib Crane Supply",
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
              Project Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Delivering Excellence
              <br />
              <span className="text-primary-600">Across Nigeria</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A showcase of landmark projects demonstrating our capability across construction, 
              industrial equipment, and material supply sectors.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter & Projects Grid */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="projects-heading">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter projects by category">
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === "All"
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                }`}
                aria-pressed={category === "All"}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-gray-300" aria-hidden="true" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                        <MapPin className="h-3.5 w-3.5 text-primary-600" aria-hidden="true" />
                        <span className="text-sm font-medium text-gray-700">{project.location}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                        <span className="text-sm font-medium text-gray-700">{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
                        <p className="font-medium text-gray-900">{project.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Value</p>
                        <p className="font-medium text-gray-900">{project.value}</p>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-6" role="list">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="flex items-center gap-2 text-sm text-primary-600 font-medium">
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <Button variant="ghost" className="px-0 text-primary-600 hover:text-primary-700" asChild>
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
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-10 py-3">
              <Link href="/contact">
                Have a Project in Mind?
                <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Numbers That Define Our Journey
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Five decades of building trust, one project at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed", icon: FileText },
              { value: "50+", label: "Years Experience", icon: Calendar },
              { value: "36", label: "States Covered", icon: MapPin },
              { value: "200+", label: "Expert Team Members", icon: ImageIcon },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-primary-400" aria-hidden="true" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Let's Build Your Next Success Story
            </h2>
            <p className="text-lg text-primary-100 leading-relaxed mb-8">
              From concept to completion, we bring the expertise, equipment, and dedication 
              to make your project a landmark achievement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}