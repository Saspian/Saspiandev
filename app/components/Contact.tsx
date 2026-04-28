"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, ListTodo } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl tracking-tight max-w-3xl">
              Let's build something exceptional together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              I'm open to freelance projects, consulting opportunities, and
              full-time roles focused on impactful engineering work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:hello@saspian.dev"
              className="group p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl">Email</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    hello@saspian.dev
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/saspian"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl">LinkedIn</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Connect with me
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/saspian"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Github className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl">GitHub</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    View my work
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://task.saspian.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <ListTodo className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl">Task Manager</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Test my product
                  </p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
