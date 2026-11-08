/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ---------- Typing animation ---------- */
const roles = [
  'Full Stack Developer',
  'Java & Spring Boot Developer',
  'Frontend Developer',
  'AI Integration Developer'
];
const typingEl = document.getElementById('typing');
let roleIndex = 0, charIndex = 0, deleting = false;

function type() {
  const current = roles[roleIndex];
  typingEl.textContent = current.substring(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 90);
  } else if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(type, 1500);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 300);
  }
}
type();

/* ---------- Read More (About) ---------- */
const readMoreBtn = document.getElementById('readMoreBtn');
const aboutMore = document.getElementById('aboutMore');

readMoreBtn.addEventListener('click', () => {
  const open = aboutMore.classList.toggle('open');
  readMoreBtn.textContent = open ? 'Show Less' : 'Read More';
});

/* ---------- Scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Active nav link on scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ---------- Java code typing in hero circle ---------- */
const codeLines = [
  'public class Binusha {',
  '  String role = "Full Stack Dev";',
  '  String[] stack = {',
  '    "Java", "Spring Boot",',
  '    "React", "Next.js"',
  '  };',
  '',
  '  void build() {',
  '    System.out.println(',
  '      "Building the future");',
  '  }',
  '}'
];
const codeText = codeLines.join('\n');
const codeEl = document.getElementById('codeTyping');
let codeIndex = 0;

function highlight(text) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/"[^"]*"?/g, m => `<span class="str">${m}</span>`)
    .replace(/\b(public|class|void|String)\b/g, '<span class="kw">$1</span>')
    .replace(/\b(Binusha|System)\b/g, '<span class="cls">$1</span>');
}

function typeCode() {
  codeEl.innerHTML = highlight(codeText.substring(0, codeIndex));

  if (codeIndex < codeText.length) {
    codeIndex++;
    setTimeout(typeCode, 55);
  } else {
    setTimeout(() => { codeIndex = 0; typeCode(); }, 3000);
  }
}
if (codeEl) typeCode();


/* ---------- Auto-generate Projects from data.js ---------- */
const projectsList = document.getElementById('projectsList');

function renderProjects() {
  if (!projectsList) return;
  projectsList.innerHTML = portfolioData.projects.map((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const media = p.video
      ? `<video src="${p.video}" ${p.poster ? `poster="${p.poster}"` : ''} muted loop playsinline preload="metadata"></video>`
      : p.poster
        ? `<img src="${p.poster}" alt="${p.titleTop} ${p.titleOutline}" />`
        : `<div class="reel-fallback">${p.titleTop.charAt(0)}</div>`;
    const badge = p.video ? '<span class="reel-badge"><i></i>DEMO</span>' : '';
    const tags = p.tech.map(t => `<span>${t}</span>`).join('');
    const demoBtn = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : '';
    const ghBtn = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fa-brands fa-github"></i> GitHub</a>` : '';

    return `
      <article class="project reveal">
        <div class="p-side">
          <div class="p-num">${num}</div>
          <div class="p-tags">${tags}</div>
        </div>
        <div class="reel">${badge}${media}</div>
        <div class="p-content">
          <h3 class="p-title">${p.titleTop}<span class="outline">${p.titleOutline}</span></h3>
          <p class="p-sub">${p.subtitle}</p>
          <p class="p-desc">${p.desc}</p>
          <div class="p-btns">${demoBtn}${ghBtn}</div>
        </div>
      </article>`;
  }).join('');

  // scroll reveal for new cards
  projectsList.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // play video only when visible
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
  }, { threshold: 0.5 });
  projectsList.querySelectorAll('video').forEach(v => videoObserver.observe(v));
}
renderProjects();


/* ---------- Auto-generate Skills from data.js ---------- */
const skillsGrid = document.getElementById('skillsGrid');

function renderSkills() {
  if (!skillsGrid || !portfolioData.skills) return;

  skillsGrid.innerHTML = portfolioData.skills.map(cat => `
    <div class="skill-card">
      <div class="skill-head">
        <span class="cat-icon"><i class="${cat.icon}"></i></span>
        <h3>${cat.category}</h3>
      </div>
      <div class="skill-chips">
        ${cat.items.map((s, i) => `
          <span class="chip" style="transition-delay:${i * 80}ms">
            <i class="${s.icon}"></i>${s.name}
          </span>`).join('')}
      </div>
    </div>`).join('');

  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        skillObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  skillsGrid.querySelectorAll('.skill-card').forEach(c => skillObserver.observe(c));
}
renderSkills();


/* ---------- Contact info + footer (from data.js) ---------- */
function renderContact() {
  const c = portfolioData.contact;
  if (!c) return;

  const cards = [
    { icon: 'fa-regular fa-envelope', label: 'Email', text: c.email, href: `mailto:${c.email}` },
    { icon: 'fa-solid fa-phone', label: 'Phone', text: c.phone, href: `tel:${c.phone.replace(/\s/g, '')}` },
    { icon: 'fa-solid fa-location-dot', label: 'Location', text: c.location, href: '' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', text: 'Binusha Fernando', href: c.linkedin },
    { icon: 'fa-brands fa-github', label: 'GitHub', text: 'Binusha0826', href: c.github }
  ];

  document.getElementById('contactInfo').innerHTML = cards.map(i => {
    const inner = `
      <span class="ic"><i class="${i.icon}"></i></span>
      <div><small>${i.label}</small><span>${i.text}</span></div>`;
    return i.href
      ? `<a class="info-card" href="${i.href}" ${i.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${inner}</a>`
      : `<div class="info-card">${inner}</div>`;
  }).join('');

  document.getElementById('footerSocials').innerHTML = `
    <a href="${c.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
    <a href="${c.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
    <a href="mailto:${c.email}" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>`;

  document.getElementById('year').textContent = new Date().getFullYear();
}
renderContact();

/* ---------- Contact form (Formspree, no page reload) ---------- */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const sendBtn = document.getElementById('sendBtn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  sendBtn.disabled = true;
  formStatus.className = 'form-status';
  formStatus.textContent = 'Sending...';

  try {
    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      formStatus.textContent = 'Thanks! Your message has been sent.';
      formStatus.classList.add('ok');
      contactForm.reset();
    } else {
      throw new Error('failed');
    }
  } catch {
    formStatus.textContent = 'Something went wrong. Please email me directly.';
    formStatus.classList.add('err');
  }
  sendBtn.disabled = false;
});


/* ---------- Rotating Certifications & Activities (from data.js) ---------- */
function buildRotator(containerId, items, renderItem) {
  const box = document.getElementById(containerId);
  if (!box || !items || !items.length) return;

  box.innerHTML = items.map((it, i) =>
    `<div class="rotator-item${i === 0 ? ' active' : ''}">${renderItem(it)}</div>`
  ).join('');

  const slides = box.querySelectorAll('.rotator-item');

  // dots
  const dots = document.createElement('div');
  dots.className = 'r-dots';
  dots.innerHTML = items.map((_, i) => `<span class="${i === 0 ? 'on' : ''}"></span>`).join('');
  box.parentElement.appendChild(dots);
  const dotEls = dots.querySelectorAll('span');

  if (items.length < 2) return;

  let current = 0, paused = false;

  function show(next) {
    slides[current].classList.remove('active');
    slides[current].classList.add('leaving');
    const prev = slides[current];
    setTimeout(() => prev.classList.remove('leaving'), 600);

    current = next;
    slides[current].classList.add('active');
    dotEls.forEach((d, i) => d.classList.toggle('on', i === current));
  }

  setInterval(() => {
    if (!paused) show((current + 1) % slides.length);
  }, 3200);

  box.parentElement.addEventListener('mouseenter', () => paused = true);
  box.parentElement.addEventListener('mouseleave', () => paused = false);
}

function renderRotators() {
  buildRotator('certRotator', portfolioData.certifications, c => `
    <p class="r-title">${c.title}</p>
    <p>${c.issuer} · ${c.date}</p>`);

  buildRotator('actRotator', portfolioData.achievements, a => `
    <span class="r-badge">${a.type || 'Activity'}</span>
    <p class="r-title">${a.title}</p>
    <p>${a.org || ''}</p>`);
}
renderRotators();