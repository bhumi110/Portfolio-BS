
import ecommerceSales from "../assets/performance_analysis.png";
import ecommerceLogistics from "../assets/Logistic_analysis.png";
import customerChurn from "../assets/churn_analysis.png";
import airlinePassengerSatisfaction from "../assets/airline.png";

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
  title: "Airline Passenger Satisfaction Dashboard",
  year: "2026",
  kpi: { value: 4, label: "analytical areas covered" },

  summary:
    "An interactive Power BI dashboard that analyzes airline passenger satisfaction across service quality, flight delays, travel class and customer segments.",

  highlights: [
    "Tracked satisfaction rate, dissatisfaction rate, passenger volume and delay metrics to understand overall passenger experience.",
    "Compared service ratings to identify high-performing services and improvement areas such as inflight Wi-Fi and online booking.",
    "Analyzed delays, travel class, customer loyalty, age and travel type to identify passenger segments and factors associated with satisfaction."
  ],

  tech: ["Power BI", "DAX", "Power Query", "Data Analysis", "Data Visualization"],

  image: airlinePassengerSatisfaction,
  source: "https://github.com/bhumi110/Airline-Passenger-Satisfaction-Analysis-Dashboard.git",
  demo: "",
},

];

export default projects;
