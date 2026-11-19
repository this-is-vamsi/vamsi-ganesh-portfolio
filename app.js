/**
 * ============================================================================
 * VAMSI GANESH — BILINGUAL (EN / DE) PORTFOLIO ENGINE (app.js)
 * Light Default Theme · Space Grotesk Typography · Smooth Scroll Choreography
 * ============================================================================
 */

(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  let currentLang = localStorage.getItem("vg_lang") || "en";
  let activeCategory = "ALL";
  let showAllProjects = false;

  function t(val) {
    if (val === null || val === undefined) return "";
    if (typeof val === "object" && !Array.isArray(val)) {
      return val[currentLang] !== undefined ? val[currentLang] : val.en || "";
    }
    return val;
  }

  // ── SVG ICONS ─────────────────────────────────────────────────────────────
  const ICONS = {
    github: `<svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`,
    linkedin: `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    mail: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    external: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    bot: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>`,
    brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>`,
    sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
  };

  // ── 1. THEME SETUP (LIGHT MODE BY DEFAULT) ────────────────────────────────
  const rootEl = document.documentElement;
  const savedTheme = localStorage.getItem("vg_theme_v2") || "light";
  rootEl.setAttribute("data-theme", savedTheme);

  function updateThemeIcon() {
    const btn = document.getElementById("themeToggleBtn");
    if (!btn) return;
    const isDark = rootEl.getAttribute("data-theme") === "dark";
    btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    btn.setAttribute("title", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
  }

  document.getElementById("themeToggleBtn")?.addEventListener("click", () => {
    const next = rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
    rootEl.setAttribute("data-theme", next);
    localStorage.setItem("vg_theme_v2", next);
    updateThemeIcon();
  });

  // ── 2. LANGUAGE SWITCHER (EN | DE) ────────────────────────────────────────
  function bindLanguageButtons() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
      btn.onclick = () => {
        if (currentLang === btn.dataset.lang) return;
        currentLang = btn.dataset.lang;
        localStorage.setItem("vg_lang", currentLang);
        document.documentElement.lang = currentLang;
        renderAll();
      };
    });
  }

  // ── 3. TYPEWRITER ANIMATION IN HERO ───────────────────────────────────────
  let twTimer = null;
  function startTypewriter() {
    if (twTimer) clearTimeout(twTimer);
    const el = document.getElementById("typewriterText");
    if (!el) return;

    const words = t(data.profile.roles) || ["AI & Machine Learning Student"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const currentWord = words[wordIndex % words.length];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }
      el.textContent = currentWord.substring(0, charIndex);

      let delay = isDeleting ? 35 : 70;
      if (!isDeleting && charIndex === currentWord.length) {
        delay = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 320;
      }
      twTimer = setTimeout(tick, delay);
    }
    tick();
  }

  // ── 4. RENDER NAVBAR & HERO ───────────────────────────────────────────────
  function renderNavbarAndHero() {
    const ui = data.ui[currentLang];
    const p = data.profile;

    document.getElementById("navLinks").innerHTML = `
      <li><a href="#about">${ui.nav.about}</a></li>
      <li><a href="#skills">${ui.nav.skills}</a></li>
      <li><a href="#projects">${ui.nav.projects}</a></li>
      <li><a href="#experience">${ui.nav.experience}</a></li>
      <li><a href="#education">${ui.nav.education}</a></li>
      <li><a href="#certifications">${ui.nav.certifications}</a></li>
      <li><a href="#contact">${ui.nav.contact}</a></li>
    `;

    bindLanguageButtons();
    updateThemeIcon();

    const avatarInner = p.avatar
      ? `<img src="${p.avatar}" alt="${p.name}" />`
      : `<span>${p.monogram || "VG"}</span>`;

    document.getElementById("heroMount").innerHTML = `
      <div class="hero-grid">
        <div class="reveal-item">
          <p class="hero-greeting">${ui.hero.greeting}</p>
          <h1 class="hero-name">${p.name}</h1>
          <div class="hero-typewriter-row">
            <span id="typewriterText"></span>
            <span class="typewriter-cursor" aria-hidden="true"></span>
          </div>
          <div class="hero-location">
            <span>${ui.hero.locationBadge}</span>
          </div>
          <p class="hero-bio">${t(p.heroBio)}</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">
              ${ui.hero.viewProjects}
            </a>
            <a href="${p.resumeUrl}" target="_blank" rel="noopener" class="btn btn-secondary">
              ${ICONS.download} ${ui.hero.downloadCv}
            </a>
            <a href="#contact" class="btn btn-secondary">
              ${ui.hero.contactMe}
            </a>
          </div>
          <div class="hero-socials">
            <a href="${p.github}" target="_blank" rel="noopener" class="social-icon-btn" title="GitHub">
              ${ICONS.github}
            </a>
            <a href="${p.linkedin}" target="_blank" rel="noopener" class="social-icon-btn" title="LinkedIn">
              ${ICONS.linkedin}
            </a>
            <a href="mailto:${p.email}" class="social-icon-btn" title="Email">
              ${ICONS.mail}
            </a>
          </div>
        </div>

        <div class="hero-visual-wrap reveal-item" style="--reveal-delay: 120ms;">
          <div class="hero-avatar-card">
            <span class="floating-pill pill-top-right">AI Agents · MCP · RAG</span>
            <div class="avatar-circle">${avatarInner}</div>
            <h3 style="font-family:var(--font-display);font-size:1.18rem;font-weight:700;margin-bottom:4px;">${p.name}</h3>
            <p style="font-size:0.81rem;color:var(--primary);font-family:var(--font-mono);margin-bottom:8px;">
              M.Sc. AI @ OTH Amberg-Weiden
            </p>
            <p style="font-size:0.81rem;color:var(--fg-secondary);">
              Ex-Data Analyst @ Bosch
            </p>
            <span class="floating-pill pill-bottom-left">PyTorch · SQL · Python</span>
          </div>
        </div>
      </div>
    `;

    startTypewriter();
  }

  // ── 5. RENDER ABOUT ───────────────────────────────────────────────────────
  function renderAbout() {
    const ui = data.ui[currentLang].about;
    const ab = data.about;
    const paragraphs = (t(ab.paragraphs) || []).map(p => `<p>${p}</p>`).join("");

    const highlights = (ab.highlights || [])
      .map(
        (h, i) => `
        <div class="glass-card highlight-card reveal-item" style="--reveal-delay: ${i * 75}ms;">
          <div class="highlight-icon">${ICONS[h.icon] || ICONS.bot}</div>
          <h3 class="highlight-title">${t(h.title)}</h3>
          <p class="highlight-desc">${t(h.description)}</p>
        </div>
      `
      )
      .join("");

    document.getElementById("aboutMount").innerHTML = `
      <div class="section-header-center reveal-item">
        <p class="section-sub">${ui.subtitle}</p>
        <h2 class="section-title">${ui.title}</h2>
        <div class="section-divider"></div>
      </div>
      <div class="glass-card about-bio-card reveal-item">
        ${paragraphs}
      </div>
      <div class="highlights-grid">
        ${highlights}
      </div>
    `;
  }

  // ── 6. RENDER SKILLS ──────────────────────────────────────────────────────
  function renderSkills() {
    const ui = data.ui[currentLang].skills;
    const cards = (data.skills || [])
      .map((cat, i) => {
        const badges = (cat.items || [])
          .map(s => `<span class="skill-badge">${s}</span>`)
          .join("");
        return `
          <div class="glass-card reveal-item" style="--reveal-delay: ${(i % 2) * 80}ms;">
            <h3 class="skill-card-title">${t(cat.title)}</h3>
            <div class="skill-badges">${badges}</div>
          </div>
        `;
      })
      .join("");

    document.getElementById("skillsMount").innerHTML = `
      <div class="section-header-center reveal-item">
        <p class="section-sub">${ui.subtitle}</p>
        <h2 class="section-title">${ui.title}</h2>
        <div class="section-divider"></div>
      </div>
      <div class="skills-grid">
        ${cards}
      </div>
    `;
  }

  // ── 7. RENDER PROJECTS ────────────────────────────────────────────────────
  function renderProjects() {
    const ui = data.ui[currentLang].projects;
    const allProjects = data.projects || [];

    const catSet = new Set(["ALL"]);
    allProjects.forEach(p => (p.categories || []).forEach(c => catSet.add(c)));

    const filterBtns = Array.from(catSet)
      .map(cat => {
        const label = cat === "ALL" ? ui.allFilter : cat;
        return `
          <button type="button" class="filter-pill ${activeCategory === cat ? "active" : ""}" data-cat="${cat}">
            ${label}
          </button>
        `;
      })
      .join("");

    const filtered = allProjects.filter(
      p => activeCategory === "ALL" || (p.categories && p.categories.includes(activeCategory))
    );

    const visibleProjects = showAllProjects ? filtered : filtered.slice(0, 6);

    const cardsHtml = visibleProjects
      .map((proj, i) => {
        const title = t(proj.title);
        const desc = t(proj.description);
        const tags = (proj.tags || [])
          .map(tag => `<span class="project-tag">${tag}</span>`)
          .join("");

        return `
          <article class="glass-card project-card reveal-item" style="--reveal-delay: ${(i % 3) * 75}ms;">
            <div>
              <div class="project-meta-top">
                <span class="project-metric-pill">${proj.badge || "AI System"}</span>
                <span class="project-date">${proj.date || ""}</span>
              </div>
              <h3 class="project-title">${title}</h3>
              <p class="project-desc">${desc}</p>
            </div>
            <div>
              <div class="project-tags">${tags}</div>
              <div class="project-links">
                <a href="${proj.github}" target="_blank" rel="noopener" class="project-link-btn">
                  ${ICONS.github} <span>${ui.codeBtn}</span>
                </a>
                ${
                  proj.live
                    ? `<a href="${proj.live}" target="_blank" rel="noopener" class="project-link-btn" style="color:var(--accent-indigo);">
                        ${ICONS.external} <span>${ui.demoBtn}</span>
                       </a>`
                    : ""
                }
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    const showMoreBtn =
      filtered.length > 6
        ? `<div class="projects-more-wrap reveal-item">
             <button type="button" id="toggleProjectsCountBtn" class="btn btn-secondary">
               ${showAllProjects ? ui.showLess : `${ui.viewAll} (${filtered.length})`}
             </button>
           </div>`
        : "";

    document.getElementById("projectsMount").innerHTML = `
      <div class="section-header-center reveal-item">
        <p class="section-sub">${ui.subtitle}</p>
        <h2 class="section-title">${ui.title}</h2>
        <div class="section-divider"></div>
      </div>
      <div class="project-filters reveal-item">${filterBtns}</div>
      <div class="projects-grid">${cardsHtml}</div>
      ${showMoreBtn}
    `;

    document.querySelectorAll("#projectsMount .filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        showAllProjects = false;
        renderProjects();
        initScrollRevealAndSpotlights();
      });
    });

    document.getElementById("toggleProjectsCountBtn")?.addEventListener("click", () => {
      showAllProjects = !showAllProjects;
      renderProjects();
      initScrollRevealAndSpotlights();
    });
  }

  // ── 8. RENDER EXPERIENCE ──────────────────────────────────────────────────
  function renderExperience() {
    const ui = data.ui[currentLang].experience;
    const cards = (data.experience || [])
      .map((exp, i) => {
        const bullets = (t(exp.bullets) || []).map(b => `<li>${b}</li>`).join("");
        const techs = (exp.technologies || [])
          .map(tech => `<span class="project-tag">${tech}</span>`)
          .join("");

        return `
          <article class="glass-card reveal-item" style="--reveal-delay: ${i * 90}ms;">
            <div class="exp-card-top">
              <div class="exp-org-left">
                <img src="${exp.logo}" alt="${exp.company}" class="org-logo-img" />
                <div>
                  <h3 class="exp-role-title">${t(exp.role)}</h3>
                  <p class="exp-company-name">${exp.company}</p>
                </div>
              </div>
              <div class="exp-meta-right">
                <span>${t(exp.period)}</span>
                <span>${t(exp.location)}</span>
              </div>
            </div>
            <ul class="exp-bullets">${bullets}</ul>
            <div class="project-tags" style="margin-bottom:0;">${techs}</div>
          </article>
        `;
      })
      .join("");

    document.getElementById("experienceMount").innerHTML = `
      <div class="section-header-center reveal-item">
        <p class="section-sub">${ui.subtitle}</p>
        <h2 class="section-title">${ui.title}</h2>
        <div class="section-divider"></div>
      </div>
      <div class="timeline-list">${cards}</div>
    `;
  }

  // ── 9. RENDER EDUCATION ───────────────────────────────────────────────────
  function renderEducation() {
    const ui = data.ui[currentLang].education;
    const cards = (data.education || [])
      .map((edu, i) => {
        const learnings = (edu.learnings || [])
          .map(l => `<span class="project-tag">${l}</span>`)
          .join("");

        return `
          <article class="glass-card reveal-item" style="--reveal-delay: ${i * 90}ms;">
            <div class="exp-card-top">
              <div class="exp-org-left">
                <img src="${edu.logo}" alt="${edu.institution}" class="org-logo-img" />
                <div>
                  <h3 class="exp-role-title">${t(edu.degree)}</h3>
                  <p class="exp-company-name">${edu.institution}</p>
                </div>
              </div>
              <div class="exp-meta-right">
                <span>${t(edu.period)}</span>
                <span>${t(edu.location)}</span>
              </div>
            </div>
            <p style="font-size:0.92rem;color:var(--fg-secondary);margin-bottom:14px;">
              ${t(edu.description)}
            </p>
            <div class="project-tags" style="margin-bottom:0;">${learnings}</div>
          </article>
        `;
      })
      .join("");

    document.getElementById("educationMount").innerHTML = `
      <div class="section-header-center reveal-item">
        <p class="section-sub">${ui.subtitle}</p>
        <h2 class="section-title">${ui.title}</h2>
        <div class="section-divider"></div>
      </div>
      <div class="timeline-list">${cards}</div>
    `;
  }

  // ── 10. RENDER CERTIFICATIONS ─────────────────────────────────────────────
  function renderCertifications() {
    const ui = data.ui[currentLang].certifications;
    const enabled = (data.certifications || []).filter(c => c.enabled !== false);
    const sectionEl = document.getElementById("certifications");

    if (enabled.length === 0) {
      sectionEl.style.display = "none";
      return;
    }
    sectionEl.style.display = "block";

    const cards = enabled
      .map((cert, i) => {
        const bullets = (t(cert.description) || []).map(b => `<li>${b}</li>`).join("");
        const delayStyle = `style="--reveal-delay: ${(i % 3) * 75}ms;"`;
        const tagOpen = cert.url
          ? `<a href="${cert.url}" target="_blank" rel="noopener" class="glass-card cert-card reveal-item" ${delayStyle}>`
          : `<div class="glass-card cert-card reveal-item" ${delayStyle}>`;
        const tagClose = cert.url ? `</a>` : `</div>`;

        const logosHtml = cert.secondaryLogo
          ? `<div class="org-logo-wrap">
               <img src="${cert.logo}" alt="${cert.authority}" class="org-logo-img" />
               <img src="${cert.secondaryLogo}" alt="" class="org-logo-img" />
             </div>`
          : `<img src="${cert.logo}" alt="${cert.authority}" class="org-logo-img" />`;

        return `
          ${tagOpen}
            <div>
              <div class="cert-head">
                ${logosHtml}
                <div>
                  <h3 class="cert-title">${t(cert.name)}</h3>
                  <p class="cert-auth">${cert.authority}</p>
                </div>
              </div>
              <ul class="exp-bullets" style="margin-bottom:0;">${bullets}</ul>
            </div>
            ${cert.url ? `<div class="cert-verify-link">${ui.verify}</div>` : ""}
          ${tagClose}
        `;
      })
      .join("");

    document.getElementById("certificationsMount").innerHTML = `
      <div class="section-header-center reveal-item">
        <p class="section-sub">${ui.subtitle}</p>
        <h2 class="section-title">${ui.title}</h2>
        <div class="section-divider"></div>
      </div>
      <div class="certs-grid">${cards}</div>
    `;
  }

  // ── 11. RENDER CONTACT & FOOTER ───────────────────────────────────────────
  function renderContactAndFooter() {
    const ui = data.ui[currentLang].contact;
    const p = data.profile;

    document.getElementById("contactMount").innerHTML = `
      <div class="section-header-center reveal-item">
        <p class="section-sub">${ui.subtitle}</p>
        <h2 class="section-title">${ui.title}</h2>
        <div class="section-divider"></div>
      </div>

      <div class="contact-grid">
        <div class="glass-card reveal-item">
          <h3 style="font-family:var(--font-display);font-size:1.22rem;font-weight:700;margin-bottom:10px;line-height:1.35;">${ui.heading}</h3>
          <p style="font-size:0.93rem;color:var(--fg-secondary);line-height:1.72;">
            ${ui.description}
          </p>

          <div class="contact-info-list">
            <div class="contact-info-item">
              <div>
                <div style="font-size:0.74rem;color:var(--fg-muted);">${ui.emailLabel}</div>
                <div style="font-size:0.88rem;font-weight:600;">${p.email}</div>
              </div>
              <button type="button" id="copyEmailBtn" class="btn btn-secondary" style="padding:6px 12px;font-size:0.76rem;">
                ${ui.copyBtn}
              </button>
            </div>

            <div class="contact-info-item">
              <div>
                <div style="font-size:0.74rem;color:var(--fg-muted);">${ui.phoneLabel}</div>
                <div style="font-size:0.88rem;font-weight:600;">${p.phone}</div>
              </div>
            </div>

            <div class="contact-info-item">
              <div>
                <div style="font-size:0.74rem;color:var(--fg-muted);">${ui.locationLabel}</div>
                <div style="font-size:0.88rem;font-weight:600;">${t(p.location)}</div>
              </div>
            </div>

            <div class="contact-info-item">
              <div>
                <div style="font-size:0.74rem;color:var(--fg-muted);">${ui.languagesLabel}</div>
                <div style="font-size:0.86rem;font-weight:600;">${t(p.languages)}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-card reveal-item" style="--reveal-delay: 100ms;">
          <form class="contact-form" id="contactForm">
            <input type="text" id="cfName" class="form-input" placeholder="${ui.formName}" required />
            <input type="email" id="cfEmail" class="form-input" placeholder="${ui.formEmail}" required />
            <input type="text" id="cfSubject" class="form-input" placeholder="${ui.formSubject}" required />
            <textarea id="cfMessage" class="form-textarea" placeholder="${ui.formMessage}" required></textarea>
            <button type="submit" class="btn btn-primary" style="justify-content:center;">
              ${ICONS.mail} ${ui.formSubmit}
            </button>
          </form>
        </div>
      </div>
    `;

    const footerMount = document.getElementById("footerMount");
    if (footerMount) {
      footerMount.innerHTML = `
        <div class="footer-copy">
          &copy; 2026 ${p.name} &nbsp;·&nbsp; ${t(p.headline)} &nbsp;·&nbsp; Germany 🇩🇪
        </div>
      `;
    }

    document.getElementById("copyEmailBtn")?.addEventListener("click", e => {
      const btn = e.currentTarget;
      navigator.clipboard.writeText(p.email).then(() => {
        btn.textContent = ui.copiedBtn;
        setTimeout(() => (btn.textContent = ui.copyBtn), 2000);
      });
    });

    document.getElementById("contactForm")?.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("cfName").value.trim();
      const email = document.getElementById("cfEmail").value.trim();
      const subject = document.getElementById("cfSubject").value.trim();
      const msg = document.getElementById("cfMessage").value.trim();
      const fullBody = `${msg}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${p.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
    });
  }

  // ── 12. SCROLL-REVEAL, CURSOR SPOTLIGHT & ACTIVE NAV SCROLL-SPY ───────────
  let revealObserver = null;

  function initScrollRevealAndSpotlights() {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal-item").forEach(el => {
      revealObserver.observe(el);
    });

    document.querySelectorAll(".glass-card").forEach(card => {
      if (card.dataset.spotlightBound) return;
      card.dataset.spotlightBound = "true";
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    });
  }

  function initNavScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY + 140;
        sections.forEach(sec => {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          const id = sec.getAttribute("id");
          const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
          if (navLink) {
            navLink.classList.toggle("active", scrollY >= top && scrollY < top + height);
          }
        });
      },
      { passive: true }
    );
  }

  function renderAll() {
    renderNavbarAndHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducation();
    renderCertifications();
    renderContactAndFooter();
    initScrollRevealAndSpotlights();
  }

  renderAll();
  initNavScrollSpy();
})();
