/**
 * ============================================================================
 * VAMSI GANESH — BILINGUAL (EN / DE) PORTFOLIO DATA (data.js)
 * Inspired by dineshbarri.dev — Clean, Minimalist, Visual Thumbnails + EN/DE
 * ============================================================================
 *
 * HOW TO UPDATE YOUR PORTFOLIO IN THE FUTURE:
 * - Every text field supports EITHER a simple string ("My Text") OR a bilingual
 *   object ({ en: "English text", de: "German text" }).
 * - To change a project's thumbnail image: put your image in the `thumbnails/`
 *   folder and update `image: "./thumbnails/your-image.png"`.
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
        locationBadge: "Based in Bavaria, Germany 🇩🇪 · Open to Master's Thesis & Working Student Roles",
        viewProjects: "View Projects",
        downloadCv: "Download CV",
        contactMe: "Get in Touch"
      },
      about: {
        subtitle: "Get To Know",
        title: "About Me"
      },
      skills: {
        subtitle: "What I Work With",
        title: "Skills & Technologies"
      },
      projects: {
        subtitle: "Featured Work",
        title: "Projects",
        allFilter: "All Projects",
        viewAll: "View All Projects",
        showLess: "Show Less",
        codeBtn: "Code",
        demoBtn: "Live Demo"
      },
      experience: {
        subtitle: "My Journey",
        title: "Work Experience"
      },
      education: {
        subtitle: "Academic Background",
        title: "Education"
      },
      certifications: {
        subtitle: "Credentials",
        title: "Certifications & Achievements",
        verify: "Verify Credential"
      },
      contact: {
        subtitle: "Get In Touch",
        title: "Contact Me",
        heading: "Let's talk about Thesis or Working Student opportunities",
        description:
          "I am actively looking for a Master's thesis topic or Working Student role in AI, GenAI, LLMs, or Data Science across Germany. Feel free to reach out directly via email or LinkedIn.",
        locationLabel: "Location",
        emailLabel: "Email",
        languagesLabel: "Languages",
        copyBtn: "Copy",
        copiedBtn: "Copied!",
        formName: "Your Name",
        formEmail: "Your Email",
        formSubject: "Subject (e.g., Working Student / Master's Thesis)",
        formMessage: "Your Message...",
        formSubmit: "Send Message"
      }
    },
    de: {
      nav: {
        about: "Über mich",
        skills: "Kompetenzen",
        projects: "Projekte",
        experience: "Erfahrung",
        education: "Studium",
        certifications: "Zertifikate",
        contact: "Kontakt",
        resume: "Lebenslauf"
      },
      hero: {
        greeting: "Hallo, ich bin",
        locationBadge: "Ansässig in Bayern, Deutschland 🇩🇪 · Offen für Masterarbeit & Werkstudentenstellen",
        viewProjects: "Projekte ansehen",
        downloadCv: "Lebenslauf (CV)",
        contactMe: "Kontakt aufnehmen"
      },
      about: {
        subtitle: "Profil",
        title: "Über mich"
      },
      skills: {
        subtitle: "Technologien",
        title: "Skills & Tech-Stack"
      },
      projects: {
        subtitle: "Ausgewählte Arbeiten",
        title: "Projekte",
        allFilter: "Alle Projekte",
        viewAll: "Alle Projekte anzeigen",
        showLess: "Weniger anzeigen",
        codeBtn: "Code",
        demoBtn: "Live-Demo"
      },
      experience: {
        subtitle: "Beruflicher Werdegang",
        title: "Berufserfahrung"
      },
      education: {
        subtitle: "Akademischer Hintergrund",
        title: "Studium & Ausbildung"
      },
      certifications: {
        subtitle: "Qualifikationen",
        title: "Zertifikate & Nachweise",
        verify: "Zertifikat prüfen"
      },
      contact: {
        subtitle: "Kontakt",
        title: "Kontaktieren Sie mich",
        heading: "Offen für Masterarbeit & Werkstudentenstellen in Deutschland",
        description:
          "Ich suche aktiv nach einer Masterarbeit oder einer Werkstudentenstelle im Bereich GenAI, LLMs, Agentic AI oder Data Science in Deutschland. Ich freue mich über Ihre Nachricht!",
        locationLabel: "Standort",
        emailLabel: "E-Mail",
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

  // ── 1. PROFILE & HERO ─────────────────────────────────────────────────────
  profile: {
    name: "Vamsi Ganesh",
    monogram: "VG",
    // Optional: Drop a photo named `profile.jpg` in the root folder and set `avatar: "./profile.jpg"`
    avatar: "",
    email: "vamsiganesh525@gmail.com",
    github: "https://github.com/this-is-vamsi",
    linkedin: "https://linkedin.com/in/vamsi-ganesh",
    resumeUrl: "./Vamsi_Ganesh_CV.pdf",
    location: {
      en: "Amberg / Bavaria, Germany",
      de: "Amberg / Bayern, Deutschland"
    },
    languages: {
      en: "English (C1 · IELTS 7.5) · German (A2)",
      de: "Englisch (C1 · IELTS 7.5) · Deutsch (A2)"
    },
    roles: {
      en: [
        "AI & Agentic Systems Engineer",
        "LLM & RAG Pipeline Developer",
        "Machine Learning Engineer",
        "M.Sc. AI Student @ OTH Amberg-Weiden"
      ],
      de: [
        "AI & Agentic Systems Engineer",
        "LLM- & RAG-Pipeline-Entwickler",
        "Machine Learning Engineer",
        "M.Sc. KI-Student @ OTH Amberg-Weiden"
      ]
    },
    heroBio: {
      en: "Master's student in Artificial Intelligence at OTH Amberg-Weiden. I build reliable multi-agent workflows, serverless AWS RAG pipelines, and applied machine learning systems — backed by industrial data analytics experience at Robert Bosch.",
      de: "Masterstudent der Künstlichen Intelligenz an der OTH Amberg-Weiden. Ich entwickle produktionsreife Multi-Agenten-Systeme, serverlose AWS-RAG-Pipelines und Machine-Learning-Lösungen — fundiert durch praktische Industrieerfahrung bei der Robert Bosch GmbH."
    }
  },

  // ── 2. ABOUT & CLEAN FOCUS CARDS (Minimalist like dineshbarri.dev) ────────
  about: {
    paragraphs: {
      en: [
        "I am pursuing my Master's in Artificial Intelligence for Industrial Applications at OTH Amberg-Weiden in Germany. My engineering work focuses on making Large Language Models reason, retrieve, and act reliably in production environments using LangGraph, hybrid RAG, and cloud-native microservices.",
        "Before moving to Germany, I worked at Robert Bosch GmbH in Bangalore, where I automated cross-functional KPI ecosystems and built production rejection-analysis dashboards that helped reduce manufacturing scrap rates by 12%."
      ],
      de: [
        "Ich absolviere derzeit meinen Master in 'Artificial Intelligence for Industrial Applications' an der OTH Amberg-Weiden. Mein Schwerpunkt liegt auf der Entwicklung zuverlässiger Agentic-AI-Systeme, Retrieval-Augmented Generation (RAG) und Cloud-nativer ML-Pipelines mit LangGraph, FastAPI und AWS.",
        "Vor meinem Studium in Deutschland war ich als Data Analyst bei der Robert Bosch GmbH in Bangalore tätig. Dort automatisierte ich abteilungsübergreifende KPI-Berichte und entwickelte Produktions-Dashboards, die zu einer Reduzierung der Ausschussrate um 12 % beitrugen."
      ]
    },
    highlights: [
      {
        icon: "bot",
        title: {
          en: "Agentic AI & Orchestration",
          de: "Agentic AI & Orchestrierung"
        },
        description: {
          en: "Designing multi-agent workflows with LangGraph, ReAct tool routing, and self-correcting SQL validation loops.",
          de: "Entwicklung von Multi-Agenten-Workflows mit LangGraph, ReAct-Tool-Routing und selbstkorrigierender SQL-Validierung."
        }
      },
      {
        icon: "cloud",
        title: {
          en: "Serverless RAG & Cloud",
          de: "Serverless RAG & Cloud"
        },
        description: {
          en: "Building grounded document Q&A pipelines on AWS Bedrock, Lambda, OpenSearch Serverless, and ChromaDB.",
          de: "Aufbau quellenbasierter Dokumenten-Pipelines mit AWS Bedrock, Lambda, OpenSearch Serverless und ChromaDB."
        }
      },
      {
        icon: "brain",
        title: {
          en: "Deep Learning & Vision",
          de: "Deep Learning & Computer Vision"
        },
        description: {
          en: "Training custom Transformers, medical MRI segmentation models (YOLOv8/v12), and autonomous ROS navigation.",
          de: "Training eigener Transformer, medizinischer MRT-Segmentierung (YOLOv8/v12) und autonomer ROS-Navigation."
        }
      },
      {
        icon: "chart",
        title: {
          en: "Industrial Data Analytics",
          de: "Industrielle Datenanalyse"
        },
        description: {
          en: "Turning manufacturing sensor streams and enterprise ERP data into automated BI insights and predictive models.",
          de: "Transformation von Fertigungs- und Unternehmensdaten in automatisierte BI-Dashboards und Prognosemodelle."
        }
      }
    ]
  },

  // ── 3. SKILLS & TECHNOLOGIES ──────────────────────────────────────────────
  skills: [
    {
      title: {
        en: "GenAI, Agents & LLMs",
        de: "GenAI, Agenten & LLMs"
      },
      items: [
        "LangGraph",
        "LangChain",
        "ReAct & Multi-Agent Systems",
        "RAG Pipelines",
        "NLP-to-SQL",
        "Amazon Bedrock",
        "HuggingFace Transformers",
        "Ollama"
      ]
    },
    {
      title: {
        en: "Machine Learning & Vision",
        de: "Machine Learning & Vision"
      },
      items: [
        "Python",
        "PyTorch",
        "TensorFlow / Keras",
        "scikit-learn",
        "XGBoost & LightGBM",
        "YOLOv8 / YOLOv12",
        "OpenCV",
        "spaCy & Knowledge Graphs",
        "Optuna"
      ]
    },
    {
      title: {
        en: "Cloud, Vector DBs & Backend",
        de: "Cloud, Vektor-DBs & Backend"
      },
      items: [
        "AWS Lambda & S3",
        "OpenSearch Serverless",
        "API Gateway",
        "ChromaDB",
        "FastAPI",
        "Streamlit",
        "Docker",
        "SQL (PostgreSQL / SQLite)",
        "Git & GitHub"
      ]
    },
    {
      title: {
        en: "BI, Robotics & Languages",
        de: "BI, Robotik & Sprachen"
      },
      items: [
        "Power BI",
        "Power Automate & RPA",
        "Pandas & NumPy",
        "ROS & Webots",
        "English (C1 · IELTS 7.5)",
        "Deutsch (A2)"
      ]
    }
  ],

  // ── 4. VISUAL PROJECTS (With 16:9 Thumbnails like dineshbarri.dev) ────────
  projects: [
    {
      title: {
        en: "Context2Insight: Multi-Agent BI System",
        de: "Context2Insight: Multi-Agenten-BI-System"
      },
      image: "./thumbnails/context2insight.svg",
      categories: ["AI Agents & RAG", "ML & Data Science"],
      tags: ["LangGraph", "FastAPI", "ChromaDB", "NLP-to-SQL", "Streamlit"],
      description: {
        en: "Three-agent LangGraph pipeline (PM, BA, Data Analyst) that automates business reporting using RAG context retrieval and self-correcting SQL validation.",
        de: "Drei-Agenten-Pipeline mit LangGraph (PM, BA, Data Analyst) zur Automatisierung von BI-Berichten mittels RAG-Kontextsuche und selbstkorrigierender SQL-Validierung."
      },
      github: "https://github.com/this-is-vamsi/Multi-Agent-BI-Analytics-System",
      live: ""
    },
    {
      title: {
        en: "Production Quality Control AI Assistant",
        de: "KI-Assistent für die Produktions-Qualitätskontrolle"
      },
      image: "./thumbnails/qc-assistant.svg",
      categories: ["AI Agents & RAG", "ML & Data Science"],
      tags: ["LangGraph", "ChromaDB", "scikit-learn", "OpenAI API", "Streamlit"],
      description: {
        en: "ReAct agentic system that dynamically routes manufacturing quality queries between three trained scikit-learn ML predictors and a ChromaDB SOP manual retriever.",
        de: "Agentisches ReAct-System, das Qualitätsanfragen in der Fertigung dynamisch zwischen drei trainierten scikit-learn-ML-Modellen und einer ChromaDB-SOP-Suche routet."
      },
      github: "https://github.com/this-is-vamsi/Production-Grade-Quality-Control-AI-Assistant",
      live: ""
    },
    {
      title: {
        en: "Serverless RAG Pipeline on AWS",
        de: "Serverlose RAG-Pipeline auf AWS"
      },
      image: "./thumbnails/aws-rag.svg",
      categories: ["AI Agents & RAG", "Cloud & MLOps"],
      tags: ["AWS Lambda", "Amazon Bedrock", "OpenSearch", "API Gateway", "S3"],
      description: {
        en: "Event-driven AWS pipeline with S3-triggered Lambda PDF ingestion, Titan vector embeddings in OpenSearch Serverless, and cited Q&A via Amazon Nova Lite.",
        de: "Event-getriebene AWS-Pipeline mit S3-Lambda-PDF-Verarbeitung, Titan-Embeddings in OpenSearch Serverless und quellenbasierter Q&A über Amazon Bedrock."
      },
      github: "https://github.com/this-is-vamsi/RAG-Pipeline-AWS",
      live: ""
    },
    {
      title: {
        en: "CNN vs. Self-Attention for Brain Tumor MRI",
        de: "CNN vs. Self-Attention zur Hirntumor-Erkennung"
      },
      image: "./thumbnails/brain-tumor-yolo.svg",
      categories: ["Vision & Deep Learning"],
      tags: ["YOLOv8", "YOLOv12", "PyTorch", "Medical Imaging", "Dice Score"],
      description: {
        en: "Benchmarked YOLOv8 (CNN) against YOLOv12 (Area Self-Attention) across 6,000 brain MRI scans, evaluating clinical tumor boundary precision via Dice and Boundary IoU.",
        de: "Architekturvergleich zwischen YOLOv8 (CNN) und YOLOv12 (Area Attention) auf 6.000 Gehirn-MRT-Scans anhand von Dice Score, Boundary IoU und mAP."
      },
      github: "https://github.com/this-is-vamsi/CNN-Self-Attention-Brain-Tumor-Detection",
      live: ""
    },
    {
      title: {
        en: "Equations Knowledge Graph from arXiv",
        de: "Gleichungs-Knowledge-Graph aus arXiv-Papern"
      },
      image: "./thumbnails/equations-kg.svg",
      categories: ["ML & Data Science"],
      tags: ["spaCy NLP", "MathML", "BeautifulSoup", "Knowledge Graphs", "Python"],
      description: {
        en: "Deterministic multi-tier NLP pipeline extracting structured mathematical equation graphs from 66 scientific papers — achieving 84% symbol coverage without LLMs.",
        de: "Mehrstufige NLP-Pipeline zur Extraktion strukturierter mathematischer Knowledge Graphs aus 66 arXiv-Publikationen mit 84 % Symbolabdeckung ohne LLM-Kosten."
      },
      github: "https://github.com/this-is-vamsi/Equations-Knowledge-Graph",
      live: ""
    },
    {
      title: {
        en: "Mini LLM: Transformer from Scratch vs. GPT-2",
        de: "Mini-LLM: Transformer from Scratch vs. GPT-2"
      },
      image: "./thumbnails/mini-llm.svg",
      categories: ["Vision & Deep Learning", "AI Agents & RAG"],
      tags: ["TensorFlow", "Keras", "HuggingFace", "GPT-2", "Self-Attention"],
      description: {
        en: "Built a 120K-parameter decoder-only Transformer from scratch with causal self-attention and top-k sampling, contrasted against a fine-tuned 124M GPT-2 model.",
        de: "Implementierung eines eigenen Decoder-Transformers (120K Parameter) mit Causal Self-Attention im Vergleich zu einem feingetunten GPT-2-Modell (124M Parameter)."
      },
      github: "https://github.com/this-is-vamsi/mini-llm-from-scratch",
      live: ""
    },
    {
      title: {
        en: "Stacked Ensemble & Piecewise Regression",
        de: "Stacked Ensemble & Piecewise Regression"
      },
      image: "./thumbnails/ml-ensemble.svg",
      categories: ["ML & Data Science"],
      tags: ["XGBoost", "LightGBM", "Optuna", "scikit-learn", "OLS"],
      description: {
        en: "Boosted regression R² from 0.78 to 0.93 via a stacked LightGBM/GBR/RF → XGBoost ensemble tuned with Optuna, and reached R²=0.9999 using piecewise OLS.",
        de: "Steigerung des R²-Werts von 0,78 auf 0,93 durch ein Optuna-optimiertes Stacked Ensemble (LightGBM/RF → XGBoost) sowie R²=0,9999 mittels Piecewise OLS."
      },
      github: "https://github.com/this-is-vamsi/ML-Challenge-OTHAW-So26",
      live: ""
    },
    {
      title: {
        en: "RosBot Autonomous Mapping & Navigation",
        de: "Autonome RosBot-Kartierung & Navigation"
      },
      image: "./thumbnails/rosbot-nav.svg",
      categories: ["Vision & Deep Learning"],
      tags: ["ROS", "LiDAR SLAM", "OpenCV", "A* Planning", "Webots"],
      description: {
        en: "Autonomous robotics controller fusing 360° LiDAR occupancy mapping and A* path planning with OpenCV vision for dynamic hazard avoidance in Webots.",
        de: "Autonome Robotersteuerung mit 360°-LiDAR-Umgebungskartierung, A*-Pfadplanung und OpenCV-Bildverarbeitung zur Hindernisvermeidung in Webots."
      },
      github: "https://github.com/this-is-vamsi/RosBot-Autonomous-Mapping-Navigation-Webots",
      live: ""
    },
    {
      title: {
        en: "Banking Customer Churn Prediction",
        de: "Kundenabwanderungs-Prognose (Churn Prediction)"
      },
      image: "./thumbnails/customer-churn.svg",
      categories: ["ML & Data Science"],
      tags: ["scikit-learn", "Random Forest", "GridSearchCV", "Pandas"],
      description: {
        en: "Benchmarked classification pipelines across 10,000 banking records, tuning a Random Forest model to 0.91 ROC-AUC via 10-fold Grid Search cross-validation.",
        de: "Benchmarking von Klassifikationsmodellen auf 10.000 Bankkundendaten; Optimierung eines Random-Forest-Modells auf 0,91 ROC-AUC mittels 10-facher Kreuzvalidierung."
      },
      github: "https://github.com/this-is-vamsi/Customer-Churn-Prediction",
      live: ""
    }
  ],

  // ── 5. WORK EXPERIENCE ────────────────────────────────────────────────────
  experience: [
    {
      role: {
        en: "Data Science Intern",
        de: "Praktikant Data Science (Data Science Intern)"
      },
      company: "Access Million",
      monogram: "AM",
      accentColor: "#38bdf8",
      period: {
        en: "Nov 2023 – Apr 2024",
        de: "Nov. 2023 – Apr. 2024"
      },
      location: {
        en: "Pune, India (Remote)",
        de: "Pune, Indien (Remote)"
      },
      bullets: {
        en: [
          "Built machine learning models for market basket analysis and product recommendations on retail POS data.",
          "Developed a real-time stock market trend analysis app that scraped live prices and generated multi-stock forecasts.",
          "Analyzed industrial sensor time-series streams to detect machine anomalies and early failure points."
        ],
        de: [
          "Entwicklung von Machine-Learning-Modellen für Warenkorbanalysen und Produktempfehlungen auf Basis von POS-Einzelhandelsdaten.",
          "Aufbau einer Echtzeit-Börsenanalyse-Anwendung zur Live-Datenerfassung, Trendanalyse und Preisprognose.",
          "Zeitreihenanalyse industrieller Sensordaten zur frühzeitigen Erkennung von Maschinenanomalien und Ausfallrisiken."
        ]
      },
      technologies: ["Python", "scikit-learn", "Pandas", "Time-Series Analysis", "Recommendation Systems"]
    },
    {
      role: {
        en: "Data Analyst",
        de: "Data Analyst"
      },
      company: "Robert Bosch GmbH",
      monogram: "BOSCH",
      accentColor: "#ef4444",
      period: {
        en: "Sep 2022 – Sep 2023",
        de: "Sept. 2022 – Sept. 2023"
      },
      location: {
        en: "Bangalore, India",
        de: "Bangalore, Indien"
      },
      bullets: {
        en: [
          "Automated 10+ enterprise KPI and MIS reports for delivery and resource controlling using Power BI, RPA, and SharePoint.",
          "Digitized PMO workflows by replacing manual checklists with Power Automate and Power Apps — saving 40+ man-hours/month.",
          "Built a production rejection analysis dashboard to track shop-floor bottlenecks, contributing to a 12% reduction in scrap rates."
        ],
        de: [
          "Automatisierung von über 10 KPI- und MIS-Reporting-Pipelines für das Ressourcen- und Liefercontrolling mit Power BI, RPA und SharePoint.",
          "Digitalisierung von PMO-Prozessen durch Power Automate und Power Apps — Einsparung von über 40 Arbeitsstunden pro Monat.",
          "Entwicklung eines Ausschussanalyse-Dashboards zur Identifikation von Produktionsengpässen, was zu einer Senkung der Ausschussquote um 12 % führte."
        ]
      },
      technologies: ["Power BI", "Power Automate", "RPA", "SQL", "Process Optimization", "KPI Dashboards"]
    }
  ],

  // ── 6. EDUCATION ──────────────────────────────────────────────────────────
  education: [
    {
      degree: {
        en: "M.Sc. Artificial Intelligence for Industrial Applications",
        de: "M.Sc. Artificial Intelligence for Industrial Applications"
      },
      institution: "OTH Amberg-Weiden",
      monogram: "OTH",
      period: {
        en: "Oct 2024 – Present",
        de: "Okt. 2024 – Heute"
      },
      location: {
        en: "Amberg, Germany",
        de: "Amberg, Deutschland"
      },
      description: {
        en: "Graduate focus on production AI systems, deep learning architectures, knowledge graphs, and autonomous robotics.",
        de: "Masterstudium mit Fokus auf industrielle KI-Systeme, Deep Learning, Knowledge Graphs und autonome Robotik."
      },
      learnings: [
        "Deep Learning & Neural Networks",
        "Machine Learning",
        "Modern Databases & NoSQL",
        "Autonomous Robotics (ROS)"
      ]
    },
    {
      degree: {
        en: "B.E. Mechanical Engineering",
        de: "B.E. Maschinenbau (Mechanical Engineering)"
      },
      institution: "Nitte Meenakshi Institute of Technology",
      monogram: "NMIT",
      period: {
        en: "Jun 2018 – Jun 2022",
        de: "Juni 2018 – Juni 2022"
      },
      location: {
        en: "Bangalore, India",
        de: "Bangalore, Indien"
      },
      description: {
        en: "Engineering fundamentals, industrial manufacturing systems, and quantitative problem solving.",
        de: "Ingenieurwissenschaftliche Grundlagen, industrielle Fertigungssysteme und mathematische Modellierung."
      },
      learnings: ["Industrial Engineering", "Manufacturing Systems", "Engineering Mathematics"]
    }
  ],

  // ── 7. CERTIFICATIONS & CREDENTIALS ───────────────────────────────────────
  certifications: [
    {
      enabled: true,
      name: {
        en: "LangGraph & Multi-Agent AI Systems",
        de: "LangGraph & Multi-Agenten-KI-Systeme"
      },
      authority: "DeepLearning.AI / LangChain",
      monogram: "DL.AI",
      date: "2025 – 2026",
      description: {
        en: [
          "Stateful multi-agent orchestration and ReAct tool routing with LangGraph",
          "Retrieval-Augmented Generation (RAG) and self-correcting agent loops"
        ],
        de: [
          "Zustandsbehaftete Multi-Agenten-Orchestrierung und ReAct-Routing mit LangGraph",
          "Retrieval-Augmented Generation (RAG) und selbstkorrigierende Agenten-Workflows"
        ]
      },
      url: "https://github.com/this-is-vamsi"
    },
    {
      enabled: true,
      name: {
        en: "Serverless Cloud AI & AWS Bedrock Architecture",
        de: "Serverless Cloud AI & AWS Bedrock Architektur"
      },
      authority: "Amazon Web Services (AWS Track)",
      monogram: "AWS",
      date: "2026",
      description: {
        en: [
          "Cloud-native vector indexing with Amazon OpenSearch Serverless & Titan",
          "Event-driven AI inference pipelines with AWS Lambda, S3 & API Gateway"
        ],
        de: [
          "Cloud-native Vektorindizierung mit Amazon OpenSearch Serverless & Titan",
          "Event-getriebene KI-Pipelines mit AWS Lambda, S3 & API Gateway"
        ]
      },
      url: "https://github.com/this-is-vamsi/RAG-Pipeline-AWS"
    },
    {
      enabled: true,
      name: {
        en: "IELTS Academic — C1 English Proficiency (Band 7.5)",
        de: "IELTS Academic — C1 Englisch-Zertifikat (Band 7.5)"
      },
      authority: "British Council / IDP",
      monogram: "C1",
      date: "Verified",
      description: {
        en: [
          "C1 Advanced proficiency across technical writing, research, and communication",
          "Supplemented by German A2 proficiency for daily collaboration in Germany"
        ],
        de: [
          "C1-Sprachniveau für wissenschaftliches Arbeiten und internationale Teams",
          "Ergänzt durch Deutschkenntnisse (A2) für die Zusammenarbeit in Deutschland"
        ]
      },
      url: ""
    }
  ]
};
