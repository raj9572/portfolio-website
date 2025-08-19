import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Globe, ExternalLink, CheckCircle2, Send, Sparkles, FileText, GraduationCap } from "lucide-react";
import { FaCss3Alt, FaGithub, FaHtml5, FaLinkedin, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BiLogoNetlify } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiMongodb, SiVite, SiGithub, SiJson,  SiBootstrap, SiExpress, SiPostman, SiVercel,   } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profileImg from "./assets/profile.png";
import { Link } from "react-scroll";

// ================================
// Customize these constants
// ================================
const PROFILE = {
  name: "Safiullah Ansari",
  title: "Frontend Developer",
  summary:
    "I build fast, accessible, and responsive web interfaces using React, TypeScript, and Tailwind. I focus on clean UX, strong semantics, and scalable component systems.",
  location: "India",
  email: "rajali1432@gmail.com",
  phone: "+91 9572125942",
  githubUsername: "raj9572", // ← replace with your real GitHub handle
  links: {
    github: "https://github.com/raj9572",
    linkedin: "https://www.linkedin.com/in/safiullah-ansari",
    website: "https://your-domain.com",
    resume: "/resume.pdf", // place a file named resume.pdf in public/
  },
};

// Navbar items and section ids
const NAV = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "GitHub Stats", href: "github" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

// const SKILLS = [
//   "React", "Next.js", "TypeScript", "Tailwind CSS", "Redux",
//   "Node.js", "JavaScript",  "Styled Components", "Material UI",
//    "Sass", "CSS3", "HTML5",
//    "Vite", "VSCode",
//   "GitHub", "JSON"
// ];

 const SKILLS = [
  { name: "React", icon: <FaReact size={40} color="#61DBFB" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs size={40} />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" />, category: "Frontend" },
  { name: "Redux", icon: <SiRedux size={40} color="#764ABC" />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" />, category: "Backend" },
  { name: "Mongodb", icon: <SiMongodb size={40} color="#3C873A" />, category: "Backend" },
  { name: "Express", icon: <SiExpress size={40} color="#3C873A" />, category: "Backend" },
  { name: "Sass", icon: <FaSass size={40} color="#CC6699" />, category: "Frontend" },
  { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" />, category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" />, category: "Frontend" },
  { name: "Bootstrap", icon: <SiBootstrap size={40} color="#7952B3" />, category: "Frontend" },
  { name: "Vite", icon: <SiVite size={40} color="#646CFF" />, category: "Tools" },
  { name: "VSCode", icon:<VscVscode size={40} color="#007ACC" /> , category: "Tools" },
  { name: "GitHub", icon: <SiGithub size={40} />, category: "Tools" },
  { name: "Vercel", icon: <SiVercel  size={40} />, category: "Tools" },
  { name: "Postman", icon: <SiPostman size={40} color="#FF6C37"  />, category: "Tools" },
  { name: "Netlify", icon: <BiLogoNetlify  size={40} color="#FF6C37"  />, category: "Tools" },
  { name: "JSON", icon: <SiJson size={40} />, category: "Data" },
];


const PROJECTS = [
  {
    title: "Social Media",
    tags: ["React","Redux", "Scss","Nodejs","Express","MongoDB"],
    description:
      "Full-stack social media platform featuring real-time messaging, user profiles, content sharing, and interactive community engagement features.",
    link: "https://github.com/raj9572/social_media",
    image: "https://ik.imagekit.io/awrhl9mfek/social-media-image.png?updatedAt=1755600214092",
  },
  {
    title: "CodesWear Web App",
    tags: ["React", "Redux-Toolkit","Tailwind","Nodejs","Express","MongoDB"],
    description:
      "Modern e-commerce clothing platform with secure payments, inventory management, user authentication, and responsive shopping cart functionality.",
    link: "https://github.com/raj9572/codeswear_client",
    image: "https://ik.imagekit.io/awrhl9mfek/codeswear-image.png?updatedAt=1755600264750",
  },
  {
    title: "Portfolio Website",
    tags: ["React", "tailwind","shadcn-ui"],
    description:
      "Responsive personal portfolio showcasing technical skills, project highlights, professional experience, and modern web development capabilities.",
    link: "#",
    image: "https://ik.imagekit.io/awrhl9mfek/portfolio-image.png?updatedAt=1755601735664",
  },
  {
    title: "Elib Book Store",
    tags: ["React", "Tailwind","Redux-Toolkit", "TypeScript", "Nodejs","Express","MongoDB"],
    description:
      "Digital bookstore platform with search functionality, user reviews, secure checkout, reading recommendations, and comprehensive library management.",
    link: "#",
    image: "https://ik.imagekit.io/awrhl9mfek/elib_image.png?updatedAt=1755613137130",
  },
  {
    title: "Mystery Message",
    tags: ["Next.js", "Node", "Express", "MongoDB"],
    description:
      "Encrypted messaging platform enabling anonymous communication with secure message delivery, privacy protection, and user-friendly interface design.",
    link: "https://github.com/raj9572/true-feedback",
    image: "https://ik.imagekit.io/awrhl9mfek/mystry-app-image.png?updatedAt=1755600167512",
  },
  {
    title: "Todo App",
    tags: ["React", "Tailwind", "Nodejs", "Express","MongoDB"],
    description:
      "Interactive task management application with CRUD operations, priority settings, deadline tracking, and intuitive user interface design.",
    link: "https://github.com/raj9572/todo_app_backend",
    image: "https://ik.imagekit.io/awrhl9mfek/todo-app-image.png?updatedAt=1755600264403",
  },
];

const EDUCATION = [
  {
    title: "B. Tech in Information Technology",
    org: "AKTU",
    period: "2019 – 2023  Completed" ,
    details: ["Core CS fundamentals, full stack technologies, projects and training."],
  },
  {
    title: "High School & Intermediate",
    org: "Z. A. Islamia Cum Inter College",
    period: "Completed",
    details: ["Science stream, mathematics focus, school projects and clubs."],
  },
];

const TESTIMONIALS = [];

// Motion helpers
const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const zoom = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
}

const filters = ["All", "Frontend", "Backend", "Tools", "Data"];

export default function PortfolioSite() {

 const [active, setActive] = useState("All");

  const filteredSkills =
    active === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === active);



  function handleContactSubmit(e){
    e.preventDefault()
    window.alert("You may contact me via email, and I’ll be happy to respond")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ====== NAVBAR (blue gradient like reference) ====== */}
      <header className="sticky top-0 z-50 border-b bg-gradient-to-r from-sky-900 to-sky-700 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <Link to="home" smooth={true} duration={600} offset={-70} className="font-semibold tracking-tight cursor-pointer">{PROFILE.name}</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            {NAV.map((item) => (
              <Link key={item.label} to={item.href} smooth={true} duration={600} offset={-70} className="hover:opacity-80 cursor-pointer">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="bg-red-500 hover:bg-red-600 text-white">
              <a href={PROFILE.links.resume} download>
                <Download className="h-4 w-4 mr-2" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* ====== HERO ====== */}
      <section id="home" className="relative overflow-hidden bg-sky-50 ">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_-200px_-200px,rgba(2,132,199,0.12),transparent)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fade} initial="hidden" animate="show">
              
              <h1 className="mt-5 text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-sky-800">
                Hello
              </h1>
              <p className="mt-4 text-xl">I am <span className="font-semibold">{PROFILE.name}</span></p>
              <p className="text-muted-foreground">{PROFILE.title}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="contact" smooth={true} duration={600} offset={-70} ><Send className="h-4 w-4 mr-2 cursor-pointer"/>Contact Me</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="projects" smooth={true} duration={600} offset={-70} ><ExternalLink className="h-4 w-4 mr-2 cursor-pointer"/>View Projects</Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4"/>{PROFILE.location}</span>
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 hover:opacity-80"><Mail className="h-4 w-4"/>{PROFILE.email}</a>
                <a href={`tel:${PROFILE.phone}`} className="inline-flex items-center gap-1 hover:opacity-80"><Phone className="h-4 w-4"/>{PROFILE.phone}</a>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <button ><a   aria-label="GitHub" href={PROFILE.links.github} target="_blank"> <FaGithub className="w-6 h-6 cursor-pointer"/> </a></button>
                <button ><a aria-label="LinkedIn" href={PROFILE.links.linkedin} target="_blank"><FaLinkedin className="w-6 h-6 cursor-pointer" /></a></button>
                <button ><a aria-label="Website" href={`mailto:${PROFILE.email}`} target="_blank"><MdEmail  className="h-7 w-7 cursor-pointer"/></a></button>
              </div>
            </motion.div>
            <motion.div variants={zoom} initial="hidden" animate="show" className="relative">
              <div className="aspect-[4/3] rounded-full border-8 border-sky-200 overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  alt="Portrait placeholder"
                  src={profileImg}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== ABOUT ====== */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardContent className="p-6">
              <p className="leading-relaxed text-[17px]">
               Enthusiastic and self-motivated Full-Stack Developer with comprehensive expertise in HTML, CSS, JavaScript, React, Redux, Node.js, Express, and MongoDB. Strong collaborative mindset with proven ability to drive initiatives and deliver results in dynamic team environments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4"/> {PROFILE.location}</div>
              <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4"/> {PROFILE.email}</div>
              <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4"/> {PROFILE.phone}</div>
              <div className="flex items-center gap-2 text-sm"><FileText className="h-4 w-4"/> <a href={PROFILE.links.resume} download className="underline">Download Resume</a></div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ====== SKILLS ====== */}
       <Section id="skills" title="My Skills" >

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1 text-sm rounded-full border transition ${
              active === f ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            <div>{skill.icon}</div>
            <p className="mt-2 text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>

      {/* ====== PROJECTS ====== */}
      <Section id="projects" title="Projects" subtitle="Selected work and experiments">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <motion.div key={p.title} variants={zoom} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition"/>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div>
                    <Button asChild variant="outline" size="sm">
                      <a href={p.link} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2"/> View Code / Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ====== EDUCATION ====== */}
      <Section id="education" title="Education" subtitle="Formal education & schooling">
        <div className="relative border-l pl-6">
          {EDUCATION.map((e, i) => (
            <div key={e.title} className="mb-8 last:mb-0">
              <div className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full bg-sky-500" style={{ top: `${i*96}px` }} />
              <h3 className="font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5"/>{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.org} • {e.period}</p>
              <ul className="mt-2 space-y-1 text-sm">
                {e.details.map((d) => (
                  <li key={d} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ====== GITHUB STATS ====== */}
      <Section id="github" title="GitHub Stats" subtitle="A quick snapshot of my activity">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <img
                alt="GitHub stats"
                className="w-full"
                src={`https://github-readme-stats.vercel.app/api?username=${PROFILE.githubUsername}&show_icons=true&theme=default`}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <img
                alt="Top languages"
                className="w-full"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${PROFILE.githubUsername}&layout=compact`}
              />
            </CardContent>
          </Card>
        </div>
        <p className="text-xs text-muted-foreground mt-3">Replace <code>PROFILE.githubUsername</code> with your real GitHub handle.</p>
      </Section>

      {/* ====== CONTACT ====== */}
      <Section id="contact" title="Contact" subtitle="For any query contact me">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleContactSubmit} className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm" htmlFor="name">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm" htmlFor="message">Message</label>
                <Textarea id="message" placeholder="What do you need?" rows={5} />
              </div>
              <div className="md:col-span-2">
                <Button onClick={handleContactSubmit} type="button" className="w-full cursor-pointer">
                  <Send className="h-4 w-4 mr-2 "/> Send Message 
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Section>

      {/* ====== FOOTER ====== */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-muted-foreground flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href={PROFILE.links.github} className="inline-flex items-center gap-1 hover:opacity-80">
              <FaGithub className="w-4 h-4"/> GitHub
            </a>
            <a href={PROFILE.links.linkedin} className="inline-flex  items-center gap-1 hover:opacity-80">
              <FaLinkedin className="h-4 w-4 cursor-pointer"/> LinkedIn
            </a>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 hover:opacity-80">
              <MdEmail  className="h-4 w-4 cursor-pointer"/> Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
