export const site = {
  name: "Elevare Global",
  tagline: "Defining Global Excellence",
  whatsapp: "+971555039188",
  whatsappDisplay: "+971 55 503 9188",
  email: "info@globalelevare.com",
  office: "Sharjah, UAE",
  waLink: "https://wa.me/971555039188",
  telLink: "tel:+971555039188",
  mailLink: "mailto:info@globalelevare.com",
};

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  { name: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
];

export const stats = [
  { n: "500+", label: "Global clients" },
  { n: "45+", label: "Countries served" },
  { n: "15+", label: "Years in the UAE" },
  { n: "98%", label: "Approval success rate" },
];

export const services = [
  {
    n: "01",
    title: "Mainland formation",
    body: "Trade anywhere in the UAE, invoice government entities, no visa cap. 100% foreign ownership on most activities.",
    price: "From AED 14,500",
  },
  {
    n: "02",
    title: "Free zone formation",
    body: "Forty-plus zones compared against your activity, visa count and renewal budget not against our commission.",
    price: "From AED 5,750",
  },
  {
    n: "03",
    title: "Offshore formation",
    body: "RAK ICC and JAFZA offshore for holding structures, asset protection and shareholding no visas, no office.",
    price: "From AED 9,750",
  },
  {
    n: "04",
    title: "Visas & immigration",
    body: "Investor, partner, employee and family residence visas. Medical, Emirates ID, biometrics escorted, not explained.",
    price: "From AED 3,900 per visa",
  },
  {
    n: "05",
    title: "PRO & government",
    body: "Attestations, labour cards, Ejari, notary, licence renewals. We stand in the queue so your week stays intact.",
    price: "Retainer from AED 1,500 / mo",
  },
  {
    n: "06",
    title: "Banking, tax & books",
    body: "Corporate account introductions, bookkeeping, VAT and 9% corporate tax registration and filing.",
    price: "From AED 950 / mo",
  },
];

export type EmirateKey =
  | "abudhabi"
  | "dubai"
  | "sharjah"
  | "ajman"
  | "uaq"
  | "rak"
  | "fujairah";

export type Zone = {
  name: string;
  kind: "Free zone" | "Mainland" | "Offshore";
  price: string;
  note: string;
};

export type Emirate = {
  key: EmirateKey;
  n: string;
  name: string;
  blurb: string;
  from: string;
  /** Approximate capital coordinates, used to anchor the map's Voronoi regions. */
  lon: number;
  lat: number;
  zones: Zone[];
};

export const emirates: Emirate[] = [
  {
    key: "abudhabi",
    n: "01",
    name: "Abu Dhabi",
    from: "15,500",
    lon: 54.05,
    lat: 23.9,
    blurb:
      "Capital, sovereign money and the financial centre. Slower filings, heavier standing.",
    zones: [
      { name: "ADGM", kind: "Free zone", price: "AED 22,500", note: "financial services · common law" },
      { name: "KEZAD", kind: "Free zone", price: "AED 15,500", note: "logistics & manufacturing" },
      { name: "Abu Dhabi mainland", kind: "Mainland", price: "AED 19,500", note: "ADDED licence · tenders" },
    ],
  },
  {
    key: "dubai",
    n: "02",
    name: "Dubai",
    from: "12,500",
    lon: 55.27,
    lat: 25.05,
    blurb:
      "Where the clients and the banks are. Costs more, opens accounts faster, reads best on an invoice.",
    zones: [
      { name: "IFZA", kind: "Free zone", price: "AED 12,900", note: "1 investor visa · 3 activities" },
      { name: "Meydan", kind: "Free zone", price: "AED 12,500", note: "strong bank introductions" },
      { name: "DMCC", kind: "Free zone", price: "AED 34,000", note: "flexi-desk · premium standing" },
      { name: "Dubai mainland", kind: "Mainland", price: "AED 18,500", note: "DED licence · government tenders" },
    ],
  },
  {
    key: "sharjah",
    n: "03",
    name: "Sharjah",
    from: "5,750",
    lon: 55.58,
    lat: 25.3,
    blurb:
      "The value route. Cheapest credible licences in the country and a 40-minute drive to Dubai clients.",
    zones: [
      { name: "SHAMS", kind: "Free zone", price: "AED 5,750", note: "0 visa · 1 activity · digital licence" },
      { name: "SPC Free Zone", kind: "Free zone", price: "AED 6,500", note: "1 visa eligible · dual licence option" },
      { name: "Hamriyah", kind: "Free zone", price: "AED 8,900", note: "industrial & trading, warehousing" },
      { name: "Sharjah mainland", kind: "Mainland", price: "AED 14,500", note: "SEDD licence · unlimited visas" },
    ],
  },
  {
    key: "ajman",
    n: "04",
    name: "Ajman",
    from: "6,900",
    lon: 55.47,
    lat: 25.41,
    blurb:
      "Small, fast and forgiving on documents a common first licence for solo founders.",
    zones: [
      { name: "Ajman Free Zone", kind: "Free zone", price: "AED 8,500", note: "1 visa · trading & services" },
      { name: "Ajman Media City", kind: "Free zone", price: "AED 6,900", note: "0 visa · media & consultancy" },
    ],
  },
  {
    key: "uaq",
    n: "05",
    name: "Umm Al Quwain",
    from: "9,000",
    lon: 55.64,
    lat: 25.56,
    blurb:
      "Quiet, cheap renewals, no activity drama. Good for holding trade licences that just need to exist.",
    zones: [
      { name: "UAQ FTZ", kind: "Free zone", price: "AED 9,000", note: "1 visa · low renewal" },
      { name: "UAQ mainland", kind: "Mainland", price: "AED 12,000", note: "local market trading" },
    ],
  },
  {
    key: "rak",
    n: "06",
    name: "Ras Al Khaimah",
    from: "6,500",
    lon: 56.0,
    lat: 25.85,
    blurb:
      "Industry and offshore. RAK ICC is the country's workhorse holding vehicle.",
    zones: [
      { name: "RAKEZ", kind: "Free zone", price: "AED 11,500", note: "industrial, warehousing, visas" },
      { name: "RAK DAO", kind: "Free zone", price: "AED 6,500", note: "digital assets & Web3" },
      { name: "RAK ICC", kind: "Offshore", price: "AED 9,750", note: "holding · no visas · no office" },
    ],
  },
  {
    key: "fujairah",
    n: "07",
    name: "Fujairah",
    from: "9,500",
    lon: 56.31,
    lat: 25.1,
    blurb:
      "East coast, Indian Ocean port. Media, shipping and light manufacturing.",
    zones: [
      { name: "Creative City", kind: "Free zone", price: "AED 9,500", note: "media & consultancy · 1 visa" },
      { name: "Fujairah Free Zone", kind: "Free zone", price: "AED 10,500", note: "port access · trading" },
    ],
  },
];

export const partners = [
  "Meridian Trading Co.",
  "Nova Consultants",
  "Zenith Logistics",
  "Solstice Capital",
  "Vantage Digital",
  "Arcadia Holdings",
  "Beacon Maritime",
  "Lumen Analytics",
  "Crestline Ventures",
  "Halcyon Foods",
  "Northbridge Media",
  "Amberfield Group",
];

export const why = [
  {
    n: "01",
    title: "One advisor, start to finish",
    body: "The person who quotes you files your documents and answers your texts on consistent. No handover desk.",
  },
  {
    n: "02",
    title: "Fixed quotes, itemised",
    body: 'Government fee, zone fee, our fee listed separately. No "administration charges" appearing at signature.',
  },
  {
    n: "03",
    title: "Government relations desk",
    body: "Fifteen years of direct channels with SEDD, DED, GDRFA and the zone authorities. Rejections get fixed, not forwarded.",
  },
  {
    n: "04",
    title: "Licence in 3–5 working days",
    body: "For most free zones, once documents are complete. We tell you the honest timeline, including the slow ones.",
  },
  {
    n: "05",
    title: "We stay after the licence",
    body: "Renewal calendar, visa expiries, corporate tax deadlines tracked on our side and flagged before they cost you.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Free consultation",
    body: "Twenty minutes on WhatsApp or a call. Activity, ownership, visa count, budget.",
    when: "Day 0",
  },
  {
    n: "02",
    title: "Jurisdiction plan",
    body: "Two / three costed options parallelly, in writing, with the trade-offs stated.",
    when: "Day 1",
  },
  {
    n: "03",
    title: "Name & initial approval",
    body: "We draft, you sign digitally, we file with the authority and clear objections.",
    when: "Day 2–3",
  },
  {
    n: "04",
    title: "Licence issuance",
    body: "Trade licence, MOA and establishment card issued to your name.",
    when: "Day 3–5",
  },
  {
    n: "05",
    title: "Visas & bank account",
    body: "Entry permit, medical, Emirates ID, then corporate account introduction.",
    when: "Week 2–4",
  },
];

export const packages = [
  {
    tier: "Starter",
    flag: "",
    price: "AED 5,750",
    zone: "SHAMS, Sharjah · 1-year licence",
    lines: [
      "1 business activity",
      "Digital trade licence",
      "No visa quota",
      "Free consultation & jurisdiction plan",
      "Renewal from AED 5,300",
    ],
    highlight: false,
  },
  {
    tier: "Founder",
    flag: "Most chosen",
    price: "AED 12,900",
    zone: "IFZA, Dubai · 1-year licence",
    lines: [
      "3 business activities",
      "1 investor visa included",
      "Establishment card",
      "Bank account introduction",
      "Renewal from AED 11,900",
    ],
    highlight: true,
  },
  {
    tier: "Growth",
    flag: "",
    price: "AED 34,000",
    zone: "DMCC, Dubai · 1-year licence",
    lines: [
      "Up to 3 visas",
      "Flexi-desk premises",
      "Corporate tax & VAT registration",
      "Bank account introduction",
      "Dedicated PRO retainer, 3 months",
    ],
    highlight: false,
  },
];

export const quotes = [
  {
    text: "I had three quotes. Elevare was the only one that talked me out of the expensive free zone I had already decided on, and explained why. Licence in four days.",
    who: "Priya N. — e-commerce, IFZA Dubai",
    avatar: "/images/avatar-priya.jpg",
  },
  {
    text: "They handled my investor visa, my wife's, and the school paperwork nobody warned me about. I signed things; they queued.",
    who: "Marcus L. — consultancy, SHAMS Sharjah",
    avatar: "/images/avatar-marcus.jpg",
  },
  {
    text: "Two banks declined us before Elevare took over the file. Account opened in eleven days with the same documents, presented properly.",
    who: "Ahmed R. — trading, DMCC",
    avatar: "/images/avatar-ahmed.jpg",
  },
];

export const authorities = ["SEDD Sharjah", "Dubai DET", "IFZA", "RAKEZ", "DMCC", "GDRFA"];

export const posts = [
  {
    meta: "Tax · 6 min read",
    title: "UAE corporate tax at 9%: what a free-zone company actually pays",
    image: "/images/resource-tax.jpg",
  },
  {
    meta: "Formation · 8 min read",
    title: "Mainland or free zone in 2026: the ownership rules moved again",
    image: "/images/resource-formation.jpg",
  },
  {
    meta: "Banking · 5 min read",
    title: "What UAE bank compliance really asks a new company for",
    image: "/images/resource-banking.jpg",
  },
];

export const faqs = [
  {
    q: "Mainland or free zone — which one actually fits me?",
    a: "Mainland lets you trade anywhere in the UAE and bid on government contracts, with no cap on visas but a higher setup cost. A free zone is cheaper to start and fully foreign-owned by default, but usually restricts you to trading within the zone or internationally unless you add a mainland branch. We match this against your activity and visa count on the free call, before you commit to either.",
  },
  {
    q: "How long does a licence actually take to issue?",
    a: "Most free zones issue in 3–5 working days once your documents are complete. Mainland licences and anything needing external approvals (health, education, engineering) run longer — we tell you the honest range for your activity up front, not the marketing number.",
  },
  {
    q: "What's included in the fixed quote, and what isn't?",
    a: "The quote itemises government fee, zone fee and our service fee separately, for the licence you've chosen. It excludes visa costs (quoted per visa, since headcount varies) and any government fee changes announced after your quote date — we flag those the moment they're published.",
  },
  {
    q: "Can I open a corporate bank account before I have a licence?",
    a: "No — UAE banks require an issued trade licence, MOA and establishment card before they'll open a corporate account. We start the introduction process as soon as your licence is issued, and prepare the compliance documents banks ask for in parallel with the filing so the account isn't the bottleneck.",
  },
  {
    q: "What happens after the licence is issued — do you disappear?",
    a: "No. We track your renewal date, visa expiries and corporate tax deadlines from our side and flag them before they become a problem. A lapsed establishment card or a missed 9% corporate tax registration is the most common way a young company gets fined in year two.",
  },
  {
    q: "Do I need to be in the UAE in person to set up a company?",
    a: "For most free zones, no — the process can be completed remotely with digitally signed documents, and we escort the visa/Emirates ID steps once you arrive. Some mainland activities and account-opening interviews still require in-person attendance, which we'll flag at the jurisdiction-planning stage.",
  },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Free Zones", href: "#jurisdictions" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#consult" },
];

export const serviceLinks: { title: string; tag: string; icon: string; href: string }[] = [
  { title: "Mainland Formation", tag: "Direct local trade access", icon: "mainland", href: "#services" },
  { title: "Free Zone Setup", tag: "100% tax benefits", icon: "freezone", href: "#services" },
  { title: "Offshore Incorporation", tag: "Asset protection", icon: "offshore", href: "#services" },
  { title: "Visa & PRO Services", tag: "Residency solutions", icon: "visa", href: "#services" },
  { title: "License & Permits", tag: "Compliance & renewals", icon: "license", href: "#services" },
  { title: "Corporate Banking", tag: "Financial infrastructure", icon: "banking", href: "#services" },
];

export const resourceLinks: { title: string; tag: string; icon: string; href: string }[] = [
  { title: "Blogs", tag: "Technical notes & guides", icon: "blog", href: "#resources" },
  { title: "Events", tag: "Webinars & workshops", icon: "events", href: "#resources" },
  { title: "Careers", tag: "Join the team", icon: "careers", href: "#resources" },
];
