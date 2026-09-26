export interface LabSection {
  id: string;
  number: string;
  title: string;
  type: "text" | "list" | "key-value" | "badge-flow" | "stat" | "tags";
  content?: string;
  items?: string[];
  keyValueItems?: { title: string; desc: string }[];
}

export interface LabItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: "IN PROGRESS" | "EXPERIMENT" | "LEARNING" | "PROTOTYPE" | "COMPLETED" | "COMPLETED EXPERIMENT" | "ML EXPERIMENT";
  statusColor: string; // #FFD600, #635BFF, #111111, #D9D9D4
  githubUrl?: string;
  snippet?: string;
  updatedAt: string;
  sections?: LabSection[];
  // Legacy optional detailed fields for backwards compatibility
  slug?: string;
  idea?: string;
  problem?: string;
  whatItIs?: string[];
  dataFeatures?: string[];
  mlPipeline?: string[];
  modelDesc?: string;
  accuracyDisplay?: string;
  rawAccuracy?: string;
  accuracyLabel?: string;
  resultInterpretation?: string;
  mlWorkflow?: string[];
  lessons?: string[];
  limitations?: string[];
  nextExperiments?: string[];
  prototypingPoints?: string[];
  currentStatePoints?: string[];
  exploringPoints?: { title: string; desc: string }[];
  whyInLab?: string;
  nextSteps?: string[];
  scrapingFlow?: string[];
  scrapingPipeline?: string[];
  outputCsvColumns?: string[];
  robustnessNote?: string;
  sourceWebsite?: { name: string; url: string; note: string };
}

export const LAB_ITEMS: LabItem[] = [
  {
    id: "juniolang",
    slug: "juniolang",
    number: "EXP-01",
    title: "JUNIO LANG",
    category: "EDTECH / JAPANESE LEARNING",
    description:
      "A story-driven Japanese learning platform exploring immersive language learning through stories, interactive lessons and AI-assisted practice.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    status: "IN PROGRESS",
    statusColor: "#FFD600",
    githubUrl: "https://github.com/Partha-zzz/JunioLang",
    snippet: `// Story-centered Japanese sentence tokenizer & furigana map exploration
export interface SyntacticBlock {
  kanji: string;
  furigana: string;
  romaji: string;
  partOfSpeech: 'noun' | 'verb' | 'particle' | 'adjective';
}`,
    updatedAt: "2026-09-26",
    sections: [
      {
        id: "juniolang-01",
        number: "01",
        title: "WHAT IT IS",
        type: "list",
        items: [
          "Story-based learning for contextual vocabulary & grammar",
          "Interactive lessons beyond static text",
          "AI-assisted practice and conversational roleplays",
          "Learner progress tracking and dashboard concepts",
          "Mobile-first learning experience",
        ],
      },
      {
        id: "juniolang-02",
        number: "02",
        title: "CURRENT STATE",
        type: "list",
        items: [
          "The current repository represents an evolving prototype rather than a finished product.",
          "Multiple UI screens and workflow explorations exist as interactive prototypes.",
          "Database schemas (Supabase migrations) and Next.js page components are actively being integrated.",
        ],
      },
      {
        id: "juniolang-03",
        number: "03",
        title: "WHAT I'M EXPLORING",
        type: "key-value",
        keyValueItems: [
          { title: "STORY-BASED LEARNING", desc: "How stories can provide contextual vocabulary and grammar exposure." },
          { title: "AI ROLEPLAY", desc: "Exploring conversational practice through AI-assisted interactions." },
          { title: "INTERACTIVE LESSONS", desc: "Moving beyond static lessons toward active interaction." },
          { title: "LEARNER DASHBOARD", desc: "Tracking progress and presenting a clearer learning journey." },
          { title: "MOBILE-FIRST LEARNING", desc: "Exploring how the experience translates to smaller screens." },
        ],
      },
      {
        id: "juniolang-04",
        number: "04",
        title: "NEXT STEPS",
        type: "list",
        items: [
          "Connect the prototype screens into a consistent end-to-end flow",
          "Complete the lesson/content architecture",
          "Refine the AI-assisted practice experience",
          "Integrate learner progress tracking",
          "Polish mobile experience",
          "Validate the learning interaction before treating it as production-ready",
        ],
      },
      {
        id: "juniolang-05",
        number: "05",
        title: "PROTOTYPE / PRODUCT EXPLORATION",
        type: "list",
        items: [
          "Landing Page & Hero Navigation",
          "Student & Mobile Dashboards",
          "Interactive Lesson Reader",
          "AI Roleplay Practice Screen",
          "Analytics & Learner Telemetry Dashboard",
          "Authentication & Premium Login Flows",
        ],
      },
      {
        id: "juniolang-06",
        number: "06",
        title: "TECHNOLOGY / EXPLORATION STACK",
        type: "tags",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI / AI API"],
      },
    ],
    whyInLab: "JunioLang is still being developed. The project has several working/prototyped interfaces, but the product architecture, content system and complete learning experience are still evolving.",
  },
  {
    id: "surakshaai",
    slug: "surakshaai",
    number: "EXP-02",
    title: "SURAKSHAAI",
    category: "MACHINE LEARNING / PREDICTIVE MODELING",
    description:
      "A machine-learning experiment that predicts women-safety risk categories from location and time-based crime data.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Google Colab"],
    status: "ML EXPERIMENT",
    statusColor: "#635BFF",
    githubUrl: "https://github.com/Partha-zzz/SurakshaAI_ML_Project",
    snippet: `from sklearn.ensemble import RandomForestClassifier

# Features: LAT, LON, HOUR extracted from crime_in_la.csv
X = df[['LAT', 'LON', 'HOUR']]
y = df['SAFETY_RISK_CATEGORY']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Reported test accuracy: 0.6744333291123211
accuracy = model.score(X_test, y_test)`,
    updatedAt: "2026-09-26",
    sections: [
      {
        id: "surakshaai-01",
        number: "01",
        title: "PROBLEM",
        type: "text",
        content:
          "Crime data contains spatial and temporal patterns. The experiment explores whether basic geographic and time-based features can be used to classify a situation/area into a safety-risk category.",
      },
      {
        id: "surakshaai-02",
        number: "02",
        title: "WHAT IT COLLECTS",
        type: "list",
        items: [
          "LAT → Geographic latitude",
          "LON → Geographic longitude",
          "HOUR → Hour of occurrence",
        ],
      },
      {
        id: "surakshaai-03",
        number: "03",
        title: "ML PIPELINE",
        type: "badge-flow",
        items: [
          "DATASET (crime_in_la.csv)",
          "PREPROCESSING",
          "FEATURE SELECTION (LAT, LON, HOUR)",
          "TRAIN / TEST SPLIT",
          "RANDOM FOREST CLASSIFIER",
          "PREDICTION",
          "EVALUATION",
        ],
      },
      {
        id: "surakshaai-04",
        number: "04",
        title: "MODEL",
        type: "text",
        content:
          "Model: RandomForestClassifier fit on crime_in_la.csv using Python, Pandas, and Scikit-learn to classify safety-risk categories from 3 temporal/spatial input features.",
      },
      {
        id: "surakshaai-05",
        number: "05",
        title: "RESULT",
        type: "stat",
        content: "67.44%",
        items: ["RAW: 0.6744333291123211", "REPORTED TEST ACCURACY"],
      },
      {
        id: "surakshaai-06",
        number: "06",
        title: "WHAT THE RESULT MEANS",
        type: "text",
        content:
          "The experiment shows that location and time features contain predictive signal for the selected target, but the reported accuracy also highlights the limitations of using only three basic features for a complex real-world safety problem.",
      },
      {
        id: "surakshaai-07",
        number: "07",
        title: "WHAT I LEARNED",
        type: "list",
        items: [
          "How to prepare a real crime dataset for supervised learning",
          "How spatial and temporal features can be used as model inputs",
          "How train/test splitting affects evaluation",
          "How to train a Random Forest classifier with scikit-learn",
          "Why model accuracy alone is not enough to establish real-world reliability",
          "How feature selection affects predictive performance",
        ],
      },
      {
        id: "surakshaai-08",
        number: "08",
        title: "LIMITATIONS / CAUTION",
        type: "list",
        items: [
          "Only LAT, LON and HOUR are used as documented features",
          "Accuracy alone does not establish real-world safety performance",
          "The experiment represents only a limited feature set",
          "Real-world safety prediction is substantially more complex",
        ],
      },
      {
        id: "surakshaai-09",
        number: "09",
        title: "EXPERIMENT LIMITATIONS",
        type: "list",
        items: [
          "Only LAT, LON and HOUR are used as documented features",
          "The reported metric is accuracy alone",
          "Accuracy alone does not show class-level performance",
          "The experiment does not establish causality",
          "The model should not be interpreted as a real-world safety authority",
          "Additional features and evaluation metrics would be needed for a stronger predictive system",
        ],
      },
    ],
  },
  {
    id: "python-job-scraper",
    slug: "python-job-scraper",
    number: "EXP-03",
    title: "PYTHON JOB SCRAPER",
    category: "PYTHON / WEB SCRAPING",
    description:
      "A Python web-scraping experiment that extracts job listings from an educational job board and stores the results as structured CSV data.",
    technologies: ["Python", "Requests", "BeautifulSoup (bs4)", "CSV"],
    status: "COMPLETED EXPERIMENT",
    statusColor: "#635BFF",
    githubUrl: "https://github.com/Partha-zzz/python-job-scrapper",
    snippet: `import requests
from bs4 import BeautifulSoup
import csv

# Target URL: Fake Python Jobs educational page
URL = "https://realpython.github.io/fake-jobs/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
job_elements = soup.find_all("div", class_="card-content")

for job_element in job_elements:
    title_element = job_element.find("h2", class_="title")
    company_element = job_element.find("h3", class_="company")
    location_element = job_element.find("p", class_="location font-bold")
    link_url = job_element.find_all("a")[1]["href"]`,
    updatedAt: "2026-09-26",
    sections: [
      {
        id: "python-job-scraper-01",
        number: "01",
        title: "THE IDEA (SCRAPING FLOW)",
        type: "badge-flow",
        items: [
          "WEB PAGE",
          "HTTP REQUEST",
          "HTML",
          "BEAUTIFULSOUP",
          "JOB CARDS",
          "EXTRACT DATA",
          "CSV",
        ],
      },
      {
        id: "python-job-scraper-02",
        number: "02",
        title: "WHAT IT COLLECTS",
        type: "list",
        items: [
          "JOB TITLE → Title of the advertised role",
          "COMPANY NAME → Hiring organization name",
          "LOCATION → Job location / city",
          "JOB DETAIL PAGE URL → Direct link to full listing",
        ],
      },
      {
        id: "python-job-scraper-03",
        number: "03",
        title: "THE PIPELINE",
        type: "list",
        items: [
          "REQUESTS → fetch webpage HTML via HTTP GET",
          "BEAUTIFULSOUP → parse raw HTML DOM tree",
          "FIND / FIND_ALL → locate job card elements",
          "FIELD EXTRACTION → extract title, company, location, URL",
          "DATA CLEANING → strip whitespace and format text",
          "CSV → export structured tabular records",
        ],
      },
      {
        id: "python-job-scraper-04",
        number: "04",
        title: "BASIC ROBUSTNESS",
        type: "text",
        content:
          "Includes basic handling for missing fields so that extraction can continue when some information is unavailable.",
      },
      {
        id: "python-job-scraper-05",
        number: "05",
        title: "THE OUTPUT (jobs.csv)",
        type: "tags",
        items: ["Job Title", "Company", "Location", "Job URL"],
      },
      {
        id: "python-job-scraper-06",
        number: "06",
        title: "WHAT I LEARNED",
        type: "list",
        items: [
          "Understanding HTML page structure and DOM elements",
          "Sending HTTP GET requests with Python Requests library",
          "Parsing HTML content using BeautifulSoup (bs4)",
          "Using find() and find_all() to isolate specific tags",
          "Extracting inner text and href attributes from HTML tags",
          "Cleaning extracted strings with Python string methods",
          "Handling missing HTML elements gracefully during iteration",
          "Looping through job listing containers efficiently",
          "Organizing scraped information into structured dictionaries",
          "Writing structured data to CSV files using Python csv module",
        ],
      },
      {
        id: "python-job-scraper-07",
        number: "07",
        title: "NEXT EXPERIMENTS / FUTURE IMPROVEMENTS",
        type: "list",
        items: [
          "Implement keyword-based job filtering",
          "Add pagination support to handle multi-page job boards",
          "Add sorting by location or company name",
          "Create a simple command-line search interface",
          "Extract additional fields (e.g. date posted, job type)",
          "Support JSON and Excel data export formats",
          "Implement structured logging and exception handling",
          "Build a simple web UI for viewing scraped results",
        ],
      },
    ],
    sourceWebsite: {
      name: "Fake Python Jobs",
      url: "https://realpython.github.io/fake-jobs/",
      note: "Educational scraping target for practicing web extraction",
    },
  },
];
