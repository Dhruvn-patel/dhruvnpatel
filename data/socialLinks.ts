import { LucideIcon, Linkedin, Twitter, Github } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/dhruvpatel",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/dhruv_coder",
  },
  {
    icon: Github,
    url: "https://github.com/dhruvpatel",
  },
];

export default socialLinks;
