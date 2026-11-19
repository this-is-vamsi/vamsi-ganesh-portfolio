/**
 * ============================================================================
 * VAMSI GANESH — BILINGUAL (EN / DE) PORTFOLIO DATA (data.js)
 * Grounded, human writing style (inspired by selinameusel.com)
 * ============================================================================
 */

window.PORTFOLIO_DATA = {
  // ── UI TRANSLATIONS (EN & DE) ─────────────────────────────────────────────
  ui: {
    en: {
      nav: {
        about: "About",
        skills: "Stack",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        certifications: "Certificates",
        contact: "Contact"
      },
      hero: {
        greeting: "Hi, I'm",
        locationBadge: "Germany (open to relocation nationwide) 🇩🇪 · Looking for Working Student, Internship & Thesis roles",
        viewProjects: "See What I've Built",
        downloadCv: "Download CV",
        contactMe: "Say Hello"
      },
      about: {
        subtitle: "Background & Motivation",
        title: "Trust the data first. Build the AI second."
      },
      skills: {
        subtitle: "What I Actually Use",
        title: "Core Stack"
      },
      projects: {
        subtitle: "Selected Work",
        title: "Projects",
        allFilter: "All",
        viewAll: "Show All Projects",
        showLess: "Show Fewer",
        codeBtn: "GitHub",
        demoBtn: "Watch Video"
      },
      experience: {
        subtitle: "Where I've Worked",
        title: "Experience"
      },
      education: {
        subtitle: "Where I've Studied",
        title: "Education"
      },
      certifications: {
        subtitle: "Credentials & Languages",
        title: "Certificates",
        verify: "View Certificate ↗"
      },
      contact: {
        subtitle: "Contact",
        title: "Let's Talk",
        heading: "Open for Working Student roles, Internships, or a Master's Thesis across Germany.",
        description:
          "If your team is building with AI agents, computer vision, or Python and SQL data pipelines, I'd love to hear what you're working on.",
        locationLabel: "Location",
        emailLabel: "Email",
        phoneLabel: "Phone",
        languagesLabel: "Languages",
        copyBtn: "Copy",
        copiedBtn: "Copied!",
        formName: "Your Name",
        formEmail: "Your Email",
        formSubject: "What's this about? (e.g., Working Student / Thesis / Quick Chat)",
        formMessage: "Write a short note...",
        formSubmit: "Send Email"
      }
    },
    de: {
      nav: {
        about: "Über mich",
        skills: "Tech-Stack",
        projects: "Projekte",
        experience: "Erfahrung",
        education: "Studium",
        certifications: "Zertifikate",
        contact: "Kontakt"
      },
      hero: {
        greeting: "Hallo, ich bin",
        locationBadge: "Deutschland (deutschlandweit umzugsbereit) 🇩🇪 · Offen für Werkstudentenstelle, Praktikum & Masterarbeit",
        viewProjects: "Projekte ansehen",
        downloadCv: "Lebenslauf (CV)",
        contactMe: "Schreib mir"
      },
      about: {
        subtitle: "Hintergrund & Motivation",
        title: "Erst den Daten vertrauen. Dann die KI bauen."
      },
      skills: {
        subtitle: "Womit ich täglich arbeite",
        title: "Mein Kern-Stack"
      },
      projects: {
        subtitle: "Ausgewählte Arbeiten",
        title: "Projekte",
        allFilter: "Alle",
        viewAll: "Alle Projekte zeigen",
        showLess: "Weniger zeigen",
        codeBtn: "GitHub",
        demoBtn: "Video ansehen"
      },
      experience: {
        subtitle: "Praxis",
        title: "Berufserfahrung"
      },
      education: {
        subtitle: "Ausbildung",
        title: "Studium"
      },
      certifications: {
        subtitle: "Nachweise & Sprachen",
        title: "Zertifikate",
        verify: "Zertifikat öffnen ↗"
      },
      contact: {
        subtitle: "Kontakt",
        title: "Lass uns sprechen",
        heading: "Offen für Werkstudentenstellen, Praktika oder eine Masterarbeit in ganz Deutschland.",
        description:
          "Wenn Ihr Team an KI-Agenten, Computer Vision oder sauberen Python- und SQL-Datenpipelines arbeitet, freue ich mich über eine Nachricht.",
        locationLabel: "Standort",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        languagesLabel: "Sprachen",
        copyBtn: "Kopieren",
        copiedBtn: "Kopiert!",
        formName: "Ihr Name",
        formEmail: "Ihre E-Mail-Adresse",
        formSubject: "Worum geht es? (z. B. Werkstudentenstelle / Masterarbeit)",
        formMessage: "Kurze Nachricht...",
        formSubmit: "E-Mail senden"
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
      en: "M.Sc. AI Student · Building AI Agents, Vision Models & Data Pipelines",
      de: "M.Sc. KI-Student · KI-Agenten, Computer Vision & Datenpipelines"
    },
    location: {
      en: "Amberg, Germany (open to relocation nationwide)",
      de: "Amberg, Deutschland (deutschlandweit umzugsbereit)"
    },
    languages: {
      en: "English (C1 · IELTS 7.5) · German (B1 in progress · telc A2) · Telugu (Native)",
      de: "Englisch (C1 · IELTS 7.5) · Deutsch (B1 in Arbeit · telc A2) · Telugu (Muttersprache)"
    },
    roles: {
      en: [
        "AI & Machine Learning Student",
        "Building AI Agents & RAG Systems",
        "Computer Vision in PyTorch",
        "Python & SQL Data Pipelines"
      ],
      de: [
        "Masterstudent in Künstlicher Intelligenz",
        "KI-Agenten & RAG-Systeme",
        "Computer Vision mit PyTorch",
        "Python- & SQL-Datenpipelines"
      ]
    },
    heroBio: {
      en: "Master's student in AI at OTH Amberg-Weiden, previously a Data Analyst at Bosch. I build AI agents connected to real databases, train computer vision models in PyTorch, and turn messy sensor data into clear predictions.",
      de: "Masterstudent der Künstlichen Intelligenz an der OTH Amberg-Weiden, zuvor Data Analyst bei Bosch. Ich baue KI-Agenten mit echter Datenbankanbindung, trainiere Computer-Vision-Modelle in PyTorch und mache aus komplexen Sensordaten verlässliche Prognosen."
    }
  },

  // ── 2. ABOUT & MOTIVATION (Grounded storytelling like selinameusel.com) ───
  about: {
    paragraphs: {
      en: [
        "I started in mechanical engineering and spent a year at Bosch automating production reports and tracking down why parts were failing on the manufacturing line. That taught me a simple rule I still follow in AI: a model is only useful if people can trust the data going in and verify the answer coming out.",
        "Now in Germany for my Master's in AI, I spend my time building things end to end — whether that's an AI agent that tests its own SQL queries before showing a chart, a vision model that segments MRI scans, or a sensor pipeline that spots a failing wind turbine weeks before it breaks."
      ],
      de: [
        "Ich komme ursprünglich aus dem Maschinenbau und habe ein Jahr bei Bosch Produktionsberichte automatisiert und untersucht, warum Bauteile in der Fertigung Ausschuss produzierten. Dort habe ich eine einfache Regel gelernt, die für mich auch in der KI gilt: Ein Modell hilft nur dann weiter, wenn man den Eingangsdaten vertrauen und das Ergebnis überprüfen kann.",
        "In meinem KI-Masterstudium in Deutschland baue ich Systeme am liebsten komplett von Anfang bis Ende — vom KI-Agenten, der seine eigenen SQL-Abfragen vor der Ausgabe testet, über Computer-Vision-Modelle für MRT-Scans bis zur Sensor-Pipeline, die einen Turbinenschaden Wochen im Voraus erkennt."
      ]
    },
    highlights: [
      {
        icon: "bot",
        title: {
          en: "AI Agents that Verify Their Work",
          de: "KI-Agenten, die ihre Ergebnisse prüfen"
        },
        description: {
          en: "Connecting LLMs to SQL and vector databases via LangGraph and MCP, with automated Python tests so the AI doesn't guess numbers.",
          de: "Verbindung von LLMs mit SQL- und Vektordatenbanken über LangGraph und MCP — abgesichert durch automatische Python-Tests gegen Halluzinationen."
        }
      },
      {
        icon: "brain",
        title: {
          en: "Computer Vision & Deep Learning",
          de: "Computer Vision & Deep Learning"
        },
        description: {
          en: "Training and comparing PyTorch models for medical image segmentation, image-to-text captioning, and real-time robot vision.",
          de: "Training und Vergleich von PyTorch-Modellen für medizinische Bildsegmentierung, Bildbeschreibung und Echtzeit-Robotersteuerung."
        }
      },
      {
        icon: "chart",
        title: {
          en: "Sensor Data & Reproducible ML",
          de: "Sensordaten & nachvollziehbares ML"
        },
        description: {
          en: "Finding early warning signs in noisy industrial sensor logs and keeping experiments clean and repeatable with DVC and MLflow.",
          de: "Früherkennung von Ausfällen in industriellen Sensordaten und sauber dokumentierte Experimente mit DVC und MLflow."
        }
      },
      {
        icon: "database",
        title: {
          en: "Clean Data & Backend Code",
          de: "Saubere Daten & Backend-Logik"
        },
        description: {
          en: "Writing straightforward Python, SQL, and FastAPI services packaged in Docker so projects actually run outside a notebook.",
          de: "Klarer Python-, SQL- und FastAPI-Code in Docker-Containern, damit Projekte auch außerhalb eines Notebooks stabil laufen."
        }
      }
    ]
  },

  // ── 3. CORE STACK (Trimmed to ~16 real tools — no keyword bloat) ──────────
  skills: [
    {
      title: {
        en: "Daily Core & Backend",
        de: "Tägliche Basis & Backend"
      },
      items: ["Python", "SQL (PostgreSQL / SQLite)", "FastAPI", "Pytest", "Docker", "Git & GitHub Actions"]
    },
    {
      title: {
        en: "AI Agents & RAG",
        de: "KI-Agenten & RAG"
      },
      items: ["LangGraph & LangChain", "Model Context Protocol (FastMCP)", "Weaviate & ChromaDB", "FAISS", "Arize Phoenix (OpenTelemetry)"]
    },
    {
      title: {
        en: "Machine Learning & Vision",
        de: "Machine Learning & Vision"
      },
      items: ["PyTorch", "Scikit-learn", "XGBoost & LightGBM", "YOLOv8 / YOLOv12", "Vision Transformers (ViT)", "OpenCV"]
    },
    {
      title: {
        en: "Analytics & MLOps",
        de: "Analytics & MLOps"
      },
      items: ["Pandas & NumPy", "MLflow & DVC", "Optuna", "Streamlit", "Power BI"]
    }
  ],

  // ── 4. PROJECTS (Plain, grounded language + max 4 tags per card) ──────────
  projects: [
    {
      date: "11/2026",
      badge: "5 AI Agents · Self-Testing Code",
      categories: ["AI Agents & RAG"],
      title: {
        en: "Multi-Agent Software & Test Builder",
        de: "Multi-Agenten-System für Code & Tests"
      },
      tags: ["Python", "LangGraph", "FastAPI", "Pytest"],
      description: {
        en: "Five AI agents that take a plain-English feature request, write the FastAPI backend code, and generate their own pytest suite. If a test fails, the tester agent sends the error back to the developer agent to fix before opening a GitHub PR.",
        de: "Fünf KI-Agenten, die aus einer Textanforderung den passenden FastAPI-Code sowie eigene Pytest-Tests schreiben. Schlägt ein Test fehl, gibt der Tester-Agent den Fehler automatisch zur Korrektur zurück, bevor ein GitHub-PR geöffnet wird."
      },
      github: "https://github.com/this-is-vamsi/Spec-Driven-Multi-Agent-SDLC",
      live: ""
    },
    {
      date: "10/2026",
      badge: "MCP Server · Verified SQL Reports",
      categories: ["AI Agents & RAG", "ML & Data"],
      title: {
        en: "Context2Insight: SQL & BI Agent Pipeline",
        de: "Context2Insight: SQL- & BI-Agenten"
      },
      tags: ["LangGraph", "FastMCP", "SQL", "Streamlit"],
      description: {
        en: "Three agents connected to a SQL database and ChromaDB via a custom MCP server to answer business questions. Runs five Python checks on every query so hallucinated numbers never reach the dashboard.",
        de: "Drei Agenten, die über einen eigenen MCP-Server mit einer SQL-Datenbank und ChromaDB verbunden sind. Jede Abfrage durchläuft fünf Python-Prüfungen, damit keine erfundenen Zahlen im Dashboard landen."
      },
      github: "https://github.com/this-is-vamsi/Multi-Agent-BI-Analytics-System",
      live: ""
    },
    {
      date: "11/2026",
      badge: "34-Day Early Warning · 15 Turbines",
      categories: ["ML & Data"],
      title: {
        en: "Wind Turbine Fault Detection",
        de: "Fehlerfrüherkennung bei Windkraftanlagen"
      },
      tags: ["Python", "Scikit-learn", "Change-Point Detection", "PCA"],
      description: {
        en: "Analyzed 10-minute sensor logs across 15 offshore wind turbines to catch mechanical failures early. Change-point detection spotted developing faults an average of 34 days before the turbine broke down.",
        de: "Analyse von 10-Minuten-Sensordaten aus 15 Offshore-Windturbinen zur Früherkennung mechanischer Schäden. Durch Change-Point-Detection wurden sich anbahnende Ausfälle im Schnitt 34 Tage vor dem Stillstand erkannt."
      },
      github: "https://github.com/this-is-vamsi/wind-turbine-anomaly-detection",
      live: ""
    },
    {
      date: "09/2026",
      badge: "65% Lower Token Cost · 44K Items",
      categories: ["AI Agents & RAG"],
      title: {
        en: "E-Commerce RAG Search Assistant",
        de: "E-Commerce RAG-Suchassistent"
      },
      tags: ["Weaviate", "OpenTelemetry", "Arize Phoenix", "Python"],
      description: {
        en: "Product and FAQ search assistant indexing 44,400+ items in Weaviate. Routes simple catalog lookups away from heavy prompts and tracks every step with OpenTelemetry, cutting token costs by 65%.",
        de: "Produkt- und FAQ-Assistent für über 44.400 Artikel in Weaviate. Leitet einfache Katalogabfragen gezielt um und misst jeden Schritt mit OpenTelemetry — das senkt die Token-Kosten um 65 %."
      },
      github: "https://github.com/this-is-vamsi/Ecommerce-RAG-Assistant-Weaviate",
      live: ""
    },
    {
      date: "11/2026",
      badge: "ViT Encoder + GPT-2 Decoder",
      categories: ["Vision & Robotics"],
      title: {
        en: "Image-to-Text Vision Pipeline",
        de: "Bild-zu-Text Vision-Pipeline"
      },
      tags: ["PyTorch", "Vision Transformer (ViT)", "GPT-2", "FastAPI"],
      description: {
        en: "PyTorch pipeline that takes an image, extracts visual features with a Vision Transformer (ViT), and generates natural-language descriptions through a GPT-2 decoder, served via FastAPI and Streamlit.",
        de: "PyTorch-Pipeline, die Bildmerkmale über einen Vision Transformer (ViT) extrahiert und mit einem GPT-2-Decoder passende Bildbeschreibungen generiert — bereitgestellt über FastAPI und Streamlit."
      },
      github: "https://github.com/this-is-vamsi/Multimodal-Vision-Foundation-Model-Pipeline",
      live: ""
    },
    {
      date: "09/2026",
      badge: "6,000 MRI Scans · YOLOv8 vs. v12",
      categories: ["Vision & Robotics"],
      title: {
        en: "Brain MRI Tumor Segmentation",
        de: "Hirntumor-Segmentierung auf MRT-Scans"
      },
      tags: ["PyTorch", "YOLOv8 & YOLOv12", "OpenCV", "Medical Imaging"],
      description: {
        en: "Prepared 6,000 brain MRI scans across three tumor types to test whether newer self-attention vision models (YOLOv12) trace tumor borders more accurately than classic CNN backbones (YOLOv8).",
        de: "Auswertung von 6.000 Gehirn-MRT-Scans über drei Tumorarten, um zu prüfen, ob neuere Self-Attention-Modelle (YOLOv12) Tumorgrenzen präziser segmentieren als klassische CNNs (YOLOv8)."
      },
      github: "https://github.com/this-is-vamsi/CNN-Self-Attention-Brain-Tumor-Detection",
      live: ""
    },
    {
      date: "02/2026",
      badge: "6-Axis Robot · Real-Time Gameplay",
      categories: ["Vision & Robotics"],
      title: {
        en: "Connect 4 Playing Robot Arm (Niryo Ned2)",
        de: "Vier-Gewinnt-Roboterarm (Niryo Ned2)"
      },
      tags: ["Python", "OpenCV", "Minimax AI", "Robotics"],
      description: {
        en: "Programmed a 6-axis Niryo Ned2 robot arm to play Connect 4 against a human in real time. A camera reads the board state, a Minimax algorithm picks the best move, and the arm places the physical token.",
        de: "Steuerung eines 6-achsigen Niryo-Ned2-Roboterarms, der in Echtzeit gegen Menschen Vier Gewinnt spielt: Eine Kamera liest das Spielfeld, ein Minimax-Algorithmus berechnet den Zug und der Arm setzt den Stein."
      },
      github: "https://github.com/this-is-vamsi/Connect4-Niryo-AI-Robot",
      live: "https://drive.google.com/file/d/156Vr7NH8XyMnDlW1Xb9NzeY3vUy2lh4W/view?usp=sharing"
    },
    {
      date: "09/2026",
      badge: "3 ML Models + SOP Manual Search",
      categories: ["AI Agents & RAG", "ML & Data"],
      title: {
        en: "Manufacturing Quality Control Assistant",
        de: "KI-Assistent für die Qualitätskontrolle"
      },
      tags: ["LangGraph", "Scikit-learn", "ChromaDB", "Docker"],
      description: {
        en: "Combines three Scikit-learn fault prediction models with a searchable manual database. When a machine flags an issue, the agent predicts the defect type and pulls the matching repair steps.",
        de: "Kombiniert drei Scikit-learn-Fehlermodelle mit einer durchsuchbaren Handbuch-Datenbank: Meldet eine Maschine eine Abweichung, prognostiziert der Agent den Fehlertyp und liefert die passenden Wartungsschritte."
      },
      github: "https://github.com/this-is-vamsi/Production-Grade-Quality-Control-AI-Assistant",
      live: ""
    },
    {
      date: "11/2026",
      badge: "Versioned Data & Experiment Logs",
      categories: ["ML & Data"],
      title: {
        en: "Reproducible ML Pipeline with DVC & MLflow",
        de: "Reproduzierbare ML-Pipeline mit DVC & MLflow"
      },
      tags: ["Scikit-learn", "DVC", "MLflow", "Pandas"],
      description: {
        en: "Clean regression workflow where every dataset change is versioned with DVC and every model run automatically logs its parameters, error metrics, and residual plots to MLflow.",
        de: "Sauberer Regressions-Workflow, bei dem jede Datensatzänderung mit DVC versioniert wird und jeder Modelllauf Parameter, Fehlermetriken und Residuen-Plots automatisch in MLflow protokolliert."
      },
      github: "https://github.com/this-is-vamsi/Reproducible-ML-Pipeline-DVC-MLflow",
      live: ""
    },
    {
      date: "09/2026",
      badge: "84% Symbol Match · No LLM Needed",
      categories: ["AI Agents & RAG", "ML & Data"],
      title: {
        en: "Scientific Equations Knowledge Graph",
        de: "Knowledge Graph für mathematische Formeln"
      },
      tags: ["Python", "spaCy", "MathML", "Knowledge Graphs"],
      description: {
        en: "Parser that reads scientific papers from arXiv and links mathematical symbols in equations back to their plain-text definitions in the surrounding paragraphs — matching 84% of symbols without an LLM.",
        de: "Parser für wissenschaftliche arXiv-Paper, der mathematische Symbole in Gleichungen automatisch mit ihren Textdefinitionen im Artikel verknüpft — mit 84 % Trefferquote ganz ohne LLM."
      },
      github: "https://github.com/this-is-vamsi/Equations-Knowledge-Graph",
      live: ""
    }
  ],

  // ── 5. WORK EXPERIENCE (Grounded, direct language) ────────────────────────
  experience: [
    {
      role: {
        en: "Data Science Intern",
        de: "Praktikant Data Science"
      },
      company: "Access Million",
      logo: "./logos/access-million.png",
      period: {
        en: "Nov 2023 – Apr 2024",
        de: "Nov. 2023 – Apr. 2024"
      },
      location: {
        en: "Pune, India · Remote",
        de: "Pune, Indien · Remote"
      },
      bullets: {
        en: [
          "Cleaned noisy machine sensor logs and built rolling-window anomaly checks in Python to spot equipment wear early.",
          "Built Python data pipelines and product recommendation models on retail point-of-sale data to see which items customers buy together."
        ],
        de: [
          "Bereinigung von Maschinensensordaten und Aufbau von Python-Anomaliechecks zur frühzeitigen Erkennung von Verschleiß.",
          "Entwicklung von Python-Datenpipelines und Empfehlungsmodellen auf Kassendaten (POS), um Kaufmuster im Einzelhandel sichtbar zu machen."
        ]
      },
      technologies: ["Python", "SQL", "Scikit-learn", "Pandas"]
    },
    {
      role: {
        en: "Data Analyst",
        de: "Data Analyst"
      },
      company: "Bosch India (Robert Bosch Group)",
      logo: "./logos/bosch.png",
      period: {
        en: "Sep 2022 – Sep 2023",
        de: "Sept. 2022 – Sept. 2023"
      },
      location: {
        en: "Bangalore, India · On-site",
        de: "Bangalore, Indien · Vor Ort"
      },
      bullets: {
        en: [
          "Built a daily defect and scrap tracking model for the manufacturing line, helping the engineering team cut scrap rates by 12%.",
          "Automated 10+ recurring SQL and Power BI reports so cross-functional teams could check live delivery metrics without manual spreadsheets.",
          "Replaced manual PMO checklists with automated Power Automate workflows, saving the team over 40 hours of reporting work every month."
        ],
        de: [
          "Aufbau eines täglichen Ausschuss- und Fehleranalysemodells für die Fertigungslinie, wodurch das Engineering-Team die Ausschussquote um 12 % senken konnte.",
          "Automatisierung von über 10 wiederkehrenden SQL- und Power-BI-Berichten, damit Teams Live-Kennzahlen ohne manuelle Excel-Listen abrufen konnten.",
          "Ablösung manueller PMO-Checklisten durch automatisierte Power-Automate-Workflows — Einsparung von über 40 Stunden manueller Arbeit pro Monat."
        ]
      },
      technologies: ["SQL", "Power BI", "Power Automate", "Process Analytics"]
    }
  ],

  // ── 6. EDUCATION ──────────────────────────────────────────────────────────
  education: [
    {
      degree: {
        en: "M.Sc. in Artificial Intelligence for Industrial Applications",
        de: "M.Sc. in Artificial Intelligence for Industrial Applications"
      },
      institution: "OTH Amberg-Weiden",
      logo: "./logos/oth-aw.png",
      period: {
        en: "Oct 2024 – Expected Sep 2027",
        de: "Okt. 2024 – Vsl. Sept. 2027"
      },
      location: {
        en: "Amberg, Germany",
        de: "Amberg, Deutschland"
      },
      description: {
        en: "Focus on applied machine learning, deep learning, computer vision, natural language processing, and industrial time-series data.",
        de: "Schwerpunkt auf angewandtem Machine Learning, Deep Learning, Computer Vision, NLP und industriellen Zeitreihendaten."
      },
      learnings: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP & Time-Series"]
    },
    {
      degree: {
        en: "B.E. in Mechanical Engineering",
        de: "B.E. in Maschinenbau (Mechanical Engineering)"
      },
      institution: "Nitte Meenakshi Institute of Technology (NMIT)",
      logo: "./logos/nmit.png",
      period: {
        en: "Jun 2018 – Jun 2022",
        de: "Juni 2018 – Juni 2022"
      },
      location: {
        en: "Bangalore, India",
        de: "Bangalore, Indien"
      },
      description: {
        en: "Foundation in engineering mathematics, control and sensor systems, and manufacturing processes.",
        de: "Grundlagen in Ingenieurmathematik, Regelungs- und Sensorsystemen sowie Fertigungstechnik."
      },
      learnings: ["Engineering Math", "Sensor Systems", "Manufacturing"]
    }
  ],

  // ── 7. CERTIFICATIONS ─────────────────────────────────────────────────────
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
          "Designing retrieval pipelines, vector search, query routing, and grounded LLM answers."
        ],
        de: [
          "Aufbau von Retrieval-Pipelines, Vektorsuche, Query Routing und quellenbasierten LLM-Antworten."
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
          "Connecting AI assistants to live databases and external tools using MCP servers and clients."
        ],
        de: [
          "Anbindung von KI-Assistenten an Live-Datenbanken und externe Tools über MCP-Server und -Clients."
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
          "Schema design, joins, aggregations, window functions, and analytical SQL in PostgreSQL."
        ],
        de: [
          "Tabellendesign, Joins, Aggregationen, Window Functions und analytisches SQL in PostgreSQL."
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
          "Full professional and academic working proficiency in English."
        ],
        de: [
          "Verhandlungssichere Englischkenntnisse (Niveau C1) für Studium und Beruf."
        ]
      },
      url: "https://drive.google.com/file/d/1EC2oMixob6G-yRar154jtkdX0i5i6KU1/view?usp=sharing"
    },
    {
      enabled: true,
      name: {
        en: "telc Deutsch A2 (B1 in progress)",
        de: "telc Deutsch A2 (B1 in Arbeit)"
      },
      authority: "telc gGmbH",
      logo: "./logos/telc.png",
      date: "Deutsch A2 / B1",
      description: {
        en: [
          "Certified A2 German examination completed; currently advancing through B1 in Germany."
        ],
        de: [
          "Abgeschlossene telc-A2-Prüfung; aktuell im weiteren Ausbau auf Niveau B1."
        ]
      },
      url: "https://drive.google.com/file/d/1LLZOhJlORl5Y8E5zR-aLSl2at-98Iy4e/view?usp=sharing"
    }
  ]
};
