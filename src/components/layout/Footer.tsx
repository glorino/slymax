"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Truck,
  HardHat,
  Flame,
  Wrench,
  Factory,
  Users,
  MessageSquare,
  Share2,
  Globe,
  ChevronRight,
} from "lucide-react"

const companyInfo = {
  name: "Slymax Nigeria Limited",
  tagline: "Your trusted partner in construction, industrial equipment, and material supply across Nigeria.",
  address: "21 Philip Omosigho Street, EKEA off Sapele Road, Benin City, Edo State",
  email: "info@slymaxnig.com",
  phone: "+234 803 408 8880",
  phones: ["+234 803 408 8880", "+234 805 555 9758", "+234 802 301 9197"],
}

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Construction", href: "/services/construction", icon: HardHat },
  { name: "Steel Material Supply", href: "/services/steel-material-supply", icon: Building2 },
  { name: "Scaffold Material", href: "/services/scaffold-material", icon: Wrench },
  { name: "Gas Equipment", href: "/services/gas-equipment", icon: Flame },
  { name: "Fire Equipment", href: "/services/fire-equipment", icon: Flame },
  { name: "Heavy Equipment Leasing", href: "/services/heavy-equipment-leasing", icon: Truck },
  { name: "Jib Crane Supply", href: "/services/jib-crane-supply", icon: Factory },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/slymax-nigeria", icon: Users },
  { name: "Twitter", href: "https://twitter.com/slymaxnig", icon: MessageSquare },
  { name: "Facebook", href: "https://facebook.com/slymaxnigeria", icon: Share2 },
  { name: "Instagram", href: "https://instagram.com/slymaxnigeria", icon: Globe },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300" role="contentinfo">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-white" aria-label="Slymax Nigeria Limited - Home">
              <Image
                src="/logo.png"
                alt="Slymax Nigeria Limited Logo"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <span>Slymax Nigeria Limited</span>
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed">{companyInfo.tagline}</p>

            <div className="space-y-4 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary-500 shrink-0" aria-hidden="true" />
                <address className="not-italic text-sm">{companyInfo.address}</address>
              </div>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Mail className="h-5 w-5 text-primary-500 shrink-0" aria-hidden="true" />
                <span className="text-sm">{companyInfo.email}</span>
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Phone className="h-5 w-5 text-primary-500 shrink-0" aria-hidden="true" />
                <span className="text-sm">{companyInfo.phones.join(" | ")}</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <nav aria-label="Services">
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <service.icon className="h-4 w-4" aria-hidden="true" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Service Areas</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Lagos State</li>
              <li>Rivers State</li>
              <li>Delta State</li>
              <li>Imo State</li>
              <li>Abia State</li>
              <li>Anambra State</li>
              <li>Enugu State</li>
              <li>Federal Capital Territory</li>
              <li>Abuja FCT</li>
              <li>Nationwide Coverage</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}