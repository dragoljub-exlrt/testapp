/**
 * Main JavaScript - Event Landing Page
 * Handles: Navigation, Smooth Scroll, Accordion, Mobile Menu, Sticky Header
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initTheme();
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initScheduleTabs();
    initFaqAccordion();
  }

  /* ==========================================================================
     Theme Toggle
     ========================================================================== */

  function initTheme() {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    if (!themeToggles.length) return;

    function getPreferredTheme() {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;

      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }

      return 'dark';
    }

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateThemeToggles(theme);
    }

    function updateThemeToggles(theme) {
      const isLight = theme === 'light';
      themeToggles.forEach(toggle => {
        toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
      });
    }

    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    }

    setTheme(getPreferredTheme());

    themeToggles.forEach(toggle => {
      toggle.addEventListener('click', toggleTheme);
      toggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  /* ==========================================================================
     Sticky Header
     ========================================================================== */

  function initStickyHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    const scrollThreshold = 50;

    function handleScroll() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }

    // Initial check
    handleScroll();

    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     Mobile Menu
     ========================================================================== */

  function initMobileMenu() {
    const toggle = document.querySelector('.header__menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');

    if (!toggle || !mobileMenu) return;

    function openMenu() {
      toggle.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('header__mobile-menu--open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('header__mobile-menu--open');
      document.body.style.overflow = '';
    }

    function toggleMenu() {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    toggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (toggle.getAttribute('aria-expanded') === 'true' &&
          !mobileMenu.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* ==========================================================================
     Smooth Scroll
     ========================================================================== */

  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 70;

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if just "#" or no href
        if (href === '#' || !href) return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }

        // Set focus on target for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  /* ==========================================================================
     Schedule Tabs
     ========================================================================== */

  function initScheduleTabs() {
    const tabs = document.querySelectorAll('.schedule__tab');
    const panels = document.querySelectorAll('.schedule__day');

    if (tabs.length === 0) return;

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        const targetId = this.getAttribute('aria-controls');
        const targetPanel = document.getElementById(targetId);

        if (!targetPanel) return;

        // Update tabs
        tabs.forEach(function(t) {
          t.classList.remove('schedule__tab--active');
          t.setAttribute('aria-selected', 'false');
        });

        this.classList.add('schedule__tab--active');
        this.setAttribute('aria-selected', 'true');

        // Update panels
        panels.forEach(function(panel) {
          panel.classList.add('schedule__day--hidden');
        });

        targetPanel.classList.remove('schedule__day--hidden');
      });

      // Keyboard navigation
      tab.addEventListener('keydown', function(e) {
        const currentIndex = Array.from(tabs).indexOf(this);
        let newIndex;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          newIndex = (currentIndex + 1) % tabs.length;
          tabs[newIndex].focus();
          tabs[newIndex].click();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          tabs[newIndex].focus();
          tabs[newIndex].click();
        } else if (e.key === 'Home') {
          e.preventDefault();
          tabs[0].focus();
          tabs[0].click();
        } else if (e.key === 'End') {
          e.preventDefault();
          tabs[tabs.length - 1].focus();
          tabs[tabs.length - 1].click();
        }
      });
    });
  }

  /* ==========================================================================
     FAQ Accordion
     ========================================================================== */

  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq__item');

    if (faqItems.length === 0) return;

    faqItems.forEach(function(item) {
      const question = item.querySelector('.faq__question');
      const answer = item.querySelector('.faq__answer');

      if (!question || !answer) return;

      question.addEventListener('click', function() {
        const isOpen = item.classList.contains('faq__item--open');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Close all other items (optional - remove for multi-open)
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('faq__item--open');
            const otherQuestion = otherItem.querySelector('.faq__question');
            if (otherQuestion) {
              otherQuestion.setAttribute('aria-expanded', 'false');
            }
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('faq__item--open');
          this.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('faq__item--open');
          this.setAttribute('aria-expanded', 'true');
        }
      });

      // Keyboard support
      question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

})();
