import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "15 Bucks",
    role: "Co-Founder, CTO and Freelancer",
    period: "April 2025 – Present",
    type: "Startup",
    highlights: [
      "Delivered the 1st version of '15 Jobs' Android application using Flutter and Django within 60 days",
      "Optimized job-search workflow reducing matching time by 25%",
      "Executed 3+ high-value freelance contracts with advanced UI/UX solutions",
      "Integrated cutting-edge AI technologies into client platforms"
    ]
  },
  {
    company: "CHHAAI AI Solutions Pvt Ltd",
    role: "AI & Product Developer",
    period: "June 2024 – Aug 2025",
    type: "Erode",
    highlights: [
      "Spearheaded AI solutions development, improving process efficiency by 15%",
      "Architected and implemented 3 key databases using Django framework",
      "Implemented 10+ new UI components for company website redesign",
      "Contributed to 'Lattice' social media project for startup ecosystem"
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="card-elevated rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
        {/* Timeline dot */}
        <div className="absolute -left-4 top-8 w-4 h-4 rounded-full bg-primary glow-effect" />
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{experience.role}</h3>
            <div className="flex items-center gap-2 text-accent font-medium mb-2">
              <Briefcase className="h-5 w-5" />
              <span>{experience.company}</span>
              <span className="text-muted-foreground">• {experience.type}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
            <Calendar className="h-5 w-5" />
            <span>{experience.period}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {experience.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions and driving impact across startups and enterprises
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
          
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
