// ===== Data =====
const skills = [
  {name:"Flutter",icon:"📱",pct:92},
  {name:"Dart",icon:"🎯",pct:90},
  {name:"Firebase",icon:"🔥",pct:85},
  {name:"REST APIs",icon:"🔌",pct:88},
  {name:"State Management",icon:"📊",pct:85},
  {name:"Provider / Cubit",icon:"⚡",pct:82},
  {name:"UI/UX Design",icon:"🎨",pct:80},
  {name:"Git/GitHub",icon:"🌿",pct:78},
  {name:"Dio & HTTP",icon:"🌐",pct:75},
  {name:"Hive / SQLite",icon:"💾",pct:70},
];

const projects = [
  {
    cat:"flutter",
    pill:"Flutter · Health App",
    title:"Riaaya App",
    desc:"Cross-platform health application with layered architecture, Firebase Auth & Firestore, and Hive local storage for offline functionality.",
    tags:["Flutter","Firebase","Provider","Hive"],
    filter:["flutter"]
  },
  {
    cat:"flutter",
    pill:"Flutter · News App",
    title:"News App",
    desc:"Real-time news application consuming REST APIs with Dio, Cubit state management, and dynamic dark/light theme support.",
    tags:["Flutter","Dio","Cubit","REST API"],
    filter:["flutter"]
  },
  {
    cat:"mobile",
    pill:"Flutter · Recipe App",
    title:"Recipe App",
    desc:"Recipe discovery app with search, detailed views, and REST API integration using FutureBuilder and clean UI/UX.",
    tags:["Flutter","REST API","Material Design"],
    filter:["mobile"]
  },
];

const exp = [
  {
    role:"Mobile App Developer Trainee",
    company:"Digital Egypt Pioneers Initiative (DEPI)",
    date:"Mar 2025 – Present",
    loc:"Cairo, Egypt",
    bullets:[
      "Developed production-ready cross-platform mobile applications using Flutter and Dart",
      "Integrated Firebase and REST APIs for real-time data synchronization",
      "Applied layered architecture and state management (Provider, Cubit)",
      "Improved UI responsiveness and troubleshooting processes"
    ]
  },
  {
    role:"Flutter Developer Intern",
    company:"Route Academy",
    date:"Oct 2024 – Mar 2025",
    loc:"Cairo, Egypt",
    bullets:[
      "Developed multiple Flutter applications during intensive training",
      "Integrated REST APIs, Firebase Authentication and Firestore",
      "Implemented responsive UI/UX following Material Design",
      "Improved performance using efficient state management"
    ]
  },
  {
    role:"Mobile App Developer Trainee",
    company:"National Telecommunication Institute (NTI)",
    date:"Jan 2026 – Feb 2026",
    loc:"Cairo, Egypt (Onsite)",
    bullets:[
      "Built responsive mobile applications using Flutter",
      "Implemented state management with Cubit and Provider",
      "Integrated APIs with proper error handling"
    ]
  },
];

// ===== Render Skills =====
const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(s => {
  skillsGrid.insertAdjacentHTML('beforeend', `
    <div class="skill reveal" data-pct="${s.pct}">
      <div class="skill-head">
        <div class="skill-name"><div class="skill-icon">${s.icon}</div>${s.name}</div>
        <div class="skill-pct">${s.pct}%</div>
      </div>
      <div class="bar"><div class="bar-fill"></div></div>
    </div>`);
});

// ===== Render Projects =====
const codeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
const projGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
  projGrid.insertAdjacentHTML('beforeend', `
    <div class="card project reveal" data-cat="${p.filter.join(' ')}">
      <div class="project-banner">${codeIcon}</div>
      <div class="project-body">
        <span class="project-pill">${p.pill}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tech-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <a href="https://github.com/sh3455" target="_blank" rel="noopener" class="gh-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.92 10.92 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z"/></svg>
          View on GitHub
        </a>
      </div>
    </div>`);
});

// ===== Render Experience Timeline =====
const tl = document.getElementById('timeline');
exp.forEach(e => {
  tl.insertAdjacentHTML('beforeend', `
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-card card">
        <div class="tl-meta"><span>${e.date}</span><span>·</span><span>${e.loc}</span></div>
        <h3>${e.role}</h3>
        <div class="company">${e.company}</div>
        <ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    </div>`);
});

// ===== Navbar scroll =====
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== Mobile menu =====
const burger = document.getElementById('hamburger');
const overlay = document.getElementById('mobileOverlay');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
});
overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('active');
  overlay.classList.remove('active');
}));

// ===== Typing animation =====
const phrases = ["Flutter Developer", "Mobile App Developer", "UI/UX Enthusiast", "Problem Solver"];
const typingEl = document.getElementById('typing');
let pi = 0, ci = 0, deleting = false;
function tick() {
  const cur = phrases[pi];
  typingEl.textContent = cur.slice(0, ci);
  if (!deleting && ci < cur.length) {
    ci++;
    setTimeout(tick, 90);
  } else if (deleting && ci > 0) {
    ci--;
    setTimeout(tick, 45);
  } else {
    if (!deleting) {
      deleting = true;
      setTimeout(tick, 1400);
    } else {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(tick, 200);
    }
  }
}
tick();

// ===== Scroll reveal + skill bars =====
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 60);
      if (e.target.classList.contains('skill')) {
        const fill = e.target.querySelector('.bar-fill');
        fill.style.width = e.target.dataset.pct + '%';
      }
      io.unobserve(e.target);
    }
  });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Project filter =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.project').forEach(p => {
      const match = f === 'all' || p.dataset.cat.includes(f);
      p.classList.toggle('hide', !match);
    });
  });
});