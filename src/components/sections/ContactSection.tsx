"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send, Loader2, Signal, Home, Flame, Truck, Hammer } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

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
    details: "08034088880",
    link: "tel:+2348034088880",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@slymaxnig.com",
    link: "mailto:info@slymaxnig.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
    link: null,
  },
]

const serviceOptions = [
  { value: "telecommunication", label: "Telecommunication Services", icon: Signal },
  { value: "real-estate", label: "Real Estate", icon: Home },
  { value: "oil-and-gas", label: "Oil and Gas", icon: Flame },
  { value: "haulage-logistics", label: "Haulage & Logistics", icon: Truck },
  { value: "building-construction", label: "Building & Construction", icon: Hammer },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus("success")
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-slate-50" aria-labelledby="contact-heading">
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-100 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full translate-x-1/4 translate-y-1/4 opacity-30 blur-3xl" aria-hidden="true" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Ready to start your next project? Our team of experts is here to provide consultation, 
              quotes, and solutions tailored to your specific needs.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-violet-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 shrink-0">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1 whitespace-pre-line">
                      {item.link ? (
                        <a href={item.link} className="hover:text-violet-600 transition-colors">
                          {item.details}
                        </a>
                      ) : (
                        item.details
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true" />
                Typically responds within 2 hours
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-violet-100 shadow-sm" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 focus:outline-none transition-colors"
                    placeholder="John Doe"
                    disabled={status === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                    disabled={status === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 focus:outline-none transition-colors"
                    placeholder="08034088880"
                    disabled={status === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 focus:outline-none transition-colors"
                    placeholder="Your Company Name"
                    disabled={status === "submitting"}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 focus:outline-none transition-colors appearance-none bg-white"
                    disabled={status === "submitting"}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project requirements, timeline, budget range, and any specific needs..."
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full mt-6 py-3 bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className="mt-4 text-center text-sm text-green-600" role="alert">
                  Thank you! We will get back to you within 2 business hours.
                </p>
              )}

              <p className="mt-4 text-center text-xs text-gray-500">
                By submitting, you agree to our <a href="/privacy" className="text-violet-600 hover:underline">Privacy Policy</a> 
                and <a href="/terms" className="text-violet-600 hover:underline">Terms of Service</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
