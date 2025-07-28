import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "share-nova-app",
    title: "ShareNova App",
    description:
      "ShareNova is a peer-to-peer file-sharing platform that focuses on privacy and security. It allows users to share files directly, without size limits, and ensures all data is encrypted. By using a decentralized approach, ShareNova reduces the need for servers, making it more eco-friendly. The platform is easy to use, providing a smooth experience while keeping your data safe and private.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["React.js", "Node.js", "Express.js", "Socket.io", "Tailwind CSS"],
  },
  {
    id: "e-commerce-app",
    title: "E-commerce App",
    description: "An e-commerce web application developed using React.js, ShardCn UI, Redux, and Stripe.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["React.js", "Redux", "ShardCn UI", "Stripe"],
  },

  {
    id: "social-media-app",
    title: "Social Media API",
    description:
      "A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
];
export default projects;
