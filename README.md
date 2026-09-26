# ⚡ PARTHA SARATHI SARKAR — PERSONAL PORTFOLIO

A high-impact, neo-brutalist personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Showcasing projects, intelligent machine learning systems, data science experiments, verified credentials, and software capabilities.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-635BFF?style=for-the-badge&logo=framer)

---

## 🎨 Design System & Aesthetics

- **Neo-Brutalist Architecture**: High-contrast editorial typography, bold borders (`3px`), solid offset hard-shadows (`#0D0D0D`), vibrant color accents (Yellow `#E8C400`, Purple `#6259D6`), and micro-interactions.
- **Dual Visual Theme System**:
  - **Light Mode**: Clean, high-impact brutalist layout with warm off-white tones (`#F7F7F2`).
  - **Soft Editorial Dark Mode**: Refined, low-luminance dark visual system (`#181818` background, `#E8E6DF` text, `#77756F` subtle borders, `#222222` card surfaces).
- **Interactive UX Elements**: Custom mouse cursor trailer, subtle scroll parallax deconstruction, interactive ML pipeline visualization, code exploration accordions, and quick navigation shortcuts.

---

## 🚀 Key Pages & Architecture

### 1. Summary / Home (`/`)
- **Hero Section**: Scroll-triggered parallax text deconstruction, CSE × AI/ML badge, and custom neo-brutalist hero illustration.
- **Metrics Strip**: Key telemetry statistics (Projects Completed, Verified Certifications, Active Experiments, ML Pipelines Trained).
- **Selected Work Preview**: Curated preview of top featured engineering projects.
- **Technical Workflow**: Step-by-step visualization from raw data extraction → model training → product deployment.
- **Skills & Tooling**: Grouped capability cards covering Machine Learning, Data Science, Frontend Web, Vibe Coding / AI-assisted workflows, and Tools & Infrastructure.
- **Featured Credentials**: Preview of top verified certifications.
- **The Lab Preview**: Concise 3-card preview of active experiments and prototypes.
- **Build Log & Contact CTA**: Interactive project timeline and terminal message section.

### 2. Selected Work (`/work`)
- Detailed project gallery with search and category filtering.
- Interactive Machine Learning Architecture Pipeline diagram (*SurakshaAI*).
- Live demo links, GitHub repository links, key metrics, and tech stack tags for every project.

### 3. The Lab (`/lab`)
- R&D playground for active prototypes, language tools, and data collection scripts:
  - **JunioLang**: Story-driven Japanese learning platform exploring interactive lessons and AI roleplay.
  - **SurakshaAI**: ML experiment evaluating Random Forest classification on spatial/temporal crime risk data.
  - **Python Job Scraper**: Data extraction pipeline scraping and parsing structured CSV job listings using Requests & BeautifulSoup.
- Includes expandable code snippet accordions, scraping flow badges, reported test accuracy stats, and experiment logs.

### 4. Verified Credentials (`/certifications`)
- Archive of verified certificates and honors (*Ideatex Session Zero 2026 Top 50 Finalist*, *AI Fluency*, *Deloitte Data Analytics*, *Google AI Essentials*, etc.).
- Category filters (All, AI & ML, Web & Dev, Analytics, Hackathons), keyword search bar, and interactive modal view.

### 5. About Me (`/about`)
- Personal profile statement, photo section, capability breakdown, and personal interests / hobbies.

### 6. Contact (`/contact`)
- Neo-brutalist terminal form integrated with **Formspree** for direct email delivery.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom CSS Variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [Formspree React SDK](https://formspree.io/)

---

## 💻 Getting Started Locally

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Partha-zzz/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FORMSPREE_KEY=your_formspree_form_id
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Repository Structure

```text
Portfolio/
├── public/                # Static assets, certificate images, profile photos
├── src/
│   ├── app/               # Next.js App Router pages (about, work, lab, certifications, contact)
│   ├── components/        # Reusable Neo-Brutalist UI components
│   └── data/              # Typed datasets (projects, lab items, skills, credentials, build logs)
├── .env.example           # Example environment variables file
├── README.md              # Project documentation
└── package.json           # Dependencies and scripts
```

---

## 👤 Author

**Partha Sarathi Sarkar**
- **GitHub**: [@Partha-zzz](https://github.com/Partha-zzz)
- **LinkedIn**: [partha-sarathi-sarkar](https://www.linkedin.com/in/partha-sarathi-sarkar-7385a8367/)
- **Email**: atomic.here007@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
