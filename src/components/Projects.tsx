import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Lattice - Chatbot Platform",
    period: "Nov 2024",
    company: "Chhaai AI Solutions",
    description: "Chatbot-Driven Platform for Startup Ecosystem with NLP, community building, and automated advice features.",
    highlights: [
      "AI chatbot handling 80%+ of initial user queries",
      "Data security using cryptography and PostgreSQL (99.9% protection)",
      "Google Auth integration reducing verification by 40%",
      "Django/Python backend with multiuser profiles and event notifications"
    ],
    tech: ["NLP", "Django", "Python", "PostgreSQL", "Google Auth"],
    github: "https://github.com/Dharuneshan/lattice"
  },
  {
    title: "15-Jobs Mobile Portal",
    period: "March 2025",
    company: "15 Bucks Startup",
    description: "Flutter Mobile Job Portal designed for the unskilled workforce with native language support.",
    highlights: [
      "Full-stack application with Flutter/Dart and Django REST API",
      "100% native language support for 10K+ users",
      "Reduced job search time by 30%",
      "Production-ready CI/CD pipeline with Firebase and AWS Amplify"
    ],
    tech: ["Flutter", "Dart", "Django", "REST API", "Firebase", "AWS"],
    github: "https://github.com/Dharuneshan/jobs-app-flutter"
  },
  {
    title: "Ramanuj Website",
    period: "Aug 2025",
    company: "Ramanuj AI solution",
    description: "Full-Stack corporate website with modern UI/UX and comprehensive deployment guides.",
    highlights: [
      "High-performance 2-tier architecture with TypeScript/React and Node.js",
      "5+ custom components with 20% boost in user interaction",
      "7+ detailed deployment guides for Vercel and Railway",
      "Strategic AI-focused marketing integration"
    ],
    tech: ["TypeScript", "React", "Node.js", "Vercel", "Railway"],
    link: "https://ramanujwebsite.vercel.app/"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-elevated rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group"
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-morphism hover:bg-primary/20 transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-morphism hover:bg-primary/20 transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-accent">
            <span>{project.period}</span>
            <span>•</span>
            <span>{project.company}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full glass-morphism text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions that blend AI, full-stack development, and user-centric design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
