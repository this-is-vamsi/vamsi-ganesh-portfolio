/**
 * ============================================================================
 * VAMSI GANESH — PORTFOLIO ENGINE (app.js)
 * Dynamically renders all sections from `window.PORTFOLIO_DATA` (data.js)
 * ============================================================================
 */

(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA not found. Make sure data.js is loaded before app.js.");
    return;
  }

  // ── SVG ICONS ─────────────────────────────────────────────────────────────
  const ICONS = {
    github: `<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`,
    linkedin: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    mail: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    external: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>`,
    workflow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a3 3 0 0 0 3 3h6"/><circle cx="18" cy="6" r="3"/></svg>`,
    chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    cpu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M20 15h2M20 9h2M15 20v2M9 20v2M2 15h2M2 9h2"/></svg>`,
    layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    cloud: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    terminal: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    pin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    calendar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    globe: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    award: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`
  };

  // ── 1. THEME MANAGEMENT (Default: Dark Mode) ──────────────────────────────
  const rootEl = document.documentElement;
  const savedTheme = localStorage.getItem("vg_theme") || "dark";
  rootEl.setAttribute("data-theme", savedTheme);

  function updateThemeButtonIcon() {
    const btn = document.getElementById("themeToggleBtn");
    if (!btn) return;
    const current = rootEl.getAttribute("data-theme");
    btn.innerHTML = current === "dark" ? ICONS.sun : ICONS.moon;
    btn.setAttribute("title", current === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
  }

  // ── 2. RENDER NAVBAR ──────────────────────────────────────────────────────
  function renderNavbar() {
    const enabledCerts = (data.certifications || []).filter(c => c.enabled !== false);
    const enabledCustom = (data.customSections || []).filter(s => s.enabled);

    const navLinksEl = document.getElementById("navLinks");
    const links = [
      { href: "#overview", label: "Overview" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" }
    ];

    if (enabledCerts.length > 0) {
      links.push({ href: "#certifications", label: "Credentials" });
    }
    links.push({ href: "#experience", label: "Experience" });

    enabledCustom.forEach(sec => {
      links.push({ href: `#${sec.id}`, label: sec.navLabel || sec.sectionTitle });
    });

    links.push({ href: "#contact", label: "Contact" });

    navLinksEl.innerHTML = links
      .map(l => `<li><a href="${l.href}">${l.label}</a></li>`)
      .join("");

    const navBrandText = document.getElementById("navBrandName");
    const navMonogram = document.getElementById("navMonogram");
    if (navBrandText) navBrandText.textContent = data.profile.name;
    if (navMonogram) navMonogram.textContent = data.profile.logoText || "VG";

    const navCvBtn = document.getElementById("navCvBtn");
    if (navCvBtn) {
      navCvBtn.innerHTML = `${ICONS.download} <span>Resume / CV</span>`;
      navCvBtn.addEventListener("click", handleResumeDownload);
    }

    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      updateThemeButtonIcon();
      themeBtn.addEventListener("click", () => {
        const next = rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
        rootEl.setAttribute("data-theme", next);
        localStorage.setItem("vg_theme", next);
        updateThemeButtonIcon();
      });
    }
  }

  // ── 3. RENDER HERO ────────────────────────────────────────────────────────
  function renderHero() {
    const p = data.profile;
    const container = document.getElementById("heroContent");
    container.innerHTML = `
      <div class="status-pill">
        <span class="status-dot"></span>
        <span>${p.statusBadge}</span>
      </div>
      <h1 class="hero-title">
        ${p.heroTitle.line1}<br>
        <span class="serif-italic">${p.heroTitle.highlight}</span>
        ${p.heroTitle.line2}
      </h1>
      <p class="hero-bio">${p.heroBio}</p>
      <div class="hero-cta-row">
        <a href="#projects" class="btn btn-accent">
          ${ICONS.workflow} Explore AI Systems (${data.projects.length})
        </a>
        <button type="button" id="heroCvBtn" class="btn btn-primary">
          ${ICONS.download} Download CV
        </button>
        <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline">
          ${ICONS.github} GitHub
        </a>
        <a href="${p.linkedin}" target="_blank" rel="noopener" class="btn btn-outline">
          ${ICONS.linkedin} LinkedIn
        </a>
      </div>
    `;

    document.getElementById("heroCvBtn")?.addEventListener("click", handleResumeDownload);
  }

  // ── 4. RENDER OVERVIEW BENTO GRID ─────────────────────────────────────────
  function renderOverviewBento() {
    const b = data.bento;
    const grid = document.getElementById("overviewBentoGrid");

    const bioHtml = b.aboutParagraphs.map(p => `<p>${p}</p>`).join("");
    const av = b.availabilityCard;

    const metricsHtml = b.metrics
      .map(
        m => `
        <div class="metric-box">
          <div class="metric-val">${m.value}</div>
          <div class="metric-lbl">${m.label}</div>
          <div class="metric-dtl">${m.detail}</div>
        </div>
      `
      )
      .join("");

    const stackHtml = b.coreStack
      .map(
        s => `
        <span class="stack-chip">
          ${s.name} <small>${s.category}</small>
        </span>
      `
      )
      .join("");

    grid.innerHTML = `
      <!-- About Bio Card -->
      <article class="spotlight-card bento-bio">
        <div>
          <div class="card-kicker">// 01 · ENGINEER PROFILE</div>
          <h3 style="font-size:1.35rem;font-weight:700;margin-bottom:14px;letter-spacing:-0.02em;">
            Bridging Foundation Models &amp; Industrial Reliability
          </h3>
          ${bioHtml}
        </div>
      </article>

      <!-- Availability & Location Card -->
      <article class="spotlight-card bento-availability">
        <div class="avail-header">
          <span class="card-kicker" style="margin-bottom:0;">// STATUS</span>
          <span class="avail-badge">
            <span class="status-dot" style="width:6px;height:6px;"></span>
            ${av.badge}
          </span>
        </div>
        <h3 class="avail-title">${av.title}</h3>
        <p class="avail-sub">${av.subtitle}</p>
        <ul class="avail-meta">
          <li>${ICONS.pin} <span>${av.location}</span></li>
          <li>${ICONS.calendar} <span>${av.startWindow}</span></li>
          <li>${ICONS.globe} <span>${av.languages}</span></li>
        </ul>
        <div style="margin-top:20px;">
          <a href="#contact" class="btn btn-accent" style="width:100%;justify-content:center;padding:9px 16px;">
            ${ICONS.mail} Schedule / Reach Out
          </a>
        </div>
      </article>

      <!-- Impact Metrics Card -->
      <article class="spotlight-card bento-metrics">
        <div class="card-kicker">// 02 · MEASURED IMPACT</div>
        <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:10px;">
          Production &amp; Research Highlights
        </h3>
        <div class="metrics-grid">
          ${metricsHtml}
        </div>
      </article>

      <!-- Core Stack Card -->
      <article class="spotlight-card bento-stack">
        <div class="card-kicker">// 03 · PRIMARY ARSENAL</div>
        <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:6px;">
          Core Agentic, Cloud &amp; ML Stack
        </h3>
        <p style="font-size:0.83rem;color:var(--fg-subtle);">
          Production tools used across my personal and academic engineering systems:
        </p>
        <div class="stack-pills">
          ${stackHtml}
        </div>
      </article>
    `;
  }

  // ── 5. RENDER PROJECTS WITH FILTERING & ARCHITECTURE DIAGRAMS ─────────────
  let activeCategory = "all";
  let activeTag = "All";

  function renderProjectControls() {
    const allCount = data.projects.length;
    const personalCount = data.projects.filter(p => p.category === "personal").length;
    const academicCount = data.projects.filter(p => p.category === "academic").length;

    const catContainer = document.getElementById("projectCategoryTabs");
    catContainer.innerHTML = `
      <button class="cat-tab ${activeCategory === "all" ? "active" : ""}" data-cat="all">
        All Systems (${allCount})
      </button>
      <button class="cat-tab ${activeCategory === "personal" ? "active" : ""}" data-cat="personal">
        Personal (${personalCount})
      </button>
      <button class="cat-tab ${activeCategory === "academic" ? "active" : ""}" data-cat="academic">
        Academic Research (${academicCount})
      </button>
    `;

    catContainer.querySelectorAll(".cat-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        renderProjectControls();
        renderProjectsGrid();
      });
    });

    // Collect unique tags
    const tagSet = new Set(["All"]);
    data.projects.forEach(p => (p.tags || []).forEach(t => tagSet.add(t)));

    const tagContainer = document.getElementById("projectTagFilters");
    tagContainer.innerHTML = Array.from(tagSet)
      .map(
        tag => `
        <button class="tag-btn ${activeTag === tag ? "active" : ""}" data-tag="${tag}">
          ${tag === "All" ? "All Domains" : tag}
        </button>
      `
      )
      .join("");

    tagContainer.querySelectorAll(".tag-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTag = btn.dataset.tag;
        renderProjectControls();
        renderProjectsGrid();
      });
    });
  }

  function renderProjectsGrid() {
    const grid = document.getElementById("projectsGrid");
    const filtered = data.projects.filter(p => {
      const catMatch = activeCategory === "all" || p.category === activeCategory;
      const tagMatch = activeTag === "All" || (p.tags && p.tags.includes(activeTag));
      return catMatch && tagMatch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="spotlight-card" style="grid-column:span 2;text-align:center;padding:48px 24px;">
          <p style="color:var(--fg-secondary);margin-bottom:14px;">No projects match that exact filter combination.</p>
          <button class="btn btn-outline" id="resetFiltersBtn">Reset Filters</button>
        </div>
      `;
      document.getElementById("resetFiltersBtn")?.addEventListener("click", () => {
        activeCategory = "all";
        activeTag = "All";
        renderProjectControls();
        renderProjectsGrid();
      });
      return;
    }

    grid.innerHTML = filtered
      .map((proj, idx) => {
        const isFeaturedSpan = idx === 0 && filtered.length > 2;
        const archOpenByDefault = idx === 0; // First project shows interactive architecture expanded by default

        const stackTags = (proj.stack || [])
          .map(s => `<span class="tech-tag">${s}</span>`)
          .join("");

        let archHtml = "";
        if (proj.architecture && proj.architecture.length > 0) {
          const stepsHtml = proj.architecture
            .map((node, nIdx) => {
              const arrow =
                nIdx < proj.architecture.length - 1
                  ? `<div class="arch-arrow" aria-hidden="true">→</div>`
                  : "";
              return `
                <div class="arch-node" data-type="${node.type || "compute"}">
                  <span class="arch-node-type">${node.type || "step"}</span>
                  <div class="arch-node-title">${node.step}</div>
                  <div class="arch-node-detail">${node.detail}</div>
                </div>
                ${arrow}
              `;
            })
            .join("");

          archHtml = `
            <div class="arch-wrapper ${archOpenByDefault ? "open" : ""}" data-arch-id="${proj.id}">
              <button type="button" class="arch-toggle-bar" aria-expanded="${archOpenByDefault}">
                <span class="arch-toggle-left">
                  ${ICONS.workflow}
                  <span>Interactive System Architecture (${proj.architecture.length}-Stage Pipeline)</span>
                </span>
                <span class="arch-chevron">${ICONS.chevronDown}</span>
              </button>
              <div class="arch-diagram-body">
                <div class="arch-pipeline">
                  ${stepsHtml}
                </div>
              </div>
            </div>
          `;
        }

        return `
          <article class="spotlight-card proj-card ${isFeaturedSpan ? "featured-span" : ""}">
            <div>
              <div class="proj-top-bar">
                <div class="proj-badges">
                  <span class="badge-cat">${proj.category === "personal" ? "Personal Build" : "Academic Research"}</span>
                  ${proj.impactBadge ? `<span class="badge-impact">${proj.impactBadge}</span>` : ""}
                </div>
                <span class="proj-date">${proj.date}</span>
              </div>
              <h3 class="proj-title">${proj.name}</h3>
              <p class="proj-desc">${proj.description}</p>
              <div class="proj-stack-list">
                ${stackTags}
              </div>
              ${archHtml}
            </div>
            <div class="proj-footer">
              <a href="${proj.github}" target="_blank" rel="noopener" class="proj-link">
                ${ICONS.github} <span>View Source &amp; Architecture</span> ${ICONS.external}
              </a>
              ${
                proj.liveUrl
                  ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener" class="proj-link" style="color:var(--accent);">
                      <span>Live Demo</span> ${ICONS.external}
                     </a>`
                  : ""
              }
            </div>
          </article>
        `;
      })
      .join("");

    // Attach architecture expand/collapse listeners
    grid.querySelectorAll(".arch-toggle-bar").forEach(btn => {
      btn.addEventListener("click", () => {
        const wrapper = btn.closest(".arch-wrapper");
        const isOpen = wrapper.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen);
      });
    });

    bindSpotlightCards();
  }

  // ── 6. RENDER SKILLS MATRIX ───────────────────────────────────────────────
  function renderSkills() {
    const grid = document.getElementById("skillsBentoGrid");
    grid.innerHTML = data.skills
      .map(cat => {
        const iconSvg = ICONS[cat.icon] || ICONS.cpu;
        const pills = cat.items.map(item => `<span class="skill-pill">${item}</span>`).join("");
        return `
          <article class="spotlight-card">
            <div class="skill-cat-head">
              <div>
                <h3 class="skill-cat-title">${cat.category}</h3>
                <p class="skill-cat-desc">${cat.description}</p>
              </div>
              <div class="skill-icon-box">${iconSvg}</div>
            </div>
            <div class="skill-items-grid">
              ${pills}
            </div>
          </article>
        `;
      })
      .join("");
  }

  // ── 7. RENDER CERTIFICATIONS & CREDENTIALS ────────────────────────────────
  function renderCertifications() {
    const section = document.getElementById("certifications");
    const grid = document.getElementById("certsGrid");
    const enabledCerts = (data.certifications || []).filter(c => c.enabled !== false);

    if (enabledCerts.length === 0) {
      section.style.display = "none";
      return;
    }

    section.style.display = "block";
    grid.innerHTML = enabledCerts
      .map(cert => {
        const skillsHtml = (cert.skills || [])
          .map(s => `<span class="tech-tag">${s}</span>`)
          .join("");
        const linkHtml = cert.credentialUrl
          ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener" class="cert-link">
               ${ICONS.award} <span>${cert.verifyLabel || "Verify Credential"}</span> ${ICONS.external}
             </a>`
          : `<div class="cert-link" style="color:var(--accent-emerald);cursor:default;">
               ${ICONS.award} <span>${cert.verifyLabel || "Verified Credential"}</span>
             </div>`;

        return `
          <article class="spotlight-card cert-card">
            <div>
              <div class="cert-top">
                <span class="cert-badge">${cert.badgeText || "Credential"}</span>
                <span class="cert-date">${cert.date}</span>
              </div>
              <h3 class="cert-title">${cert.title}</h3>
              <p class="cert-issuer">${cert.issuer}</p>
              <div class="cert-skills">${skillsHtml}</div>
            </div>
            ${linkHtml}
          </article>
        `;
      })
      .join("");
  }

  // ── 8. RENDER EXPERIENCE & EDUCATION ──────────────────────────────────────
  function renderExperienceAndEducation() {
    const expStack = document.getElementById("experienceStack");
    expStack.innerHTML = data.experience
      .map(exp => {
        const highlights = (exp.highlights || [])
          .map(h => `<span class="exp-hi-pill">${h}</span>`)
          .join("");
        const bullets = (exp.bullets || []).map(b => `<li>${b}</li>`).join("");

        return `
          <article class="spotlight-card">
            <div class="exp-header">
              <h3 class="exp-role">${exp.role}</h3>
              <span class="exp-date">${exp.date}</span>
            </div>
            <p class="exp-company">${exp.company} &nbsp;·&nbsp; ${exp.location}</p>
            ${highlights ? `<div class="exp-highlights">${highlights}</div>` : ""}
            <ul class="exp-bullets">${bullets}</ul>
          </article>
        `;
      })
      .join("");

    const eduStack = document.getElementById("educationStack");
    eduStack.innerHTML = data.education
      .map(edu => {
        const focusItems = (edu.focus || []).map(f => `<li>${f}</li>`).join("");
        return `
          <article class="spotlight-card">
            <div class="exp-header">
              <h3 class="exp-role" style="font-size:1.02rem;">${edu.degree}</h3>
              <span class="exp-date">${edu.date}</span>
            </div>
            <p class="exp-company">${edu.institution} &nbsp;·&nbsp; ${edu.location}</p>
            <ul class="exp-bullets">${focusItems}</ul>
          </article>
        `;
      })
      .join("");
  }

  // ── 9. RENDER PLUG-AND-PLAY CUSTOM SECTIONS (FOR FUTURE ADDITIONS) ────────
  function renderCustomSections() {
    const mount = document.getElementById("customSectionsMount");
    const enabled = (data.customSections || []).filter(s => s.enabled);

    if (enabled.length === 0) {
      mount.innerHTML = "";
      return;
    }

    mount.innerHTML = enabled
      .map(sec => {
        const cards = (sec.items || [])
          .map(
            item => `
            <article class="spotlight-card">
              <div class="proj-top-bar">
                <span class="badge-impact">${item.badge || "Featured"}</span>
                <span class="proj-date">${item.subtitle || ""}</span>
              </div>
              <h3 class="proj-title">${item.title}</h3>
              <p class="proj-desc">${item.description}</p>
              ${
                item.linkUrl
                  ? `<a href="${item.linkUrl}" target="_blank" rel="noopener" class="proj-link">
                       <span>${item.linkText || "View Details"}</span> ${ICONS.external}
                     </a>`
                  : ""
              }
            </article>
          `
          )
          .join("");

        return `
          <section id="${sec.id}">
            <div class="section-header">
              <div>
                <div class="sec-eyebrow">// ${sec.sectionLabel || "HIGHLIGHTS"}</div>
                <h2 class="sec-title">${sec.sectionTitle}</h2>
              </div>
            </div>
            <div class="projects-grid">
              ${cards}
            </div>
          </section>
        `;
      })
      .join("");
  }

  // ── 10. RENDER INTERACTIVE CONTACT & INQUIRY COMPOSER ─────────────────────
  function renderContact() {
    const p = data.profile;
    const directMount = document.getElementById("contactDirectLinks");

    directMount.innerHTML = `
      <button type="button" class="contact-item-btn" id="copyEmailBtn">
        <span class="contact-item-left">
          ${ICONS.mail}
          <span>${p.email}</span>
        </span>
        <span class="copy-badge" id="copyEmailBadge">Click to Copy</span>
      </button>
      <a href="${p.linkedin}" target="_blank" rel="noopener" class="contact-item-btn">
        <span class="contact-item-left">
          ${ICONS.linkedin}
          <span>LinkedIn · /in/vamsi-ganesh</span>
        </span>
        <span class="copy-badge">Connect ↗</span>
      </a>
      <a href="${p.github}" target="_blank" rel="noopener" class="contact-item-btn">
        <span class="contact-item-left">
          ${ICONS.github}
          <span>GitHub · @this-is-vamsi</span>
        </span>
        <span class="copy-badge">Repositories ↗</span>
      </a>
    `;

    document.getElementById("copyEmailBtn")?.addEventListener("click", () => {
      const badge = document.getElementById("copyEmailBadge");
      navigator.clipboard.writeText(p.email).then(() => {
        badge.textContent = "Copied!";
        badge.style.color = "var(--accent-emerald)";
        setTimeout(() => {
          badge.textContent = "Click to Copy";
          badge.style.color = "";
        }, 2200);
      });
    });

    // Role inquiry templates
    const roleTemplates = {
      thesis: {
        subject: "Master's Thesis Opportunity in AI / GenAI — Vamsi Ganesh",
        body: "Hi Vamsi,\n\nWe reviewed your portfolio and Agentic AI / RAG projects and would love to discuss a potential Master's Thesis topic with our team in Germany.\n\nBest regards,"
      },
      working_student: {
        subject: "Working Student Role (AI / ML / GenAI) — Vamsi Ganesh",
        body: "Hi Vamsi,\n\nWe came across your portfolio and experience at Bosch and OTH Amberg-Weiden. We have an opening for a Working Student role in AI/ML and would like to schedule a quick chat.\n\nBest regards,"
      },
      collaboration: {
        subject: "AI Engineering Inquiry — Vamsi Ganesh",
        body: "Hi Vamsi,\n\nI explored your multi-agent and AWS RAG architectures and wanted to reach out regarding an AI engineering opportunity.\n\nBest regards,"
      }
    };

    const subjectInput = document.getElementById("inquirySubject");
    const messageInput = document.getElementById("inquiryMessage");
    const roleChips = document.querySelectorAll(".role-chip");

    function setTemplate(key) {
      const tpl = roleTemplates[key] || roleTemplates.thesis;
      if (subjectInput) subjectInput.value = tpl.subject;
      if (messageInput) messageInput.value = tpl.body;
    }

    setTemplate("thesis");

    roleChips.forEach(chip => {
      chip.addEventListener("click", () => {
        roleChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        setTemplate(chip.dataset.role);
      });
    });

    document.getElementById("inquiryForm")?.addEventListener("submit", e => {
      e.preventDefault();
      const senderName = document.getElementById("inquiryName")?.value.trim() || "";
      const senderOrg = document.getElementById("inquiryOrg")?.value.trim() || "";
      const subject = subjectInput.value.trim();
      let body = messageInput.value.trim();

      if (senderName || senderOrg) {
        body += `\n\n${senderName}${senderOrg ? ` (${senderOrg})` : ""}`;
      }

      const mailtoUrl = `mailto:${p.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    });
  }

  // ── 11. RESUME DOWNLOAD HANDLER ───────────────────────────────────────────
  function handleResumeDownload() {
    const url = data.profile.resumeUrl;
    if (!url) return;
    // Try opening the PDF; also works seamlessly once the user drops Vamsi_Ganesh_CV.pdf in the project root
    window.open(url, "_blank");
  }

  // ── 12. SPOTLIGHT CURSOR TRACKER ──────────────────────────────────────────
  function bindSpotlightCards() {
    document.querySelectorAll(".spotlight-card").forEach(card => {
      if (card.dataset.spotlightBound) return;
      card.dataset.spotlightBound = "true";
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    });
  }

  // ── 13. HERO INTERACTIVE NEURAL / AGENT NODE CANVAS ───────────────────────
  function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height, particles;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      const count = Math.min(38, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.5 + Math.random() * 1.5
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      const isDark = rootEl.getAttribute("data-theme") !== "light";
      const dotColor = isDark ? "59, 130, 246" : "37, 99, 235";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, 0.55)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 135) {
            const alpha = (1 - dist / 135) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${dotColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(step);
  }

  // ── INITIALIZE ALL ────────────────────────────────────────────────────────
  renderNavbar();
  renderHero();
  renderOverviewBento();
  renderProjectControls();
  renderProjectsGrid();
  renderSkills();
  renderCertifications();
  renderExperienceAndEducation();
  renderCustomSections();
  renderContact();
  bindSpotlightCards();
  initHeroCanvas();
})();
