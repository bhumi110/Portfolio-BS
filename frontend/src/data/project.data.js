import memoryFlix from "../assets/memoryFlix.png";
import anonify from "../assets/anonify.png";
import tourIt from "../assets/tourIt.png";

const projects = [
  
  {
    id: 1,
    image: anonify,
    title: "Anonify: Spill the Tea. Anonymously...",
    description:
      "Anonify is a web platform that allows users to share stories, confessions, and opinions completely anonymously. Whether it’s drama, advice, or unfiltered thoughts, Anonify is the space to speak your truth without judgment.",
    tech: ["HTML", "CSS","JS","EJS","MongoDB","Express-Session"],
    demo: "https://anonify-4p60.onrender.com",
    source: "https://github.com/bhumi110/Anonify.git",
  },
  {
    id: 2,
    image: tourIt,
    title: "Tour-it",
    description:
      "A full-stack web application that replicates the core features of Airbnb. Users can create listings, upload images, leave reviews, and manage their own properties with secure authentication and authorization.",
    tech: ["HTML", "CSS","JS","EJS","MongoDB", "Cloudinary","Express-Session","Multer","Joi"],
    demo: "https://tour-it-6o7q.onrender.com/",
    source: "https://github.com/bhumi110/Tour-it.git",
  },
  {
    id: 3,
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