import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sdharuneshan03@gmail.com",
    link: "mailto:sdharuneshan03@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6374512370",
    link: "tel:+916374512370"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chettipalayam, Erode"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/Dharuneshan",
    color: "hover:text-purple-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://linkedin.com/in/dharuneshan-s",
    color: "hover:text-blue-500"
  }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="card-elevated rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="card-elevated rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className={`p-4 rounded-xl glass-morphism hover:bg-primary/20 transition-all ${social.color} group`}
                        aria-label={social.label}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-elevated rounded-2xl p-8 lg:p-12 flex flex-col justify-center space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your vision. Let's create something extraordinary together!
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  onClick={() => window.location.href = 'mailto:sdharuneshan03@gmail.com'}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send me an Email
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://linkedin.com/in/dharuneshan-s', '_blank')}
                  className="w-full border-primary/50 hover:bg-primary/10"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>

              {/* Availability Status */}
              <div className="flex items-center gap-3 pt-4">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Available for freelance projects and full-time opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
