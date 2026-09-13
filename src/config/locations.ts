export interface ServiceLocation {
  slug: string;
  name: string;
  title: string;
  description: string;
  inPerson: boolean;
  availability: string;
}

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "islamabad",
    name: "Islamabad",
    title: "Dental Clinic Marketing Services in Islamabad",
    description:
      "In-person and remote growth services for dental clinics in Islamabad, including WhatsApp automation, websites, SEO, ads, and patient follow-ups.",
    inPerson: true,
    availability:
      "DentalOS can meet clinic teams in person in Islamabad on Saturdays and Sundays, and supports them remotely throughout the week.",
  },
  {
    slug: "sargodha",
    name: "Sargodha",
    title: "Dental Clinic Marketing Services in Sargodha",
    description:
      "In-person and remote growth services for dental clinics in Sargodha, including WhatsApp automation, websites, SEO, ads, and patient follow-ups.",
    inPerson: true,
    availability:
      "DentalOS can meet clinic teams in person in Sargodha on Saturdays and Sundays, and supports them remotely throughout the week.",
  },
  {
    slug: "lahore",
    name: "Lahore",
    title: "Dental Clinic Marketing Services in Lahore",
    description:
      "Remote dental clinic marketing services for Lahore practices: WhatsApp automation, websites, SEO, social media, paid ads, and patient follow-ups.",
    inPerson: false,
    availability:
      "DentalOS supports dental clinics in Lahore remotely through WhatsApp, calls, and online working sessions.",
  },
  {
    slug: "karachi",
    name: "Karachi",
    title: "Dental Clinic Marketing Services in Karachi",
    description:
      "Remote dental clinic marketing services for Karachi practices: WhatsApp automation, websites, SEO, social media, paid ads, and patient follow-ups.",
    inPerson: false,
    availability:
      "DentalOS supports dental clinics in Karachi remotely through WhatsApp, calls, and online working sessions.",
  },
  {
    slug: "pakistan",
    name: "Pakistan",
    title: "Dental Clinic Marketing Services Across Pakistan",
    description:
      "Pakistan-wide remote growth services for dental clinics: WhatsApp automation, websites, SEO, social media, paid ads, and patient follow-ups.",
    inPerson: false,
    availability:
      "DentalOS provides remote services for dental clinics throughout Pakistan through WhatsApp, calls, and online working sessions.",
  },
];
