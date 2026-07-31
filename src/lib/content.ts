// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR SITE CONTENT
// Every fact here is drawn directly from Yasmin's CV. To update the site,
// edit this file — no need to touch component code.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Yasmin Altuwaijri",
  firstName: "Yasmin",
  tagline: "الحمدلله دايماً وأبداً",
  locations: ["🇨🇦 Toronto, Canada", "🇸🇦 Riyadh, Saudi Arabia"],
  email: "altuwaijriyasmin@gmail.com",
  phones: ["+1 (437) 663-9911", "+966 54 443 9911"],
  linkedin: "https://www.linkedin.com/in/yasmin-altuwaijri-584077333",
  linkedinLabel: "linkedin.com/in/yasmin-altuwaijri-584077333",
};

// Hero slideshow photos — crossfades through all of these in order.
export const heroPhotos = [
  "/images/portrait-1.jpg",
  "/images/portrait-2.jpg",
];

export const profile = {
  summary: [
    "I fell in love with creating things after founding a platform with my friends in high school — we grew it and sold it before I'd even started university. Now I'm a first-year Math & Computer Science student, still chasing that feeling.",
    "Honestly, I'm a bit of a jack of all trades — I'll try almost anything once, even if I'm not sure I'll be good at it. That's taken me from a hospital's ICU to conservation campaigns for an endangered leopard to a village in the Atlas Mountains, building a production facility by hand.",
    "Fluent in English, Arabic, and French. Also a signed boxer with a silver medal.",
  ],
};

export const projects = [
  {
    name: "Leaptern",
    url: "https://leaptern.net",
    label: "leaptern.net",
    description: "Internship-access platform — co-founded, grew, and sold.",
  },
  {
    name: "Catmosphere",
    url: "https://catmosphere.org",
    label: "catmosphere.org",
    description:
      "A youth-led conservation initiative for the endangered Arabian leopard — I was a youth advocate its first year, working alongside HRH Princess Reema bint Bandar.",
  },
];

export const education = [
  {
    school: "McMaster University",
    program: "Honours Math & Computer Science",
    location: "Hamilton, Ontario, Canada",
    period: "Expected 2030",
    note: "1st year",
  },
  {
    school: "American International School of Riyadh",
    program: "Full IB Diploma",
    location: "Riyadh, Saudi Arabia",
    period: "May 2025",
    note: "High School President",
  },
];

export const leaptern = {
  name: "Leaptern",
  url: "leaptern.net",
  role: "Co-Founder & Business/Operations Lead",
  period: "2024 – 2025",
  summary:
    "One of four co-founders of Leaptern, a platform connecting students to internship opportunities across education, healthcare, hospitality, consulting, real estate, and other sectors.",
  points: [
    "Directed business strategy and operations while overseeing the technical team responsible for platform development.",
    "Grew the platform to a point of acquisition — and sold the company.",
  ],
  outcome: "Acquired",
};

export const internships = [
  {
    org: "Riyadh Hospital",
    role: "Summer Intern",
    location: "Riyadh, Saudi Arabia",
    period: "May 2026 – Jun 2026",
    points: [
      "Completed a multi-department hospital training program spanning patient safety and quality improvement.",
      "Observed clinical workflows across departments including ICU and Pharmacy, and studied accreditation standards.",
      "Built foundational skills in health information management and infection prevention protocols.",
    ],
  },
  {
    org: "Mukatafa (Consulting)",
    role: "Summer Intern",
    location: "Riyadh, Saudi Arabia",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Contributed to advocacy-focused consulting projects, supporting research and messaging strategy for client initiatives.",
      "Used Excel and Office tools to organize data and support reporting for advocacy campaigns.",
    ],
  },
];

export const leadership = [
  {
    org: "American International School of Riyadh",
    role: "Student Council President",
    period: "2024 – 2025",
    points: ["Elected high school student body president, representing the student population and leading initiatives on their behalf."],
  },
  {
    org: "Mukatafa — with HRH Princess Reema",
    role: "Youth Advocate",
    period: "Sept 2022 – Nov 2022",
    points: [
      "Represented the younger generation in a conservation initiative for the endangered Arabian leopard.",
      "Raised awareness through flyers and social media, inspiring peers to independently extend the campaign's reach.",
    ],
  },
  {
    org: "Morocco Service Trip, AIS-R",
    role: "Community Service Volunteer",
    period: "March 2023",
    points: [
      "Lived and worked in an Amazigh village in the Atlas Mountains.",
      "Helped construct a small production facility for a local family's business, and supported the community through cooking and donations.",
    ],
  },
];

export const achievements = [
  {
    label: "Silver Medalist, Boxing",
    detail: "Kingdom Cup — signed athlete with Al Nassr Club",
  },
  {
    label: "Co-Founder, Leaptern.net",
    detail: "Internship-access platform — later sold",
  },
  {
    label: "Certificate of Outstanding Efforts",
    detail: "HL French, 2024",
  },
  {
    label: "Model United Nations",
    detail: "Distinguished Delegate & Honourable Mention (AIS-R); Honourable Mention, Al Hema Int'l School of Bahrain — 2021",
  },
  {
    label: "Model United Nations",
    detail: "Certificates of Participation — KAUST School & Annual Amman MUN Conferences, 2022",
  },
];

export const skills = {
  languages: [
    { name: "English", level: "C2" },
    { name: "Arabic", level: "C2" },
    { name: "French", level: "C1" },
  ],
  technical: ["MATLAB"],
  tools: ["Microsoft Word", "Excel", "PowerPoint", "Google Sheets", "Google Docs", "Google Slides"],
  strengths: [
    "Leadership",
    "Business strategy",
    "Cross-cultural communication",
    "Time management",
    "Organizational skills",
    "Quantitative analysis",
  ],
};

// ---------------------------------------------------------------------------
// Globe pins — grounded in real places from the CV. Keep this list short;
// it's the signature moment, not a full travel log.
// ---------------------------------------------------------------------------
export type GlobePin = {
  id: string;
  label: string;
  place: string;
  lat: number;
  lon: number;
  note: string;
};

export const globePins: GlobePin[] = [
  {
    id: "toronto",
    label: "Toronto / Hamilton",
    place: "Canada",
    lat: 43.5448,
    lon: -80.2482,
    note: "Where I'm studying Math & CS at McMaster — currently in my first year.",
  },
  {
    id: "riyadh",
    label: "Riyadh",
    place: "Saudi Arabia",
    lat: 24.7136,
    lon: 46.6753,
    note: "Home. Where I built Leaptern, ran student council, and boxed my way to a Kingdom Cup silver.",
  },
  {
    id: "atlas",
    label: "Atlas Mountains",
    place: "Morocco",
    lat: 31.0,
    lon: -7.9,
    note: "Spent a week in an Amazigh village helping build a production facility — one of the best trips I've taken.",
  },
  {
    id: "megeve",
    label: "Megève",
    place: "France",
    lat: 45.8566,
    lon: 6.6178,
    note: "Where I ski with my family — a yearly tradition in the French Alps.",
  },
  {
    id: "malaga",
    label: "Málaga",
    place: "Spain",
    lat: 36.7213,
    lon: -4.4214,
    note: "Family vacation spot on the Costa del Sol.",
  },
  {
    id: "tokyo",
    label: "Tokyo",
    place: "Japan",
    lat: 35.6762,
    lon: 139.6503,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "paris",
    label: "Paris",
    place: "France",
    lat: 48.8566,
    lon: 2.3522,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "doha",
    label: "Doha",
    place: "Qatar",
    lat: 25.2854,
    lon: 51.531,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "seoul",
    label: "Seoul",
    place: "South Korea",
    lat: 37.5665,
    lon: 126.978,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "rome",
    label: "Rome",
    place: "Italy",
    lat: 41.9028,
    lon: 12.4964,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "marrakech",
    label: "Marrakech",
    place: "Morocco",
    lat: 31.6295,
    lon: -7.9811,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "geneva",
    label: "Geneva",
    place: "Switzerland",
    lat: 46.2044,
    lon: 6.1432,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "alula",
    label: "AlUla",
    place: "Saudi Arabia",
    lat: 26.61,
    lon: 37.92,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "istanbul",
    label: "Istanbul",
    place: "Turkey",
    lat: 41.0082,
    lon: 28.9784,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "amman",
    label: "Amman",
    place: "Jordan",
    lat: 31.9454,
    lon: 35.9284,
    note: "Where I competed in the Annual Amman MUN Conference.",
  },
  {
    id: "dubai",
    label: "Dubai",
    place: "UAE",
    lat: 25.2048,
    lon: 55.2708,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "singapore",
    label: "Singapore",
    place: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
    note: "Add a note about this trip in content.ts.",
  },
  {
    id: "maldives",
    label: "Maldives",
    place: "Maldives",
    lat: 4.1755,
    lon: 73.5093,
    note: "Add a note about this trip in content.ts.",
  },
];

export const travelFootnote =
  "Also collected a few stamps along the way through Model UN — Bahrain, Jordan, and the KAUST campus near Jeddah.";

// ---------------------------------------------------------------------------
// Media — a general photo gallery. Just placeholders for now; drop your
// own images into /public/images/media and update the paths below.
// ---------------------------------------------------------------------------
export type MediaPhoto = {
  id: string;
  imageSrc: string;
  caption: string;
};

export const mediaPhotos: MediaPhoto[] = [
  { id: "media-1", imageSrc: "/images/media/1.jpg", caption: "Add a caption" },
  { id: "media-2", imageSrc: "/images/media/2.jpg", caption: "Add a caption" },
  { id: "media-3", imageSrc: "/images/media/3.jpg", caption: "Add a caption" },
  { id: "media-4", imageSrc: "/images/media/4.jpg", caption: "Add a caption" },
  { id: "media-5", imageSrc: "/images/media/5.jpg", caption: "Add a caption" },
  { id: "media-6", imageSrc: "/images/media/6.jpg", caption: "Add a caption" },
];

// ---------------------------------------------------------------------------
// Fitness / interests — photos + captions are placeholders since this isn't
// on the CV. Replace both the images (see /public/images/hobbies) and the
// caption text below with your own.
// ---------------------------------------------------------------------------
export const likesIntro =
  "A few of the things that keep me active and moving — skiing, boxing, running, and traveling whenever I can. Music's always on in the background too.";

export type HobbyPhoto = {
  id: string;
  category: string;
  imageSrc: string; // e.g. "/images/hobbies/skiing.jpg"
  caption: string; // short caption shown under the photo
  ready?: boolean; // true once a real photo has been uploaded to imageSrc
};

export const hobbyPhotos: HobbyPhoto[] = [
  {
    id: "hobby-skiing",
    category: "Skiing",
    imageSrc: "/images/hobbies/1.jpg",
    caption: "Skiing in Megève every year with my family.",
    ready: true,
  },
  {
    id: "hobby-mma",
    category: "Mixed Martial Arts",
    imageSrc: "/images/hobbies/2.jpg",
    caption: "Ran into Nina Drama, a UFC journalist, while training — UFC Fight Night was in Riyadh.",
    ready: true,
  },
  {
    id: "hobby-running",
    category: "Running",
    imageSrc: "/images/hobbies/3.jpg",
    caption: "Woke up at 5am to run with Gunna's run club when he stopped by Toronto on his world tour.",
    ready: true,
  },
  {
    id: "hobby-traveling",
    category: "Traveling",
    imageSrc: "/images/hobbies/4.jpg",
    caption: "Making time to travel whenever I can.",
    ready: true,
  },
];

// ---------------------------------------------------------------------------
// Music — floating album covers. Images and details are placeholders;
// replace with albums that actually mean something to you.
// ---------------------------------------------------------------------------
export type AlbumCover = {
  id: string;
  imageSrc: string;
  title: string;
  artist: string;
  rotate: number; // small tilt, in degrees, for the scattered floating look
};

export const musicIntro = "A few albums I've had on repeat lately.";

export const albumCovers: AlbumCover[] = [
  {
    id: "album-astroworld",
    imageSrc: "/images/music/1.jpg",
    title: "Astroworld",
    artist: "Travis Scott",
    rotate: -6,
  },
  {
    id: "album-octane",
    imageSrc: "/images/music/2.jpg",
    title: "Octane",
    artist: "Don Toliver",
    rotate: 4,
  },
  {
    id: "album-best-of-sade",
    imageSrc: "/images/music/3.jpg",
    title: "The Best of Sade",
    artist: "Sade",
    rotate: -3,
  },
  {
    id: "album-lovesick",
    imageSrc: "/images/music/4.jpg",
    title: "Lovesick",
    artist: "Don Toliver",
    rotate: 7,
  },
  {
    id: "album-jackboys2",
    imageSrc: "/images/music/5.jpg",
    title: "JACKBOYS 2",
    artist: "Jackboys",
    rotate: -8,
  },
  {
    id: "album-hardstone-psycho",
    imageSrc: "/images/music/6.jpg",
    title: "Hardstone Psycho",
    artist: "Don Toliver",
    rotate: 5,
  },
  {
    id: "album-currents",
    imageSrc: "/images/music/7.jpg",
    title: "Currents",
    artist: "Tame Impala",
    rotate: -5,
  },
  {
    id: "album-blonde",
    imageSrc: "/images/music/8.jpg",
    title: "Blonde",
    artist: "Frank Ocean",
    rotate: 3,
  },
  {
    id: "album-iceman",
    imageSrc: "/images/music/9.jpg",
    title: "ICEMAN",
    artist: "Drake",
    rotate: -4,
  },
];
