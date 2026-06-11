export type LegalPageContent = {
  title: string;
  metaDescription: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy",
  metaDescription:
    "How Stuart Thomas Construction collects, uses, and protects personal information submitted through our website and project inquiries.",
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "Stuart Thomas Construction (“STC”, “we”, “us”) respects your privacy. This policy explains what information we collect when you use our website or contact us about a project, and how we use that information.",
      ],
    },
    {
      heading: "Information We Collect",
      paragraphs: [
        "When you request a quote or contact us by phone, we may collect your name, phone number, property location, project details, and any photos or documents you choose to share.",
        "When you browse our website, standard server logs and analytics may record your IP address, browser type, pages visited, and referring URL.",
      ],
    },
    {
      heading: "How We Use Information",
      paragraphs: [
        "We use contact information to respond to inquiries, prepare estimates, schedule site visits, and deliver contracted services.",
        "We do not sell personal information. We may share information with subcontractors or suppliers only when required to perform work you have requested.",
      ],
    },
    {
      heading: "Retention & Security",
      paragraphs: [
        "We retain project and contact records as long as needed for business, legal, and warranty purposes. Reasonable administrative and technical measures protect information in our systems.",
      ],
    },
    {
      heading: "Your Choices",
      paragraphs: [
        "You may request access to or correction of personal information we hold about you by contacting us using the details on our Contact page.",
      ],
    },
    {
      heading: "Updates",
      paragraphs: [
        "We may update this policy from time to time. The effective date at the top of this page will reflect the latest version.",
      ],
    },
  ],
};

export const termsOfUse: LegalPageContent = {
  title: "Terms of Use",
  metaDescription:
    "Terms governing use of the Stuart Thomas Construction website, including content, inquiries, and limitations of liability.",
  sections: [
    {
      heading: "Acceptance",
      paragraphs: [
        "By accessing stuartthomasconstruction.com you agree to these Terms of Use. If you do not agree, please do not use the site.",
      ],
    },
    {
      heading: "Website Content",
      paragraphs: [
        "Photography, text, logos, and design on this site are owned by Stuart Thomas Construction or used with permission. You may not copy, reproduce, or republish site content without written consent.",
        "Project photos are representative of our work. Individual results vary based on site conditions, materials, and scope.",
      ],
    },
    {
      heading: "Quotes & Services",
      paragraphs: [
        "Information on this website is general in nature and does not constitute a binding quote or contract. Formal scope, pricing, and schedules are provided in written proposals after site review.",
        "Service availability may vary by season, location, and crew capacity.",
      ],
    },
    {
      heading: "Third-Party Links",
      paragraphs: [
        "Our site may link to third-party websites or social profiles. We are not responsible for the content or privacy practices of those sites.",
      ],
    },
    {
      heading: "Disclaimer",
      paragraphs: [
        "The site is provided “as is” without warranties of any kind. To the fullest extent permitted by law, STC is not liable for damages arising from use of the website or reliance on its content.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Questions about these terms may be directed through our Contact page.",
      ],
    },
  ],
};
