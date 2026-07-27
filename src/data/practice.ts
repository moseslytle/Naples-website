export const practice = {
  name: 'Naples Modern Choice Medicine',
  shortName: 'Naples Modern Choice Medicine',
  description:
    'A concierge family medicine practice in Naples, Florida, focused on a personal and clear approach to care.',
  provider: {
    name: 'Sandy P. Naples, D.O., F.A.A.F.P.',
    title: 'Board-Certified Family Physician',
    experience: 'More than 30 years in family medicine',
  },
  address: {
    street: '870 111th Avenue North, Suite 3',
    cityStateZip: 'Naples, FL 34108',
    full: '870 111th Avenue North, Suite 3, Naples, FL 34108',
  },
  phone: {
    display: '(239) 499-4765',
    href: 'tel:+12394994765',
  },
  fax: '(239) 317-1831',
  email: {
    display: 'info@naplesmcm.sprucecare.com',
    href: 'mailto:info@naplesmcm.sprucecare.com',
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=870+111th+Avenue+North+Suite+3+Naples+FL+34108',
  domain: 'naplesmodernchoicemedicine.com',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Concierge Care', href: '/concierge-care/' },
  { label: 'New Patients', href: '/new-patients/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
] as const;
