"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "A full-featured e-commerce platform with product management.",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Qt", "SQLite", "CMake"],
      features: [
        "Inventory management system",
        "Real-time stock tracking",
        "Secure payment processing",
        "Order management dashboard",
        "Customer analytics",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This e-commerce platform provides businesses with a complete solution for selling products online. Built with C++ and Qt for high performance and cross-platform compatibility. Features include a responsive design, product catalog with filtering and search capabilities, shopping cart functionality, secure checkout integration, user authentication, and an admin dashboard for managing products, orders, and customers.",
    },
    {
      id: 2,
      title: "Task Management System",
      shortDescription: "A collaborative task management application with real-time updates.",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
      features: [
        "Real-time collaboration",
        "Task dependencies",
        "Resource allocation",
        "Progress tracking",
        "Team management",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This task management system helps teams organize and track their work efficiently. Built with Java Spring Boot for the backend and React for the frontend, it provides robust task management capabilities. Features include task creation and assignment, due dates and reminders, progress tracking, file attachments, comments and discussions, team workspaces, and real-time updates.",
    },
    {
      id: 3,
      title: "System Resource Monitor",
      shortDescription: "A comprehensive system monitoring tool with real-time analytics.",
      description: "A comprehensive system monitoring tool with real-time analytics and performance tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Python", "Qt", "Linux"],
      features: [
        "CPU/Memory monitoring",
        "Process management",
        "Network analytics",
        "Disk usage tracking",
        "Performance alerts",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This system resource monitor provides real-time insights into system performance. Built primarily in C++ with Python for data analysis, it offers comprehensive monitoring capabilities. The application tracks CPU usage, memory consumption, network traffic, and disk operations, providing detailed analytics and alerts for system administrators.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="group h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  {/* Top Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  {/* Always-Visible Expanded Content */}
                  <div className="p-6 border-t space-y-4 transition-all duration-300 group-hover:bg-muted/20">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-2 flex-wrap">
                      <Button size="sm" variant="outline" onClick={() => window.open(project.githubLink, "_blank")}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" onClick={() => window.open(project.demoLink, "_blank")}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setSelectedProject(project)}>
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent
            className="w-[90vw] sm:w-[90vw] md:w-[600px] lg:max-w-2xl xl:max-w-3xl 
             max-h-[90vh] overflow-y-auto rounded-xl p-4 sm:p-6"
          >
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.shortDescription}</DialogDescription>
            </DialogHeader>

            {/* Tags placed OUTSIDE of DialogDescription */}
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {selectedProject.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="space-y-4">
              {/* <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              /> */}
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
