"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function TechStack() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillIcon = (name: string) => `https://skillicons.dev/icons?i=${name.toLowerCase()}&theme=light`;

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "c" },
        { name: "cpp", label: "C++" },
        { name: "javascript" },
        { name: "typescript" },
        { name: "python" },
        { name: "java" },
        // { name: "ruby" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "react" },
        { name: "nextjs" },
        { name: "html" },
        { name: "css" },
        { name: "tailwind" },
        { name: "redux" },
        { name: "vue" },
        { name: "nuxtjs" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "nodejs" },
        { name: "express" },
        { name: "spring" },
        //  { name: "rails", label: "Rails" }
      ],
    },
    {
      category: "Database",
      items: [{ name: "mongodb" }, { name: "postgres" }, { name: "mysql" }, { name: "redis" }],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "git" },
        { name: "docker" },
        { name: "aws" },
        { name: "linux" },
        // { name: "cmake" }
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/5 blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-purple-500/50">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-center">{skillGroup.category}</h3>

              <div className="flex flex-wrap justify-center gap-8">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05 + groupIndex * 0.1,
                    }}
                    className="flex flex-col items-center gap-2 w-20"
                  >
                    <img
                      src={skillIcon(skill.name)}
                      alt={skill.label || skill.name}
                      className="w-12 h-12"
                      loading="lazy"
                    />
                    <span className="text-sm text-center font-medium">
                      {skill.label || skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
