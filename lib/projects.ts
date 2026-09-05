export type ProjectDiscipline =
  "Graphic Design" | "Motion Design" | "Web Design";

export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  year: number;
  disciplines: ProjectDiscipline[];
  className: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  media?: {
    thumbnail?: string;
    hero?: string;
    details?: string[];
    motion?: string;
  };
  heroVideo?: string;
  nextProject?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "signal-noise",
    title: "Signal / Noise",
    type: "Brand system + motion",
    year: 2024,
    disciplines: ["Graphic Design", "Motion Design"],
    className: "project-signal",
    shortDescription:
      "A comprehensive brand system for a forward-thinking audio collective.",
    fullDescription:
      "Signal / Noise is a brand identity and motion system designed for a contemporary audio and visual arts collective. The project explores the tension between clarity and complexity through a modular typographic system and kinetic brand applications.",
    challenge:
      "Create a unified brand language that balances visual hierarchy with artistic experimentation, while maintaining flexibility across digital and physical applications.",
    solution:
      "We developed a modular grid-based system with dynamic letterforms, paired with a carefully orchestrated motion language. The brand adapts from minimal static applications to immersive animated experiences.",
    results: [
      "Complete brand guidelines used across 40+ digital and print touchpoints",
      "Motion system adopted for all video content and social media",
      "Brand recognition increased 65% in target audience surveys",
    ],
    tools: ["Figma", "After Effects", "Python", "HTML/CSS"],
    media: {
  thumbnail: "/work/signal-noise/thumbnail.jpg",
  hero: "/work/signal-noise/hero.jpg",
  details: [
    "/work/signal-noise/detail-01.jpg",
    "/work/signal-noise/detail-02.jpg",
  ],
  motion: "/work/signal-noise/motion.mp4",
},
    nextProject: "vaamoose",
  },
  {
    id: "2",
    slug: "afterimage-fm",
    title: "Afterimage FM",
    type: "Digital experience",
    year: 2023,
    disciplines: ["Web Design", "Motion Design"],
    className: "project-afterimage",
    shortDescription:
      "An interactive streaming platform for experimental music and sonic art.",
    fullDescription:
      "Afterimage FM is a web-based streaming and curation platform for experimental and ambient music. The interface combines real-time data visualization with tactile interaction design, creating an immersive listening experience.",
    challenge:
      "Design an interface that makes radio feel spatial and tactile while handling complex metadata and real-time streaming information.",
    solution:
      "Built a three-dimensional interface metaphor where content exists in a dynamic spatial grid. Real-time audio analysis drives subtle generative background animations that respond to the music.",
    results: [
      "50,000+ active monthly users",
      "Average session duration increased 3.5x with new interface",
      "Featured in Design Observer and It's Nice That",
    ],
    tools: ["React", "Three.js", "Web Audio API", "Node.js"],
    nextProject: "speedguard",
  },
  {
    id: "3",
    slug: "soft-hardware",
    title: "Soft Hardware",
    type: "Campaign direction",
    year: 2023,
    disciplines: ["Graphic Design", "Motion Design"],
    className: "project-hardware",
    shortDescription:
      "A provocative campaign exploring the blurred line between digital and physical.",
    fullDescription:
      "Soft Hardware is a creative campaign questioning the materiality of digital tools and interfaces. Through a series of installations, animations, and print pieces, we explored how digital concepts manifest in physical form.",
    challenge:
      "Create a cohesive visual and conceptual narrative across installations, video, print, and social media that challenges conventional notions of technology.",
    solution:
      "Developed a visual language combining ultra-smooth CGI renders with tactile analog photography. The same forms appear in both digital and physical contexts, blurring the boundary between disciplines.",
    results: [
      "200,000+ impressions across social platforms",
      "Exhibited in 3 major galleries internationally",
      "Sparked discourse in technology and design publications",
    ],
    tools: ["C4D", "Blender", "Illustrator", "Lightroom"],
    nextProject: "spring-of-life-academy",
  },
  {
    id: "4",
    slug: "field-notes",
    title: "Field Notes",
    type: "Editorial identity",
    year: 2022,
    disciplines: ["Graphic Design", "Web Design"],
    className: "project-field",
    shortDescription:
      "A publication identity for architectural and cultural research.",
    fullDescription:
      "Field Notes is a publication exploring the intersection of architecture, technology, and urban space. We designed a modular editorial system that works across print journals, a digital archive, and an interactive map-based interface.",
    challenge:
      "Create a flexible editorial system that accommodates dense academic content while remaining visually engaging and accessible to diverse audiences.",
    solution:
      "Developed a grid-based layout system with clear typographic hierarchy, complemented by a custom web application for interactive exploration of spatial research.",
    results: [
      "8 published volumes with consistent visual identity",
      "Digital archive receives 15,000+ monthly visitors",
      "Adopted as official publication identity across 5 institutions",
    ],
    tools: ["InDesign", "Next.js", "Mapbox", "PostgreSQL"],
    nextProject: "ctrl-create-site",
  },
  {
    id: "5",
    slug: "ctrl-create-site",
    title: "CTRL + CREATE Site",
    type: "Web design & development",
    year: 2024,
    disciplines: ["Web Design"],
    className: "project-ctrl",
    shortDescription:
      "This site itself — a web design exploration of portfolio presentation.",
    fullDescription:
      "CTRL + CREATE's own digital home is a carefully crafted exploration of how a portfolio can be both a showcase and an artwork. The site employs experimental typography, pointer-driven interactions, and performance-optimized imagery to create an immersive experience.",
    challenge:
      "Design a portfolio that is simultaneously a technical showcase, an artistic statement, and a functional navigation system for discovering work.",
    solution:
      "Built with Next.js and optimized image loading, the site uses client-side interactions to create tactile, responsive experiences. Every animation serves a purpose, and the responsive design maintains visual integrity from mobile to 4K displays.",
    results: [
      "Lighthouse score: 98 across all metrics",
      "WCAG AAA contrast compliance on all text elements",
      "First page load: <800ms on 4G networks",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "next/image"],
    nextProject: "move-reel",
  },
  {
    id: "6",
    slug: "vaamoose",
    title: "VAAMOOSE",
    type: "Transport management app",
    year: 2026,
    disciplines: ["Web Design"],
    className: "project-vaamoose",
    shortDescription:
      "A transport management experience designed to make movement easier to plan and manage.",
    fullDescription:
      "VAAMOOSE is a transport management app concept focused on clear journeys, operational visibility and a calmer experience for people coordinating transport.",
    challenge:
      "Make a transport service feel simple and trustworthy while keeping routes, bookings and operational information easy to understand.",
    solution:
      "We created a structured interface with clear journey states, focused actions and a visual language that makes movement feel direct rather than complicated.",
    results: [
      "Designed a focused experience for transport planning and management",
      "Created a visual system that supports both operational and customer-facing screens",
      "Prepared a responsive foundation for future product development",
    ],
    tools: ["Figma", "Next.js", "TypeScript", "Tailwind CSS"],
    nextProject: "speedguard",
  },
  {
    id: "7",
    slug: "speedguard",
    title: "SPEEDGUARD",
    type: "Safety technology platform",
    year: 2026,
    disciplines: ["Web Design"],
    className: "project-speedguard",
    shortDescription:
      "A speed detection and license plate recognition system for safer roads.",
    fullDescription:
      "SPEEDGUARD is a digital system concept for monitoring vehicle speed and recognizing license plates. The interface is designed around fast comprehension, reliable alerts and readable evidence.",
    challenge:
      "Present time-sensitive road and vehicle data clearly enough for operators to make confident decisions without visual overload.",
    solution:
      "We organized detection events, vehicle records and alerts into a practical dashboard system with strong hierarchy, status cues and traceable details.",
    results: [
      "Designed a clear dashboard structure for detection and recognition events",
      "Developed an interface direction for alerts, records and evidence review",
      "Balanced technical data with a calm, accessible visual system",
    ],
    tools: ["Figma", "React", "TypeScript", "Data visualization"],
    nextProject: "spring-of-life-academy",
  },
  {
    id: "8",
    slug: "spring-of-life-academy",
    title: "SPRING OF LIFE ACADEMY",
    type: "School website",
    year: 2026,
    disciplines: ["Web Design"],
    className: "project-spring",
    shortDescription:
      "A welcoming website for a group of schools, built around trust, learning and connection.",
    fullDescription:
      "Spring of Life Academy is a school website concept for presenting a group of schools, their learning environment, admissions information and community story to families.",
    challenge:
      "Help prospective families understand the academy quickly while communicating warmth, structure and confidence across different school touchpoints.",
    solution:
      "We shaped a friendly information architecture with clear pathways for parents, students and staff, supported by an approachable editorial visual language.",
    results: [
      "Created a clear digital home for a group of schools",
      "Structured key pathways for admissions, programs and school information",
      "Established a warm, trustworthy visual direction for families",
    ],
    tools: ["Figma", "Next.js", "TypeScript", "Content design"],
    nextProject: "move-reel",
  },
  {
    id: "9",
    slug: "move-reel",
    title: "Move.",
    type: "Motion reel",
    year: 2026,
    disciplines: ["Motion Design"],
    className: "project-move",
    shortDescription:
      "A vertical kinetic-typography reel built around the CTRL + CREATE identity.",
    fullDescription:
      "An original motion piece exploring brand identity through kinetic type, built for vertical and social formats.",
    challenge:
      "Translate a static brand system into something that moves without relying on borrowed footage or stock assets.",
    solution:
      "Every frame is built around typography, color and timing pulled directly from the site's visual system.",
    results: [
      "Original frame-by-frame kinetic typography",
      "Built entirely from the site's existing brand system",
    ],
    tools: ["Motion design", "Sound sync"],
    media: {
      thumbnail: "/work/move-reel/thumbnail.jpg",
      hero: "/showreel-poster.jpg",
      details: [],
    },
    heroVideo: "/ctrl-create-vertical-reel.mp4",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const current = getProjectBySlug(currentSlug);
  if (!current?.nextProject) return undefined;
  return getProjectBySlug(current.nextProject);
}

export function getAllDisciplines(): ProjectDiscipline[] {
  return ["Graphic Design", "Motion Design", "Web Design"];
}

export function getProjectsByDiscipline(
  discipline: ProjectDiscipline,
): Project[] {
  return projects.filter((p) => p.disciplines.includes(discipline));
}
