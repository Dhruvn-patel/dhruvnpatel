"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import experiences from "@/data/experiences";

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -z-10 top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/5 blur-3xl" />
      <div className="absolute -z-10 bottom-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/5 blur-3xl" />

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
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={fadeIn}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold">{exp.designation}</h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.startDate} – {exp.isCurrentJob ? "Present" : exp.endDate}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
