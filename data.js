/**
 * ============================================================================
 * VAMSI GANESH — PORTFOLIO DATA CONFIGURATION (data.js)
 * ============================================================================
 *
 * HOW TO UPDATE YOUR PORTFOLIO IN THE FUTURE:
 * 1. To add a new PROJECT: Copy an object inside `projects` and edit the fields.
 *    - `category`: "personal" or "academic"
 *    - `tags`: Used for the interactive filter bar (e.g., "Agentic AI", "RAG & LLMs", "Cloud & AWS", "Computer Vision", "Classical ML")
 *    - `architecture`: An array of pipeline steps that automatically renders an interactive flow diagram!
 *
 * 2. To add a new CERTIFICATION: Copy an object inside `certifications` and update
 *    the `title`, `issuer`, `date`, `credentialUrl`, and `skills`.
 *    (Set `enabled: false` on any item if you want to hide a placeholder until ready.)
 *
 * 3. To add a FUTURE SECTION (e.g., Publications, Awards, Hackathons, Blog):
 *    Scroll to `customSections` at the bottom, set `enabled: true`, and add items!
 * ============================================================================
 */

window.PORTFOLIO_DATA = {
  // ── 1. PERSONAL & HERO INFO ───────────────────────────────────────────────
  profile: {
    name: "Vamsi Ganesh",
    logoText: "VG",
    role: "AI & Agentic Systems Engineer",
    statusBadge: "Open to Master's Thesis & Working Student Roles in Germany",
    available: true,
    location: "Amberg / Bavaria, Germany",
    university: "OTH Amberg-Weiden",
    degree: "M.Sc. AI for Industrial Applications",
    email: "vamsiganesh525@gmail.com",
    github: "https://github.com/this-is-vamsi",
    linkedin: "https://linkedin.com/in/vamsi-ganesh",
    // Drop your PDF resume into the folder as "Vamsi_Ganesh_CV.pdf" and set this path:
    resumeUrl: "./Vamsi_Ganesh_CV.pdf",
    heroTitle: {
      line1: "Building systems that",
      highlight: "think, retrieve,",
      line2: "and act in production."
    },
    heroBio:
      "Master's student in Artificial Intelligence at OTH Amberg-Weiden, Germany. I architect multi-agent workflows, serverless RAG pipelines, and industrial ML solutions — backed by applied data engineering experience at Robert Bosch."
  },

  // ── 2. TOP BENTO GRID HIGHLIGHTS ──────────────────────────────────────────
  bento: {
    aboutParagraphs: [
      "I'm Vamsi — an AI engineer focused on bridging the gap between raw foundation models and reliable, production-grade industrial systems. Currently pursuing my M.Sc. in Artificial Intelligence for Industrial Applications at OTH Amberg-Weiden.",
      "Before moving to Germany, I spent a year at Robert Bosch GmbH in Bangalore automating cross-functional KPI ecosystems and building rejection-analysis pipelines that directly reduced manufacturing scrap rates. Today, I combine that industrial rigor with LangGraph multi-agent orchestration, hybrid RAG, and cloud-native deployment."
    ],
    availabilityCard: {
      badge: "Actively Interviewing",
      title: "Seeking Thesis & Working Student Roles",
      subtitle: "GenAI · Agentic Workflows · Production RAG · Applied ML",
      location: "Germany (On-site / Hybrid / Remote)",
      startWindow: "Immediate / Flexible Start",
      languages: "English (C1 · IELTS 7.5) · German (A2)"
    },
    metrics: [
      {
        value: "9+",
        label: "End-to-End AI & ML Systems",
        detail: "Multi-agent, AWS RAG, CV & NLP"
      },
      {
        value: "1.5 Yrs",
        label: "Industry Experience",
        detail: "Robert Bosch GmbH & Access Million"
      },
      {
        value: "40+ hrs",
        label: "Saved Monthly at Bosch",
        detail: "Via automated PMO & BI pipelines"
      },
      {
        value: "12%",
        label: "Scrap Rate Reduction",
        detail: "Driven by production analytics"
      }
    ],
    coreStack: [
      { name: "LangGraph", category: "Agents" },
      { name: "LangChain", category: "Agents" },
      { name: "AWS Bedrock", category: "Cloud AI" },
      { name: "OpenSearch", category: "Vector DB" },
      { name: "ChromaDB", category: "Vector DB" },
      { name: "FastAPI", category: "Backend" },
      { name: "PyTorch", category: "Deep Learning" },
      { name: "YOLOv8 / v12", category: "Vision" },
      { name: "scikit-learn", category: "ML" },
      { name: "Docker", category: "Infra" },
      { name: "AWS Lambda", category: "Serverless" },
      { name: "Python & SQL", category: "Core" }
    ]
  },

  // ── 3. PROJECTS (WITH INTERACTIVE ARCHITECTURE FLOWS) ─────────────────────
  projects: [
    {
      id: "context2insight",
      name: "Context2Insight: Multi-Agent BI & Analytics System",
      category: "personal",
      featured: true,
      date: "10/2026",
      impactBadge: "3-Agent Orchestration · Self-Correcting SQL",
      tags: ["Agentic AI", "RAG & LLMs"],
      stack: ["LangGraph", "FastAPI", "ChromaDB", "NLP-to-SQL", "SQLite", "Streamlit", "OpenAI"],
      description:
        "Three-agent LangGraph pipeline (Project Manager, Business Analyst, Data Analyst) that automates end-to-end business intelligence reporting — combining RAG context retrieval, NLP-to-SQL with self-correcting validation loops, and iterative cross-agent review deployed via FastAPI microservices.",
      github: "https://github.com/this-is-vamsi/Multi-Agent-BI-Analytics-System",
      liveUrl: "",
      architecture: [
        { step: "User Business Query", detail: "Streamlit Frontend", type: "input" },
        { step: "PM Agent", detail: "Task Decomposition", type: "agent" },
        { step: "BA Agent + ChromaDB", detail: "Domain RAG Context", type: "storage" },
        { step: "Data Analyst Agent", detail: "NLP-to-SQL + Validation Loop", type: "compute" },
        { step: "Executive BI Report", detail: "FastAPI Microservice Output", type: "output" }
      ]
    },
    {
      id: "qc-ai-assistant",
      name: "Production-Grade Quality Control AI Assistant",
      category: "personal",
      featured: true,
      date: "09/2026",
      impactBadge: "ReAct Router · 3 ML Models + Vector RAG",
      tags: ["Agentic AI", "RAG & LLMs", "Classical ML"],
      stack: ["LangGraph", "ChromaDB", "OpenAI API", "scikit-learn", "LangChain", "Streamlit"],
      description:
        "Agentic LLM system built on LangGraph (ReAct architecture) that dynamically routes manufacturing quality queries between three specialized scikit-learn predictive models and a ChromaDB SOP retriever, wrapped in a no-code Streamlit operator interface.",
      github: "https://github.com/this-is-vamsi/Production-Grade-Quality-Control-AI-Assistant",
      liveUrl: "",
      architecture: [
        { step: "Operator Query", detail: "Inspection / Defect Input", type: "input" },
        { step: "LangGraph ReAct Agent", detail: "Dynamic Tool Router", type: "agent" },
        { step: "3x scikit-learn Models", detail: "Defect & Quality Prediction", type: "compute" },
        { step: "ChromaDB Retriever", detail: "SOP & QA Manual RAG", type: "storage" },
        { step: "Actionable QC Decision", detail: "Streamlit Dashboard", type: "output" }
      ]
    },
    {
      id: "serverless-aws-rag",
      name: "Serverless RAG Pipeline on AWS",
      category: "personal",
      featured: true,
      date: "09/2026",
      impactBadge: "100% Serverless · Cited Q&A",
      tags: ["RAG & LLMs", "Cloud & AWS"],
      stack: ["AWS Lambda", "Amazon Bedrock", "OpenSearch Serverless", "API Gateway", "Amazon S3"],
      description:
        "Cloud-native document intelligence pipeline featuring S3-triggered AWS Lambda functions for automated PDF ingestion, Amazon Titan embeddings indexed in OpenSearch Serverless, and grounded Q&A with source citations powered by Amazon Nova Lite via API Gateway.",
      github: "https://github.com/this-is-vamsi/RAG-Pipeline-AWS",
      liveUrl: "",
      architecture: [
        { step: "Amazon S3 Bucket", detail: "PDF Upload Trigger", type: "input" },
        { step: "AWS Lambda Ingest", detail: "Chunking & Titan Embeddings", type: "compute" },
        { step: "OpenSearch Serverless", detail: "Vector Index Store", type: "storage" },
        { step: "API Gateway + Bedrock", detail: "Amazon Nova Lite Synthesis", type: "agent" },
        { step: "Cited Response", detail: "Grounded JSON Output", type: "output" }
      ]
    },
    {
      id: "mini-llm-scratch",
      name: "Mini LLM: Transformer from Scratch + Fine-Tuning",
      category: "personal",
      featured: false,
      date: "09/2026",
      impactBadge: "120K Scratch vs. 124M GPT-2",
      tags: ["RAG & LLMs"],
      stack: ["TensorFlow", "Keras", "HuggingFace Transformers", "GPT-2", "TinyStories"],
      description:
        "Implemented a decoder-only Transformer (120K parameters) from the ground up with causal multi-head self-attention, positional encoding, and top-k sampling; benchmarked against a fine-tuned GPT-2 (124M parameters) on the TinyStories corpus to evaluate representation scaling.",
      github: "https://github.com/this-is-vamsi/mini-llm-from-scratch",
      liveUrl: "",
      architecture: [
        { step: "TinyStories Corpus", detail: "Tokenization & Prep", type: "input" },
        { step: "Causal Self-Attention", detail: "Custom 120K Decoder Blocks", type: "compute" },
        { step: "GPT-2 Fine-Tuning", detail: "124M Transfer Learning", type: "agent" },
        { step: "Top-k Sampling", detail: "Autoregressive Generation", type: "output" }
      ]
    },
    {
      id: "equations-kg",
      name: "Equations Knowledge Graph from Scientific Literature",
      category: "academic",
      featured: true,
      date: "01/2026",
      impactBadge: "84% Semantic Coverage · 352 Equations",
      tags: ["Classical ML"],
      stack: ["spaCy", "BeautifulSoup", "MathML", "Python", "arXiv HTML API", "Knowledge Graphs"],
      description:
        "Deterministic, multi-tiered NLP pipeline that parses structured mathematical equation knowledge graphs across 66 arXiv research papers — achieving 84% symbol-meaning coverage across 352 equations without relying on expensive LLM calls.",
      github: "https://github.com/this-is-vamsi/Equations-Knowledge-Graph",
      liveUrl: "",
      architecture: [
        { step: "66 arXiv Papers", detail: "HTML & MathML Ingestion", type: "input" },
        { step: "BeautifulSoup Parser", detail: "Equation & Context Extraction", type: "compute" },
        { step: "Tiered spaCy NLP", detail: "Dependency & Symbol Linking", type: "agent" },
        { step: "Equation Knowledge Graph", detail: "84% Coverage on 352 Eqs", type: "output" }
      ]
    },
    {
      id: "brain-tumor-yolo",
      name: "CNN vs. Self-Attention for Brain Tumor Detection",
      category: "academic",
      featured: false,
      date: "02/2026",
      impactBadge: "6,000 MRI Scans · YOLOv8 vs YOLOv12",
      tags: ["Computer Vision"],
      stack: ["YOLOv8", "YOLOv12", "PyTorch", "Dice Score", "Boundary IoU", "mAP"],
      description:
        "Rigorous architectural comparison between YOLOv8 (CSPDarknet CNN backbone) and YOLOv12 (Area Self-Attention) on the BRISC2025 medical imaging dataset (6,000 MRI scans across 3 tumor classes), evaluating clinical boundary precision via Dice Score, Boundary IoU, and mAP.",
      github: "https://github.com/this-is-vamsi/CNN-Self-Attention-Brain-Tumor-Detection",
      liveUrl: "",
      architecture: [
        { step: "BRISC2025 Dataset", detail: "6,000 Labeled MRI Scans", type: "input" },
        { step: "YOLOv8 (CNN Backbone)", detail: "CSPDarknet Feature Extraction", type: "compute" },
        { step: "YOLOv12 (Area Attention)", detail: "Self-Attention Segmentation", type: "agent" },
        { step: "Clinical Evaluation", detail: "Dice · Boundary IoU · mAP", type: "output" }
      ]
    },
    {
      id: "ml-challenge-ensemble",
      name: "ML Challenge: Stacked Ensemble & Piecewise Regression",
      category: "academic",
      featured: false,
      date: "01/2026",
      impactBadge: "R² 0.78 → 0.93 · Piecewise R² 0.9999",
      tags: ["Classical ML"],
      stack: ["XGBoost", "LightGBM", "Optuna", "scikit-learn", "OLS", "RFE"],
      description:
        "Boosted regression performance from R²=0.78 to R²=0.93 by engineering a two-layer stacked ensemble (LightGBM + Gradient Boosting + Random Forest feeding an XGBoost meta-learner) with Bayesian Optuna tuning; achieved R²=0.9999 via piecewise OLS regime discovery.",
      github: "https://github.com/this-is-vamsi/ML-Challenge-OTHAW-So26",
      liveUrl: "",
      architecture: [
        { step: "Feature Engineering", detail: "RFE & Regime Segmentation", type: "input" },
        { step: "Level-1 Base Models", detail: "LightGBM + GBR + Random Forest", type: "compute" },
        { step: "Optuna Meta-Learner", detail: "Tuned XGBoost Stacker", type: "agent" },
        { step: "High-Precision Target", detail: "0.93 Ensemble / 0.9999 OLS", type: "output" }
      ]
    },
    {
      id: "rosbot-navigation",
      name: "RosBot Autonomous Mapping & Hazard Navigation",
      category: "academic",
      featured: false,
      date: "02/2026",
      impactBadge: "360° LiDAR SLAM · A* + OpenCV Fusion",
      tags: ["Computer Vision"],
      stack: ["ROS", "LiDAR", "OpenCV", "A* Path Planning", "Webots", "Python"],
      description:
        "Unified autonomous robotics controller integrating 360° LiDAR occupancy grid mapping and A* global path planning with real-time OpenCV camera fusion for pillar localization and dynamic floor-hazard avoidance inside Webots.",
      github: "https://github.com/this-is-vamsi/RosBot-Autonomous-Mapping-Navigation-Webots",
      liveUrl: "",
      architecture: [
        { step: "LiDAR + RGB Sensors", detail: "360° Scan & Camera Feed", type: "input" },
        { step: "Occupancy Grid & OpenCV", detail: "Map Building & Hazard Vision", type: "compute" },
        { step: "A* Path Planner", detail: "Dynamic Obstacle Re-routing", type: "agent" },
        { step: "ROS Velocity Control", detail: "Autonomous Webots Navigation", type: "output" }
      ]
    },
    {
      id: "customer-churn",
      name: "Banking Customer Churn Prediction Pipeline",
      category: "personal",
      featured: false,
      date: "12/2025",
      impactBadge: "0.91 ROC-AUC · 10K Records",
      tags: ["Classical ML"],
      stack: ["scikit-learn", "Random Forest", "Grid Search CV", "Pandas", "NumPy", "Matplotlib"],
      description:
        "End-to-end churn classification study across 10,000 retail banking profiles; benchmarked Logistic Regression, Decision Trees, and Random Forest, achieving 0.91 ROC-AUC through hyperparameter Grid Search and 10-fold stratified cross-validation.",
      github: "https://github.com/this-is-vamsi/Customer-Churn-Prediction",
      liveUrl: "",
      architecture: [
        { step: "10K Banking Profiles", detail: "EDA & Feature Scaling", type: "input" },
        { step: "Model Benchmarking", detail: "LogReg vs. DT vs. Random Forest", type: "compute" },
        { step: "10-Fold GridSearchCV", detail: "Hyperparameter Optimization", type: "agent" },
        { step: "0.91 ROC-AUC Classifier", detail: "Retention Risk Scoring", type: "output" }
      ]
    }
  ],

  // ── 4. SKILLS MATRIX ──────────────────────────────────────────────────────
  skills: [
    {
      category: "Agentic AI & LLMs",
      icon: "cpu",
      description: "Multi-agent orchestration, grounded retrieval & tool-use systems",
      items: [
        "LangGraph & LangChain",
        "ReAct & Multi-Agent Orchestration",
        "Production RAG Pipelines",
        "NLP-to-SQL with Validation Loops",
        "Amazon Bedrock & Ollama",
        "HuggingFace Transformers & Fine-Tuning"
      ]
    },
    {
      category: "Machine Learning & Vision",
      icon: "layers",
      description: "Classical tabular ensembles, deep learning & medical/robotic perception",
      items: [
        "PyTorch, TensorFlow & Keras",
        "scikit-learn, XGBoost & LightGBM",
        "Computer Vision (YOLOv8 / YOLOv12, OpenCV)",
        "Hyperparameter Tuning (Optuna, GridSearchCV)",
        "Knowledge Graphs & spaCy NLP",
        "Pandas, NumPy & Statistical Modeling"
      ]
    },
    {
      category: "Cloud, Vector DBs & MLOps",
      icon: "cloud",
      description: "Serverless AWS infrastructure, vector indexing & API microservices",
      items: [
        "AWS Lambda, S3 & API Gateway",
        "Amazon OpenSearch Serverless",
        "ChromaDB & Vector Indexing",
        "FastAPI & Streamlit Microservices",
        "Docker, Git & GitHub Workflows",
        "Power BI, Power Automate & RPA"
      ]
    },
    {
      category: "Languages & Core",
      icon: "terminal",
      description: "Programming languages & international communication",
      items: [
        "Python (Primary Engineering Language)",
        "SQL (PostgreSQL, SQLite, Analytical ETL)",
        "ROS (Robot Operating System)",
        "English — C1 Proficient (IELTS 7.5)",
        "German — A2 (Actively advancing)"
      ]
    }
  ],

  // ── 5. CERTIFICATIONS & CREDENTIALS ───────────────────────────────────────
  // Tip: Edit any of these or add new ones! Set `enabled: false` to hide an item.
  certifications: [
    {
      enabled: true,
      title: "Generative AI, LangGraph & Multi-Agent Systems",
      issuer: "DeepLearning.AI / LangChain Academy",
      date: "2025 – 2026",
      badgeText: "Agentic AI",
      skills: ["LangGraph", "ReAct Agents", "RAG", "Tool Calling"],
      credentialUrl: "https://github.com/this-is-vamsi",
      verifyLabel: "View Applied Projects"
    },
    {
      enabled: true,
      title: "Cloud-Native Serverless RAG & AWS Bedrock Architecture",
      issuer: "AWS Cloud & AI Engineering Track",
      date: "2026",
      badgeText: "AWS AI",
      skills: ["Amazon Bedrock", "OpenSearch Serverless", "AWS Lambda", "Titan Embeddings"],
      credentialUrl: "https://github.com/this-is-vamsi/RAG-Pipeline-AWS",
      verifyLabel: "View Architecture Repo"
    },
    {
      enabled: true,
      title: "IELTS Academic — C1 English Proficiency (Band 7.5)",
      issuer: "British Council / IDP",
      date: "Verified Credential",
      badgeText: "C1 · Band 7.5",
      skills: ["Technical Communication", "Research Writing", "Cross-Functional Collaboration"],
      credentialUrl: "",
      verifyLabel: "Verified Score"
    }
    // ── EXAMPLE TEMPLATE FOR YOUR NEXT CERTIFICATION (Uncomment or copy!) ──
    // {
    //   enabled: true,
    //   title: "AWS Certified AI Practitioner / Machine Learning Specialty",
    //   issuer: "Amazon Web Services (AWS)",
    //   date: "2026",
    //   badgeText: "AWS Certified",
    //   skills: ["Bedrock", "SageMaker", "MLOps"],
    //   credentialUrl: "https://www.credly.com/your-link",
    //   verifyLabel: "Verify Credential"
    // }
  ],

  // ── 6. PROFESSIONAL EXPERIENCE ────────────────────────────────────────────
  experience: [
    {
      role: "Data Science Intern",
      company: "Access Million",
      location: "Pune, India (Remote)",
      date: "11/2023 – 04/2024",
      type: "Internship",
      highlights: ["POS Recommendation Engine", "Live Market Forecasting", "Time-Series Anomaly Detection"],
      bullets: [
        "Engineered machine learning models for market basket analysis and customer product recommendations on retail POS datasets, uncovering high-conversion cross-selling patterns.",
        "Built a real-time share market trend analysis application that ingested live ticker feeds, evaluated multi-stock momentum indicators, and generated predictive price forecasts.",
        "Conducted industrial sensor time-series analysis to detect fluctuating machine performance parameters and isolate early-stage failure signatures."
      ]
    },
    {
      role: "Data Analyst",
      company: "Robert Bosch GmbH",
      location: "Bangalore, India",
      date: "09/2022 – 09/2023",
      type: "Full-Time",
      highlights: ["12% Scrap Reduction", "40+ Man-Hours/Mo Saved", "10+ Automated KPI Suites"],
      bullets: [
        "Automated 10+ enterprise KPI and MIS reporting pipelines for delivery and resource controlling using Power BI and RPA, integrating SharePoint for real-time cross-functional visibility.",
        "Digitized PMO governance workflows by replacing manual spreadsheet checklists with Power Automate and Power Apps — saving 40+ engineering man-hours per month.",
        "Architected an end-to-end production rejection analysis dashboard to surface manufacturing bottlenecks and defect risks, driving daily shop-floor reviews that achieved a 12% reduction in scrap rates."
      ]
    }
  ],

  // ── 7. EDUCATION ──────────────────────────────────────────────────────────
  education: [
    {
      degree: "M.Sc. Artificial Intelligence for Industrial Applications",
      institution: "OTH Amberg-Weiden (Ostbayerische Technische Hochschule)",
      location: "Amberg, Germany",
      date: "10/2024 – Present",
      focus: [
        "Deep Learning & Neural Architectures",
        "Machine Learning & Ensemble Methods",
        "Modern Databases, NoSQL & Knowledge Graphs",
        "Autonomous Robotics, ROS & Computer Vision"
      ]
    },
    {
      degree: "B.E. Mechanical Engineering",
      institution: "Nitte Meenakshi Institute of Technology (NMIT)",
      location: "Bangalore, India",
      date: "06/2018 – 06/2022",
      focus: [
        "Industrial Systems, Manufacturing Process Optimization & Quantitative Engineering"
      ]
    }
  ],

  // ── 8. FUTURE / CUSTOM SECTIONS (PLUG-AND-PLAY) ───────────────────────────
  // Want to add "Publications", "Hackathons", or "Awards" in the future?
  // Simply flip `enabled: true` on any section below (or add a new one) and it
  // will automatically appear in the navigation bar and page!
  customSections: [
    {
      id: "publications",
      navLabel: "Publications",
      sectionLabel: "Research & Writing",
      sectionTitle: "Publications & Technical Articles",
      enabled: false, // <-- Set to `true` whenever you want this section to appear!
      items: [
        {
          title: "Your Future Paper or Technical Blog Post Title",
          subtitle: "Conference / Journal / Medium · 2026",
          badge: "Preprint / Article",
          description: "Brief summary of your research findings, methodology, or technical deep-dive.",
          linkUrl: "https://github.com/this-is-vamsi",
          linkText: "Read Paper"
        }
      ]
    }
  ]
};
