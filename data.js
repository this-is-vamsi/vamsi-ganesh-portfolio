/**
 * ============================================================================
 * VAMSI GANESH — BILINGUAL (EN / DE) PORTFOLIO DATA (data.js)
 * Updated with latest GitHub Repositories & Full-Stack AI/ML/CV/MLOps Profile
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
        locationBadge: "Germany (Open to Relocation across Germany) 🇩🇪 · Working Student, Internship & Thesis Roles",
        viewProjects: "Explore Projects",
        downloadCv: "Download CV",
        contactMe: "Get in Touch"
      },
      about: {
        subtitle: "Profile & Engineering Focus",
        title: "About Me"
      },
      skills: {
        subtitle: "Full AI Engineering Stack",
        title: "Skills & Technologies"
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
        heading: "Looking for an AI, ML, Computer Vision, or Agentic LLM Engineer?",
        description:
          "Whether you need someone to build multi-agent LLM & MCP systems, train Computer Vision and Deep Learning pipelines in PyTorch, or engineer sensor anomaly detection and reproducible MLOps workflows — I'd love to connect.",
        locationLabel: "Location",
        emailLabel: "Email",
        phoneLabel: "Phone",
        languagesLabel: "Languages",
        copyBtn: "Copy",
        copiedBtn: "Copied!",
        formName: "Your Name",
        formEmail: "Your Email",
        formSubject: "Subject (e.g., Working Student / Internship / Master's Thesis)",
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
        locationBadge: "Deutschland (Umzugsbereit deutschlandweit) 🇩🇪 · Werkstudent, Praktikum & Masterarbeit",
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
        title: "Skills & Technologien"
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
        heading: "Auf der Suche nach Verstärkung in AI, Machine Learning, Computer Vision oder LLMs?",
        description:
          "Ob Multi-Agenten-Workflows mit LangGraph & MCP, Computer Vision und Deep Learning in PyTorch oder industrielle Zeitreihen-Anomalieerkennung und MLOps (DVC, MLflow) — ich freue mich über Ihre Nachricht!",
        locationLabel: "Standort",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        languagesLabel: "Sprachen",
        copyBtn: "Kopieren",
        copiedBtn: "Kopiert!",
        formName: "Ihr Name",
        formEmail: "Ihre E-Mail-Adresse",
        formSubject: "Betreff (z. B. Werkstudentenstelle / Praktikum / Masterarbeit)",
        formMessage: "Ihre Nachricht...",
        formSubmit: "Nachricht senden"
      }
    }
  },

  // ── 1. PROFILE & HERO ─────────────────────────────────────────────────────
  profile: {
    name: "Vamsi Ganesh",
    monogram: "VG",
    avatar: "./profile.jpeg",
    email: "vamsiganesh525@gmail.com",
    phone: "+49 176 749 79600",
    github: "https://github.com/this-is-vamsi",
    linkedin: "https://linkedin.com/in/vamsi-ganesh-2000",
    resumeUrl: "./Vamsi_Ganesh_CV.pdf",
    headline: {
      en: "M.Sc. in Artificial Intelligence | Machine Learning, Deep Learning, Computer Vision & Agentic LLM Systems",
      de: "M.Sc. in Artificial Intelligence | Machine Learning, Deep Learning, Computer Vision & Agentic LLM Systems"
    },
    location: {
      en: "Amberg, Germany (Open to Relocation across Germany)",
      de: "Amberg, Deutschland (Deutschlandweit umzugsbereit)"
    },
    languages: {
      en: "English (C1 Fluent · IELTS 7.5) · German (B1 in progress · telc A2 Certified) · Telugu (C2)",
      de: "Englisch (C1 Fließend · IELTS 7.5) · Deutsch (B1 in Arbeit · telc A2 Zertifiziert) · Telugu (C2)"
    },
    roles: {
      en: [
        "AI & Machine Learning Engineer",
        "Agentic LLM, MCP & RAG Builder",
        "Computer Vision & Deep Learning (PyTorch)",
        "Time-Series Anomaly Detection & MLOps"
      ],
      de: [
        "AI & Machine Learning Engineer",
        "Agentic LLM-, MCP- & RAG-Entwickler",
        "Computer Vision & Deep Learning (PyTorch)",
        "Zeitreihen-Anomalieerkennung & MLOps"
      ]
    },
    heroBio: {
      en: "Master's student in Artificial Intelligence for Industrial Applications at OTH Amberg-Weiden with 1.5+ years of industry experience at Bosch and Access Million in Python, SQL data pipelines, and industrial analytics. Hands-on experience across the full AI engineering stack: multi-agent LLM workflows and RAG (LangGraph, Model Context Protocol, Weaviate), Computer Vision and Deep Learning in PyTorch (CNNs, Self-Attention, Vision Transformers), and multivariate sensor anomaly detection and reproducible MLOps (Scikit-learn, Optuna, DVC, MLflow).",
      de: "Masterstudent in Artificial Intelligence for Industrial Applications an der OTH Amberg-Weiden mit über 1,5 Jahren Industrieerfahrung bei Bosch und Access Million in Python, SQL-Datenpipelines und industrieller Analytik. Praktische Erfahrung über den gesamten AI-Engineering-Stack: Multi-Agenten-LLM-Workflows und RAG (LangGraph, Model Context Protocol, Weaviate), Computer Vision und Deep Learning in PyTorch (CNNs, Self-Attention, Vision Transformers) sowie multivariate Sensor-Anomalieerkennung und reproduzierbares MLOps (Scikit-learn, Optuna, DVC, MLflow)."
    }
  },

  // ── 2. ABOUT & CORE ENGINEERING PILLARS ───────────────────────────────────
  about: {
    paragraphs: {
      en: [
        "I build production-oriented AI systems across the full stack — from multi-agent LLM architectures connected to live SQL/vector databases via Model Context Protocol (FastMCP) and automated pytest verification, to multimodal Vision Transformers (ViT/CLIP) and industrial SCADA sensor fault detection.",
        "Before moving to Germany for my M.Sc. in AI at OTH Amberg-Weiden (building on a B.E. in Mechanical Engineering), I spent 1.5+ years across Bosch India and Access Million engineering automated SQL/Python data pipelines, anomaly detection models, and manufacturing quality dashboards that reduced scrap rates by 12%."
      ],
      de: [
        "Ich entwickle praxisnahe KI-Systeme über den gesamten Technologie-Stack — von Multi-Agenten-LLM-Architekturen mit Model Context Protocol (FastMCP) und automatisierter Pytest-Verifikation bis hin zu multimodalen Vision Transformern (ViT/CLIP) und industrieller SCADA-Sensor-Fehlererkennung.",
        "Vor meinem Masterstudium in Künstlicher Intelligenz an der OTH Amberg-Weiden (aufbauend auf einem B.E. im Maschinenbau) war ich über 1,5 Jahre bei Bosch India und Access Million tätig. Dort entwickelte ich automatisierte SQL/Python-Datenpipelines, Anomalieerkennungsmodelle und Qualitäts-Dashboards, die die Ausschussrate in der Fertigung um 12 % senkten."
      ]
    },
    highlights: [
      {
        icon: "bot",
        title: {
          en: "Agentic AI, MCP & RAG",
          de: "Agentic AI, MCP & RAG"
        },
        description: {
          en: "Multi-agent LangGraph systems, FastMCP tool servers, FAISS/Weaviate hybrid retrieval, Cross-Encoder reranking, and OpenTelemetry tracing.",
          de: "Multi-Agenten-Systeme mit LangGraph, FastMCP-Servern, FAISS/Weaviate-Retrieval, Cross-Encoder-Reranking und OpenTelemetry-Tracing."
        }
      },
      {
        icon: "brain",
        title: {
          en: "Computer Vision & Deep Learning",
          de: "Computer Vision & Deep Learning"
        },
        description: {
          en: "PyTorch pipelines for Vision Transformers (ViT/CLIP + GPT-2), YOLOv8 vs. YOLOv12 Area Self-Attention segmentation, and custom Transformers.",
          de: "PyTorch-Pipelines für Vision Transformer (ViT/CLIP + GPT-2), YOLOv8 vs. YOLOv12 Area Self-Attention Segmentierung und eigene Transformer."
        }
      },
      {
        icon: "chart",
        title: {
          en: "Time-Series, ML & MLOps",
          de: "Zeitreihen, ML & MLOps"
        },
        description: {
          en: "Multivariate SCADA sensor fault detection (ruptures PELT, GMM, PCA), Optuna stacked ensembles, and reproducible DVC + MLflow tracking.",
          de: "Multivariate SCADA-Sensor-Anomalieerkennung (ruptures PELT, GMM, PCA), Optuna-Ensembles und reproduzierbares DVC- & MLflow-Tracking."
        }
      },
      {
        icon: "database",
        title: {
          en: "Data Pipelines, Testing & CI/CD",
          de: "Datenpipelines, Testing & CI/CD"
        },
        description: {
          en: "Production FastAPI microservices, SQL/Pandas data layers, automated Pytest suites, Docker containerization, and GitHub Actions CI/CD.",
          de: "Produktionsreife FastAPI-Microservices, SQL/Pandas-Datenschichten, automatisierte Pytest-Suiten, Docker und GitHub Actions CI/CD."
        }
      }
    ]
  },

  // ── 3. SKILLS (Aligned directly with latest CV & GitHub) ──────────────────
  skills: [
    {
      title: {
        en: "Agentic AI, LLMs & NLP",
        de: "Agentic AI, LLMs & NLP"
      },
      items: [
        "LangGraph & LangChain",
        "Model Context Protocol (MCP / FastMCP)",
        "Retrieval-Augmented Generation (RAG)",
        "AI Agents & Tool Calling",
        "LLM Fine-Tuning & Prompt Engineering",
        "Weaviate, ChromaDB & FAISS",
        "Cross-Encoder Reranking",
        "OpenTelemetry & Arize Phoenix",
        "Knowledge Graphs & spaCy"
      ]
    },
    {
      title: {
        en: "Computer Vision & Deep Learning",
        de: "Computer Vision & Deep Learning"
      },
      items: [
        "PyTorch & Torchvision",
        "Vision Transformers (ViT, CLIP)",
        "Vision-Language Models (ViT + GPT-2)",
        "YOLOv8 & YOLOv12 (Area Self-Attention)",
        "Object Detection & Instance Segmentation",
        "Dice Score, Boundary IoU & mAP",
        "TensorFlow, Keras & HuggingFace",
        "OpenCV & Pillow"
      ]
    },
    {
      title: {
        en: "Machine Learning, Time-Series & MLOps",
        de: "Machine Learning, Zeitreihen & MLOps"
      },
      items: [
        "Multivariate Sensor Anomaly Detection",
        "Change-Point Detection (ruptures: PELT, BinSeg)",
        "Gaussian Mixture Models (GMM) & PCA",
        "HDBSCAN & K-Means Clustering",
        "Scikit-learn, XGBoost & LightGBM",
        "Bayesian Tuning (Optuna)",
        "Data Version Control (DVC)",
        "MLflow Experiment Tracking"
      ]
    },
    {
      title: {
        en: "Software Engineering, Cloud & Data Pipelines",
        de: "Software Engineering, Cloud & Datenpipelines"
      },
      items: [
        "Python & SQL (PostgreSQL, SQLite)",
        "FastAPI, REST APIs & Pydantic",
        "Automated Unit Testing (Pytest)",
        "Docker, Kubernetes (basics) & Linux",
        "Git & GitHub Actions (CI/CD)",
        "NumPy, Pandas, SciPy & Statsmodels",
        "Streamlit & Power BI",
        "AWS (Lambda, Bedrock, OpenSearch, S3)"
      ]
    }
  ],

  // ── 4. PROJECTS (Synced with all latest GitHub repositories) ──────────────
  projects: [
    {
      date: "11/2026",
      badge: "5-Agent LangGraph · Self-Healing Pytest & CI/CD",
      categories: ["Agentic AI & RAG", "Software, Data & MLOps"],
      title: {
        en: "Spec-Driven Multi-Agent AI System in Software Development (SDLC)",
        de: "Spec-Driven Multi-Agenten-KI-System für die Softwareentwicklung (SDLC)"
      },
      tags: ["Python", "LangGraph", "FAISS", "Cross-Encoder Reranking", "FastAPI", "Pytest", "Docker", "GitHub Actions"],
      description: {
        en: "Built a 5-agent workflow in LangGraph (BA, Scrum Master, Developer, Tester, DevOps) using FAISS vector retrieval and Cross-Encoder reranking to turn natural-language requirements into validated JSON specifications, FastAPI backend code, and CI/CD configs. Includes an autonomous Tester Agent that generates and executes pytest unit and edge-case suites in a sandbox with up to 3 self-debugging retries before opening a GitHub PR.",
        de: "5-Agenten-Workflow in LangGraph (BA, Scrum Master, Developer, Tester, DevOps) mit FAISS-Vektorsuche und Cross-Encoder-Reranking, der natürlichsprachliche Anforderungen in validierte JSON-Spezifikationen, FastAPI-Code und CI/CD-Konfigurationen überführt — inklusive autonomem Tester-Agenten mit selbstheilender Pytest-Ausführung (bis zu 3 Retries) und automatischer GitHub-PR-Erstellung."
      },
      github: "https://github.com/this-is-vamsi/Spec-Driven-Multi-Agent-SDLC",
      live: ""
    },
    {
      date: "10/2026",
      badge: "3-Agent LangGraph · FastMCP + Pytest Guardrails",
      categories: ["Agentic AI & RAG", "Software, Data & MLOps"],
      title: {
        en: "Context2Insight: MCP-Connected Multi-Agent Analytics & Verification Pipeline",
        de: "Context2Insight: MCP-verbundene Multi-Agenten-Analytics- & Verifikations-Pipeline"
      },
      tags: ["Python", "LangGraph", "FastMCP", "SQL", "ChromaDB", "FastAPI", "Streamlit", "Pytest"],
      description: {
        en: "Built a 3-agent LangGraph system (PM, Business Analyst, Data Analyst) connected to SQL and ChromaDB vector databases via a custom Model Context Protocol (FastMCP) server, enforcing 5 deterministic Python validation checks and pytest unit tests to block hallucinated metrics before rendering Streamlit KPI dashboards.",
        de: "3-Agenten-LangGraph-System verbunden mit SQL- und ChromaDB-Datenbanken über einen eigenen Model Context Protocol (FastMCP) Server. Erzwingt 5 deterministische Python-Validierungen und Pytest-Unit-Tests, um halluzinierte Metriken vor der Darstellung im Streamlit-Dashboard auszuschließen."
      },
      github: "https://github.com/this-is-vamsi/Multi-Agent-BI-Analytics-System",
      live: ""
    },
    {
      date: "11/2026",
      badge: "34.1-Day Early Fault Lead Time · 15 SCADA Turbines",
      categories: ["Time-Series, ML & MLOps"],
      title: {
        en: "Early Fault & Anomaly Detection in Wind Turbine Sensor Time-Series",
        de: "Frühzeitige Fehler- & Anomalieerkennung in Windkraft-SCADA-Zeitreihen"
      },
      tags: ["Python", "Scikit-learn", "ruptures (PELT)", "GMM", "PCA", "Industrial SCADA Time-Series"],
      description: {
        en: "Preprocessed 15 offshore wind turbine SCADA datasets (257 sensor columns, 10-minute resolution from the CARE to Compare benchmark) using status filtering, thermal differentials (ΔT), rolling-window statistics, and PCA. Benchmarked unsupervised GMM regime clustering against ruptures PELT change-point detection across all 15 turbines, achieving 75% precision, a 0.682 CARE F0.5-score, and an average early fault detection lead time of 34.1 days before failure.",
        de: "Vorverarbeitung von 15 Offshore-Windkraft-SCADA-Datensätzen (257 Sensorspalten, CARE-to-Compare-Benchmark) mittels Temperaturdifferenzen (ΔT), Rolling-Window-Statistiken und PCA. Benchmarking von unüberwachtem GMM-Clustering gegen ruptures PELT Change-Point-Detection über alle 15 Turbinen mit 75 % Präzision, 0,682 CARE F0.5-Score und einer durchschnittlichen Fehler-Vorwarnzeit von 34,1 Tagen."
      },
      github: "https://github.com/this-is-vamsi/wind-turbine-anomaly-detection",
      live: ""
    },
    {
      date: "11/2026",
      badge: "ViT (768-d) + GPT-2 Decoder · FastAPI & Streamlit",
      categories: ["Computer Vision & Deep Learning", "Software, Data & MLOps"],
      title: {
        en: "Multimodal Vision Foundation Model Pipeline (ViT / CLIP + GPT-2)",
        de: "Multimodale Vision-Foundation-Model-Pipeline (ViT / CLIP + GPT-2)"
      },
      tags: ["Python", "PyTorch", "Vision Transformer (ViT / CLIP)", "GPT-2", "Pillow", "FastAPI", "Streamlit"],
      description: {
        en: "Built a PyTorch vision-language pipeline coupling a Vision Transformer encoder (ViT, 768-dim visual embeddings) with a GPT-2 autoregressive decoder, including an automated Pillow image preprocessing utility (Lanczos aspect-ratio resizing and RGB normalization), FastAPI single/batch inference endpoints, and a Streamlit UI.",
        de: "Modulare PyTorch Vision-Language-Pipeline, die einen Vision Transformer Encoder (ViT, 768-dim Embeddings) mit einem GPT-2-Decoder koppelt — inklusive automatisierter Pillow-Bildvorverarbeitung (Lanczos-Resampling, RGB-Normalisierung), asynchroner FastAPI-Batch-Endpunkte und Streamlit-UI."
      },
      github: "https://github.com/this-is-vamsi/Multimodal-Vision-Foundation-Model-Pipeline",
      live: ""
    },
    {
      date: "11/2026",
      badge: "Test R² 0.9692 → 0.9791 · DVC + MLflow Tracking",
      categories: ["Time-Series, ML & MLOps", "Software, Data & MLOps"],
      title: {
        en: "Reproducible Machine Learning Pipeline with DVC & MLflow",
        de: "Reproduzierbare Machine-Learning-Pipeline mit DVC & MLflow"
      },
      tags: ["Python", "Scikit-learn", "DVC", "MLflow", "Pandas", "Feature Engineering"],
      description: {
        en: "Built a traceable regression and feature engineering workflow using Data Version Control (DVC) for dataset versioning and MLflow to log model parameters, residual diagnostics, and test metrics across polynomial interaction studies (improving test R² from 0.9692 to 0.9791 and reducing RMSE from 2.83 to 2.33).",
        de: "Reproduzierbarer Regressions- und Feature-Engineering-Workflow mit Data Version Control (DVC) zur Datensatz-Versionierung und MLflow für automatisiertes Parameter-, Metrik- und Residuen-Tracking (Steigerung des Test-R² von 0,9692 auf 0,9791 und Reduktion des RMSE auf 2,33)."
      },
      github: "https://github.com/this-is-vamsi/Reproducible-ML-Pipeline-DVC-MLflow",
      live: ""
    },
    {
      date: "09/2026",
      badge: "65% Token Cost Reduction · 44,400+ Records",
      categories: ["Agentic AI & RAG", "Software, Data & MLOps"],
      title: {
        en: "Production RAG Chatbot with Query Routing & OpenTelemetry Benchmarking",
        de: "Production-RAG-Assistent mit Query Routing & OpenTelemetry-Benchmarking"
      },
      tags: ["Python", "Weaviate", "Embeddings", "Arize Phoenix", "OpenTelemetry", "Dynamic Query Routing"],
      description: {
        en: "Built a two-index RAG system in Weaviate (44,400+ product records and store FAQs) with dynamic LLM query routing and progressive metadata filtering; instrumented end-to-end OpenTelemetry tracing in Arize Phoenix to benchmark retrieval accuracy, latency, and token usage (cutting token costs by 65%).",
        de: "Dual-Index-RAG-System in Weaviate (über 44.400 Datensätze) mit dynamischem LLM-Query-Routing und progressiver Metadatenfilterung; End-to-End OpenTelemetry-Tracing in Arize Phoenix zur Messung von Latenz und Token-Verbrauch (65 % geringere Token-Kosten)."
      },
      github: "https://github.com/this-is-vamsi/Ecommerce-RAG-Assistant-Weaviate",
      live: ""
    },
    {
      date: "09/2026",
      badge: "Hybrid ReAct Agent · 3 ML Models + SOP RAG",
      categories: ["Agentic AI & RAG", "Time-Series, ML & MLOps"],
      title: {
        en: "Quality Control AI Assistant: Hybrid ML Fault Detection + LLM Explainability",
        de: "Quality Control KI-Assistent: Hybride ML-Fehlererkennung + LLM-Explainability"
      },
      tags: ["Python", "LangGraph (ReAct)", "Scikit-learn", "ChromaDB", "FastAPI", "Docker", "Streamlit"],
      description: {
        en: "Built a hybrid diagnostic assistant where a tool-calling LangGraph ReAct agent combines predictions from three trained Scikit-learn fault classification and risk models with a ChromaDB SOP manual database to generate natural-language root-cause explanations and maintenance steps.",
        de: "Hybrider Diagnose-Assistent, bei dem ein Tool-Calling LangGraph-ReAct-Agent Vorhersagen aus drei trainierten Scikit-learn-Fehlerklassifikationsmodellen mit einer ChromaDB-SOP-Wissensdatenbank kombiniert, um natürlichsprachliche Ursachenanalysen und Wartungsschritte zu generieren."
      },
      github: "https://github.com/this-is-vamsi/Production-Grade-Quality-Control-AI-Assistant",
      live: ""
    },
    {
      date: "09/2026",
      badge: "6,000 MRI Scans · YOLOv8 vs. YOLOv12 Attention",
      categories: ["Computer Vision & Deep Learning"],
      title: {
        en: "CNN vs. Area Self-Attention for Brain MRI Image Segmentation",
        de: "CNN vs. Area Self-Attention zur Hirntumor-MRT-Segmentierung"
      },
      tags: ["Python", "PyTorch", "YOLOv8", "YOLOv12", "OpenCV", "Dice Score & Boundary IoU"],
      description: {
        en: "Curated and preprocessed 6,000 high-resolution MRI scans and polygon masks across 3 classes (BRISC2025 dataset) in PyTorch and OpenCV, benchmarking YOLOv8 (CNN backbone) against YOLOv12 (Area Self-Attention) using Dice Score, Boundary IoU, and mAP.",
        de: "Kuratierung und Vorverarbeitung von 6.000 hochauflösenden MRT-Scans und Polygonmasken über 3 Tumorklassen (BRISC2025) in PyTorch und OpenCV; Benchmarking von YOLOv8 (CNN) gegen YOLOv12 (Area Self-Attention) mittels Dice Score, Boundary IoU und mAP."
      },
      github: "https://github.com/this-is-vamsi/CNN-Self-Attention-Brain-Tumor-Detection",
      live: ""
    },
    {
      date: "09/2026",
      badge: "84% Symbol Resolution · 2-Hop Semantic Graphs",
      categories: ["Agentic AI & RAG", "Software, Data & MLOps"],
      title: {
        en: "Equations Knowledge Graph: Hierarchical Scientific Document & Symbol Parser",
        de: "Equations Knowledge Graph: Hierarchischer Wissenschafts- & Symbol-Parser"
      },
      tags: ["Python", "spaCy", "HTML5 / MathML", "Markdown", "JSON Knowledge Graphs"],
      description: {
        en: "Built a structure-aware parser for scientific papers that preserves hierarchical section metadata and extracts mathematical expressions into 2-hop semantic graphs using regex rules, spaCy dependency trees, and typography heuristics (achieving 84% symbol resolution accuracy).",
        de: "Strukturerhaltender NLP-Parser für wissenschaftliche Publikationen, der hierarchische Abschnitts-Metadaten bewahrt und mathematische Ausdrücke mittels Regex, spaCy-Abhängigkeitsbäumen und Typografie-Heuristiken in 2-Hop-Knowledge-Graphs überführt (84 % Symbolauflösungs-Genauigkeit)."
      },
      github: "https://github.com/this-is-vamsi/Equations-Knowledge-Graph",
      live: ""
    },
    {
      date: "10/2026",
      badge: "150 Optuna Trials · R² 0.78 → 0.93 & 0.9999 OLS",
      categories: ["Time-Series, ML & MLOps"],
      title: {
        en: "ML Challenge: Semi-Parametric & Stacked Ensemble Regression Study",
        de: "ML Challenge: Semi-Parametrische & Stacked-Ensemble-Regressionsstudie"
      },
      tags: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Optuna", "RFE", "Piecewise OLS"],
      description: {
        en: "Conducted systematic Bayesian hyperparameter and feature selection studies (150 Optuna trials, RFE) across multi-regime physical datasets, lifting held-out test R² from 0.78 to 0.93 with a 2-level stacked ensemble (LightGBM, GBR, Random Forest into XGBoost) and reaching R² = 0.9999 via regime-aware piecewise regression.",
        de: "Systematische Bayes'sche Hyperparameter- und Feature-Selection-Studie (150 Optuna-Trials, RFE) auf Multi-Regime-Datensätzen: Steigerung des Test-R² von 0,78 auf 0,93 durch ein zweistufiges Stacked Ensemble (LightGBM, GBR, RF → XGBoost) sowie R² = 0,9999 mittels Regime-basierter Piecewise Regression."
      },
      github: "https://github.com/this-is-vamsi/ML-Challenge-OTHAW-So26",
      live: ""
    },
    {
      date: "10/2026",
      badge: "356K Scratch vs. 124M GPT-2 Transfer Learning",
      categories: ["Agentic AI & RAG", "Computer Vision & Deep Learning"],
      title: {
        en: "Mini LLM: Transformer from Scratch & GPT-2 Fine-Tuning",
        de: "Mini-LLM: Transformer from Scratch & GPT-2 Fine-Tuning"
      },
      tags: ["Python", "TensorFlow", "Keras", "HuggingFace GPT-2", "Causal Self-Attention"],
      description: {
        en: "Implemented a decoder-only Transformer (356K parameters) from scratch with causal self-attention and top-k sampling, and fine-tuned a pretrained GPT-2 foundation model (124M parameters) to benchmark scratch training against domain transfer learning.",
        de: "Implementierung eines eigenen Decoder-Only-Transformers (356K Parameter) mit Causal Self-Attention und Top-k-Sampling sowie Fine-Tuning eines vortrainierten GPT-2-Modells (124M Parameter) zum Vergleich mit Transfer Learning."
      },
      github: "https://github.com/this-is-vamsi/mini-llm-from-scratch",
      live: ""
    },
    {
      date: "02/2026",
      badge: "6-Axis Robot · Computer Vision + Minimax AI",
      categories: ["Computer Vision & Deep Learning"],
      title: {
        en: "Autonomous Connect 4 Robot System (Niryo Ned2)",
        de: "Autonomer Vier-Gewinnt-Roboter (Niryo Ned2)"
      },
      tags: ["Computer Vision", "Minimax AI", "Niryo Ned2", "Robotics", "Python"],
      description: {
        en: "Closed-loop Perception → Decision → Action robotics pipeline where a 6-axis Niryo Ned2 robotic arm plays Connect 4 against a human opponent in real time using camera board state recognition and Minimax alpha-beta pruning.",
        de: "Geschlossene Perception-Decision-Action-Pipeline, mit der ein 6-achsiger Niryo-Ned2-Roboterarm in Echtzeit mittels Computer Vision und Minimax-KI gegen menschliche Gegner Vier Gewinnt spielt."
      },
      github: "https://github.com/this-is-vamsi/Connect4-Niryo-AI-Robot",
      live: "https://drive.google.com/file/d/156Vr7NH8XyMnDlW1Xb9NzeY3vUy2lh4W/view?usp=sharing"
    },
    {
      date: "02/2026",
      badge: "360° LiDAR SLAM · A* + OpenCV Sensor Fusion",
      categories: ["Computer Vision & Deep Learning"],
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
      categories: ["Time-Series, ML & MLOps"],
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
    }
  ],

  // ── 5. WORK EXPERIENCE (Synced with latest CV) ────────────────────────────
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
        en: "Pune, India · Remote",
        de: "Pune, Indien · Remote"
      },
      bullets: {
        en: [
          "Performed multivariate sensor time-series data cleaning, rolling-window feature extraction, and anomaly detection in Python to monitor fluctuating machine performance parameters and identify early failure points.",
          "Built Python data transformation pipelines and supervised Machine Learning models on operational and retail POS datasets, evaluating data quality and prediction reliability across operating regimes."
        ],
        de: [
          "Durchführung von multivariater Sensor-Zeitreihenbereinigung, Rolling-Window-Feature-Extraktion und Anomalieerkennung in Python zur Überwachung schwankender Maschinenparameter und Früherkennung von Ausfällen.",
          "Aufbau von Python-Datentransformationspipelines und überwachten Machine-Learning-Modellen auf Betriebs- und POS-Einzelhandelsdaten inklusive Evaluierung der Datenqualität und Prognosegüte."
        ]
      },
      technologies: ["Python", "Sensor Time-Series", "Anomaly Detection", "Scikit-learn", "Pandas", "ETL Pipelines"]
    },
    {
      role: {
        en: "Data Analyst",
        de: "Data Analyst"
      },
      company: "Bosch India (Robert Bosch Group)",
      logo: "./logos/bosch.png",
      period: {
        en: "09/2022 – 09/2023",
        de: "09/2022 – 09/2023"
      },
      location: {
        en: "Bangalore, India · On-site",
        de: "Bangalore, Indien · Vor Ort"
      },
      bullets: {
        en: [
          "Built a production defect and rejection analysis model to track daily manufacturing bottlenecks and quality risks, helping engineering teams reduce scrap rates by 12%.",
          "Developed and maintained 10+ automated SQL data pipelines and KPI monitoring dashboards in Power BI, ensuring traceable data quality and governance across cross-functional engineering teams.",
          "Collaborated with Product and Project Management (PMO) to automate quality tracking workflows, saving 40+ hours of manual reporting work per month."
        ],
        de: [
          "Entwicklung eines Produktions-Ausschuss- und Fehleranalysemodells zur täglichen Verfolgung von Fertigungsengpässen und Qualitätsrisiken — Reduzierung der Ausschussrate um 12 %.",
          "Aufbau und Wartung von über 10 automatisierten SQL-Datenpipelines und KPI-Monitoring-Dashboards in Power BI für abteilungsübergreifende Engineering-Teams.",
          "Zusammenarbeit mit dem Produkt- und Projektmanagement (PMO) zur Automatisierung von Qualitäts-Tracking-Workflows — Einsparung von über 40 Stunden manueller Reporting-Arbeit pro Monat."
        ]
      },
      technologies: ["SQL", "Power BI", "Data Pipelines", "Defect & Scrap Analytics", "Power Automate", "KPI Governance"]
    }
  ],

  // ── 6. EDUCATION (Synced with latest CV) ──────────────────────────────────
  education: [
    {
      degree: {
        en: "Master of Science in Artificial Intelligence for Industrial Applications",
        de: "Master of Science in Artificial Intelligence for Industrial Applications"
      },
      institution: "OTH Amberg-Weiden (Ostbayerische Technische Hochschule)",
      logo: "./logos/oth-aw.png",
      period: {
        en: "10/2024 – 09/2027",
        de: "10/2024 – 09/2027"
      },
      location: {
        en: "Amberg, Germany",
        de: "Amberg, Deutschland"
      },
      description: {
        en: "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Industrial IoT & Time-Series Analysis, Data Engineering.",
        de: "Relevante Module: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Industrial IoT & Zeitreihenanalyse, Data Engineering."
      },
      learnings: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Industrial IoT & Time-Series Analysis",
        "Data Engineering"
      ]
    },
    {
      degree: {
        en: "Bachelor of Engineering in Mechanical Engineering",
        de: "Bachelor of Engineering in Maschinenbau (Mechanical Engineering)"
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
        en: "Relevant Coursework: Engineering Mathematics, Fluid Mechanics, Thermodynamics, Numerical Methods, Control & Sensor Systems.",
        de: "Relevante Module: Ingenieurmathematik, Strömungsmechanik, Thermodynamik, Numerische Methoden, Regelungs- & Sensorsysteme."
      },
      learnings: [
        "Engineering Mathematics",
        "Numerical Methods",
        "Control & Sensor Systems",
        "Thermodynamics & Fluid Mechanics"
      ]
    }
  ],

  // ── 7. CERTIFICATIONS (With Official Issuer Logos) ────────────────────────
  certifications: [
    {
      enabled: true,
      name: {
        en: "Retrieval-Augmented Generation (RAG)",
        de: "Retrieval-Augmented Generation (RAG)"
      },
      authority: "DeepLearning.AI · Coursera (2026)",
      logo: "./logos/deeplearningai.png",
      date: "2026",
      description: {
        en: [
          "Production RAG architecture including hybrid retrieval, vector databases, query routing, and grounded generation."
        ],
        de: [
          "Entwurf produktionsreifer RAG-Systeme inkl. Hybrid Search, Vektordatenbanken, Query Routing und Evaluierung."
        ]
      },
      url: "https://www.coursera.org/account/accomplishments/verify/5YMU8ZTOXWYF"
    },
    {
      enabled: true,
      name: {
        en: "Introduction to Model Context Protocol (MCP)",
        de: "Introduction to Model Context Protocol (MCP)"
      },
      authority: "Anthropic (2026)",
      logo: "./logos/anthropic.png",
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
        en: "The Complete SQL Bootcamp: Go from Zero to Hero",
        de: "The Complete SQL Bootcamp: Go from Zero to Hero"
      },
      authority: "Udemy · Jose Portilla",
      logo: "./logos/udemy.png",
      date: "2023",
      description: {
        en: [
          "Relational database design, complex SQL joins, aggregations, window functions, and analytical querying in PostgreSQL."
        ],
        de: [
          "Relationale Datenbankmodellierung, komplexe SQL-Joins, Aggregationen und analytische Abfragen in PostgreSQL."
        ]
      },
      url: "https://www.udemy.com/certificate/UC-6587befc-2804-4ec7-b001-2662fc79e4ae/"
    },
    {
      enabled: true,
      name: {
        en: "IELTS Academic — English C1 (Band 7.5)",
        de: "IELTS Academic — Englisch C1 (Band 7.5)"
      },
      authority: "IELTS Official Test Report",
      logo: "./logos/ielts.png",
      date: "C1 · Band 7.5",
      description: {
        en: [
          "Certified C1 Fluent / Professional English proficiency across academic reading, listening, writing, and technical communication."
        ],
        de: [
          "Zertifizierte C1-Englischkenntnisse für wissenschaftliches Arbeiten und internationale Projektkommunikation."
        ]
      },
      url: "https://drive.google.com/file/d/1EC2oMixob6G-yRar154jtkdX0i5i6KU1/view?usp=sharing"
    },
    {
      enabled: true,
      name: {
        en: "telc Deutsch A2 — German Language Certificate (B1 in progress)",
        de: "telc Deutsch A2 — Sprachzertifikat (B1 in Arbeit)"
      },
      authority: "telc gGmbH",
      logo: "./logos/telc.png",
      date: "Deutsch A2 / B1",
      description: {
        en: [
          "Certified German A2 proficiency via official telc examination; currently advancing to B1 level in Germany."
        ],
        de: [
          "Offizielles telc-Sprachzertifikat (Stufe A2); aktuell in fortlaufender Vertiefung auf Stufe B1 in Deutschland."
        ]
      },
      url: "https://drive.google.com/file/d/1LLZOhJlORl5Y8E5zR-aLSl2at-98Iy4e/view?usp=sharing"
    }
  ]
};
