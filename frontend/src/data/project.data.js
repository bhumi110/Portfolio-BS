import memoryFlix from "../assets/memoryFlix.png";
import anonify from "../assets/anonify.png";
import tourIt from "../assets/tourIt.png";
import finlytics from "../assets/Finlytics.png";
import cfc from "../assets/cfc2k26.png";
const projects = [
  {
    id: 1,
    image: anonify,
    title: "Anonify: Spill the Tea. Anonymously...",
    description:
      "Anonify is a web platform that allows users to share stories, confessions, and opinions completely anonymously. Whether it’s drama, advice, or unfiltered thoughts, Anonify is the space to speak your truth without judgment.",
    tech: ["HTML", "CSS", "JS", "React", "MongoDB", "Joi", "MERN"],
    demo: "https://anonify-v2.vercel.app/",
    source: "https://github.com/bhumi110/AnonifyV2.git",
  },
  {
    id: 2,
    image: finlytics,
    title: "Finlytics | Expense Approval & Reimbursement System",
    description:
      "Finlytics is a role-based expense management system designed to streamline how organizations track, approve, and manage employee expenses. The platform follows a structured approval workflow where employees submit expenses, managers review them, and the finance team processes the final payment. This ensures transparency, accountability, and efficient financial tracking.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    demo: "https://finlytics-tau.vercel.app/",
    source: "https://github.com/bhumi110/Finlytics.git",
  },

  {
    id: 3,
    image: cfc,
    title: "CODE FOR CHANGE 2.0",
    description:
      "A modern, responsive website built to announce and showcase all details about the CODE FOR CHANGE 2.0, including event info, schedules, rules, and registration details.",
    tech: [
      "MongoDB", "Express.js", "React.js", "Node.js"
    ],
    demo: "https://cfc-hackathon2k26.vercel.app/",
    source: "https://github.com/bhumi110/cfc_hackathon2k26.git",
  },

  {
    id: 4,
    image: tourIt,
    title: "Tour-it",
    description:
      "A full-stack web application that replicates the core features of Airbnb. Users can create listings, upload images, leave reviews, and manage their own properties with secure authentication and authorization.",
    tech: [
      "HTML",
      "CSS",
      "JS",
      "EJS",
      "MongoDB",
      "Cloudinary",
      "Express-Session",
      "Multer",
      "Joi",
    ],
    demo: "https://tour-it-6o7q.onrender.com/",
    source: "https://github.com/bhumi110/Tour-it.git",
  },
  {
    id: 5,
    image: memoryFlix,
    title: "MemoryFlix",
    description:
      "Your Personal Video Diary MemoryFlix is a video-based personal diary application that allows users to organize, and relive their memories through short videos. Inspired by Netflix’s clean and intuitive UI, MemoryFlix presents personal moments in a visually engaging, scrollable format while maintaining privacy and simplicity. Built using the MERN Stack, MemoryFlix focuses on real world usability, performance, and scalable architecture.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "#",
    source: "https://github.com/bhumi110/MemoryFlix.git",
  },
];

export default projects;
