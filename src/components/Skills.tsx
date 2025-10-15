import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cog, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code2,
    skills: [
      { name: "Web Design", level: 90 },
      { name: "Django Framework", level: 95 },
      { name: "Flutter & Dart", level: 90 },
      { name: "AWS & Cloud Services", level: 85 },
      { name: "PostgreSQL & Cassandra", level: 88 },
      { name: "NLP & LLM", level: 85 },
      { name: "Android App Development", level: 90 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Natural Language Processing", level: 88 },
      { name: "Large Language Models", level: 82 },
      { name: "Data Annotation", level: 80 },
      { name: "RAG Implementation", level: 78 }
    ]
  },
  {
    title: "Development Tools",
    icon: Cog,
    skills: [
      { name: "Vercel & Railway", level: 90 },
      { name: "Firebase", level: 88 },
      { name: "Kaggle", level: 75 },
      { name: "CI/CD Pipelines", level: 85 }
    ]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Critical Thinking", level: 92 },
      { name: "Collaboration", level: 90 },
      { name: "Business Mindset", level: 85 }
    ]
  }
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full glow-effect"
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-elevated rounded-2xl p-8 space-y-6"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 glow-effect">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar key={i} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, and modern cloud technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
