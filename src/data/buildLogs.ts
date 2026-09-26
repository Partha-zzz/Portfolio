export interface BuildLogEntry {
  id: string;
  logNumber: string;
  date: string;
  project: string;
  role: string;
  stack: string[];
  summary: string;
}

export const BUILD_LOGS: BuildLogEntry[] = [
  {
    id: "mnist-neural-network-experiment",
    logNumber: "BUILD LOG #004",
    date: "2026-09-27",
    project: "MNIST NEURAL NETWORK EXPERIMENT",
    role: "ML / Deep Learning",
    stack: ["Python", "TensorFlow", "Keras", "MNIST"],
    summary:
      "Compared three neural-network architectures on MNIST and observed that all three achieved similar test performance, with small differences changing between training runs.",
  },
  {
    id: "california-housing-predictor",
    logNumber: "BUILD LOG #001",
    date: "RECENT",
    project: "CALIFORNIA HOUSING PRICE PREDICTION",
    role: "ML Developer",
    stack: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Joblib"],
    summary:
      "Built an end-to-end California housing price prediction pipeline using stratified sampling, Scikit-learn preprocessing, Random Forest regression, model persistence, and automated inference.",
  },
  {
    id: "python-job-scraper",
    logNumber: "BUILD LOG #002",
    date: "RECENT",
    project: "PYTHON JOB SCRAPER",
    role: "Python Developer",
    stack: ["Python", "Requests", "BeautifulSoup", "CSV"],
    summary:
      "Built a Python web scraper using Requests and BeautifulSoup to extract job titles, company names, locations, and job URLs and export the results into CSV.",
  },
  {
    id: "data-analytics-projects",
    logNumber: "BUILD LOG #003",
    date: "RECENT",
    project: "DATA ANALYTICS PROJECTS",
    role: "Data Analyst",
    stack: ["Python", "Pandas", "SQL", "Matplotlib", "OpenPyXL"],
    summary:
      "Built a collection of hands-on data analytics projects covering data cleaning, exploratory analysis, SQL querying, pharmaceutical sales analysis, and Netflix dataset preparation.",
  },
];
