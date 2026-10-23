import React from "react";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Synora Technologies Private Limited",
    legalName: "Synora Technologies Private Limited",
    url: "https://synoratech.in",
    logo: "https://synoratech.in/brand/synora-logo-dark.svg",
    description:
      "Synora Technologies develops an enterprise Digital Workforce platform to create, orchestrate, and operate intelligent Digital Employees for business operations.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "sales@synoratech.in",
      contactType: "corporate inquiries",
      areaServed: "Global",
    },
    knowsAbout: [
      "Digital Workforce",
      "Digital Employees",
      "Workflow Orchestration",
      "Process Automation",
      "Enterprise AI",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
