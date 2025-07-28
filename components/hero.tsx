"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const socialLinks = [
  {
    icon: <Linkedin className="h-5 w-5" />,
    url: "https://www.linkedin.com/in/dhruv-patel-83309a1b6/",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    url: "https://x.com/Dhruv_sde",
  },
  {
    icon: <Github className="h-5 w-5" />,
    url: "https://github.com/Dhruvn-patel",
  },
];

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Developer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Spotlight background */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] rounded-full bg-gradient-to-r from-violet-600/20 to-pink-600/20 blur-3xl opacity-0 animate-spotlight" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Dhruv Patel</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              <span className="text-foreground">
                <Typewriter
                  words={["Frontend Developer", "Web Developer", "Backend Developer", "Full Stack Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={10}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I build exceptional digital experiences with clean code and modern technologies. Turning complex problems
              into elegant solutions is what I do best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-purple-500/50 hover:border-purple-500"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              {socialLinks.map((item, index) => (
                <Button key={index} variant="outline" size="icon" className="rounded-full" asChild>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full shadow-xl group"
          >
            {/* Outer glow + rotating shimmer border */}
            <div className="absolute inset-0 rounded-full z-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-purple-500/30 blur-2xl opacity-50 animate-spin-slow group-hover:opacity-80" />

            {/* Inner border and pulse */}
            <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-br from-purple-400/10 to-pink-400/10" />

            {/* Inner image container with border */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-purple-500/40 z-10 backdrop-blur-md bg-white/10 shadow-inner">
              <img
                src="/user.png"
                alt="Dhruv Patel"
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  );
}
