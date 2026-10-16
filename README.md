# Vamsi Ganesh — AI & Agentic Systems Portfolio

A modern, data-driven **Bento Grid & Interactive Architecture Portfolio** built with zero-dependency HTML, CSS, and Vanilla JavaScript. Designed for instant deployment on **Vercel**.

---

## Folder Structure

```text
vamsi-portfolio/
├── index.html          # Main page shell & semantic layout
├── styles.css          # Linear/Vercel-style Dark & Light theme + Bento grid styles
├── data.js             # <-- EDIT THIS FILE to add projects, certifications, or new sections!
├── app.js              # Rendering engine (automatically builds the UI from data.js)
├── Vamsi_Ganesh_CV.pdf # Drop your PDF resume here so the "Download CV" buttons work
└── README.md           # Documentation & deployment guide
```

---

## How to Update Your Portfolio in the Future (Only Edit `data.js`)

You never need to touch HTML or CSS to add content. Open **`data.js`** and edit the arrays:

### 1. Adding a New Project
In `data.js`, find the `projects: [...]` list and add a new block at the top:

```js
{
  id: "my-new-agent",
  name: "Autonomous Industrial Agent",
  category: "personal", // "personal" or "academic"
  featured: true,
  date: "11/2026",
  impactBadge: "98% Tool Accuracy · LangGraph",
  tags: ["Agentic AI", "RAG & LLMs", "Cloud & AWS"],
  stack: ["LangGraph", "FastAPI", "Docker", "AWS Bedrock"],
  description: "Short summary of what the system does and the business/research impact.",
  github: "https://github.com/this-is-vamsi/your-repo",
  liveUrl: "https://your-demo-link.streamlit.app", // Leave "" if no live demo
  architecture: [
    { step: "User Input", detail: "FastAPI Endpoint", type: "input" },
    { step: "Planner Agent", detail: "LangGraph Router", type: "agent" },
    { step: "Vector Index", detail: "ChromaDB / OpenSearch", type: "storage" },
    { step: "Final Response", detail: "Validated JSON", type: "output" }
  ]
}
```

### 2. Adding or Editing Certifications
In `data.js`, scroll to `certifications: [...]`:
- Copy an existing certification object and change `title`, `issuer`, `date`, `badgeText`, `skills`, and `credentialUrl`.
- Set `enabled: false` on any card if you want to temporarily hide it.

### 3. Adding a Brand-New Section (e.g., Publications, Hackathons, Awards)
In `data.js`, scroll to `customSections: [...]` at the bottom:
- Change `enabled: false` to `enabled: true`.
- The navigation bar and page will automatically render the new section!

### 4. Adding Your Resume PDF
Place your resume PDF in this folder and name it **`Vamsi_Ganesh_CV.pdf`** (or update `resumeUrl` inside `data.js`).

---

## How to Deploy to Your Vercel Website (`vamsi-ganesh.vercel.app`)

### Option A: Push to your existing GitHub repository
Copy `index.html`, `styles.css`, `data.js`, `app.js`, and your `Vamsi_Ganesh_CV.pdf` into your existing portfolio GitHub repository folder, then run:

```bash
git add .
git commit -m "Upgrade portfolio to interactive Bento architecture with modular data.js"
git push
```
Vercel will automatically detect the push and update `https://vamsi-ganesh.vercel.app/` in ~15 seconds.

### Option B: Deploy directly from this folder via Vercel CLI
```bash
npx vercel --prod
```
