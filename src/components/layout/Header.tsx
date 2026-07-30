"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, Mail, Signal, Home, Flame, Truck, Building2, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const companyInfo = {
  name: "Slymax Nigeria Limited",
  phone: "08034088880",
  email: "info@slymaxnig.com",
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Telecommunication", href: "/services/telecommunication", icon: Signal, description: "Site maintenance, mast building, fibre optics" },
      { name: "Real Estate", href: "/services/real-estate", icon: Home, description: "Property development & leasing" },
      { name: "Oil and Gas", href: "/services/oil-and-gas", icon: Flame, description: "Gas equipment & pipeline services" },
      { name: "Haulage & Logistics", href: "/services/haulage-logistics", icon: Truck, description: "Aggregate haulage & equipment transport" },
      { name: "Building & Construction", href: "/services/building-construction", icon: Hammer, description: "General civil works & building" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"
  const showWhiteText = !scrolled && isHomePage

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="relative" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 font-bold transition-colors",
                showWhiteText ? "text-white hover:text-sky-300" : "text-gray-900 hover:text-primary-700"
              )}
              aria-label="Slymax Nigeria Limited - Home"
            >
              <Image
                src="/logo.png"
                alt="Slymax Nigeria Limited Logo"
                width={48}
                height={48}
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
                priority
              />
              <span className="hidden sm:block text-lg lg:text-xl">Slymax Nigeria Limited</span>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.map((item) => {
                const hasChildren = !!item.children
                const isActive = pathname === item.href || (hasChildren && pathname.startsWith(item.href))

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full",
                        isActive
                          ? "text-sky-400"
                          : showWhiteText
                            ? "text-white hover:text-sky-300"
                            : "text-gray-700 hover:text-primary-600"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  )
                }

                return (
                  <div key={item.name} className="relative group">
                    <button
                      className={cn(
                        "flex items-center gap-1.5 text-sm font-medium transition-colors",
                        isActive
                          ? "text-sky-400"
                          : showWhiteText
                            ? "text-white hover:text-sky-300"
                            : "text-gray-700 hover:text-primary-600"
                      )}
                      onMouseEnter={() => {
                        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
                        setOpenDropdown(item.name)
                      }}
                      onMouseLeave={() => {
                        dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 300)
                      }}
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                      aria-label={`${item.name} menu`}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", openDropdown === item.name && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div
                        className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-white shadow-lg border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 duration-200"
                        role="menu"
                        onMouseEnter={() => {
                          if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
                          setOpenDropdown(item.name)
                        }}
                        onMouseLeave={() => {
                          dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 300)
                        }}
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <child.icon className="h-4 w-4 text-primary-500" aria-hidden="true" />
                            <div>
                              <div className="font-medium">{child.name}</div>
                              <div className="text-xs text-gray-400">{child.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}

              <Link href="/contact">
                <Button size="sm" className="gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0">
                  <span className="hidden sm:inline">Get Quote</span>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <button
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  showWhiteText
                    ? "text-white hover:bg-white/20"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden animate-in slide-in-from-top-2 duration-200 bg-white border-t border-gray-100"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const hasChildren = !!item.children
                  const isActive = pathname === item.href || (hasChildren && pathname.startsWith(item.href))

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "px-4 py-2.5 rounded-lg transition-colors",
                          isActive
                            ? "text-primary-600 bg-primary-50"
                            : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                        )}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    )
                  }

                  const isDropdownOpen = openDropdown === item.name
                  return (
                    <div key={item.name}>
                      <button
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          isActive || isDropdownOpen
                            ? "text-primary-600 bg-primary-50"
                            : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                        )}
                        onClick={() => setOpenDropdown(isDropdownOpen ? null : item.name)}
                        aria-expanded={isDropdownOpen}
                        aria-controls={`${item.name}-mobile-dropdown`}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-gray-400 transition-transform duration-200",
                            isDropdownOpen && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {isDropdownOpen && (
                        <div
                          id={`${item.name}-mobile-dropdown`}
                          className="mt-1 ml-4 pl-4 border-l-2 border-gray-100 space-y-1 animate-slide-down"
                          role="menu"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-r-lg transition-colors"
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <child.icon className="h-4 w-4 text-primary-600" aria-hidden="true" />
                              <div className="flex flex-col">
                                <span className="font-medium">{child.name}</span>
                                <span className="text-xs text-gray-400">{child.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <span className="font-medium">Call: {companyInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    <span className="font-medium">Email: {companyInfo.email}</span>
                  </a>
                  <Button asChild className="w-full justify-start px-4 py-3" size="lg">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
