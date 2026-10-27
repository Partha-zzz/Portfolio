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
  {
    id: "mnist-neural-network-experiment",
    slug: "mnist-neural-network-experiment",
    number: "EXP-04",
    title: "MNIST NEURAL NETWORK EXPERIMENT",
    category: "MACHINE LEARNING / DEEP LEARNING",
    description:
      "An experiment comparing three neural-network architectures on MNIST to understand how increasing hidden-layer depth affects test performance and generalization.",
    technologies: ["Python", "TensorFlow", "Keras", "Matplotlib"],
    status: "COMPLETED EXPERIMENT",
    statusColor: "#635BFF",
    githubUrl: "https://github.com/Partha-zzz",
    snippet: `import tensorflow as tf
from tensorflow.keras import layers, models

# MNIST input: 28x28 grayscale images flattened to 784 input values
# Comparing 1, 2, and 3 dense hidden layer architectures:
model_1 = models.Sequential([
    layers.Flatten(input_shape=(28, 28)), # 784
    layers.Dense(128, activation='relu'),
    layers.Dense(10, activation='softmax')
])

model_2 = models.Sequential([
    layers.Flatten(input_shape=(28, 28)), # 784
    layers.Dense(128, activation='relu'),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

model_3 = models.Sequential([
    layers.Flatten(input_shape=(28, 28)), # 784
    layers.Dense(128, activation='relu'),
    layers.Dense(64, activation='relu'),
    layers.Dense(32, activation='relu'),
    layers.Dense(10, activation='softmax')
])`,
    updatedAt: "2026-09-27",
    whyInLab:
      "This experiment was conducted to explore neural network depth, evaluate generalization on unseen test data, and understand how training randomness impacts model evaluation on MNIST.",
    sections: [
      {
        id: "mnist-01",
        number: "01",
        title: "THE PROBLEM",
        type: "text",
        content:
          "Explore whether adding more hidden Dense layers improves MNIST handwritten-digit classification performance.",
      },
      {
        id: "mnist-02",
        number: "02",
        title: "THE DATA",
        type: "key-value",
        keyValueItems: [
          { title: "DATASET", desc: "MNIST handwritten-digit dataset" },
          { title: "INPUT", desc: "28 × 28 grayscale images (flattened to 784 input values)" },
          { title: "TRAINING DATA", desc: "60,000 images" },
          { title: "TEST DATA", desc: "10,000 images" },
        ],
      },
      {
        id: "mnist-03",
        number: "03",
        title: "MODEL ARCHITECTURES",
        type: "key-value",
        keyValueItems: [
          { title: "MODEL 1 (1 HIDDEN LAYER)", desc: "INPUT 784 → 128 (ReLU) → OUTPUT 10 (Softmax)" },
          { title: "MODEL 2 (2 HIDDEN LAYERS)", desc: "INPUT 784 → 128 (ReLU) → 64 (ReLU) → OUTPUT 10 (Softmax)" },
          { title: "MODEL 3 (3 HIDDEN LAYERS)", desc: "INPUT 784 → 128 (ReLU) → 64 (ReLU) → 32 (ReLU) → OUTPUT 10 (Softmax)" },
        ],
      },
      {
        id: "mnist-04",
        number: "04",
        title: "EXPERIMENTAL COMPARISON",
        type: "key-value",
        keyValueItems: [
          { title: "MODEL 1 (1 HIDDEN LAYER)", desc: "128 hidden nodes | Test Accuracy: 97.58%" },
          { title: "MODEL 2 (2 HIDDEN LAYERS)", desc: "128 → 64 hidden nodes | Test Accuracy: 97.69%" },
          { title: "MODEL 3 (3 HIDDEN LAYERS)", desc: "128 → 64 → 32 hidden nodes | Test Accuracy: 97.68%" },
        ],
      },
      {
        id: "mnist-05",
        number: "05",
        title: "WHAT CHANGED BETWEEN RUNS?",
        type: "text",
        content:
          "In an earlier run, Model 1 performed best. In the rerun, Model 2 (97.69%) and Model 3 (97.68%) performed slightly better than Model 1 (97.58%). This demonstrates that neural-network training contains randomness, including weight initialization and optimization dynamics. All three architectures performed very similarly on MNIST, with test accuracy around 97.6–97.7%. A single run is not enough to declare a universally best architecture.",
      },
      {
        id: "mnist-06",
        number: "06",
        title: "WHAT I LEARNED",
        type: "list",
        items: [
          "Adding layers does not automatically improve performance.",
          "All three architectures achieved approximately 97–98% test accuracy.",
          "Small differences can change between training runs.",
          "Test accuracy is more useful for evaluating generalization than training accuracy alone.",
          "More complex architectures should be justified by experiments, not added simply because they are deeper.",
        ],
      },
      {
        id: "mnist-07",
        number: "07",
        title: "GENERALIZATION",
        type: "key-value",
        keyValueItems: [
          { title: "TRAINING ACCURACY", desc: "~99.38% (Model 2)" },
          { title: "TEST ACCURACY", desc: "97.69% (Model 2)" },
          {
            title: "OBSERVATION",
            desc: "Training accuracy was higher than test accuracy, illustrating the difference between performance on seen training data and unseen test data.",
          },
        ],
      },
      {
        id: "mnist-08",
        number: "08",
        title: "NEXT EXPERIMENTS",
        type: "list",
        items: [
          "Run each architecture multiple times to calculate mean test accuracy and standard deviation",
          "Compare training and validation loss/accuracy curves over epochs",
          "Experiment with Dropout regularization",
          "Experiment with different optimizers (e.g. Adam vs SGD) or learning rates",
          "Compare Dense networks with a Convolutional Neural Network (CNN)",
        ],
      },
    ],
  },
  {
    id: "papertrail",
    slug: "papertrail",
    number: "EXP-05",
    title: "PAPERTRAIL",
    category: "AI / RAG / NLP",
    description:
      "A beginner-friendly Retrieval-Augmented Generation (RAG) research assistant that lets users upload a PDF paper, ask questions in natural language, and receive answers grounded in retrieved passages with page-number citations.",
    technologies: [
      "Python",
      "Streamlit",
      "pypdf",
      "Sentence Transformers",
      "all-MiniLM-L6-v2",
      "NumPy",
      "Groq API",
      "python-dotenv",
    ],
    status: "COMPLETED EXPERIMENT",
    statusColor: "#635BFF",
    githubUrl: "https://github.com/Partha-zzz/Papertrail",
    snippet: `# Core RAG pipeline: sliding-window chunking, local embeddings & NumPy cosine ranking
from sentence_transformers import SentenceTransformer
import numpy as np
from groq import Groq

# 1. Local normalized embeddings with all-MiniLM-L6-v2
embedder = SentenceTransformer("all-MiniLM-L6-v2")
chunk_embeddings = embedder.encode(chunks, normalize_embeddings=True)

# 2. Similarity search using pure NumPy dot product (cosine similarity)
query_embedding = embedder.encode([query], normalize_embeddings=True)[0]
similarities = np.dot(chunk_embeddings, query_embedding)
top_k_indices = np.argsort(similarities)[::-1][:3]

# 3. Grounded context generation with [Page X] citations passed to Groq API
context_blocks = [f"[Page {chunk['page']}] {chunk['text']}" for chunk in retrieved_chunks]`,
    updatedAt: "2026-10-27",
    whyInLab:
      "PaperTrail implements an end-to-end RAG architecture in transparent, vanilla Python without orchestrator frameworks (no LangChain or LlamaIndex) or external vector DBs, making retrieval mechanics, chunk overlap, and similarity scoring completely inspectable.",
    sections: [
      {
        id: "papertrail-01",
        number: "01",
        title: "THE PROBLEM",
        type: "text",
        content:
          "Finding specific information inside research papers can be time-consuming. Generic LLM answers may also include claims that are not supported by the uploaded document.",
      },
      {
        id: "papertrail-02",
        number: "02",
        title: "THE APPROACH",
        type: "text",
        content:
          "PaperTrail implements the RAG pipeline directly in Python, without LangChain, LlamaIndex, or an external vector database. This makes the retrieval process easier to inspect, calibrate, and understand.",
      },
      {
        id: "papertrail-03",
        number: "03",
        title: "RAG PIPELINE",
        type: "badge-flow",
        items: [
          "PDF UPLOAD",
          "TEXT EXTRACTION",
          "CHUNKING",
          "EMBEDDINGS",
          "SIMILARITY SEARCH",
          "GROQ LLM",
          "CITED ANSWER",
        ],
      },
      {
        id: "papertrail-04",
        number: "04",
        title: "RETRIEVAL & SIMILARITY",
        type: "key-value",
        keyValueItems: [
          {
            title: "1. PDF EXTRACTION",
            desc: "pypdf extracts text page by page while preserving page numbers for citation tracking.",
          },
          {
            title: "2. TEXT CHUNKING",
            desc: "A sliding window splits text into chunks of 1,000 characters with 150 characters of overlap.",
          },
          {
            title: "3. EMBEDDING GENERATION",
            desc: "sentence-transformers uses all-MiniLM-L6-v2 locally to produce normalized dense embeddings.",
          },
          {
            title: "4. SIMILARITY SEARCH",
            desc: "NumPy dot products rank chunks by cosine similarity without relying on external vector databases.",
          },
          {
            title: "5. RETRIEVAL",
            desc: "The top three relevant chunks are selected along with their page numbers and similarity scores.",
          },
          {
            title: "6. ANSWER GENERATION",
            desc: "The Groq API generates a synthesized answer using strictly the retrieved evidence.",
          },
        ],
      },
      {
        id: "papertrail-05",
        number: "05",
        title: "GROUNDED ANSWERS",
        type: "text",
        content:
          "Answers reference source pages using explicit [Page X] citations. When retrieved evidence is insufficient to answer the query, the system provides an explicit fallback rather than hallucinating unsupported facts.",
      },
      {
        id: "papertrail-06",
        number: "06",
        title: "DESIGN DECISIONS",
        type: "list",
        items: [
          "No LangChain or LlamaIndex — built with direct Python control flow to keep operations transparent.",
          "No external vector database — embeddings stored in memory for zero-dependency local runs.",
          "Local embedding generation using all-MiniLM-L6-v2 for fast, private, offline vectorization.",
          "Transparent NumPy similarity calculations directly exposing cosine similarity scores.",
          "Inspectable retrieved text, page numbers, and similarity scores visible to the user.",
          "Explicit fallback prompt contract when the retrieved evidence is insufficient.",
        ],
      },
      {
        id: "papertrail-07",
        number: "07",
        title: "LIMITATIONS",
        type: "list",
        items: [
          "Image-only or scanned PDFs without extractable text are not supported by the current text-extraction pipeline.",
          "Retrieval is based on the top three chunks ranked by embedding similarity.",
          "Answer quality depends on the extracted text, retrieval relevance, and selected LLM.",
          "Embeddings are kept in application session state; this is not a persistent document-indexing service.",
          "The current implementation does not establish benchmarked retrieval or answer accuracy.",
        ],
      },
      {
        id: "papertrail-08",
        number: "08",
        title: "WHAT I LEARNED",
        type: "list",
        items: [
          "How chunk size and sliding-window overlap directly impact semantic preservation across boundaries.",
          "The mechanics of cosine similarity calculation via normalized vector dot products with NumPy.",
          "Structuring prompt context to enforce strict document grounding and page citation compliance.",
          "The trade-offs between orchestrator frameworks (LangChain) and transparent, minimal implementations.",
          "Handling edge cases like zero-text PDFs, query drift, and graceful fallback when similarity is low.",
        ],
      },
      {
        id: "papertrail-09",
        number: "09",
        title: "NEXT EXPERIMENTS",
        type: "list",
        items: [
          "Support scanned PDFs through OCR (e.g. pytesseract or pdf2image).",
          "Compare chunk sizes and overlap settings systematically.",
          "Evaluate retrieval quality with a small question-and-answer test set.",
          "Experiment with reranking retrieved chunks using cross-encoders.",
          "Add conversation history or persistent document indexing.",
        ],
      },
    ],
  },
];
