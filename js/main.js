// ── Greeting ──
function setGreeting() {
  const el = document.getElementById("greeting");
  if (!el) return;
  const h = new Date().getHours();
  el.textContent = h < 12 ? "🌅 Good Morning" : h < 18 ? "☀️ Good Afternoon" : "🌙 Good Evening";
}

// ── Typing Animation ──
function initTypingAnimation() {
  const roles = ["Full Stack Developer", "MERN Stack Developer", "Frontend Developer", "Problem Solver"];
  let ri = 0, ci = 0, deleting = false;
  const el = document.getElementById("typing-text");
  if (!el) return;
  function type() {
    const cur = roles[ri];
    el.textContent = deleting ? cur.slice(0, ci--) : cur.slice(0, ci++);
    let speed = deleting ? 45 : 95;
    if (!deleting && ci === cur.length + 1) { speed = 1600; deleting = true; }
    else if (deleting && ci < 0) { deleting = false; ri = (ri + 1) % roles.length; speed = 350; ci = 0; }
    setTimeout(type, speed);
  }
  type();
}

// ── Theme Toggle ──
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  });
}

// ── Scroll Progress ──
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress-bar");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + "%";
  });
}

// ── Back To Top ──
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => btn.classList.toggle("visible", window.scrollY > 400));
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ── Scroll Spy ──
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove("active-link"));
        const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (active) active.classList.add("active-link");
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => obs.observe(s));
}

// ── Modal ──
function initModal() {
  const trigger = document.getElementById("modal-trigger");
  const modal = document.getElementById("contact-modal");
  const close = document.getElementById("modal-close");
  if (!trigger || !modal || !close) return;
  trigger.addEventListener("click", () => { modal.classList.remove("hidden"); document.body.style.overflow = "hidden"; });
  close.addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  function closeModal() { modal.classList.add("hidden"); document.body.style.overflow = ""; }
}

// ── Contact Validation ──
function initContactValidation() {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");
  if (!form) return;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();
    if (!name || !email || !message) {
      msg.textContent = "⚠ All fields are required.";
      msg.style.color = "#f87171";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = "⚠ Please enter a valid email.";
      msg.style.color = "#f87171";
    } else {
      msg.textContent = "✓ Message sent! I'll get back to you soon.";
      msg.style.color = "#14d2a0";
      form.reset();
      setTimeout(() => { msg.textContent = ""; }, 5000);
    }
  });
}

// ── Geolocation ──
function initGeolocation() {
  const el = document.getElementById("message");
  if (!el) return;
  if (!navigator.geolocation) { el.textContent = "Geolocation not supported."; return; }
  el.textContent = "📍 Detecting location…";
  navigator.geolocation.getCurrentPosition(
    pos => {
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`)
        .then(r => r.json())
        .then(d => { el.textContent = `📍 ${d.address.city || d.address.town || d.address.village || "Your City"}, ${d.address.country}`; })
        .catch(() => { el.textContent = `📍 ${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)}`; });
    },
    () => { el.textContent = "📍 Location access denied."; }
  );
}

// ── Project Render ──
function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  const count = document.getElementById("project-count");
  if (!container) return;
  if (count) count.textContent = `${projects.length} project${projects.length !== 1 ? "s" : ""} found`;
  container.innerHTML = "";
  projects.forEach((project, i) => {
    const card = document.createElement("div");
    card.className = "proj-card";
    card.style.animationDelay = `${i * 0.08}s`;
    const techBadges = (project.technologies || []).map(t => `<span class="proj-tag">${t}</span>`).join("");
    const links = [];
    if (project.liveDemo && project.liveDemo !== "LiveDemo") {
      links.push(`<a href="${project.liveDemo}" target="_blank" class="proj-link proj-link-demo"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Live Demo</a>`);
    }
    if (project.github) {
      links.push(`<a href="${project.github}" target="_blank" class="proj-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>GitHub</a>`);
    }
    card.innerHTML = `
      <div class="proj-glow" style="background:radial-gradient(circle at top right, ${project.color || '#7C3AED'}22, transparent 60%)"></div>
      <div class="proj-emoji">${project.emoji || "💻"}</div>
      <div class="proj-top-row"><span class="proj-category-badge">${project.category}</span></div>
      <h3 class="proj-title">${project.name}</h3>
      <p class="proj-desc">${project.description}</p>
      <div class="proj-tech-section"><div class="proj-tags">${techBadges}</div></div>
      ${links.length ? `<div class="proj-links">${links.join("")}</div>` : ""}
    `;
    container.appendChild(card);
  });
}

// ── Skills Render ──
function renderSkillFilters() {
  const container = document.getElementById("skills-filters");
  if (!container) return;
  const cats = ["All", ...new Set(skillsData.map(s => s.category))];
  container.innerHTML = "";
  cats.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "filter-chip" + (i === 0 ? " active" : "");
    btn.addEventListener("click", () => {
      document.querySelectorAll("#skills-filters .filter-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkills(cat === "All" ? skillsData : skillsData.filter(s => s.category === cat));
    });
    container.appendChild(btn);
  });
}

function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  if (!container) return;
  container.innerHTML = "";
  skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill-card";
    div.innerHTML = `
      <div class="skill-icon-wrap" style="--skill-color:${skill.color || '#14d2a0'}">
        <span class="skill-initial">${skill.shortLabel || skill.name[0]}</span>
      </div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-cat">${skill.category}</div>
      <div class="skill-desc">${skill.description}</div>
    `;
    container.appendChild(div);
  });
}

// ── Project Filter ──
function initProjectFilter() {
  const container = document.getElementById("project-filters");
  if (!container) return;
  const cats = ["All", ...new Set(projectsData.map(p => p.category))];
  cats.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "filter-chip" + (i === 0 ? " active" : "");
    btn.addEventListener("click", () => {
      document.querySelectorAll("#project-filters .filter-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filtered = cat === "All" ? projectsData : projectsData.filter(p => p.category === cat);
      renderProjects(filtered);
    });
    container.appendChild(btn);
  });
  renderProjects(projectsData);
}

// ── Project Search ──
function initProjectSearch() {
  const input = document.getElementById("project-search");
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.toLowerCase();
    const filtered = projectsData.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.technologies || []).some(t => t.toLowerCase().includes(q))
    );
    renderProjects(filtered);
    document.querySelectorAll("#project-filters .filter-chip").forEach((b, i) => b.classList.toggle("active", i === 0));
  });
}

// ── Animated Counters ──
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.getAttribute("data-count"));
      let current = 0;
      const step = Math.max(1, Math.floor(target / 60));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + (el.getAttribute("data-suffix") || "");
        if (current >= target) clearInterval(timer);
      }, 25);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

// ── Scroll Reveal ──
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// ── Particles ──
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
  window.addEventListener("resize", () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.5 + 0.5,
    o: Math.random() * 0.4 + 0.1
  }));
  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(124,58,237,${p.o})`;
      ctx.fill();
    });
    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ── Cursor ──
function initCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
  });
  function animRing() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(animRing);
  }
  animRing();
  document.querySelectorAll("a,button,input,textarea,.proj-card,.skill-card").forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("ring-hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("ring-hover"));
  });
}

// ── Loading Screen ──
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("loader-out");
      setTimeout(() => loader.remove(), 600);
    }, 800);
  });
}

// ── Main Init ──
document.addEventListener("DOMContentLoaded", () => {
  setGreeting();
  initTypingAnimation();
  initThemeToggle();
  initScrollProgress();
  initBackToTop();
  initScrollSpy();
  initModal();
  initContactValidation();
  initProjectFilter();
  initProjectSearch();
  renderSkillFilters();
  renderSkills(skillsData);
  initCounters();
  initScrollReveal();
  initParticles();
  initCursor();
  initLoader();
});
