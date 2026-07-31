"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { 
  Mail, Phone, MapPin, Clock, Truck, HardHat, Building2, Flame, Wrench, Loader,
  Send, Loader2, CheckCircle, AlertCircle, User, 
  Smartphone, MessageSquare, Calendar, Building2 as BuildingIcon, MapPin as MapPinIcon
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: MapPinIcon,
    title: "Head Office",
    details: "21 Philip Omosigho Street, EKEA off Sapele Road, Benin City, Edo State",
    link: null,
  },
  {
    icon: Smartphone,
    title: "Call Us",
    details: "08034088880\n08055559758\n08023019197",
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
    details: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed",
    link: null,
  },
]

const services = [
  { value: "telecommunication", label: "Telecommunication", icon: Smartphone },
  { value: "real-estate", label: "Real Estate", icon: Building2 },
  { value: "oil-and-gas", label: "Oil and Gas", icon: Flame },
  { value: "haulage-logistics", label: "Haulage & Logistics", icon: Truck },
  { value: "building-construction", label: "Building & Construction", icon: HardHat },
  { value: "steel-material-supply", label: "Steel Material Supply", icon: Wrench },
  { value: "scaffold-material", label: "Scaffold Material", icon: Wrench },
  { value: "gas-equipment", label: "Gas Equipment", icon: Flame },
  { value: "fire-equipment", label: "Fire Equipment", icon: Flame },
  { value: "heavy-equipment-leasing", label: "Heavy Equipment Leasing", icon: Truck },
  { value: "technical-manpower", label: "Technical Manpower", icon: Loader },
  { value: "procurement", label: "Procurement", icon: MessageSquare },
  { value: "operation-maintenance", label: "Operation & Maintenance", icon: Wrench },
  { value: "civil-structural", label: "Civil & Structural Engineering", icon: Building2 },
  { value: "mechanical-services", label: "Mechanical Services", icon: Loader },
  { value: "electrification", label: "Rural & Urban Electrification", icon: Smartphone },
  { value: "water-engineering", label: "Water Engineering", icon: Smartphone },
  { value: "general", label: "General Inquiry", icon: MessageSquare },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    timeline: "",
    budget: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.service) newErrors.service = "Please select a service"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus("submitting")
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setStatus("success")
    setFormData({
      name: "", email: "", phone: "", company: "", service: "", timeline: "", budget: "", message: ""
    })
    
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <section className="py-20 lg:py-32 bg-white" aria-labelledby="contact-heading">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Let's Discuss Your Project
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
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:border-primary-100 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 shrink-0">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <div className="text-gray-600 mt-1 whitespace-pre-line leading-relaxed">
                      {item.link ? (
                        <a href={item.link} className="hover:text-primary-600 transition-colors">
                          {item.details}
                        </a>
                      ) : (
                        item.details
                      )}
                    </div>
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
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onBlur={() => validateForm()}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="John Doe"
                      disabled={status === "submitting"}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onBlur={() => validateForm()}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="john@company.com"
                      disabled={status === "submitting"}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      onBlur={() => validateForm()}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="08034088880"
                      disabled={status === "submitting"}
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company
                  </label>
                  <div className="relative">
                    <BuildingIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors"
                      placeholder="Your Company Name"
                      disabled={status === "submitting"}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service of Interest <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      onBlur={() => validateForm()}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border appearance-none bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors ${
                        errors.service ? "border-red-500" : "border-gray-200"
                      }`}
                      disabled={status === "submitting"}
                      aria-invalid={errors.service ? "true" : "false"}
                      aria-describedby={errors.service ? "service-error" : undefined}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.service && (
                    <p id="service-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Timeline
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 appearance-none bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors"
                      disabled={status === "submitting"}
                    >
                      <option value="">When do you need this?</option>
                      <option value="immediate">Immediate (ASAP)</option>
                      <option value="1-3-months">1-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-12-months">6-12 Months</option>
                      <option value="planning">Just Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Budget Range (NGN)
                  </label>
                  <div className="relative">
                    <BuildingIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 appearance-none bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors"
                      disabled={status === "submitting"}
                    >
                      <option value="">What's your budget range?</option>
                      <option value="under-10m">Under ₦10 Million</option>
                      <option value="10m-50m">₦10M - ₦50 Million</option>
                      <option value="50m-100m">₦50M - ₦100 Million</option>
                      <option value="100m-500m">₦100M - ₦500 Million</option>
                      <option value="over-500m">Over ₦500 Million</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Details <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onBlur={() => validateForm()}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Describe your project requirements, location, scope, timeline, and any specific needs..."
                    disabled={status === "submitting"}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full mt-6 py-3" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" aria-hidden="true" />
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
                  Thank you! We'll get back to you within 2 business hours.
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 text-center text-sm text-red-600" role="alert">
                  Something went wrong. Please try again or call us directly at 08034088880.
                </p>
              )}

              <p className="mt-4 text-center text-xs text-gray-500">
                By submitting, you agree to our{' '}
                <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>{' '}
                and{' '}
                <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}