import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise SaaS Dashboard",
    description:
      "Full-stack analytics platform with real-time data visualization, role-based access control, and automated reporting. Built for scale with React, TypeScript, and Python microservices.",
    tags: ["React", "TypeScript", "Python", "PostgreSQL", "AWS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "PDF Data Extraction System",
    description:
      "Production-grade system for extracting and structuring data from complex PDF documents. Processes thousands of documents with high accuracy using ML-powered parsing and validation.",
    tags: ["Python", "FastAPI", "ML", "PostgreSQL", "Docker"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Multi-Tenant Web Application",
    description:
      "Scalable SaaS application with isolated tenant data, custom domains, and advanced permissions. Supports thousands of concurrent users with optimized database queries and caching.",
    tags: ["Next.js", "TypeScript", "Supabase", "Redis", "Vercel"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Data Workflow Automation Platform",
    description:
      "Automated pipeline for data ingestion, transformation, and delivery. Reduced manual processing time by 90% with intelligent scheduling and error recovery.",
    tags: ["Python", "Node.js", "PostgreSQL", "Redis", "Webhooks"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl tracking-tight">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A selection of production systems and applications I've built for
              real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl tracking-tight">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      View Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.links.github}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Source
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
