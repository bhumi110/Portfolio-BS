
import ecommerceSales from "../assets/performance_analysis.png";
import ecommerceLogistics from "../assets/Logistic_analysis.png";
import customerChurn from "../assets/churn_analysis.png";
import airlinePassengerSatisfaction from "../assets/airline.png";
import ikea from "../assets/IKEA.png";
import nykaaCampaign from "../assets/nykaaCampaign.png";

const projects = [
  {
  id: 1,
  title: "Customer Analytics & RFM Segmentation Dashboard",
  year: "2026",
  kpi: { value: "5.8k", label: "customers segmented" },
  summary:
    "Analysed over 1 million retail transactions to identify high-value customers, segment purchasing behaviour and flag potential retention risks for a fictional UK gifting and home decor retailer.",
  highlights: [
    "Cleaned and validated 1M+ retail transaction records using SQL Server, resolving mixed date formats, invalid records and 32,907 duplicate rows.",
    "Applied RFM analysis in Python to segment 5,881 customers into six groups based on recency, purchase frequency and monetary value.",
    "Built a three-page interactive Power BI dashboard to track revenue, customer value and retention, finding that Champions represented approximately 22% of customers but generated 68% of revenue."
  ],
  tech: ["SQL Server", "Python", "Pandas", "Power BI", "DAX"],
  image: ikea,
  source: "https://github.com/bhumi110/Customer-Analytics-and-RFM-Segmentation",
  demo: "",
},
  

  {
  id: 2,
  title: "Marketing Campaign Performance & ROAS Optimization",
  year: "2026",
  kpi: { value: "55.5K", label: "campaign records analyzed" },
  summary:
    "Marketing campaign performance analyzed through revenue, spend, conversions, and ROAS to support data-driven optimization.",
  highlights: [
    "Evaluated revenue, campaign spend, conversions, clicks, and impressions across 55,555 campaign records.",
    "Compared ROAS across campaign types and channel combinations, and tracked monthly revenue and spend trends.",
    "Built an interactive Power BI dashboard with DAX KPIs, customer-segment conversion analysis, and campaign performance monitoring.",
  ],
  tech: ["Power BI", "DAX", "Python", "Excel", "Data Analysis"],
  image: nykaaCampaign,
  source: "https://github.com/bhumi110/Nykaa-Marketing-Analysis-ROAS-Optimization",
  demo: "",
},
{
    id: 3,
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
    tech: ["Power BI", "MySQL", "SQL", "DAX"],
    image: ecommerceLogistics,
    source: "https://github.com/bhumi110/E-Commerce-Delivery-Logistics-Analysis",
    demo: "",
  },

];

export default projects;
