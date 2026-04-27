import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div className="space-y-6">
            <h2 className="text-5xl tracking-tight">About</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer with over 5 years of experience building
                web applications that scale. Originally from Nepal, I'm currently
                completing my Master's in Business Informatics at Philips
                University of Marburg in Germany.
              </p>
              <p>
                My work focuses on the intersection of clean architecture and
                exceptional user experience. I build SaaS products and
                production-grade systems using modern web technologies, with a
                strong emphasis on TypeScript, React, and Python ecosystems.
              </p>
              <p>
                I approach engineering with a product mindset—solving real
                problems with thoughtful, maintainable solutions that create
                genuine value for users and businesses.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide text-muted-foreground">
                Current Focus
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5" />
                  <span>Building scalable SaaS architectures</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5" />
                  <span>Modern frontend systems with React & TypeScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5" />
                  <span>API design and backend architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5" />
                  <span>Data-driven automation systems</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide text-muted-foreground">
                Location
              </h3>
              <p className="text-foreground">Marburg, Germany</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
