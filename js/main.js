/**
 * Daniel Bakhtiar Portfolio & CV Website
 * Main JavaScript Engine with Interactive Code Terminal, Dual Themes & Dual Language
 */

document.addEventListener('DOMContentLoaded', () => {
  // Current state
  let currentLang = localStorage.getItem('daniel_portfolio_lang') || 'ku';
  let currentTheme = localStorage.getItem('daniel_portfolio_theme') || 'dark-purple';
  let activeTab = 'lua';

  // DOM Elements
  const langToggleBtn = document.getElementById('langToggle');
  const langFlag = document.getElementById('langFlag');
  const langLabel = document.getElementById('langLabel');
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');

  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const cvModalBackdrop = document.getElementById('cvModalBackdrop');
  const openCvBtn = document.getElementById('openCvBtn');
  const heroCvBtn = document.getElementById('heroCvBtn');
  const closeCvModalBtn = document.getElementById('closeCvModalBtn');
  const closeCvModalBtn2 = document.getElementById('closeCvModalBtn2');
  const printCvBtn = document.getElementById('printCvBtn');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const toastMsg = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');

  // Code Box Elements
  const codeTabs = document.querySelectorAll('.code-tab');
  const codeSnippets = document.querySelectorAll('.code-snippet');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const runCodeBtn = document.getElementById('runCodeBtn');
  const consoleOutput = document.getElementById('consoleOutput');
  const lineNumbers = document.getElementById('lineNumbers');

  // ==========================================
  // 1. Theme Switching Functionality
  // ==========================================
  function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('daniel_portfolio_theme', theme);

    if (theme === 'dark-purple') {
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon theme-icon';
      if (themeLabel) themeLabel.textContent = translations[currentLang]?.theme_toggle_dark || (currentLang === 'ku' ? 'تاریک & مۆر' : 'Dark Purple');
    } else {
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun theme-icon';
      if (themeLabel) themeLabel.textContent = translations[currentLang]?.theme_toggle_light || (currentLang === 'ku' ? 'رووناک & مۆر' : 'White Purple');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark-purple' ? 'light-purple' : 'dark-purple';
      setTheme(nextTheme);
    });
  }

  // ==========================================
  // 2. Language Switching Functionality
  // ==========================================
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('daniel_portfolio_lang', lang);

    // Set HTML dir and lang attributes
    if (lang === 'ku') {
      document.documentElement.lang = 'ckb';
      document.documentElement.dir = 'rtl';
      if (langFlag) langFlag.textContent = '🇬🇧';
      if (langLabel) langLabel.textContent = 'English';
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
      if (langFlag) langFlag.textContent = '☀️';
      if (langLabel) langLabel.textContent = 'کوردی';
    }

    // Update theme label based on language
    setTheme(currentTheme);

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Update placeholders with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach((inputElement) => {
      const phKey = inputElement.getAttribute('data-i18n-ph');
      if (translations[lang][phKey]) {
        inputElement.setAttribute('placeholder', translations[lang][phKey]);
      }
    });
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ku' ? 'en' : 'ku';
      setLanguage(nextLang);
    });
  }

  // Initialize Theme and Language
  setTheme(currentTheme);
  setLanguage(currentLang);

  // ==========================================
  // 3. Interactive Code Box (Terminal / Tabs / Runner)
  // ==========================================
  function updateLineNumbers(linesCount) {
    if (!lineNumbers) return;
    let numbersHtml = '';
    for (let i = 1; i <= linesCount; i++) {
      numbersHtml += (i < 10 ? '0' + i : i) + '<br>';
    }
    lineNumbers.innerHTML = numbersHtml;
  }

  function switchTab(tabId) {
    activeTab = tabId;
    codeTabs.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    codeSnippets.forEach(snippet => {
      if (snippet.id === `snippet-${tabId}`) {
        snippet.classList.add('active');
        const lines = snippet.innerText.split('\n').length;
        updateLineNumbers(lines);
      } else {
        snippet.classList.remove('active');
      }
    });

    if (consoleOutput) {
      consoleOutput.innerHTML = `> Switched to ${tabId === 'lua' ? 'daniel.lua' : tabId === 'js' ? 'skills.js' : 'profile.json'}. Click "Run Code" to execute.<span class="console-cursor"></span>`;
    }
  }

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Copy active code snippet
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const activeSnippet = document.querySelector('.code-snippet.active');
      if (activeSnippet) {
        copyToClipboard(activeSnippet.innerText);
      }
    });
  }

  // Run Code execution simulation
  if (runCodeBtn && consoleOutput) {
    runCodeBtn.addEventListener('click', () => {
      const time = new Date().toLocaleTimeString();
      consoleOutput.innerHTML = `> [${time}] Compiling and executing ${activeTab.toUpperCase()} environment...\n`;
      
      setTimeout(() => {
        if (activeTab === 'lua') {
          consoleOutput.innerHTML = `> [${time}] lua5.4 daniel.lua\n<span style="color: #38bdf8;">[PROCESS OK]</span> Memory: 42KB | Execution Time: 1.2ms\n<span style="color: #34d399; font-weight: bold;">[OUTPUT] 🚀 Daniel's system running flawlessly at Slemani IT Hub!</span>\n<span style="color: #c084fc;">✓ Status: Ready for new projects & full-time IT roles.</span><span class="console-cursor"></span>`;
        } else if (activeTab === 'js') {
          consoleOutput.innerHTML = `> [${time}] node skills.js\n<span style="color: #38bdf8;">[V8 ENGINE OK]</span> Modules Loaded: [HTML5, CSS3, ES6+, React, IT Ops]\n<span style="color: #34d399; font-weight: bold;">[OUTPUT] ⚡ Project compiled with 100% precision and modern UX!</span><span class="console-cursor"></span>`;
        } else {
          consoleOutput.innerHTML = `> [${time}] jq . profile.json\n<span style="color: #34d399;">{\n  "developer": "Daniel Bakhtiar",\n  "status": "AVAILABLE",\n  "contact": "+964 776 151 7942"\n}</span>\n<span style="color: #38bdf8;">[VALID JSON] Parsed successfully.</span><span class="console-cursor"></span>`;
        }
      }, 350);
    });
  }

  // ==========================================
  // 4. Navbar Scroll Effect & Active Link Highlight
  // ==========================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Active Section Tracking
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close on navigation link click
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // ==========================================
  // 5. Animated Progress Bars on Scroll
  // ==========================================
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  progressBars.forEach((bar) => {
    skillObserver.observe(bar);
  });

  // ==========================================
  // 6. CV Preview & Print Modal
  // ==========================================
  function openCvModal() {
    if (cvModalBackdrop) {
      cvModalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCvModal() {
    if (cvModalBackdrop) {
      cvModalBackdrop.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  }

  if (openCvBtn) openCvBtn.addEventListener('click', openCvModal);
  if (heroCvBtn) heroCvBtn.addEventListener('click', openCvModal);
  if (closeCvModalBtn) closeCvModalBtn.addEventListener('click', closeCvModal);
  if (closeCvModalBtn2) closeCvModalBtn2.addEventListener('click', closeCvModal);

  if (cvModalBackdrop) {
    cvModalBackdrop.addEventListener('click', (e) => {
      if (e.target === cvModalBackdrop) {
        closeCvModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModalBackdrop && cvModalBackdrop.classList.contains('open')) {
      closeCvModal();
    }
  });

  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // ==========================================
  // 7. Contact Form Handler
  // ==========================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value;
      const email = document.getElementById('formEmail').value;
      const subject = document.getElementById('formSubject').value;
      const message = document.getElementById('formMessage').value;

      const mailtoUrl = `mailto:snowdanial483@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Contact] ${subject} - From ${name}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = translations[currentLang].msg_sent_success || 'Message prepared!';
        formFeedback.style.display = 'block';
      }

      window.location.href = mailtoUrl;

      setTimeout(() => {
        contactForm.reset();
        if (formFeedback) {
          formFeedback.style.display = 'none';
        }
      }, 5000);
    });
  }
});

// ==========================================
// 8. Global Copy to Clipboard & Toast Helper
// ==========================================
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  }).catch(() => {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast();
  });
}

function showToast() {
  const toastMsg = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');
  const currentLang = localStorage.getItem('daniel_portfolio_lang') || 'ku';

  if (toastMsg && toastText && typeof translations !== 'undefined') {
    toastText.textContent = translations[currentLang]?.copied_text || 'Copied!';
    toastMsg.classList.add('show');

    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 2500);
  }
}
