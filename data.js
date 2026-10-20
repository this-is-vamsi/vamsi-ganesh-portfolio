/**
 * ============================================================================
 * VAMSI GANESH — BILINGUAL (EN / DE) PORTFOLIO DATA (data.js)
 * Updated from latest CV (template.tex) + GitHub Repositories
 * ============================================================================
 */

window.PORTFOLIO_DATA = {
  // ── UI TRANSLATIONS (EN & DE) ─────────────────────────────────────────────
  ui: {
    en: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        certifications: "Certifications",
        contact: "Contact",
        resume: "Resume"
      },
      hero: {
        greeting: "Hi, I'm",
        locationBadge: "Bavaria, Germany 🇩🇪 · Open to Working Student & Thesis Roles",
        viewProjects: "Explore Projects",
        downloadCv: "Download CV",
        contactMe: "Get in Touch"
      },
      about: {
        subtitle: "Profile & Engineering Focus",
        title: "About Me"
      },
      skills: {
        subtitle: "Technical Stack",
        title: "Skills & Architecture"
      },
      projects: {
        subtitle: "End-to-End Engineering",
        title: "Featured Projects",
        allFilter: "All Projects",
        viewAll: "Show All Projects",
        showLess: "Show Less",
        codeBtn: "View on GitHub",
        demoBtn: "Watch Demo"
      },
      experience: {
        subtitle: "Industry Background",
        title: "Work Experience"
      },
      education: {
        subtitle: "Academic Foundation",
        title: "Education"
      },
      certifications: {
        subtitle: "Verified Learning",
        title: "Certifications & Languages",
        verify: "View Certificate ↗"
      },
      contact: {
        subtitle: "Let's Connect",
        title: "Get In Touch",
        heading: "Looking for an AI / Data Working Student or Thesis Engineer?",
        description:
          "Whether you need someone to build queryable SQL/Python data pipelines, wire up LLM agents & MCP tools, or ship clean full-stack AI features — I'd love to chat.",
        locationLabel: "Location",
        emailLabel: "Email",
        phoneLabel: "Phone",
        languagesLabel: "Languages",
        copyBtn: "Copy",
        copiedBtn: "Copied!",
        formName: "Your Name",
        formEmail: "Your Email",
        formSubject: "Subject (e.g., Working Student Role / Thesis / Coffee Chat)",
        formMessage: "Your Message...",
        formSubmit: "Send Message"
      }
    },
    de: {
      nav: {
        about: "Über mich",
        skills: "Skills",
        projects: "Projekte",
        experience: "Erfahrung",
        education: "Studium",
        certifications: "Zertifikate",
        contact: "Kontakt",
        resume: "Lebenslauf"
      },
      hero: {
        greeting: "Hallo, ich bin",
        locationBadge: "Bayern, Deutschland 🇩🇪 · Offen für Werkstudentenstellen & Masterarbeit",
        viewProjects: "Projekte entdecken",
        downloadCv: "Lebenslauf (CV)",
        contactMe: "Kontakt aufnehmen"
      },
      about: {
        subtitle: "Profil & Fokus",
        title: "Über mich"
      },
      skills: {
        subtitle: "Technologie-Stack",
        title: "Skills & Architektur"
      },
      projects: {
        subtitle: "End-to-End Engineering",
        title: "Ausgewählte Projekte",
        allFilter: "Alle Projekte",
        viewAll: "Alle Projekte anzeigen",
        showLess: "Weniger anzeigen",
        codeBtn: "Auf GitHub ansehen",
        demoBtn: "Demo-Video"
      },
      experience: {
        subtitle: "Praxiserfahrung",
        title: "Berufserfahrung"
      },
      education: {
        subtitle: "Akademischer Werdegang",
        title: "Studium & Ausbildung"
      },
      certifications: {
        subtitle: "Qualifikationen",
        title: "Zertifikate & Sprachen",
        verify: "Zertifikat ansehen ↗"
      },
      contact: {
        subtitle: "Kontakt",
        title: "Kontakt aufnehmen",
        heading: "Auf der Suche nach einem Werkstudenten im Bereich AI, Data oder LLMs?",
        description:
          "Ob SQL/Python-Datenpipelines, KI-Agenten mit LangGraph & MCP oder produktionsreife AI-Features — ich freue mich über eine Nachricht oder einen kurzen Austausch!",
        locationLabel: "Standort",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        languagesLabel: "Sprachen",
        copyBtn: "Kopieren",
        copiedBtn: "Kopiert!",
        formName: "Ihr Name",
        formEmail: "Ihre E-Mail-Adresse",
        formSubject: "Betreff (z. B. Werkstudentenstelle / Masterarbeit)",
        formMessage: "Ihre Nachricht...",
        formSubmit: "Nachricht senden"
      }
    }
  },

  // ── 1. PROFILE & HERO (From template.tex) ─────────────────────────────────
  profile: {
    name: "Vamsi Ganesh",
    monogram: "VG",
    avatar: "./profile.jpeg",
    email: "vamsiganesh525@gmail.com",
    phone: "+49 (176) 749 79600",
    github: "https://github.com/this-is-vamsi",
    linkedin: "https://linkedin.com/in/vamsi-ganesh-2000",
    resumeUrl: "./Vamsi_Ganesh_CV.pdf",
    headline: {
      en: "AI Product Engineering & Data | LLMs, Agents, MCP & SQL",
      de: "AI Product Engineering & Data | LLMs, Agenten, MCP & SQL"
    },
    location: {
      en: "Amberg / Bavaria, Germany",
      de: "Amberg / Bayern, Deutschland"
    },
    languages: {
      en: "English (C1 · IELTS 7.5) · German (A2 · telc) · Telugu (C2)",
      de: "Englisch (C1 · IELTS 7.5) · Deutsch (A2 · telc) · Telugu (C2)"
    },
    roles: {
      en: [
        "AI Product & Data Engineer",
        "LLM Agents, MCP & RAG Builder",
        "Python, FastAPI & SQL Engineer",
        "M.Sc. AI Student @ OTH Amberg-Weiden"
      ],
      de: [
        "AI Product & Data Engineer",
        "LLM-Agenten, MCP & RAG Entwickler",
        "Python, FastAPI & SQL Engineer",
        "M.Sc. KI-Student @ OTH Amberg-Weiden"
      ]
    },
    heroBio: {
      en: "M.Sc. AI student combining 1.5+ years in data analytics and metrics ownership (Bosch, Access Million) with end-to-end AI product engineering. Experienced in building queryable SQL/Python data layers, integrating external data sources, and shipping product features using AI agents, MCP, and tool-calling workflows.",
      de: "M.Sc. KI-Student mit über 1,5 Jahren Praxiserfahrung in Data Analytics und KPI-Ownership (Bosch, Access Million) kombiniert mit End-to-End AI Product Engineering. Erfahren im Aufbau abfragbarer SQL/Python-Datenschichten, der Integration externer Datenquellen und der Entwicklung produktionsreifer Features mit KI-Agenten, MCP und Tool-Calling."
    }
  },

  // ── 2. ABOUT & CORE ENGINEERING PILLARS ───────────────────────────────────
  about: {
    paragraphs: {
      en: [
        "I enjoy working where messy real-world data meets intelligent product engineering. Currently pursuing my Master's in Artificial Intelligence for Industrial Applications at OTH Amberg-Weiden, I build systems that don't just call an LLM API — they connect structured SQL/Python data models, vector retrieval, and observability into reliable software.",
        "Prior to moving to Germany, I spent over a year and a half across Bosch India and Access Million owning automated KPI pipelines, digitizing cross-functional workflows, and turning raw operational data into measurable business decisions."
      ],
      de: [
        "Meine Leidenschaft liegt an der Schnittstelle zwischen sauberer Datenarchitektur und moderner KI-Produktentwicklung. Im Rahmen meines Masterstudiums 'Artificial Intelligence for Industrial Applications' an der OTH Amberg-Weiden entwickle ich Systeme, die strukturierte SQL/Python-Datenmodelle, Vektorsuche (RAG) und LLM-Observability zu verlässlichen Anwendungen verbinden.",
        "Vor meinem Studium in Deutschland war ich über anderthalb Jahre bei Bosch India und Access Million tätig, wo ich automatisierte KPI-Pipelines verantwortete, Prozesse digitalisierte und komplexe Betriebsdaten in messbare Entscheidungsgrundlagen übersetzte."
      ]
    },
    highlights: [
      {
        icon: "bot",
        title: {
          en: "AI Agents, MCP & Tool Calling",
          de: "KI-Agenten, MCP & Tool-Calling"
        },
        description: {
          en: "Orchestrating stateful LangGraph & ReAct agents, Model Context Protocol (MCP) integrations, and deterministic validation loops.",
          de: "Orchestrierung zustandsbehafteter LangGraph- & ReAct-Agenten, Model Context Protocol (MCP) und deterministischer Validierungsschleifen."
        }
      },
      {
        icon: "database",
        title: {
          en: "Queryable SQL & Python Layers",
          de: "SQL- & Python-Datenarchitektur"
        },
        description: {
          en: "Designing clean PostgreSQL/SQLite schemas, Pandas transformation pipelines, versioned metrics, and FastAPI microservices.",
          de: "Entwurf sauberer PostgreSQL/SQLite-Schemata, Pandas-Transformationspipelines, versionierter Metriken und FastAPI-Services."
        }
      },
      {
        icon: "search",
        title: {
          en: "Production RAG & Observability",
          de: "Production RAG & Observability"
        },
        description: {
          en: "Building low-latency Weaviate & ChromaDB retrieval with query routing, metadata filtering, and OpenTelemetry / Arize Phoenix tracing.",
          de: "Aufbau performanter Weaviate- & ChromaDB-Pipelines mit Query Routing, Metadaten-Filterung und OpenTelemetry / Arize Phoenix Tracing."
        }
      },
      {
        icon: "chart",
        title: {
          en: "Metrics Ownership & BI",
          de: "KPI-Ownership & Analytics"
        },
        description: {
          en: "Proven track record at Bosch & Access Million automating executive KPI suites, reducing scrap rates, and predictive modeling.",
          de: "Praxiserfahrung bei Bosch & Access Million in der Automatisierung von KPI-Pipelines, Ausschussreduzierung und Predictive Modeling."
        }
      }
    ]
  },

  // ── 3. SKILLS (Aligned directly with template.tex) ────────────────────────
  skills: [
    {
      title: {
        en: "AI & Agents",
        de: "KI & Agenten-Systeme"
      },
      items: [
        "LLMs & Prompt Engineering",
        "AI Agents (LangGraph, ReAct)",
        "Model Context Protocol (MCP)",
        "Tool Calling & Function Routing",
        "Retrieval-Augmented Generation (RAG)",
        "Knowledge Graphs"
      ]
    },
    {
      title: {
        en: "Data & Backend Engineering",
        de: "Data & Backend Engineering"
      },
      items: [
        "SQL (PostgreSQL, SQLite, Data Modelling)",
        "Python (Pandas, NumPy, Pydantic)",
        "FastAPI & REST APIs",
        "Streamlit Product UIs",
        "Transformation Pipelines",
        "Metrics & Analytics Layers"
      ]
    },
    {
      title: {
        en: "AI & ML Frameworks",
        de: "KI- & ML-Frameworks"
      },
      items: [
        "LangChain & LangGraph",
        "Weaviate & ChromaDB",
        "OpenAI API",
        "HuggingFace Transformers",
        "Scikit-learn, XGBoost & LightGBM",
        "PyTorch & TensorFlow / Keras"
      ]
    },
    {
      title: {
        en: "Observability & Developer Tools",
        de: "Observability & Dev-Tools"
      },
      items: [
        "Arize Phoenix",
        "OpenTelemetry (LLM Tracing & Token Metrics)",
        "Docker",
        "Git & GitHub",
        "Power BI & Power Automate",
        "ROS & OpenCV"
      ]
    }
  ],

  // ── 4. PROJECTS (No artificial images — crisp technical cards) ────────────
  projects: [
    {
      date: "10/2026",
      badge: "3-Agent Workflow · SQL + RAG",
      categories: ["AI Agents & RAG", "Data & Backend"],
      title: {
        en: "Context2Insight: Multi-Agent BI & Analytics System",
        de: "Context2Insight: Multi-Agenten-BI- & Analysesystem"
      },
      tags: ["LangGraph", "LangChain", "FastAPI", "SQLite", "ChromaDB", "Pandas", "OpenAI API", "Streamlit"],
      description: {
        en: "End-to-end 3-agent product workflow (PM, Business Analyst, Data Analyst) in LangGraph that turns business questions into tested SQL transformations, versioned metrics, and automated reports. Connects a queryable SQLite analytics layer with ChromaDB RAG context retrieval and FastAPI microservices.",
        de: "End-to-End 3-Agenten-Workflow (PM, Business Analyst, Data Analyst) in LangGraph, der Geschäftsfragen in getestete SQL-Transformationen, versionierte Metriken und automatisierte Berichte überführt — inklusive abfragbarer SQLite-Schicht, ChromaDB-RAG und FastAPI-Microservices."
      },
      github: "https://github.com/this-is-vamsi/Multi-Agent-BI-Analytics-System",
      live: ""
    },
    {
      date: "09/2026",
      badge: "65% Token Cost Reduction · 44.4K Records",
      categories: ["AI Agents & RAG", "Data & Backend"],
      title: {
        en: "E-Commerce RAG Assistant with Query Routing & Telemetry",
        de: "E-Commerce RAG-Assistent mit Query Routing & Telemetrie"
      },
      tags: ["Weaviate", "Arize Phoenix", "OpenTelemetry", "Dynamic Query Routing", "Metadata Filtering", "Python"],
      description: {
        en: "Dual-index production RAG assistant in Weaviate indexing 44,400+ product records and store FAQs. Uses LLM query routing, progressive metadata filtering, and full OpenTelemetry + Arize Phoenix tracing to cut token costs by 65%.",
        de: "Dual-Index-RAG-Assistent in Weaviate über mehr als 44.400 Produktdatensätze und Shop-FAQs. Nutzt dynamisches LLM-Query-Routing, progressive Metadatenfilterung und OpenTelemetry / Arize Phoenix Tracing zur Senkung der Token-Kosten um 65 %."
      },
      github: "https://github.com/this-is-vamsi/Ecommerce-RAG-Assistant-Weaviate",
      live: ""
    },
    {
      date: "09/2026",
      badge: "ReAct Agent · 3 ML Models + RAG",
      categories: ["AI Agents & RAG", "Machine Learning"],
      title: {
        en: "Production-Grade Quality Control AI Assistant",
        de: "Production-Grade KI-Assistent für die Qualitätskontrolle"
      },
      tags: ["LangGraph (ReAct)", "Tool Calling", "ChromaDB", "Scikit-learn", "OpenAI API", "Streamlit"],
      description: {
        en: "Tool-calling LangGraph (ReAct) agent that dynamically routes manufacturing inspection queries between three trained Scikit-learn ML models and a ChromaDB RAG knowledge base through a no-code Streamlit interface.",
        de: "Tool-Calling LangGraph-Agent (ReAct), der Qualitätsanfragen in der Fertigung dynamisch zwischen drei trainierten Scikit-learn-ML-Modellen und einer ChromaDB-RAG-Wissensdatenbank über ein Streamlit-Interface routet."
      },
      github: "https://github.com/this-is-vamsi/Production-Grade-Quality-Control-AI-Assistant",
      live: ""
    },
    {
      date: "09/2026",
      badge: "356K Scratch vs. 124M GPT-2",
      categories: ["AI Agents & RAG", "Deep Learning & Vision"],
      title: {
        en: "Mini LLM: Transformer from Scratch + Fine-Tuning",
        de: "Mini-LLM: Transformer from Scratch + Fine-Tuning"
      },
      tags: ["TensorFlow", "Keras", "HuggingFace Transformers", "GPT-2", "TinyStories"],
      description: {
        en: "Built a decoder-only Transformer (356K parameters) from scratch with causal self-attention and top-k sampling; fine-tuned GPT-2 (124M parameters) on TinyStories to contrast scratch training with transfer learning.",
        de: "Eigenentwicklung eines Decoder-Only-Transformers (356K Parameter) mit Causal Self-Attention und Top-k-Sampling im direkten Vergleich zu einem auf TinyStories feingetunten GPT-2-Modell (124M Parameter)."
      },
      github: "https://github.com/this-is-vamsi/mini-llm-from-scratch",
      live: ""
    },
    {
      date: "01/2026",
      badge: "84% Semantic Coverage · 352 Equations",
      categories: ["Data & Backend", "Machine Learning"],
      title: {
        en: "Equations Knowledge Graph Pipeline",
        de: "Gleichungs-Knowledge-Graph-Pipeline"
      },
      tags: ["spaCy", "BeautifulSoup", "MathML", "Python", "arXiv HTML API"],
      description: {
        en: "Pulled external arXiv API/HTML sources into a structured multi-tier NLP extraction pipeline (spaCy, MathML) to build scientific equation knowledge graphs — achieving 84% meaning coverage across 352 equations.",
        de: "Strukturierte NLP-Extraktionspipeline (spaCy, MathML) für arXiv-API/HTML-Quellen zum Aufbau wissenschaftlicher Gleichungs-Knowledge-Graphs mit 84 % Bedeutungsabdeckung über 352 Gleichungen."
      },
      github: "https://github.com/this-is-vamsi/Equations-Knowledge-Graph",
      live: ""
    },
    {
      date: "01/2026",
      badge: "R² 0.78 → 0.93 · Piecewise R² 0.9999",
      categories: ["Machine Learning"],
      title: {
        en: "ML Challenge: Ensemble & Piecewise Regression",
        de: "ML Challenge: Ensemble & Piecewise Regression"
      },
      tags: ["XGBoost", "LightGBM", "Optuna", "Scikit-learn", "OLS", "RFE", "Python"],
      description: {
        en: "Improved regression R² from 0.78 to 0.93 using an Optuna-tuned stacked ensemble (LightGBM + GBR + RF → XGBoost) and achieved R² = 0.9999 via piecewise OLS on a segmented target.",
        de: "Steigerung des Regressions-R² von 0,78 auf 0,93 durch ein Optuna-optimiertes Stacked Ensemble (LightGBM + GBR + RF → XGBoost) sowie R² = 0,9999 mittels Piecewise OLS."
      },
      github: "https://github.com/this-is-vamsi/ML-Challenge-OTHAW-So26",
      live: ""
    },
    {
      date: "02/2026",
      badge: "6-Axis Robot · Vision + Minimax AI",
      categories: ["Deep Learning & Vision"],
      title: {
        en: "Autonomous Connect 4 Robot System (Niryo Ned2)",
        de: "Autonomer Vier-Gewinnt-Roboter (Niryo Ned2)"
      },
      tags: ["Computer Vision", "Minimax AI", "Niryo Ned2", "Robotics", "Python"],
      description: {
        en: "Closed-loop Perception → Decision → Action system where a 6-axis Niryo Ned2 robotic arm plays Connect 4 against a human opponent in real time using camera board state recognition and Minimax alpha-beta pruning.",
        de: "Geschlossene Perception-Decision-Action-Pipeline, mit der ein 6-achsiger Niryo-Ned2-Roboterarm in Echtzeit mittels Computer Vision und Minimax-KI gegen menschliche Gegner Vier Gewinnt spielt."
      },
      github: "https://github.com/this-is-vamsi/Connect4-Niryo-AI-Robot",
      live: "https://drive.google.com/file/d/156Vr7NH8XyMnDlW1Xb9NzeY3vUy2lh4W/view?usp=sharing"
    },
    {
      date: "02/2026",
      badge: "6,000 MRI Scans · YOLOv8 vs. YOLOv12",
      categories: ["Deep Learning & Vision"],
      title: {
        en: "CNN vs. Self-Attention for Brain Tumor Detection",
        de: "CNN vs. Self-Attention zur Hirntumor-Erkennung"
      },
      tags: ["YOLOv8", "YOLOv12", "PyTorch", "Dice Score", "Boundary IoU", "mAP"],
      description: {
        en: "Compared YOLOv8 (CSPDarknet CNN) and YOLOv12 (Area Self-Attention) across 6,000 brain MRI scans in the BRISC2025 dataset, evaluating boundary segmentation precision via Dice Score, Boundary IoU, and mAP.",
        de: "Architekturvergleich zwischen YOLOv8 (CNN) und YOLOv12 (Area Self-Attention) auf 6.000 MRT-Aufnahmen (BRISC2025) anhand von Dice Score, Boundary IoU und mAP."
      },
      github: "https://github.com/this-is-vamsi/CNN-Self-Attention-Brain-Tumor-Detection",
      live: ""
    },
    {
      date: "02/2026",
      badge: "360° LiDAR SLAM · A* + OpenCV",
      categories: ["Deep Learning & Vision"],
      title: {
        en: "RosBot Autonomous Mapping & Navigation",
        de: "Autonome RosBot-Kartierung & Navigation"
      },
      tags: ["ROS", "LiDAR", "OpenCV", "A* Path Planning", "Webots", "Python"],
      description: {
        en: "Unified robotics controller integrating 360° LiDAR occupancy mapping and A* global path planning with OpenCV camera fusion for pillar localization and dynamic floor-hazard avoidance in Webots.",
        de: "Roboter-Controller mit 360°-LiDAR-Umgebungskartierung, A*-Pfadplanung und OpenCV-Kamerafusion zur Säulenlokalisierung und dynamischen Hindernisvermeidung in Webots."
      },
      github: "https://github.com/this-is-vamsi/RosBot-Autonomous-Mapping-Navigation-Webots",
      live: ""
    },
    {
      date: "04/2026",
      badge: "0.91 ROC-AUC · 10K Banking Profiles",
      categories: ["Machine Learning"],
      title: {
        en: "Customer Churn Prediction Pipeline",
        de: "Customer-Churn-Prognose-Pipeline"
      },
      tags: ["Scikit-learn", "Random Forest", "GridSearchCV", "Pandas", "NumPy"],
      description: {
        en: "Benchmarked Logistic Regression, Decision Tree, and Random Forest classifiers across 10,000 retail banking records, tuning Random Forest to 0.91 ROC-AUC via 10-fold Grid Search cross-validation.",
        de: "Benchmarking von Klassifikationsmodellen auf 10.000 Bankkundendaten; Optimierung eines Random-Forest-Klassifikators auf 0,91 ROC-AUC mittels 10-facher Grid-Search-Kreuzvalidierung."
      },
      github: "https://github.com/this-is-vamsi/Customer-Churn-Prediction",
      live: ""
    },
    {
      date: "04/2026",
      badge: "Interactive 3D K-Means · Streamlit",
      categories: ["Machine Learning", "Data & Backend"],
      title: {
        en: "Customer Segmentation Interactive 3D Dashboard",
        de: "Interaktives 3D-Dashboard zur Kundensegmentierung"
      },
      tags: ["Streamlit", "K-Means Clustering", "Plotly 3D", "Scikit-learn", "Pandas"],
      description: {
        en: "Interactive Streamlit analytics application featuring real-time K-Means cluster tuning (k=2..10), 3D behavioral scatter visualizations, and automated customer persona profiling.",
        de: "Interaktive Streamlit-Analyseanwendung mit Echtzeit-K-Means-Clustering (k=2..10), 3D-Visualisierungen und automatisierter Kunden-Persona-Profilierung."
      },
      github: "https://github.com/this-is-vamsi/Customer-Segmentation-Streamlit",
      live: ""
    },
    {
      date: "03/2026",
      badge: "Executive YTD & KPI Analytics",
      categories: ["Data & Backend"],
      title: {
        en: "E-Commerce Sales & Bottleneck Analytics Dashboard",
        de: "E-Commerce Sales- & Engpass-Analyse-Dashboard"
      },
      tags: ["Power BI", "DAX", "Data Modeling", "KPI Tracking", "Business Intelligence"],
      description: {
        en: "End-to-end Power BI analytics solution tracking Year-to-Date (YTD) revenue velocity, regional logistics bottlenecks, and product margin trends against historical benchmarks.",
        de: "End-to-End Power-BI-Lösung zur Verfolgung der Year-to-Date (YTD) Umsatzentwicklung, regionaler Logistikengpässe und Produktmargen im historischen Vergleich."
      },
      github: "https://github.com/this-is-vamsi/Ecommerce-Sales-Dashboard-PowerBI",
      live: ""
    }
  ],

  // ── 5. WORK EXPERIENCE (With Authentic Logos & template.tex bullets) ──────
  experience: [
    {
      role: {
        en: "Data Science Intern",
        de: "Data Science Intern (Praktikant Data Science)"
      },
      company: "Access Million",
      logo: "./logos/access-million.png",
      period: {
        en: "11/2023 – 04/2024",
        de: "11/2023 – 04/2024"
      },
      location: {
        en: "Pune · Remote",
        de: "Pune · Remote"
      },
      bullets: {
        en: [
          "Built Python transformation pipelines and ML models on POS retail data, tying customer buying behavior directly to product recommendation metrics.",
          "Pulled live external market data into an automated analytics pipeline to track multi-stock trends and generate predictive forecasts.",
          "Performed sensor data analysis to detect fluctuating machine performance parameters and identify critical failure points across time-series readings."
        ],
        de: [
          "Aufbau von Python-Transformationspipelines und ML-Modellen auf POS-Einzelhandelsdaten zur direkten Verknüpfung von Kaufverhalten und Produktempfehlungs-Metriken.",
          "Integration externer Live-Marktdaten in eine automatisierte Analyse-Pipeline zur Verfolgung von Multi-Aktien-Trends und Erstellung präziser Prognosen.",
          "Zeitreihenanalyse industrieller Sensordaten zur Erkennung schwankender Maschinenparameter und kritischer Ausfallpunkte."
        ]
      },
      technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "ETL Pipelines", "Time-Series Analytics"]
    },
    {
      role: {
        en: "Data Analyst",
        de: "Data Analyst"
      },
      company: "Bosch India (Robert Bosch GmbH)",
      logo: "./logos/bosch.png",
      period: {
        en: "09/2022 – 09/2023",
        de: "09/2022 – 09/2023"
      },
      location: {
        en: "Bangalore · On-site",
        de: "Bangalore · Vor Ort"
      },
      bullets: {
        en: [
          "Built and maintained 10+ automated KPI and MIS metric pipelines using SQL, Power BI, and RPA, integrating SharePoint data sources for live cross-functional tracking.",
          "Partnered with Product/Project Management (PMO) to digitise tracking workflows via Power Automate and Power Apps — saving 40+ man-hours/month and improving data quality.",
          "Developed a rejection analytics model and dashboard to track production bottlenecks and risks daily, driving a 12% reduction in scrap rates."
        ],
        de: [
          "Aufbau und Betrieb von über 10 automatisierten KPI- und MIS-Metrik-Pipelines mit SQL, Power BI und RPA inklusive SharePoint-Integration für abteilungsübergreifendes Live-Tracking.",
          "Zusammenarbeit mit dem Produkt- und Projektmanagement (PMO) zur Digitalisierung von Tracking-Workflows mittels Power Automate und Power Apps — Einsparung von 40+ Arbeitsstunden/Monat.",
          "Entwicklung eines Ausschuss-Analysemodells und Dashboards zur täglichen Engpassverfolgung in der Produktion, was zu einer Senkung der Ausschussquote um 12 % führte."
        ]
      },
      technologies: ["SQL", "Power BI", "Power Automate", "Power Apps", "RPA", "Metrics Ownership"]
    }
  ],

  // ── 6. EDUCATION (With Authentic University Logos) ────────────────────────
  education: [
    {
      degree: {
        en: "M.Sc. in Artificial Intelligence for Industrial Applications",
        de: "M.Sc. in Artificial Intelligence for Industrial Applications"
      },
      institution: "OTH Amberg-Weiden",
      logo: "./logos/oth-aw.png",
      period: {
        en: "10/2024 – Current",
        de: "10/2024 – Aktuell"
      },
      location: {
        en: "Amberg, Germany",
        de: "Amberg, Deutschland"
      },
      description: {
        en: "Relevant coursework: Deep Learning, Machine Learning, Modern Databases & NoSQL, Autonomous Robotics.",
        de: "Relevante Module: Deep Learning, Machine Learning, Moderne Datenbanken & NoSQL, Autonome Robotik."
      },
      learnings: ["Deep Learning", "Machine Learning", "Modern Databases & NoSQL", "Autonomous Robotics"]
    },
    {
      degree: {
        en: "B.E. in Mechanical Engineering",
        de: "B.E. in Maschinenbau (Mechanical Engineering)"
      },
      institution: "Nitte Meenakshi Institute of Technology (NMIT)",
      logo: "./logos/nmit.png",
      period: {
        en: "06/2018 – 06/2022",
        de: "06/2018 – 06/2022"
      },
      location: {
        en: "Bangalore, India",
        de: "Bangalore, Indien"
      },
      description: {
        en: "Quantitative engineering foundation, industrial systems modeling, and manufacturing process optimization.",
        de: "Quantitatives Ingenieurfundament, industrielle Systemmodellierung und Prozessoptimierung."
      },
      learnings: ["Quantitative Engineering", "Manufacturing Systems", "Applied Mathematics"]
    }
  ],

  // ── 7. CERTIFICATIONS (With Official Issuer Logos) ────────────────────────
  certifications: [
    {
      enabled: true,
      name: {
        en: "Model Context Protocol (MCP): Building Rich-Context AI Apps",
        de: "Model Context Protocol (MCP): Building Rich-Context AI Apps"
      },
      authority: "Anthropic · DeepLearning.AI",
      logo: "./logos/anthropic.png",
      secondaryLogo: "./logos/deeplearningai.png",
      date: "2026",
      description: {
        en: [
          "Standardizing context exchange and tool-calling between LLMs and external data sources via MCP servers and clients."
        ],
        de: [
          "Standardisierte Kontext- und Tool-Integration zwischen LLMs und externen Datenquellen über MCP-Server und -Clients."
        ]
      },
      url: "https://learn.deeplearning.ai/"
    },
    {
      enabled: true,
      name: {
        en: "Retrieval-Augmented Generation (RAG)",
        de: "Retrieval-Augmented Generation (RAG)"
      },
      authority: "DeepLearning.AI · Coursera",
      logo: "./logos/deeplearningai.png",
      date: "2026",
      description: {
        en: [
          "Production RAG design including hybrid retrieval, vector databases, query routing, and grounded generation."
        ],
        de: [
          "Entwurf produktionsreifer RAG-Systeme inkl. Hybrid Search, Vektordatenbanken, Query Routing und Evaluierung."
        ]
      },
      url: "https://www.coursera.org/account/accomplishments/verify/5YMU8ZTOXWYF"
    }
  ]
};
