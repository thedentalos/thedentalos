export const siteConfig = {
  name: "DentalOS",
  tagline: "Automated growth for dental clinics in Pakistan",
  url: "https://thedentalos.com",
  logo: "/images/dentalos-logo.jpeg",
  whatsappNumber: "+923320942094",
  contactNumbers: [
    "+923320942094",
    "+923024730032",
  ],
  whatsappLink:
    "https://wa.me/923320942094?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20clinic%20growth%20packages",
  email: "contact@thedentalos.com",
  social: {
    instagram: "https://instagram.com/thedentalos",
    facebook: "https://facebook.com/thedentalos",
  },
  location: "Islamabad, Pakistan",
  serviceArea: "Pakistan",
  hours: {
    opens: "10:00",
    closes: "20:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  copyright: `© ${new Date().getFullYear()} DentalOS. All rights reserved.`,
} as const;
