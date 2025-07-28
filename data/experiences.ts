import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [

  {
    designation: "Full Stack Developer",
    company: "eSparkBiz PVT LTD",
    startDate: "Sep 2023",
    isCurrentJob: true,
    location: "Ahmedabad, India",
    description: [
      "Built full-stack applications using React.js, Vue.js, Node.js, and NestJS.",
      "Used Sequelize and TypeORM with MySQL, PostgreSQL, and MongoDB for database management.",
      "Developed secure chat applications with end-to-end encryption, including private and group chats.",
      "Implemented real-time notifications and messaging using WebSockets.",
      "Integrated Google Maps APIs with advanced features like Drawing Manager.",
      "Worked with AWS services for deployment, storage, and background processing.",
      "Used Redux for state management in complex React applications.",
      "Created and maintained RESTful APIs to connect frontend and backend seamlessly."
    ]
  },
  {
    designation: "Full Stack Development Intern",
    company: "eSparkBiz PVT LTD",
    startDate: "Feb 2023",
    endDate: "Aug 2023",
    isCurrentJob: false,
    location: "Ahmedabad, India",
    description: [
      "Developed and deployed scalable RESTful APIs using Node.js, ensuring efficient client-server communication.",
      "Implemented BullMQ queues with Redis for robust background task processing and scheduling.",
      "Worked with Sequelize ORM to manage and query the database easily.",
      "Improved app speed by optimizing SQL queries with Sequelize.",
    ],
  },
  {
    designation: "Web Development Intern",
    company: "CreArt® Solutions Pvt Ltd",
    startDate: "May 2022",
    endDate: "July 2022",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
];

export default experiences;
