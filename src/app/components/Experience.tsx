import { motion } from "motion/react";

const experiences = [
  {
    period: "2023 - Present",
    title: "Master's in Business Informatics",
    organization: "Philips University of Marburg",
    location: "Germany",
    description:
      "Focusing on enterprise systems, data engineering, and digital business models.",
  },
  {
    period: "2021 - 2023",
    title: "Full Stack Software Engineer",
    organization: "Freelance & Contract Work",
    location: "Remote",
    description:
      "Built production SaaS applications, data extraction systems, and automated workflows for international clients. Delivered scalable solutions with React, Python, and cloud infrastructure.",
  },
  {
    period: "2019 - 2021",
    title: "Web Developer",
    organization: "Various Projects",
    location: "Nepal & Remote",
    description:
      "Developed custom web applications and e-commerce platforms. Specialized in modern JavaScript frameworks and responsive design systems.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-32 bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <h2 className="text-5xl tracking-tight">Experience</h2>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="grid md:grid-cols-4 gap-8 group"
              >
                <div className="md:col-span-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl tracking-tight">{exp.title}</h3>
                  <p className="text-muted-foreground">
                    {exp.organization} · {exp.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
