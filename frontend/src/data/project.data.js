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
    title: "E-Commerce Delivery & Logistics Performance Dashboard",
    year: "2026",
    kpi: { value: "50k", label: "orders analysed" },
    summary:
      "Late-delivery performance across 50,000 orders: which shipping methods, carriers and warehouses slip, and by how much.",
    highlights: [
      "Queried 50,000 orders in MySQL to evaluate late deliveries by shipping method, carrier, warehouse and operational factors.",
      "Compared late-delivery rates, average delays, shipping costs and customer ratings using SQL aggregation and segmentation.",
      "Built a Power BI dashboard with DAX KPIs, slicers and trend views to monitor delivery operations.",
    ],
    tech: ["Power BI", "MySQL", "SQL", "DAX", "Data Analysis"],
    image: ecommerceLogistics,
    source: "https://github.com/bhumi110/E-Commerce-Delivery-Logistics-Analysis",
    demo: "",
  },

  {
    id: 2,
    title: "Customer Churn Analysis Dashboard",
    year: "2026",
    kpi: { value: 6, label: "churn drivers compared" },
    summary:
      "Telecom churn, read segment by segment, so retention effort goes where the losses actually are.",
    highlights: [
      "Measured the overall churn rate and isolated the customer groups behind most attrition.",
      "Compared churn across contract type, tenure, internet service, payment method and customer profile.",
      "Built DAX measures, KPI cards and slicers for segment-level monitoring of churn patterns.",
    ],
    tech: ["Power BI", "DAX", "SQL", "Power Query", "Data Analysis"],
    image: customerChurn,
    source: "https://github.com/bhumi110/Customer-Churn-Analysis",
    demo: "",
  },

  
  {
    id: 3,
    title: "E-Commerce Sales Performance Dashboard",
    year: "2026",
    kpi: { value: 4, label: "core KPIs tracked" },
    summary:
      "An interactive Power BI dashboard that reads e-commerce sales performance across time, product categories and regions.",
    highlights: [
      "Modelled revenue, order volume, average order value and quantity sold to read overall business health.",
      "Compared product categories, regions and category-region pairs to surface top contributors and weak spots.",
      "Shipped KPI cards, revenue trends and category and regional breakdowns for a business audience, not an analyst.",
    ],
    tech: ["Power BI", "DAX", "Power Query", "Data Analysis", "Data Visualization"],
    image: ecommerceSales,
    source: "https://github.com/bhumi110/E-Commerce-Sales-Performance-Dashboard",
    demo: "",
  },
//   {
//     id: 4,
//     image: interviewhive,
//     title: "InterviewHive | AI-Powered Adaptive Interview Platform",
//     description:
//       "An AI-powered technical interview platform that simulates an adaptive interview using multiple specialized AI agents. InterviewHive analyzes a candidate's resume and target role, generates role-specific questions, evaluates answers across technical accuracy, depth, reasoning, and communication, challenges weak responses, adapts question difficulty, and produces a detailed final interview report. Built with FastAPI, Groq, Sentence Transformers, Pydantic, React, and PixiJS.",
//     tech: [
//       "Python",
//       "FastAPI",
//       "Groq",
//       "LLM Agents",
//       "Sentence Transformers",
//       "Pydantic",
//       "PyMuPDF",
//       "React",
//       "PixiJS",
//     ],
//     demo: "https://interview-hive-kappa.vercel.app/",
//     source: "https://github.com/bhumi110/InterviewHive",
//   },
//   {
//     id: 5,
//     image: snapclass,
//     title: "SnapClass | Smart Attendance System",
//     description:
//       "SnapClass is an AI-powered smart attendance management system that automates classroom attendance using facial recognition and optional voice authentication. The platform enables teachers to create and manage subjects, monitor attendance, and share enrollment codes, while students can securely register, enroll in courses, and mark attendance through biometric verification. Built with Python, Streamlit, Supabase, and computer vision techniques, SnapClass provides a scalable, cloud-based solution for modern educational institutions.",
//     tech: [
//       "Python",
//       "Streamlit",
//       "Supabase",
//       "PostgreSQL",
//       "OpenCV",
//       "face_recognition",
//       "dlib",
//       "scikit-learn",
//       "Resemblyzer",
//       "NumPy",
//     ],
//     demo: "https://snap-class-landing-three.vercel.app/",
//     source: "https://github.com/bhumi110/SnapClass.git",
//   },
//   {
//     id: 6,
//     image: scenesense,
//     title: "SceneSense AI | Semantic Movie Retrieval",
//     description:
//       "An AI-powered semantic movie search engine that uses transformer embeddings and vector similarity search to understand natural language queries and recommend movies based on meaning rather than keywords. Built with Sentence Transformers, FAISS, and Streamlit for fast, scalable, and context-aware movie discovery.",
//     tech: [
//       "Python",
//       "Sentence Transformers",
//       "FAISS",
//       "Streamlit",
//       "Pandas",
//       "NumPy",
//     ],
//     demo: "https://scenesense.streamlit.app/",
//     source: "https://github.com/bhumi110/SceneSense-Search-AI",
//   },
//   {
//     id: 7,
//     image: anonify,
//     title: "Anonify | Anonymous Social Platform",
//     description:
//       "Anonify is a full-stack anonymous social platform where users can freely share confessions, stories, opinions, and discussions without revealing their identity. Built with the MERN stack, it features secure authentication, anonymous posting, commenting, and a modern, responsive user experience.",
//     tech: [
//       "React",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "JWT",
//       "Joi",
//       "HTML",
//       "CSS",
//       "JavaScript",
//     ],
//     demo: "https://anonify-v2.vercel.app/",
//     source: "https://github.com/bhumi110/AnonifyV2.git",
//   },
//   {
//     id: 8,
//     image: finlytics,
//     title: "Finlytics | Expense Approval & Reimbursement System",
//     description:
//       "Finlytics is a full-stack, role-based expense management platform that streamlines employee expense submission, approval, and reimbursement workflows. Employees can submit expenses, managers review and approve requests, and finance teams process reimbursements, ensuring transparency, accountability, and efficient financial operations through a secure, workflow-driven system.",
//     tech: [
//       "React.js",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "JWT",
//       "HTML",
//       "CSS",
//       "JavaScript",
//     ],
//     demo: "https://finlytics-tau.vercel.app/",
//     source: "https://github.com/bhumi110/Finlytics.git",
//   },

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
