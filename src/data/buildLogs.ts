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
    id: "bharatfarm",
    logNumber: "BUILD LOG #003",
    date: "RECENT",
    project: "BHARATFARM",
    role: "Lead Frontend Developer / UI Design",
    stack: ["React", "TypeScript", "Node.js", "Supabase", "AI"],
    summary:
      "Built and contributed to a full-stack smart agriculture platform combining farmer-focused tools, AI-assisted intelligence, marketplace workflows, weather/advisory features, disease scanning, and offline/PWA capabilities.",
  },
  {
    id: "data-analytics-projects",
    logNumber: "BUILD LOG #004",
    date: "RECENT",
    project: "DATA ANALYTICS PROJECTS",
    role: "Data Analyst",
    stack: ["Python", "Pandas", "SQL", "Matplotlib", "OpenPyXL"],
    summary:
      "Built a collection of hands-on data analytics projects covering data cleaning, exploratory analysis, SQL querying, pharmaceutical sales analysis, and Netflix dataset preparation.",
  },
];
