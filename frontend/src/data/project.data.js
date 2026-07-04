import memoryFlix from "../assets/memoryFlix.png";
import anonify from "../assets/anonify.png";
import tourIt from "../assets/tourIt.png";
import finlytics from "../assets/Finlytics.png";
import cfc from "../assets/cfc2k26.png";
import snapclass from "../assets/snapclass.png";
const projects = [
  {
    id: 1,
    image: snapclass,
    title: "SnapClass",
    description:
      "SnapClass is an AI-powered smart attendance management system that automates classroom attendance using facial recognition and optional voice authentication. The platform enables teachers to create and manage subjects, monitor attendance, and share enrollment codes, while students can securely register, enroll in courses, and mark attendance through biometric verification. Built with Python, Streamlit, Supabase, and computer vision techniques, SnapClass provides a scalable, cloud-based solution for modern educational institutions.",
    tech: [
      "Python",
      "Streamlit",
      "Supabase",
      "PostgreSQL",
      "OpenCV",
      "face_recognition",
      "dlib",
      "scikit-learn",
      "Resemblyzer",
      "NumPy",
    ],
    demo: "https://snap-class-landing-three.vercel.app/",
    source: "https://github.com/bhumi110/SnapClass.git",
  },
  {
    id: 2,
    image: anonify,
    title: "Anonify: Spill the Tea. Anonymously...",
    description:
      "Anonify is a full-stack anonymous social platform where users can freely share confessions, stories, opinions, and discussions without revealing their identity. Built with the MERN stack, it features secure authentication, anonymous posting, commenting, and a modern, responsive user experience.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Joi",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    demo: "https://anonify-v2.vercel.app/",
    source: "https://github.com/bhumi110/AnonifyV2.git",
  },
  {
    id: 3,
    image: finlytics,
    title: "Finlytics | Expense Approval & Reimbursement System",
    description:
      "Finlytics is a full-stack, role-based expense management platform that streamlines employee expense submission, approval, and reimbursement workflows. Employees can submit expenses, managers review and approve requests, and finance teams process reimbursements, ensuring transparency, accountability, and efficient financial operations through a secure, workflow-driven system.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    demo: "https://finlytics-tau.vercel.app/",
    source: "https://github.com/bhumi110/Finlytics.git",
  },

  {
    id: 4,
    image: cfc,
    title: "CODE FOR CHANGE 2.0",
    description:
      "A modern, responsive website built to announce and showcase all details about the CODE FOR CHANGE 2.0, including event info, schedules, rules, and registration details.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    demo: "https://cfc-hackathon2k26.vercel.app/",
    source: "https://github.com/bhumi110/cfc_hackathon2k26.git",
  },

  {
    id: 5,
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
];

export default projects;
