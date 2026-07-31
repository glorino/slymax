export const companyInfo = {
  name: "Slymax Nigeria Limited",
  tagline: "Engineering Excellence. Trusted Partnership.",
  phone: "08034088880",
  phones: ["08034088880", "08055559758", "08023019197"],
  email: "info@slymaxnig.com",
  address: "21 Philip Omosigho Street, EKEA off Sapele Road, Benin City, Edo State, Nigeria",
  workingHours: "Mon - Fri: 8:00 AM - 6:00 PM",
  website: "https://slymaxnig.com",
  founded: 2000,
  yearsExperience: 17,
  projectsCompleted: "500+",
  sitesMaintained: "500+",
  mastsBuilt: "200+",
  statesCovered: 36,
  stats: {
    projectsCompleted: "500+",
    yearsExperience: 17,
    mastsBuilt: "200+",
    statesCovered: 36,
    teamMembers: "50+",
  },
  social: {
    linkedin: "https://linkedin.com/company/slymax-nigeria",
    twitter: "https://twitter.com/slymaxnig",
    facebook: "https://facebook.com/slymaxnigeria",
    instagram: "https://instagram.com/slymaxnig",
  },
} as const;

export const services = [
  { slug: "oil-and-gas", title: "Oil and Gas" },
  { slug: "telecommunication", title: "Telecommunication" },
  { slug: "real-estate", title: "Real Estate" },
  { slug: "haulage-logistics", title: "Haulage & Logistics" },
  { slug: "building-construction", title: "Building & Construction" },
] as const;

export const additionalServices = [
  { slug: "technical-manpower", title: "Technical Manpower" },
  { slug: "procurement", title: "Procurement" },
  { slug: "operation-maintenance", title: "Operation & Maintenance" },
  { slug: "civil-structural", title: "Civil & Structural" },
  { slug: "mechanical-services", title: "Mechanical Services" },
  { slug: "electrification", title: "Rural & Urban Electrification" },
  { slug: "water-engineering", title: "Water Engineering" },
  { slug: "steel-material-supply", title: "Steel Material Supply" },
  { slug: "scaffold-material", title: "Scaffold Material" },
  { slug: "gas-equipment", title: "Gas Equipment" },
  { slug: "fire-equipment", title: "Fire Equipment" },
  { slug: "heavy-equipment-leasing", title: "Heavy Equipment Leasing" },
] as const;
