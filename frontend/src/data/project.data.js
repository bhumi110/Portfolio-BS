import anonify from "../assets/anonify.png";
import finlytics from "../assets/Finlytics.png";
import snapclass from "../assets/snapclass.png";
import scenesense from "../assets/scenesense.png";
import interviewhive from "../assets/interviewHive.png";
import ecommerceSales from "../assets/performance_analysis.png";
import ecommerceLogistics from "../assets/Logistic_analysis.png";
import customerChurn from "../assets/churn_analysis.png";

const projects = [
  {
    id: 1,
    image: ecommerceSales,
    title: "E-Commerce Sales Performance Dashboard",
    description:
      "An interactive Power BI dashboard designed to analyze e-commerce sales performance across time, product categories, regions, and key sales metrics. The dashboard tracks revenue, orders, quantity, average order value, and sales trends to identify changes in business performance and areas requiring attention.",
    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Analysis",
      "Data Visualization",
      "Business Intelligence",
    ],
    demo: "https://github.com/bhumi110/E-Commerce-Sales-Performance-Analysis.git",
    source: "https://github.com/bhumi110/E-Commerce-Sales-Performance-Analysis.git",
  },

  {
    id: 2,
    image: customerChurn,
    title: "Customer Churn Analysis Dashboard",
    description:
      "An interactive Power BI dashboard that analyzes customer churn patterns for a telecommunications company. The analysis examines churn rates across contract types, tenure groups, internet services, payment methods, and customer characteristics to identify customer segments with higher observed churn rates.",
    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL",
      "Data Analysis",
      "Data Visualization",
      "Business Intelligence",
    ],
    demo: "https://github.com/bhumi110/Customer-Churn-Analysis.git",
    source: "https://github.com/bhumi110/Customer-Churn-Analysis.git",
  },

  {
    id: 3,
    image: ecommerceLogistics,
    title: "E-Commerce Delivery & Logistics Performance Dashboard",
    description:
      "An interactive Power BI dashboard analyzing e-commerce delivery and logistics performance across 50,000 orders. The dashboard evaluates late-delivery rates, shipping methods, carriers, warehouse delays, weather conditions, customer ratings, shipping costs, and delivery trends to identify operational patterns and areas requiring further investigation.",
    tech: [
      "Power BI",
      "MySQL",
      "SQL",
      "DAX",
      "Power Query",
      "Data Analysis",
      "Data Visualization",
      "Business Intelligence",
    ],
    demo: "https://github.com/bhumi110/E-Commerce-Delivery-Logistics-Analysis.git",
    source: "https://github.com/bhumi110/E-Commerce-Delivery-Logistics-Analysis.git",
  },
  {
    id: 4,
    image: interviewhive,
    title: "InterviewHive | AI-Powered Adaptive Interview Platform",
    description:
      "An AI-powered technical interview platform that simulates an adaptive interview using multiple specialized AI agents. InterviewHive analyzes a candidate's resume and target role, generates role-specific questions, evaluates answers across technical accuracy, depth, reasoning, and communication, challenges weak responses, adapts question difficulty, and produces a detailed final interview report. Built with FastAPI, Groq, Sentence Transformers, Pydantic, React, and PixiJS.",
    tech: [
      "Python",
      "FastAPI",
      "Groq",
      "LLM Agents",
      "Sentence Transformers",
      "Pydantic",
      "PyMuPDF",
      "React",
      "PixiJS",
    ],
    demo: "https://interview-hive-kappa.vercel.app/",
    source: "https://github.com/bhumi110/InterviewHive",
  },
  {
    id: 5,
    image: snapclass,
    title: "SnapClass | Smart Attendance System",
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
    id: 6,
    image: scenesense,
    title: "SceneSense AI | Semantic Movie Retrieval",
    description:
      "An AI-powered semantic movie search engine that uses transformer embeddings and vector similarity search to understand natural language queries and recommend movies based on meaning rather than keywords. Built with Sentence Transformers, FAISS, and Streamlit for fast, scalable, and context-aware movie discovery.",
    tech: [
      "Python",
      "Sentence Transformers",
      "FAISS",
      "Streamlit",
      "Pandas",
      "NumPy",
    ],
    demo: "https://scenesense.streamlit.app/",
    source: "https://github.com/bhumi110/SceneSense-Search-AI",
  },
  {
    id: 7,
    image: anonify,
    title: "Anonify | Anonymous Social Platform",
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
    id: 8,
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

  // {
  //   id: 6,
  //   image: cfc,
  //   title: "CODE FOR CHANGE 2.0",
  //   description:
  //     "A modern, responsive website built to announce and showcase all details about the CODE FOR CHANGE 2.0, including event info, schedules, rules, and registration details.",
  //   tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  //   demo: "https://cfc-hackathon2k26.vercel.app/",
  //   source: "https://github.com/bhumi110/cfc_hackathon2k26.git",
  // },

  // {
  //   id: 7,
  //   image: tourIt,
  //   title: "Tour-it",
  //   description:
  //     "A full-stack web application that replicates the core features of Airbnb. Users can create listings, upload images, leave reviews, and manage their own properties with secure authentication and authorization.",
  //   tech: [
  //     "HTML",
  //     "CSS",
  //     "JS",
  //     "EJS",
  //     "MongoDB",
  //     "Cloudinary",
  //     "Express-Session",
  //     "Multer",
  //     "Joi",
  //   ],
  //   demo: "https://tour-it-6o7q.onrender.com/",
  //   source: "https://github.com/bhumi110/Tour-it.git",
  // },
];

export default projects;
