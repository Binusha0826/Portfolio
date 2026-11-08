/* ===== Mekata witharak add karanna. Count auto wenas wenawa ===== */

const portfolioData = {
  projects: [
  {
    titleTop: 'HEALTH',
    titleOutline: 'CHECK 3D',
    subtitle: 'AI-Powered Health & Wellness Web App',
    desc: 'BMI calculation, personalized wellness recommendations and an AI chatbot powered by the Gemini API, built on a Spring Boot REST backend.',
    tech: ['Java', 'Spring Boot', 'REST API', 'Gemini API'],
    video: 'media/healthcheck.mp4',
    poster: 'media/healthcheck.jpg',
    github: 'https://github.com/Binusha0826/HealthCheck-3D',
    demo: 'https://healthcheck3d.velixir.run/'
  },
  {
    titleTop: 'AUTOSPEC',
    titleOutline: 'AI',
    subtitle: 'AI-Powered Automotive Web App',
    desc: 'Interactive car discovery, vehicle specifications, AI-assisted chat and vehicle valuation with a premium responsive interface.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    video: 'media/autospec.mp4',
    poster: 'media/autospec.jpg',
    github: 'https://github.com/Binusha0826/AutoSpec-AI',
    demo: 'https://autospec-ai-web.vercel.app/'
  },
  {
    titleTop: 'SL TOURISM',
    titleOutline: 'EXPLORER',
    subtitle: 'Weather & Travel Score Dashboard',
    desc: 'Compares 7-day forecasts for 10 Sri Lankan destinations using Open-Meteo, with a 0-100 travel score, interactive map and Plotly charts.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    video: 'media/tourism.mp4',
    poster: 'media/tourism.jpg',
    github: 'https://github.com/Binusha0826/sl-tourism-explorer',
    demo: 'https://sl-weather-prediction.streamlit.app/'
  },
  {
    titleTop: 'BLOOD',
    titleOutline: 'MATCHING',
    subtitle: 'Emergency Route Optimization Tool',
    desc: "Graph-based donor matching using Dijkstra's shortest path to find nearby compatible donors and blood banks quickly.",
    tech: ['Java', 'Graph', 'Dijkstra', 'Android'],
    video: 'media/blood.mp4',
    poster: '',
    github: 'https://github.com/Sithumini-Anuhansi/Emergency-Blood-Matching-Tool',
    demo: ''
  }
],


  certifications: [
    { title: 'Introduction to Artificial Intelligence', issuer: 'Simplilearn', date: 'Oct 2026' },
    { title: 'Problem Solving (Basic)', issuer: 'HackerRank', date: 'Oct 2026' },
    { title: 'Introduction to Generative AI', issuer: 'Simplilearn', date: 'Oct 2026' },
    { title: 'SQL (Basic)', issuer: 'HackerRank', date: 'Oct 2026' }
  ],

  achievements: [
  { type: 'Competition', title: 'IEEEXtreme 20.0 – Top 1000 Globally', org: '24-hour global coding marathon · Team ZyntaxErrors · NIBM' },
  { type: 'Competition', title: 'Top 30 – MVP Stage, AITHON 2026', org: 'Hemas Aithon · Team Byte Hunters' },
  { type: 'Competition', title: 'Phoenix 2026 – Robotics & IoT Exhibition', org: 'Presented Milk Guard (IoT project)' },
  { type: 'Organizing', title: 'RootX Hands-on Linux Workshop', org: 'Organizing Committee Member · IEEE Student Branch of NIBM' }
],


skills: [
  {
    category: 'Programming Languages',
    icon: 'fa-solid fa-code',
    items: [
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'SQL', icon: 'fa-solid fa-database' }
    ]
  },
  {
    category: 'Backend',
    icon: 'fa-solid fa-server',
    items: [
      { name: 'Spring Boot', icon: 'devicon-spring-plain' },
      { name: 'REST APIs', icon: 'fa-solid fa-plug' },
      { name: 'Maven', icon: 'devicon-maven-plain' },
      { name: 'OOP', icon: 'fa-solid fa-cubes' },
      { name: 'Data Structures & Algorithms', icon: 'fa-solid fa-diagram-project' }
    ]
  },
  {
    category: 'Frontend',
    icon: 'fa-solid fa-laptop-code',
    items: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
      { name: 'Responsive Design', icon: 'fa-solid fa-mobile-screen' }
    ]
  },
  {
    category: 'Databases',
    icon: 'fa-solid fa-database',
    items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'SQL', icon: 'fa-solid fa-table' }
    ]
  },
  {
    category: 'AI Integration',
    icon: 'fa-solid fa-robot',
    items: [
      { name: 'Gemini API', icon: 'fa-solid fa-wand-magic-sparkles' },
      { name: 'Tavily API', icon: 'fa-solid fa-magnifying-glass' },
      { name: 'AI Chatbot Integration', icon: 'fa-solid fa-comments' }
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'VS Code', icon: 'devicon-vscode-plain' },
      { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain' }
    ]
  }
]

,
contact: {
  email: 'binushafernando2004@gmail.com',
  phone: '+94 76 856 9425',
  location: 'Kalutara, Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/binusha-fernando-72945339b',
  github: 'https://github.com/Binusha0826'
}

};


/* ---------- Auto stats count (from data.js) ---------- */
function animateCount(el, target) {
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.count').forEach(el => {
        const key = el.dataset.key;
        const total = (portfolioData[key] || []).length;
        animateCount(el, total);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsEl = document.querySelector('.stats');
if (statsEl) statObserver.observe(statsEl);