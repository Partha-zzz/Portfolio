export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageBg: string;
  accentColor: string;
  github: string;
  demo?: string;
  featured: boolean;
  gridCols?: string;
  problem: string;
  idea: string;
  approach: string[];
  implementation: string;
  results: string[];
  lessons: string[];
  // Extended fields for dedicated case study rendering
  classification?: "INDIVIDUAL PROJECT" | "COLLABORATIVE PROJECT";
  subheading?: string;
  role?: string;
  type?: string;
  platform?: string;
  domain?: string;
  architecture?: string;
  team?: string;
  tier1Features?: { title: string; desc: string }[];
  tier2Features?: { title: string; desc: string }[];
  whatWeBuilt?: { id: string; title: string; subtitle: string; description: string }[];
  intelligencePoints?: string[];
  architectureStack?: { layer: string; techs: string[] }[];
  builtForUsers?: { title: string; items: string[] }[];
  platformEngineering?: string[];
  enables?: string[];

  // ResQAI specific structured fields
  crisisPortalFeatures?: { title: string; desc: string }[];
  realTimeCoordination?: string[];
  systemIsolationPoints?: string[];
  rescueBuilderFeatures?: string[];
  aiMapAnalysisPoints?: string[];
  aiRouterStack?: { name: string; type: string }[];
  locationStack?: string[];
  liveContextSources?: string[];
  engineeringHighlights?: { title: string; subtitle: string; bg: string; color: string }[];
  myContributionDetail?: string;
  whatMadeItHard?: { title: string; desc: string }[];
  verifiedBehavior?: string[];

  // IPLMind specific structured fields
  iplMindEngineFeatures?: { title: string; desc: string }[];
  semanticConstraintPoints?: string[];
  adaptiveAiPoints?: string[];
  confidenceEnginePoints?: string[];
  globalLearningPoints?: string[];
  iplDataPoints?: string[];
  iplExperiencePoints?: string[];
  iplVisualEngine?: string[];
  iplAiStack?: { name: string; role: string }[];
  iplArchitectureDiagram?: string[];
  iplChallenges?: { title: string; desc: string }[];
  iplLessons?: string[];

  // Data Analytics Projects specific structured fields
  analyticsCollectionProjects?: {
    id: string;
    num: string;
    title: string;
    subtitle: string;
    description: string;
    tasks: string[];
    tools: string[];
  }[];
  analyticsSkills?: { category: string; items: string[] }[];
  analyticsScope?: string[];

  // California Housing Predictor specific structured fields
  californiaMetrics?: {
    records: string;
    trainTest: string;
    testRmse: string;
    model: string;
  };
  californiaFeatures?: string[];
  californiaPipelineSteps?: string[];
  californiaPreprocessDetails?: {
    numerical: string[];
    categorical: string[];
    leakagePrevention: string;
  };
  californiaModelSelection?: { name: string; role: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "california-housing-predictor",
    number: "01",
    title: "CALIFORNIA HOUSING PRICE PREDICTION",
    category: "MACHINE LEARNING / REGRESSION",
    classification: "INDIVIDUAL PROJECT",
    description:
      "An end-to-end machine learning regression project that predicts median house values across California using census-based housing and demographic features.",
    longDescription:
      "An end-to-end machine learning regression project that predicts median house values across California using census-based housing and demographic features with a reproducible Scikit-learn preprocessing pipeline and RandomForestRegressor.",
    subheading: "An end-to-end machine learning regression project that predicts median house values across California using census-based housing and demographic features.",
    role: "ML Developer",
    type: "Machine Learning Regression",
    domain: "Housing & Real Estate Demographics",
    architecture: "Scikit-learn Pipeline × RandomForestRegressor",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Joblib"],
    imageBg: "#635BFF",
    accentColor: "#635BFF",
    github: "https://github.com/Partha-zzz/california-housing-predictor",
    featured: true,
    gridCols: "md:col-span-2 lg:col-span-2",

    problem:
      "Building a reproducible, leak-free regression pipeline capable of estimating median house values across California census blocks using geographic, demographic, and housing-related features.",

    idea:
      "A complete machine learning engineering workflow that separates training and inference logic, applies stratified sampling to preserve income distribution, constructs a ColumnTransformer preprocessing pipeline, fits a Random Forest Regressor, and persists artifacts with Joblib.",

    californiaMetrics: {
      records: "20,640",
      trainTest: "80 / 20",
      testRmse: "$47,197.67",
      model: "RANDOM FOREST",
    },

    californiaFeatures: [
      "longitude",
      "latitude",
      "housing_median_age",
      "total_rooms",
      "total_bedrooms",
      "population",
      "households",
      "median_income",
      "ocean_proximity",
    ],

    californiaPipelineSteps: [
      "RAW DATA",
      "STRATIFIED SPLIT",
      "FEATURE / TARGET SEPARATION",
      "PREPROCESSING PIPELINE",
      "RANDOM FOREST",
      "MODEL + PIPELINE SAVED WITH JOBLIB",
      "LOAD ARTIFACTS",
      "INFERENCE",
      "EVALUATION",
      "OUTPUT CSV",
    ],

    californiaPreprocessDetails: {
      numerical: ["SimpleImputer(strategy=\"median\")", "StandardScaler"],
      categorical: ["OneHotEncoder(handle_unknown=\"ignore\")"],
      leakagePrevention: "The preprocessing pipeline is fitted exclusively on training data and reused during inference, preventing data leakage.",
    },

    californiaModelSelection: [
      { name: "Linear Regression", role: "Baseline parametric regression model" },
      { name: "Decision Tree Regression", role: "Nonlinear single tree model" },
      { name: "Random Forest Regression", role: "Primary selected ensemble regression model" },
    ],

    lessons: [
      "Separating features and target correctly before preprocessing",
      "Using stratified sampling on median_income to maintain representative train/test distribution",
      "Handling missing numerical values with SimpleImputer (median strategy)",
      "Standardizing numerical features with StandardScaler and encoding categoricals with OneHotEncoder",
      "Building reproducible Scikit-learn Pipeline and ColumnTransformer pipelines",
      "Preventing preprocessing data leakage between train and test sets",
      "Training and evaluating RandomForestRegressor for nonlinear feature interaction modeling",
      "Persisting trained models and fitted transformers together using Joblib",
      "Executing inference on held-out test data using persisted artifacts",
      "Evaluating regression performance using Root Mean Squared Error (TEST RMSE: $47,197.67)",
    ],

    approach: [
      "Divided dataset using stratified sampling based on income categories to prevent sampling bias.",
      "Constructed a Scikit-learn ColumnTransformer combining SimpleImputer, StandardScaler, and OneHotEncoder.",
      "Trained a RandomForestRegressor (random_state=42) and evaluated test set RMSE.",
      "Persisted model and preprocessing pipeline artifacts using Joblib for standalone inference.",
    ],

    implementation:
      "Built with Python, Pandas, NumPy, Scikit-learn, and Joblib. Features stratified 80/20 train/test splitting, ColumnTransformer preprocessing with SimpleImputer median imputation and StandardScaler scaling for numerical attributes, OneHotEncoder for categorical attributes, RandomForestRegressor modeling (random_state=42), Joblib artifact persistence, and test prediction export to output.csv.",

    results: [
      "Achieved a verified Test RMSE of $47,197.67 on held-out 20% census block test data.",
      "Constructed a leak-free preprocessing pipeline reusing fitted scalers and imputers during inference.",
      "Persisted fully reproducible model and pipeline artifacts using Joblib.",
      "Exported actual vs predicted median house values to output.csv.",
    ],
  },
  {
    slug: "data-analytics",
    number: "02",
    title: "DATA ANALYTICS PROJECTS",
    category: "DATA SCIENCE / ANALYTICS",
    classification: "INDIVIDUAL PROJECT",
    description:
      "A five-project collection covering data cleaning, EDA, SQL analysis, pharmaceutical sales analysis and Netflix dataset cleaning.",
    longDescription:
      "A collection of hands-on analytics projects covering data cleaning, exploratory analysis, SQL querying, visualization and real-world dataset preparation.",
    subheading: "Learning to turn messy datasets into structured analysis, queries and visual insights.",
    role: "Personal Project / Analytics Collection",
    type: "Analytics Project Collection",
    domain: "Data Cleaning · EDA · SQL · Visualization",
    architecture: "Multi-Project Analytical Suite",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "SQL", "SQLite", "OpenPyXL", "Regex", "Jupyter Notebook", "Git / GitHub"],
    imageBg: "#D9D9D4",
    accentColor: "#635BFF",
    github: "https://github.com/Partha-zzz/Data-Analytics-Projects",
    featured: true,
    gridCols: "md:col-span-2 lg:col-span-2",

    problem:
      "Raw real-world datasets are fragmented, contain missing or duplicate records, and require structured data cleaning, exploratory analysis, and SQL querying before useful insights can be extracted.",

    idea:
      "Built as a progressive hands-on collection demonstrating five sequential steps of data analytics: RAW DATA → CLEAN → EXPLORE → QUERY → VISUALIZE → INSIGHT.",

    analyticsCollectionProjects: [
      {
        id: "PROJECT 01",
        num: "01",
        title: "DATA CLEANING & PREPARATION",
        subtitle: "Transactional Dataset Preparation",
        description: "A practical data-cleaning exercise using a transactional dataset containing 1,200 records.",
        tasks: [
          "Data inspection with Pandas",
          "Missing-value analysis and handling",
          "Duplicate detection",
          "Primary-key validation",
          "Date standardization",
          "Exporting cleaned data to Excel",
        ],
        tools: ["Python", "Pandas", "OpenPyXL", "Jupyter Notebook"],
      },
      {
        id: "PROJECT 02",
        num: "02",
        title: "EXPLORATORY DATA ANALYSIS",
        subtitle: "Transactional Sales EDA",
        description: "An exploratory analysis of transactional sales data to understand sales, orders, product performance and data quality.",
        tasks: [
          "Descriptive statistics",
          "Sales and order trends",
          "Missing values & duplicates inspection",
          "Outlier detection",
          "Data visualization with Matplotlib & Seaborn",
        ],
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      },
      {
        id: "PROJECT 03",
        num: "03",
        title: "SQL DATA ANALYSIS",
        subtitle: "SQLite Query Analysis",
        description: "A beginner SQL analysis project using transactional data stored in SQLite.",
        tasks: [
          "Filtering data with SELECT & WHERE",
          "Sorting results with ORDER BY",
          "Group aggregation using GROUP BY",
          "Summary statistics via COUNT(), SUM(), AVG()",
          "SQLite database query execution",
        ],
        tools: ["Python", "SQLite", "SQL", "Pandas", "Jupyter Notebook"],
      },
      {
        id: "PROJECT 04",
        num: "04",
        title: "PHARMACEUTICAL SALES ANALYSIS",
        subtitle: "ATC Category Sales Trends",
        description: "Analysis of daily pharmaceutical sales data to identify patterns across ATC drug categories.",
        tasks: [
          "Total sales analysis by ATC category",
          "Top-selling categories during selected months",
          "Total category sales calculation in 2017",
          "Average daily sales calculation",
          "Monthly trend analysis of respiratory drug category R03",
          "Matplotlib chart visualization",
        ],
        tools: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
      },
      {
        id: "PROJECT 05",
        num: "05",
        title: "NETFLIX DATA CLEANING",
        subtitle: "Real-World Dataset Cleaning",
        description: "A real-world dataset-cleaning exercise using the Netflix Movies and TV Shows dataset from Kaggle.",
        tasks: [
          "Dataset inspection & schema validation",
          "Missing-value analysis",
          "Duplicate detection and removal",
          "Cleaning mixed-type columns",
          "Extracting numerical values and units from duration using Regex",
          "Converting date_added into datetime objects",
          "Final data validation and CSV export",
        ],
        tools: ["Python", "Pandas", "Regex", "Jupyter Notebook"],
      },
    ],

    analyticsSkills: [
      {
        category: "DATA CLEANING",
        items: ["Missing values", "Duplicates", "Type consistency", "Date handling"],
      },
      {
        category: "EXPLORATORY ANALYSIS",
        items: ["Descriptive statistics", "Outliers", "Trends", "Distributions"],
      },
      {
        category: "SQL",
        items: ["Filtering", "Sorting", "Grouping", "Aggregation"],
      },
      {
        category: "VISUALIZATION",
        items: ["Matplotlib", "Seaborn"],
      },
      {
        category: "DATA HANDLING",
        items: ["CSV", "Excel", "SQLite"],
      },
    ],

    lessons: [
      "Real-world data is rarely analysis-ready.",
      "Missing values and duplicates must be investigated before analysis.",
      "Data types matter for reliable calculations.",
      "SQL provides another way to reason about structured data.",
      "Visualization helps expose trends and anomalies.",
      "Cleaning and validation are as important as analysis itself.",
    ],

    analyticsScope: [
      "This collection focuses primarily on foundational analytics skills rather than advanced statistical modeling or production BI systems.",
      "The repository demonstrates data cleaning, exploratory analysis, SQL queries, visualization, and dataset preparation.",
      "No automated enterprise pipelines, predictive machine learning models, or production dashboard deployments are implied.",
    ],

    approach: [
      "Executed 5 progressive hands-on projects covering data cleaning, EDA, SQL querying, domain analysis, and real-world dataset preparation.",
      "Cleaned transactional datasets (1,200 records) and exported validated outputs to Excel using Pandas & OpenPyXL.",
      "Wrote structured SQL queries in SQLite for aggregation, filtering, and grouping.",
      "Processed daily pharmaceutical sales trends and cleaned real-world Netflix Kaggle dataset fields using Regex.",
    ],

    implementation:
      "Organized across Jupyter Notebooks in a single GitHub repository. Utilizes Python, Pandas, Matplotlib, Seaborn, SQLite, OpenPyXL, and Regex. Covers data ingestion, missing value imputation, duplicate removal, SQL grouping, temporal trend plotting, and dataset export.",

    results: [
      "Constructed a 5-project data analytics suite covering the full data transformation lifecycle.",
      "Cleaned messy Kaggle and transactional datasets into standardized CSV/Excel exports.",
      "Authored clean SQL scripts for SQLite query aggregation.",
      "Generated domain-specific visualizations for pharmaceutical sales categories and trend lines.",
    ],
  },
  {
    slug: "bharatfarm",
    number: "03",
    title: "BHARATFARM",
    category: "AI / AGRITECH / FULL-STACK",
    classification: "COLLABORATIVE PROJECT",
    description:
      "An intelligent, multilingual AgriTech ecosystem connecting farmer tools with climate, crop-risk, market and AI-assisted agricultural intelligence.",
    longDescription:
      "An AI-powered agricultural platform combining farmer tools, climate intelligence, crop diagnostics, market intelligence, insurance verification and conversational agricultural assistance in one multilingual ecosystem.",
    subheading: "An intelligent, multilingual AgriTech ecosystem built to connect everyday farmer needs with climate, market and crop-risk intelligence.",
    role: "Product / Full-Stack / AI-ML Development",
    type: "Smart India Hackathon Project",
    platform: "Responsive Web / PWA",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Supabase", "Gemini AI"],
    imageBg: "#FFD600",
    accentColor: "#FFD600",
    github: "https://github.com/The-Lazy-Four/BharatFarm",
    demo: "https://bharatfarm-2-0-xprx.onrender.com/",
    featured: false,
    gridCols: "md:col-span-2 lg:col-span-2",

    problem:
      "Farmers frequently rely on several disconnected tools for weather advisories, leaf disease scanning, market prices, government schemes, farm records, and financial calculations. At an advanced level, agricultural decision-making lacks unified regional climate-risk telemetry, mandi price volatility insights, and streamlined crop-risk or insurance verification workflows. The goal of BharatFarm was to bring these capabilities into one coherent ecosystem.",

    idea:
      "BharatFarm is structured as a two-tier system: Tier 01 delivers everyday farmer tools (weather advisories, disease scanning, marketplace, schemes, calculators), while Tier 02 delivers advanced intelligence (climate-risk modeling, smart mandi analytics, Sahayak AI, crop-risk/insurance, aggregation optimizer, action planner, and field mapping). Everyday farmer inputs flow into data and AI intelligence to drive actionable agricultural decisions.",

    tier1Features: [
      { title: "Weather & Advisory", desc: "Real-time localized weather updates & agricultural advisories." },
      { title: "Leaf Disease Scanner", desc: "AI-assisted foliar crop leaf disease classification and treatment guidance." },
      { title: "Agri-Marketplace", desc: "Direct product catalog and purchasing connection for agricultural inputs." },
      { title: "Group Buying", desc: "Collective input procurement workflows for smallholder farmer groups." },
      { title: "Schemes & Subsidies", desc: "Curated directory of government agricultural support programs." },
      { title: "Farm Calculator & Records", desc: "Input cost estimation and digitized farm record bookkeeping." },
      { title: "KrishiBot", desc: "Instant conversational assistant for everyday farm queries." },
    ],

    tier2Features: [
      { title: "Climate Risk Intelligence", desc: "Regional heat stress, flood/drought vulnerability and advisory context." },
      { title: "Smart Mandi Price & Risk", desc: "Market trend analysis, price volatility tracking and selling-risk guidance." },
      { title: "Sahayak AI", desc: "Advanced conversational agricultural assistant for complex consultations." },
      { title: "Crop Risk & Insurance", desc: "Parametric crop-risk assessment, damage simulation and claim workflows." },
      { title: "Aggregation Optimizer", desc: "Logistics and yield aggregation planning for FPOs." },
      { title: "Action Planner", desc: "Seasonal agricultural task scheduling and operational tracking." },
      { title: "Field Mapping", desc: "Geospatial boundary mapping and field telemetry visualization." },
    ],

    whatWeBuilt: [
      {
        id: "FEATURE 01",
        title: "LEAF DISEASE SCANNER",
        subtitle: "Computer Vision & Diagnostics",
        description: "AI-assisted crop leaf disease diagnosis with disease identification, severity information and treatment guidance.",
      },
      {
        id: "FEATURE 02",
        title: "CLIMATE RISK INTELLIGENCE",
        subtitle: "Regional Environmental Analytics",
        description: "Regional climate-risk intelligence covering heat stress, flood/drought vulnerability and agricultural advisory context.",
      },
      {
        id: "FEATURE 03",
        title: "SMART MANDI",
        subtitle: "Market Price & Volatility",
        description: "Market intelligence around mandi prices, trends, volatility and selling-time/risk analysis.",
      },
      {
        id: "FEATURE 04",
        title: "SAHAYAK AI",
        subtitle: "Conversational Intelligence",
        description: "Conversational agricultural assistance available through the web experience and WhatsApp-oriented workflow.",
      },
      {
        id: "FEATURE 05",
        title: "CROP RISK + INSURANCE",
        subtitle: "Parametric Claims & Risk Assessment",
        description: "Crop-risk and parametric insurance workflows including damage assessment/simulation and claim-oriented interactions.",
      },
      {
        id: "FEATURE 06",
        title: "AGRI MARKETPLACE + GROUP BUYING",
        subtitle: "Procurement & Collective Access",
        description: "Marketplace and collective purchasing workflows intended to connect farmers with agricultural products and improve purchasing coordination.",
      },
    ],

    intelligencePoints: [
      "AI-driven crop diagnostics providing rapid disease identification and treatment options.",
      "AI agricultural assistance providing conversational guidance for farming queries.",
      "Market price & risk intelligence evaluating mandi price trends and volatility.",
      "Regional climate-risk analysis modeling weather hazards and crop advisories.",
      "Crop-risk assessment assisting with insurance simulation and damage estimation.",
      "Generative AI services (Gemini / OpenRouter) integrated into the agricultural advisory layer.",
    ],

    architectureStack: [
      { layer: "FRONTEND", techs: ["React 18", "TypeScript", "Vite", "React Router"] },
      { layer: "BACKEND", techs: ["Node.js", "Express", "TypeScript"] },
      { layer: "SHARED CONTRACTS", techs: ["Shared TypeScript types", "Domain models"] },
      { layer: "DATABASE / AUTH", techs: ["Supabase", "JWT Authentication"] },
      { layer: "AI / EXTERNAL SERVICES", techs: ["Gemini / OpenRouter", "WhatsApp integration", "External Weather & Mandi APIs"] },
    ],

    builtForUsers: [
      { title: "MULTILINGUAL", items: ["English", "Hindi", "Bengali"] },
      { title: "MOBILE-FIRST", items: ["Responsive farmer-oriented views: MobileBasicFarmerHome, MobileSahayakView, MobileClimateRiskView, MobileSmartMandiView."] },
      { title: "ACCESSIBLE", items: ["Interfaces designed around practical agricultural workflows and non-technical user needs."] },
    ],

    platformEngineering: [
      "JWT authentication with 7-day expiration",
      "Supabase Auth integration and fallback handling",
      "Protected routes and server-side authentication middleware",
      "Shared API response contracts between client and server",
      "PWA infrastructure with Workbox service-worker caching for offline resilience",
      "Mock-data support (USE_MOCK_DATA=true) to enable testing and offline-capable scenarios",
    ],

    approach: [
      "Architected an npm workspaces monorepo structure separating client, server, and shared contracts.",
      "Engineered a two-tier product model separating everyday basic farmer tools from advanced intelligence workflows.",
      "Integrated Generative AI services (Gemini / OpenRouter) into the agricultural advisory and Sahayak conversation pipelines.",
      "Implemented PWA service workers and mock-data toggles to ensure high reliability across varied connectivity environments.",
    ],

    implementation:
      "The codebase is structured as an npm workspaces monorepo containing client (React + Vite + TypeScript), server (Node.js + Express + TypeScript), and shared packages (TypeScript domain types and API contracts). Authentication uses JWT tokens paired with Supabase integration. The PWA setup leverages Workbox for asset caching, while an explicit mock mode (USE_MOCK_DATA=true) allows comprehensive offline demonstration and testing.",

    results: [
      "Unified farmer tools, climate intelligence, crop diagnostics, and market analytics into a single responsive web ecosystem.",
      "Delivered multi-language support (English, Hindi, Bengali) across primary farmer interaction flows.",
      "Engineered a robust monorepo architecture with clean shared contracts between client and server.",
      "Created PWA and mock-data capabilities allowing seamless offline and low-bandwidth operation.",
    ],

    enables: [
      "Unified farmer workflow bridging daily tasks and strategic planning",
      "Multilingual access in English, Hindi, and Bengali",
      "AI-assisted agricultural advisory and crop disease identification",
      "Climate-aware decision support for regional weather hazards",
      "Market intelligence tracking mandi price trends and selling risk",
      "Crop-risk assessment and insurance verification workflows",
      "Modular npm workspaces architecture (client, server, shared)",
      "PWA and mock-data support for low-connectivity testing",
    ],

    lessons: [
      "Designing a modular monorepo cleanly isolates client UI, backend APIs, and shared TypeScript domain contracts.",
      "Combining standard product software with generative AI services produces resilient user experiences when wrapped in clear domain contracts.",
      "Supporting mock-data toggles and PWA caching is essential for building and demonstrating software designed for low-connectivity environments.",
      "Building for agricultural users requires prioritizing mobile-first navigation and straightforward multilingual interaction flows.",
    ],
  },
  {
    slug: "resqai",
    number: "04",
    title: "RESQAI",
    category: "AI / REAL-TIME SYSTEMS",
    classification: "COLLABORATIVE PROJECT",
    description:
      "AI-powered crisis intelligence platform combining emergency guidance, live SOS coordination, location-aware maps and customizable rescue systems.",
    longDescription:
      "ResQAI combines AI emergency guidance, real-time SOS coordination, live maps, AI floor-plan analysis and customizable emergency systems into one crisis-response platform.",
    subheading:
      "Closing the gap between emergency onset and professional responder arrival with AI guidance, live coordination and location-aware intelligence.",
    role: "UI Design + Lead Frontend Development",
    type: "AI Crisis Intelligence Platform",
    domain: "Emergency Response",
    architecture: "Real-Time / Multi-Tenant",
    team: "The Lazy Four",
    technologies: ["AI", "REAL-TIME", "SOCKET.IO", "MAPS", "NODE.JS", "EXPRESS", "TAILWIND CSS"],
    imageBg: "#635BFF",
    accentColor: "#635BFF",
    github: "https://github.com/The-Lazy-Four/ResQAI",
    demo: "https://resqai-mdo4.onrender.com/",
    featured: false,
    gridCols: "md:col-span-2 lg:col-span-2",

    problem:
      "During emergencies, individuals often lack immediate, scenario-specific guidance, struggle to locate safe exits or nearby emergency services, and cannot easily broadcast their exact situation. Meanwhile, organizations (hotels, schools, hospitals, offices) require structured incident coordination, live emergency alert feeds, and isolated tenant environments to manage crisis events without cross-system data exposure.",

    idea:
      "ResQAI operates through a continuous crisis feedback loop: DETECT → UNDERSTAND → GUIDE → COORDINATE → RESPOND. It pairs a public-facing emergency portal with a multi-tenant administrative command center powered by room-based WebSocket communications and AI-assisted spatial and data analysis.",

    crisisPortalFeatures: [
      { title: "ONE-TAP SOS", desc: "Users can activate an emergency signal and broadcast real-time location and situational context." },
      { title: "LIVE AI GUIDANCE", desc: "Scenario-specific emergency instructions tailored to fire, medical emergencies, or security incidents." },
      { title: "LIVE SAFETY MAP", desc: "Browser geolocation paired with Leaflet mapping for interactive spatial orientation." },
      { title: "SAFE-ZONE DISCOVERY", desc: "Discovers nearby hospitals, clinics, police stations, fire stations, and shelters via OpenStreetMap/Overpass APIs with Nominatim fallback." },
    ],

    realTimeCoordination: [
      "Socket.IO handles real-time incident event delivery between users and administrators.",
      "Rescue systems are strictly isolated using room-based WebSocket channels.",
      "SOS events and emergency updates are broadcast exclusively within the matching system room.",
      "Admin command panels receive instant, live incident feeds and user location updates.",
    ],

    systemIsolationPoints: [
      "Every custom rescue system receives a unique system_id token.",
      "Multi-tenant data partitioning is enforced across Database, API endpoints, and Socket.IO rooms.",
      "Strict room boundaries ensure zero cross-system event broadcasting.",
      "Verification report documents 16 automated isolation tests: 16 passed, 0 failed, 0 isolation breaches detected.",
    ],

    rescueBuilderFeatures: [
      "No-code custom emergency-response system creation for organizations.",
      "Pre-configured templates for hotels, schools, hospitals, and corporate offices.",
      "Instant dual-panel generation: Admin Command Panel + Public User Emergency Portal.",
      "QR-code onboarding enabling instant public access without traditional admin registration.",
      "Configurable emergency nodes and custom workflow routing.",
    ],

    aiMapAnalysisPoints: [
      "Upload and process floor plan imagery using vision-capable AI services.",
      "AI layout analysis calculates safety score, pinpoints emergency exits, and identifies risk zones.",
      "Generates clear evacuation route recommendations and assembly-point guidance for users.",
    ],

    aiRouterStack: [
      { name: "Google Gemini", type: "Primary Vision & Text AI" },
      { name: "OpenRouter", type: "Secondary Multi-Model Fallback" },
      { name: "Groq", type: "Low-Latency Inference Endpoint" },
      { name: "Pollinations / Free AI", type: "Tertiary Fallback Provider" },
      { name: "Static Advisory Engine", type: "Deterministic Offline Fallback" },
    ],

    locationStack: [
      "Browser Geolocation API for precise device positioning",
      "Leaflet.js for interactive responsive mapping interfaces",
      "OpenStreetMap & Overpass API for real-time safe-zone query filters",
      "Nominatim geocoding engine with Google Maps external navigation routing",
    ],

    liveContextSources: [
      "NASA EONET (Earth Observatory Natural Event Tracker)",
      "USGS Earthquake GeoJSON Live Feeds",
      "OpenWeather Regional Emergency Hazard Alerts",
    ],

    builtForUsers: [
      { title: "MULTILINGUAL", items: ["English", "Hindi (हिन्दी)", "Bengali (বাংলা)"] },
      { title: "ZERO-BARRIER ACCESS", items: ["QR-code instant scan onboarding for public users without credential barriers."] },
      { title: "RESPONSIVE UX", items: ["High-contrast, brutalist emergency interface designed for stress clarity on mobile & desktop."] },
    ],

    engineeringHighlights: [
      { title: "REAL-TIME", subtitle: "Socket.IO Event Delivery", bg: "bg-[#FFD600]", color: "text-[#111111]" },
      { title: "MULTI-TENANT", subtitle: "system_id + Room Isolation", bg: "bg-[#635BFF]", color: "text-white" },
      { title: "AI FALLBACK", subtitle: "Multi-Provider Router", bg: "bg-[#111111] dark:bg-[#F7F7F2]", color: "text-[#FFD600] dark:text-[#111111]" },
      { title: "LOCATION-AWARE", subtitle: "Geolocation + Leaflet/OSM", bg: "bg-[#FFD600]", color: "text-[#111111]" },
    ],

    myContributionDetail:
      "Responsible for the UI design and lead frontend development of the ResQAI platform. Designed and built the user-facing emergency workflows, responsive layout architecture, crisis portal UI, interactive mapping components, and the brutalist design system across public and admin interfaces.",

    whatMadeItHard: [
      { title: "REAL-TIME COORDINATION", desc: "Ensuring Socket.IO broadcast events remain strictly scoped to individual organization room IDs under concurrent SOS traffic." },
      { title: "AI RELIABILITY & FALLBACK", desc: "Architecting a multi-provider fallback router across Gemini, OpenRouter, Groq, and static rules to maintain crisis response even during API outages." },
      { title: "EMERGENCY UX CLARITY", desc: "Designing high-contrast, stress-tested visual interfaces that communicate critical guidance instantly without cognitive overload." },
      { title: "LOCATION DEPENDENCY", desc: "Handling browser geolocation permissions, fallback geocoders, and cross-provider mapping overlays gracefully." },
      { title: "MULTI-TENANCY ISOLATION", desc: "Enforcing strict system_id boundary checks across API routes, database models, and WebSocket event channels." },
    ],

    verifiedBehavior: [
      "16 automated multi-tenant system isolation tests executed",
      "16/16 automated tests passed with 0 breaches detected",
      "Socket.IO room-level event isolation verified across concurrent tenant channels",
      "Multi-provider AI router fallback confirmed operational with static rule safeguards",
    ],

    approach: [
      "Designed and developed the frontend user experience, crisis portal, and administrative command center.",
      "Implemented multi-tenant system isolation across API endpoints and Socket.IO room channels.",
      "Integrated multi-provider AI fallback architecture (Gemini, OpenRouter, Groq, static fallback).",
      "Built location-aware safe-zone discovery using Leaflet, OpenStreetMap, and Overpass APIs.",
    ],

    implementation:
      "Built with HTML5, JavaScript, Tailwind CSS on the frontend, and Node.js with Express and Socket.IO on the backend. Data persistence utilizes SQLite with an optional MySQL migration path. Multi-tenant isolation is enforced via system_id parameters and dedicated WebSocket rooms. Vision-based floor plan analysis and crisis guidance utilize a multi-provider AI fallback router.",

    results: [
      "Constructed a full crisis intelligence platform pairing public emergency SOS tools with organizational command panels.",
      "Verified multi-tenant system isolation with 16 passed automated test suites.",
      "Delivered real-time incident telemetry streaming via Socket.IO room isolation.",
      "Engineered a multi-provider AI fallback router ensuring continuous operational guidance.",
    ],

    lessons: [
      "Multi-tenant real-time applications require strict scoping at both the database query layer and the WebSocket room channel layer.",
      "Mission-critical AI integrations must implement multi-provider fallbacks and static backup rules to handle external API failures.",
      "Designing for crisis situations demands minimal friction, instant visual cues, and zero registration barriers for public users.",
    ],
  },
  {
    slug: "iplmind",
    number: "05",
    title: "IPLMIND",
    category: "AI / SPORTS / REASONING",
    classification: "COLLABORATIVE PROJECT",
    description:
      "An Akinator-style IPL guessing engine that combines Bayesian candidate filtering, semantic constraints and adaptive Gemini questioning.",
    longDescription:
      "An Akinator-style IPL guessing game powered by a custom hybrid reasoning engine that narrows player candidates through probability, information gain and semantic constraints, then uses adaptive AI questioning when the search becomes difficult.",
    subheading: "An Akinator-style IPL guessing game powered by a custom hybrid reasoning engine that narrows player candidates through probability, information gain and semantic constraints, then uses adaptive AI questioning when the search becomes difficult.",
    role: "Lead Frontend Developer",
    type: "AI Guessing / Inference System",
    domain: "Cricket / Sports Data",
    architecture: "Hybrid Reasoning Engine (Deterministic + Bayesian + Adaptive AI)",
    team: "The Lazy Four",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Firebase", "Firestore", "Google Gemini", "OpenRouter", "Zustand"],
    imageBg: "#FFD600",
    accentColor: "#FFD600",
    github: "https://github.com/The-Lazy-Four/IPLMind",
    demo: "https://iplgenius.vercel.app/",
    featured: false,
    gridCols: "md:col-span-2 lg:col-span-2",

    problem:
      "Akinator-style games usually depend on predefined questions and broad traits. Cricket has thousands of overlapping player attributes, making naive question trees inefficient and prone to repetitive or contradictory questioning.",

    idea:
      "The system combines deterministic filtering with probabilistic reasoning instead of simply asking an LLM to guess. It continuously evaluates the player candidate pool, applies semantic rules to eliminate redundant questions, and routes difficult candidate sets to Gemini for hyper-specific question generation.",

    iplMindEngineFeatures: [
      { title: "BAYESIAN PROBABILITY", desc: "Dynamic candidate likelihood updates based on cumulative question responses." },
      { title: "INFORMATION GAIN", desc: "Entropy-driven attribute selection to split remaining candidate pools efficiently." },
      { title: "CANDIDATE-POOL FILTERING", desc: "Deterministic elimination based on verified player traits." },
      { title: "ADAPTIVE SELECTION", desc: "Pivots between deterministic trait lookup and LLM question generation." },
    ],

    semanticConstraintPoints: [
      "Mutually exclusive trait enforcement (e.g., Indian player answer automatically prunes overseas nationality questions).",
      "Role-based dependency trees constraining batting, bowling, and wicketkeeping trait queries.",
      "Contradiction prevention layer eliminating invalid or duplicate candidate questions.",
      "Context-aware constraint evaluation prior to question selection.",
    ],

    adaptiveAiPoints: [
      "Deterministic engine handles broad candidate space reduction.",
      "When the candidate set becomes small or difficult, execution hands off to Google Gemini.",
      "Gemini generates a hyper-specific adaptive question targeting the remaining subtle candidate differences.",
      "The generated question returns to the game loop to refine probabilities.",
      "Gemini serves as an adaptive question-generation layer, not the entire decision tree.",
    ],

    confidenceEnginePoints: [
      "Maintains real-time candidate probability state across question turns.",
      "Implements candidate confidence display capped at 97% max UI confidence.",
      "Supports up to 3 player guesses before game termination.",
      "If a guess is incorrect, the guessed player is excluded, probabilities re-balance, and questioning continues.",
      "Exemplifies dynamic state management under changing candidate likelihoods.",
    ],

    globalLearningPoints: [
      "When the system is unable to distinguish or identify a player, an enrichment process is triggered using Gemini.",
      "Missing player metadata is generated and persisted into Firebase Firestore.",
      "Newly enriched player knowledge becomes available for future game sessions.",
      "Designed to enrich missing player metadata and persist it for future use without claiming autonomous full-dataset creation.",
    ],

    iplDataPoints: [
      "IPL player profiles and historical statistical attributes.",
      "Batting style, bowling hand, bowling type, and specialized roles.",
      "Nationality and domestic / overseas player classifications.",
      "IPL franchise team history and squad metadata.",
    ],

    iplExperiencePoints: [
      "Akinator-like progressive questioning flow.",
      "Adaptive questions generated dynamically for tough candidate sets.",
      "Up to 3 guesses with real-time confidence feedback.",
      "Contextual commentary during candidate space narrowing.",
      "Difficulty-aware leaderboard giving higher scores for identifying obscure players than obvious stars.",
    ],

    iplVisualEngine: [
      "Targeted a lightweight cinematic visual experience without heavy Three.js dependencies.",
      "Layered SVG graphics for dynamic pitch and trophy elements.",
      "CSS gradients and stadium-light visual effects.",
      "Hardware-accelerated Framer Motion transforms for smooth 60 FPS UI transitions.",
    ],

    iplAiStack: [
      { name: "Google Gemini", role: "Primary AI Provider for adaptive question generation & player metadata enrichment" },
      { name: "OpenRouter", role: "Fallback AI Provider ensuring query continuity during API limits" },
    ],

    iplArchitectureDiagram: [
      "IPL PLAYER DATA",
      "CANDIDATE ENGINE",
      "BAYESIAN / PROBABILITY MODEL",
      "SEMANTIC CONSTRAINTS",
      "QUESTION SELECTION",
      "Candidate still hard → GEMINI AI → ADAPTIVE QUESTION",
      "GAME STATE → GUESS → RESULT / LEARNING → FIRESTORE",
    ],

    myContributionDetail:
      "Led the frontend architecture and interface design, shaped the premium game experience, integrated the database layer, and contributed to probability-logic improvements.",

    iplChallenges: [
      { title: "CONTRADICTORY QUESTIONS", desc: "Generic AI systems may ask logically inconsistent questions. Solved via semantic constraint filters." },
      { title: "PROBABILITY VS EXPERIENCE", desc: "Balancing mathematically optimal entropy reduction with an engaging, natural player question flow." },
      { title: "OBSCURE PLAYERS", desc: "Basic attributes become insufficient for lesser-known uncapped or historic players, requiring adaptive AI generation." },
      { title: "AI + DETERMINISTIC LOGIC", desc: "Deciding exact boundary conditions for when custom deterministic reasoning hands off to Gemini." },
      { title: "CINEMATIC UI", desc: "Creating a premium sports-broadcast feel with floating trophy visuals and stadium lighting without 3D engine overhead." },
    ],

    iplLessons: [
      "LLMs work better as components inside a deterministic system than as the entire decision engine.",
      "Information gain can make question selection more efficient.",
      "Semantic constraints can prevent contradictory interactions.",
      "Adaptive AI can handle edge cases that rigid rules struggle with.",
      "Product UX matters even in technically complex inference systems.",
      "Persistent knowledge enrichment creates opportunities for a system to improve over time.",
    ],

    approach: [
      "Led the frontend architecture and interface design using Next.js, React, Tailwind CSS, and Framer Motion.",
      "Designed and implemented the semantic constraint engine to prevent contradictory questions.",
      "Integrated Firebase Firestore for persisting global player metadata enrichment.",
      "Contributed to Bayesian candidate probability updates and adaptive Gemini handoff routines.",
    ],

    implementation:
      "Built with Next.js and React on the frontend, featuring custom state management with Zustand. The reasoning core combines deterministic attribute filtering, Bayesian probability calculations, and semantic constraint trees. When candidate entropy remains high after deterministic pruning, the system invokes Google Gemini via API routes to generate targeted questions, saving newly learned metadata to Firebase Firestore.",

    results: [
      "Engineered a multi-tiered reasoning engine combining deterministic filtering, Bayesian updates, and LLM question generation.",
      "Implemented a semantic constraint engine that eliminates contradictory player queries.",
      "Integrated Firebase Firestore for dynamic global metadata enrichment.",
      "Created a cinematic sports-broadcast UI using lightweight SVG and Framer Motion hardware acceleration.",
    ],

    lessons: [
      "LLMs work better as components inside a deterministic system than as the entire decision engine.",
      "Information gain can make question selection more efficient.",
      "Semantic constraints can prevent contradictory interactions.",
      "Adaptive AI can handle edge cases that rigid rules struggle with.",
      "Product UX matters even in technically complex inference systems.",
      "Persistent knowledge enrichment creates opportunities for a system to improve over time.",
    ],
  },
];




