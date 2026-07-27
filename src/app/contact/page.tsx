"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { 
  Mail, Phone, MapPin, Clock, Truck, HardHat, Building2, Flame, Wrench, Loader,
  Send, Loader2, CheckCircle, AlertCircle, User, Building2 as BuildingIcon, 
  Smartphone, MessageSquare, Calendar, MapPin as MapPinIcon
} from "lucide-react"
import { motion } from "framer-motion"
import ContactForm from "@/components/sections/ContactForm"


const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: "21 Philip Omosigho Street, EKEA off Sapele Road, Benin City, Edo State",
    link: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+234 803 408 8880\n+234 805 555 9758\n+234 802 301 9197",
    link: "tel:+2348034088880",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@slymaxnig.com\nsales@slymaxnig.com",
    link: "mailto:info@slymaxnig.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed",
    link: null,
  },
]

const altContactMethods = [
  { icon: Phone, title: "Call Sales", desc: "Speak with our sales engineers", action: "Call Now", href: "tel:+2348034088880", color: "bg-green-50 text-green-600" },
  { icon: Mail, title: "Email Us", desc: "Detailed inquiries & documents", action: "Email Us", href: "mailto:info@slymaxnig.com", color: "bg-blue-50 text-blue-600" },
  { icon: MapPin, title: "Visit Office", desc: "Schedule a site visit or meeting", action: "Get Directions", href: "https://maps.google.com/?q=21+Philip+Omosigho+Street+Benin+City+Edo+State", color: "bg-purple-50 text-purple-600" },
]

export default function ContactPage() {
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
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Let's Discuss
              <br />
              <span className="text-primary-600">Your Project</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to start your next project? Our team of experts is here to provide consultation, 
              quotes, and solutions tailored to your specific needs. We typically respond within 2 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Alternative Contact Methods */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="alt-contact-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              Other Ways to Connect
            </span>
            <h2 id="alt-contact-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {altContactMethods.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl mx-auto mb-4 ${item.color}`}>
                  <item.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <a href={item.href} className={`inline-flex items-center gap-2 font-medium ${item.color.replace("50", "600").replace("600", "700")} hover:underline`}>
                  {item.action}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </a>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-100 leading-relaxed mb-8">
              Join hundreds of satisfied clients across Nigeria. Let's build something remarkable together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl" variant="default">
                <a href="/contact#contact-heading">
                  Request Free Quote
                  <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10">
                <a href="/services">
                  Browse Services
                </a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}