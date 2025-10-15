import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    institution: "J.N.N Institute of Engineering",
    degree: "B.TECH in Artificial Intelligence & Data Science",
    location: "Thiruvallur",
    period: "2020 – 2024",
    grade: "CGPA: 7.8",
    type: "degree"
  },
  {
    institution: "Jaycees Matric Hr. Sec. School",
    degree: "Higher Secondary Education",
    location: "Erode",
    period: "2020",
    grade: "67%",
    type: "school"
  },
  {
    institution: "Jaycees Matric Hr. Sec. School",
    degree: "Secondary Education",
    location: "Erode",
    period: "2018",
    grade: "80.8%",
    type: "school"
  }
];

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/users/dharuneshan-s"
  }
];

const EducationCard = ({ item, index }: { item: typeof education[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="card-elevated rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
        {/* Timeline dot */}
        <div className="absolute -left-4 top-8 w-4 h-4 rounded-full bg-accent glow-effect" />
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
            <GraduationCap className="h-6 w-6 text-accent" />
          </div>
          
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
            <p className="text-primary font-medium">{item.institution}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {item.period}
              </span>
              <span>📍 {item.location}</span>
              {item.grade && (
                <span className="text-accent font-medium">{item.grade}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-elevated rounded-2xl p-6 hover:scale-[1.05] transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Award className="h-6 w-6 text-primary" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {cert.title}
          </h4>
          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
        </div>
        
        <svg
          className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  );
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and professional credentials in AI and cloud technologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education Timeline */}
          <div className="space-y-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent opacity-30" />
            
            {education.map((item, index) => (
              <EducationCard key={index} item={item} index={index} />
            ))}
          </div>

          {/* Certifications */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} />
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="card-elevated rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Activities & Achievements</h3>
            <p className="text-muted-foreground leading-relaxed">
              Successfully managed two distinct projects concurrently across different domains, 
              demonstrating exceptional multitasking and project management capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
