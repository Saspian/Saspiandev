import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Python", "Node.js", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Tools & Cloud",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Linux",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-32 bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <h2 className="text-5xl tracking-tight">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background border border-border rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
