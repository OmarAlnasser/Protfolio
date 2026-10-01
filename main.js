// Portfolio interactions. Arabic content lives in index.html; English strings live here.
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const scrollBehavior = () => (reducedMotion.matches ? 'auto' : 'smooth');

  /* ---------- i18n ---------- */
  const EN = {
    skip: 'Skip to content', navLabel: 'Main navigation', menu: 'Menu',
    navAbout: 'About', navProjects: 'Projects', navExperience: 'Experience', navSkills: 'Skills', navCerts: 'Certifications', navContact: 'Contact ↗',
    discover: 'Discover more <span aria-hidden="true">↓</span>',
    aboutEyebrow: 'About me', aboutTitle: 'Behind every number,<br><em>a chance to understand more.</em>',
    aboutText: 'Management Information Systems graduate from Imam Abdulrahman Bin Faisal University. I analyze data and build dashboards that connect numbers to business context, with hands-on experience in Power BI, Python and machine learning gained during my co-op training at Saudi Global Ports.',
    statDashboards: 'Power BI dashboards', statProjects: 'Academic & co-op projects', statCerts: 'Certifications & courses', statGpa: 'GPA',
    projectsEyebrow: '01 / Selected work', projectsTitle: 'The projects speak.', projectsText: 'From data exploration to model building — academic and co-op training projects.',
    filterLabel: 'Filter projects', filterAll: 'All', filterBi: 'Business Intelligence', filterMl: 'Machine Learning', filterSim: 'Simulation',
    explore: 'Explore project ↗',
    p1Tag: 'Business Intelligence', p1Title: 'Sales Performance & Customer Profitability', p1Text: 'Two dashboards analyzing sales and profit, flagging the risk of discounts eroding profit margin in the consumer segment.', p1m1: 'Dashboards', p1m2: 'DAX measures',
    p1More: 'Cleaned the data with Power Query and built a star schema with three dimension tables. Measures included total sales, profit, profit margin and sales per customer, with three documented KPIs and executive summaries.',
    p2Tag: 'Content Analytics', p2Title: 'Netflix Content Strategy', p2Text: 'Analyzed 8,000+ titles to turn content data into a clear strategic summary.', p2m1: 'Titles analyzed', p2m2: 'Interactive slicers',
    p2More: 'Built a star-schema data model, added DAX measures and four interactive slicers for exploration, and prepared a three-point strategic summary.',
    p3Tag: 'Machine Learning', p3Title: 'Titanic Survival Prediction', p3Text: 'An end-to-end machine learning pipeline, from feature engineering to model comparison and evaluation.',
    p3More: 'Prepared features and compared Logistic Regression with Random Forest to predict survival. The project focuses on the full workflow of building a machine learning model.',
    p4Tag: 'Decision Support', p4Title: 'Decision Support System Simulation', p4Text: 'Understanding system performance under varying loads and delivering a practical improvement recommendation.', p4c1: 'Performance simulation', p4c2: 'System optimization',
    p4More: 'Used ARENA to simulate system performance as load changes, then studied the results to deliver a simulation-based improvement recommendation.',
    expEyebrow: '02 / Experience & education', expTitle: 'Academic foundation.<br>Practical application.', expText: 'I connect an understanding of business systems with analytical skills to turn questions into results people can understand and use.',
    job1Date: 'January — May 2026', job1Title: 'Data Analyst Trainee', job1Company: 'Saudi Global Ports · PSA Group', job1Place: 'Co-op training — King Abdulaziz Port',
    job1b1: 'Completed four monthly learning plans, each two or more weeks ahead of schedule.', job1b2: 'Developed two Power BI dashboards for sales performance and customer profitability.', job1b3: 'Prepared and delivered seven professional reports and deliverables in English ahead of deadline.',
    eduTitle: 'B.Sc. Management Information Systems', eduSchool: 'Imam Abdulrahman Bin Faisal University', eduGpa: 'GPA: 4.17', eduText: 'Systems analysis & design, enterprise systems, networking, information security and business intelligence.',
    skillsEyebrow: '03 / Skills', skillsTitle: 'My working toolkit.', skillsText: 'Pick a highlighted skill to see the related projects.',
    s1Title: 'Analysis & Visualization', s2Title: 'Programming & Data', s3Title: 'Machine Learning & Simulation',
    certsEyebrow: '04 / Continuous learning', certsTitle: 'Certifications & courses.', certsText: '11 certifications and courses completed across 2025 and 2026 in business intelligence, data science and cloud.',
    pauseCerts: 'Pause motion Ⅱ', playCerts: 'Play motion ↻',
    navNew: 'New',
    roadEyebrow: '05 / Latest work', roadTitle: 'A new project, live now.', roadText: 'A complete, deployed system — try it yourself, no sign-up.',
    spotNew: 'New · Live', spotTag: 'HR Analytics', spotTitle: 'HR Attendance & Performance Analytics',
    spotText: 'Turns raw time-clock punches and monthly evaluations into trustworthy HR metrics: a live “Today” attendance board, leave and correction approvals, monthly PDF reports, an ML early-warning model and a Power BI kit — in English and Arabic.',
    spotS1: 'Automated tests passing', spotS2: 'Permission-based roles', spotS3: 'Employees (synthetic data)',
    spotDemo: 'Try the live demo', spotCode: 'Code on GitHub', spotNote: 'Free hosting: the first visit may take about a minute to wake up.',
    spotOpen: 'Open the live demo', spotAlt: 'The Today attendance board in the HR analytics system',
 road1Tag: 'Upcoming projects', road1Title: 'The next chapter of my work', road1Text: 'New projects, their goals and progress will be added here once announced.',
    road2Tag: 'Planned certifications', road2Title: 'Learning that builds on experience', road2Text: 'Target certifications and timelines will appear here once the next learning plan is set.',
    contactEyebrow: '06 / Get in touch', contactTitle: 'Let’s turn data<br>into <em>value.</em>', contactText: 'Have an opportunity in data analytics or business intelligence? I’d love to hear from you.',
    copyEmail: 'Copy email', copied: 'Email copied to clipboard', copyFail: 'Couldn’t copy automatically — please select the email and copy it.', cvLink: 'Resume ↓',
    footerPlace: 'Dammam, Saudi Arabia · Arabic & English', toTop: 'Back to top ↑', toTopLabel: 'Back to top',
    close: 'Close ×', prev: '← Previous', next: 'Next →', dialogHeading: 'What does the project include?', dialogNote: 'Academic / co-op training project',
    showing: (n, t) => `Showing ${n} of ${t} projects`,
  };
  const AR = {
    pauseCerts: 'إيقاف الحركة Ⅱ', playCerts: 'تشغيل الحركة ↻', copied: 'تم نسخ البريد الإلكتروني', copyFail: 'تعذّر النسخ التلقائي. يمكنك تحديد البريد ونسخه يدويًا.',
    dialogHeading: 'ما الذي يتضمنه المشروع؟', dialogNote: 'مشروع أكاديمي / تدريب تعاوني',
    showing: (n, t) => `المشاريع المعروضة: ${n} من ${t}`,
  };
  const META = {
    ar: { title: document.title, desc: $('meta[name=description]').content },
    en: { title: 'Omar Hamad Al-Nasser | Data Analytics & Business Intelligence', desc: 'Portfolio of Omar Hamad Al-Nasser — MIS graduate in data analytics and business intelligence. Power BI and machine learning projects, experience and certifications.' },
  };
  let lang = 'ar';
  const t = key => (lang === 'en' ? EN : AR)[key];

  // Remember the Arabic source of every translatable node before the first switch.
  $$('[data-i18n]').forEach(el => { el.dataset.ar = el.innerHTML; });
  $$('[data-i18n-attr]').forEach(el => {
    const [attr] = el.dataset.i18nAttr.split(':');
    el.dataset.arAttr = el.getAttribute(attr) || '';
  });

  const langToggle = $('.lang-toggle');
  function applyLang(next, persist = true) {
    lang = next;
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'en' ? 'ltr' : 'rtl';
    $$('[data-i18n]').forEach(el => {
      const value = lang === 'en' ? EN[el.dataset.i18n] : el.dataset.ar;
      if (typeof value === 'string') el.innerHTML = value;
    });
    $$('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.dataset.i18nAttr.split(':');
      el.setAttribute(attr, lang === 'en' ? EN[key] : el.dataset.arAttr);
    });
    $$('img[data-en-src]').forEach(img => {
      img.dataset.arSrc ||= img.getAttribute('src');
      img.src = lang === 'en' ? img.dataset.enSrc : img.dataset.arSrc;
    });
    document.title = META[lang].title;
    $('meta[name=description]').content = META[lang].desc;
    langToggle.textContent = lang === 'en' ? 'ع' : 'EN';
    langToggle.lang = lang === 'en' ? 'ar' : 'en';
    langToggle.setAttribute('aria-label', lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English');
    if (dialog.open) dialog.close();
    updateCount();
    updateMarquee();
    if (persist) try { localStorage.setItem('lang', lang); } catch {}
  }
  langToggle.addEventListener('click', () => applyLang(lang === 'en' ? 'ar' : 'en'));

  /* ---------- Header, mobile nav, progress, active link ---------- */
  const header = $('.site-header');
  const nav = $('#site-nav');
  const menuBtn = $('.menu-toggle');
  const progress = $('.progress');
  const backTop = $('.back-top');
  const setMenu = open => { nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); } });

  let ticking = false;
  function onScroll() {
    const range = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${range > 0 ? scrollY / range : 0})`;
    header.classList.toggle('scrolled', scrollY > 10);
    backTop.hidden = scrollY < 700;
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();
  backTop.addEventListener('click', () => { scrollTo({ top: 0, behavior: scrollBehavior() }); $('.brand').focus({ preventScroll: true }); });

  const navLinks = $$('.site-nav a');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.hash === '#' + entry.target.id ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current'));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  navLinks.forEach(a => { const target = $(a.hash); if (target) sectionObserver.observe(target); });

  /* ---------- Reveal + counters ---------- */
  const revealTargets = $$('.section-head, .about > *, .project, .timeline > li, .skill, .roadmap article, .contact .wrap > *');
  const counters = $$('[data-count]');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }), { threshold: 0.12 });
    revealTargets.forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });

    const countObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, end = +el.dataset.count, start = performance.now();
      const step = now => {
        const p = Math.min((now - start) / 1100, 1);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3)))).padStart(2, '0');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countObserver.unobserve(el);
    }), { threshold: 0.6 });
    counters.forEach(el => countObserver.observe(el));
  }

  /* ---------- Project filters ---------- */
  const projects = $$('.project');
  const filterButtons = $$('.filters .chip');
  const resultCount = $('.result-count');
  let activeFilter = 'all';
  const visibleProjects = () => projects.filter(p => !p.classList.contains('is-hidden'));
  function updateCount() { resultCount.textContent = t('showing')(visibleProjects().length, projects.length); }
  function setFilter(key) {
    activeFilter = key;
    filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === key)));
    projects.forEach(p => p.classList.toggle('is-hidden', key !== 'all' && p.dataset.category !== key));
    updateCount();
  }
  filterButtons.forEach(b => b.addEventListener('click', () => setFilter(b.dataset.filter)));

  // Skill tags jump to their related projects.
  $$('[data-skill-filter]').forEach(btn => btn.addEventListener('click', () => {
    setFilter(btn.dataset.skillFilter);
    $('#projects').scrollIntoView({ behavior: scrollBehavior() });
    $(`.filters [data-filter="${btn.dataset.skillFilter}"]`).focus({ preventScroll: true });
  }));

  // Pointer glow on project cards (fine pointers only).
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    projects.forEach(card => card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }));
  }

  /* ---------- Project dialog ---------- */
  const dialog = $('.project-dialog');
  const dialogBody = $('.dialog-body', dialog);
  const dialogPos = $('.dialog-pos', dialog);
  const prevBtn = $('.dialog-prev', dialog);
  const nextBtn = $('.dialog-next', dialog);
  let current = null, opener = null;

  function renderDialog(card) {
    current = card;
    const list = visibleProjects();
    const index = list.indexOf(card);
    const el = (tag, props) => Object.assign(document.createElement(tag), props);
    const title = el('h2', { id: 'dialog-title', innerHTML: $('h3', card).innerHTML });
    const extra = $('.metrics, .chips', card);
    dialogBody.replaceChildren(
      $('.tag', card).cloneNode(true),
      title,
      $(':scope > p', card).cloneNode(true),
      el('h3', { textContent: t('dialogHeading') }),
      $('.project-more p', card).cloneNode(true),
      ...(extra ? [extra.cloneNode(true)] : []),
      el('p', { className: 'muted', textContent: t('dialogNote') }),
    );
    dialogPos.textContent = `${index + 1} / ${list.length}`;
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= list.length - 1;
    dialogBody.scrollTop = 0;
  }
  function step(offset) {
    const list = visibleProjects();
    const target = list[list.indexOf(current) + offset];
    if (!target) return;
    renderDialog(target);
    if (document.activeElement.disabled) (offset > 0 ? prevBtn : nextBtn).focus();
  }
  projects.forEach(card => $('.project-open', card).addEventListener('click', e => {
    opener = e.currentTarget;
    renderDialog(card);
    document.body.classList.add('modal-open');
    dialog.showModal();
  }));
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));
  $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const forward = (e.key === 'ArrowRight') === (document.documentElement.dir === 'ltr');
    step(forward ? 1 : -1);
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); opener?.focus(); });

  /* ---------- Certificates marquee ---------- */
  const marquee = $('.marquee');
  const marqueeBtn = $('.marquee-toggle');
  let certsPaused = false;
  // Duplicate each lane's cards so the loop is seamless; clones are hidden from assistive tech.
  $$('.cert-lane', marquee).forEach(lane => {
    [...lane.children].forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add('is-clone');
      clone.setAttribute('aria-hidden', 'true');
      lane.append(clone);
    });
  });
  function updateMarquee() {
    marquee.classList.toggle('paused', certsPaused);
    marqueeBtn.textContent = t(certsPaused ? 'playCerts' : 'pauseCerts');
    marqueeBtn.setAttribute('aria-pressed', String(certsPaused));
  }
  marqueeBtn.addEventListener('click', () => { certsPaused = !certsPaused; updateMarquee(); });

  /* ---------- Copy email ---------- */
  const copyStatus = $('.copy-status');
  $('.copy-email').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText('O.alnasser03@gmail.com'); copyStatus.textContent = t('copied'); }
    catch { copyStatus.textContent = t('copyFail'); }
    setTimeout(() => { copyStatus.textContent = ''; }, 3500);
  });

  $('.year').textContent = new Date().getFullYear();

  /* ---------- Initial language ---------- */
  let initial = new URLSearchParams(location.search).get('lang');
  if (!initial) try { initial = localStorage.getItem('lang'); } catch {}
  if (initial === 'en') applyLang('en', false);
  else { updateCount(); updateMarquee(); }
})();
