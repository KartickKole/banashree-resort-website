// ==========================================
// Banashree Resort - Main Script
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------
  // 1. Loading Screen
  // ----------------------------------------
  const loader = document.getElementById('loader');
  
  // Set minimum load time to ensure animation completes, but max 3s
  setTimeout(() => {
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
        initAfterLoad();
      }, 800);
    }
  }, 2500);

  // Fallback for window.onload
  window.addEventListener('load', () => {
    // Just in case it hasn't fired yet
    document.body.classList.remove('no-scroll');
  });

  // ----------------------------------------
  // 2. Custom Cursor
  // ----------------------------------------
  const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
  const cursorRing = document.querySelector('.cursor-ring') as HTMLElement;
  
  if (cursorDot && cursorRing && window.innerWidth > 1024) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot follows exactly
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Ring follows with a delay
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover effect on interactable elements
    const hoverElements = document.querySelectorAll('a, button, .gallery-item, .room-card, .feature-card, .btn');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ----------------------------------------
  // 3. Scroll Progress & Navbar
  // ----------------------------------------
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    // Progress Bar
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Navbar Sticky
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollTop > 500) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }
  });

  // Back to top functionality
  if (backToTopBtn) {
    backToTopBtn.style.opacity = '0'; // init state
    backToTopBtn.style.pointerEvents = 'none';
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----------------------------------------
  // 4. Mobile Menu
  // ----------------------------------------
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ----------------------------------------
  // 5. Hero Slider
  // ----------------------------------------
  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // Hero Parallax
  const heroSlider = document.getElementById('hero-slider');
  window.addEventListener('scroll', () => {
    if (heroSlider && window.scrollY < window.innerHeight) {
      heroSlider.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    }
  });

  // ----------------------------------------
  // 6. Particles Effect
  // ----------------------------------------
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      
      // Random properties
      const size = Math.random() * 10 + 5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      
      // Styling like a leaf/dust
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = 'rgba(212, 175, 55, 0.4)'; // Gold color
      particle.style.borderRadius = '50% 0 50% 50%';
      particle.style.left = `${left}%`;
      particle.style.top = `${top}%`;
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
      
      // Animation
      particle.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 0 },
        { opacity: Math.random() * 0.5 + 0.2, offset: 0.1 },
        { opacity: Math.random() * 0.5 + 0.2, offset: 0.9 },
        { transform: `translate(${Math.random() * 100 - 50}px, -${Math.random() * 200 + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
      
      particlesContainer.appendChild(particle);
    }
  }

  function initAfterLoad() {
    // ----------------------------------------
    // 7. Scroll Reveal Animations (Intersection Observer)
    // ----------------------------------------
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // If it's a counter, animate it
          if (entry.target.classList.contains('split-content')) {
            startCounters();
          } else if (entry.target.querySelector('.counter')) {
            startCounters(entry.target);
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(el => revealObserver.observe(el));

    // Also observe the stats grid specifically
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) revealObserver.observe(statsGrid);
    const googleRating = document.querySelector('.google-rating');
    if (googleRating) revealObserver.observe(googleRating);
  }

  // ----------------------------------------
  // 8. Number Counters
  // ----------------------------------------
  let countersStarted = false;
  function startCounters(container?: Element) {
    const parent = container || document;
    const counters = parent.querySelectorAll('.counter:not(.counted)');
    
    counters.forEach(counter => {
      const el = counter as HTMLElement;
      el.classList.add('counted'); // mark as counted
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const duration = 2000; // ms
      const isFloat = target % 1 !== 0;
      
      let start = 0;
      let startTimestamp: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const current = easeProgress * target;
        
        if (isFloat) {
          el.innerText = current.toFixed(1);
        } else {
          el.innerText = Math.floor(current).toString();
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.innerText = target.toString(); // Ensure exact target at end
        }
      };
      
      window.requestAnimationFrame(step);
    });
  }

  // ----------------------------------------
  // 9. Gallery Filter
  // ----------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter') || 'all';
      
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === itemCategory) {
          item.classList.remove('hide');
          // Add a small animation effect when showing
          const el = item as HTMLElement;
          el.style.opacity = '0';
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transition = 'opacity 0.5s ease';
          }, 50);
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // ----------------------------------------
  // 10. Lightbox
  // ----------------------------------------
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement;
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  
  let currentImageIndex = 0;
  // Get all visible gallery images
  const getVisibleImages = () => {
    return Array.from(document.querySelectorAll('.gallery-item:not(.hide) img')) as HTMLImageElement[];
  };

  if (lightbox && lightboxImg && lightboxClose) {
    // Open lightbox
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const galleryItem = target.closest('.gallery-item');
      
      if (galleryItem && !galleryItem.classList.contains('hide')) {
        const img = galleryItem.querySelector('img');
        if (img) {
          const visibleImages = getVisibleImages();
          currentImageIndex = visibleImages.indexOf(img);
          
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }
    });

    // Close lightbox
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Navigation
    const showImage = (index: number) => {
      const visibleImages = getVisibleImages();
      if (visibleImages.length === 0) return;
      
      // Loop around
      if (index >= visibleImages.length) currentImageIndex = 0;
      else if (index < 0) currentImageIndex = visibleImages.length - 1;
      else currentImageIndex = index;
      
      const newImg = visibleImages[currentImageIndex];
      
      // Crossfade effect
      lightboxImg.style.opacity = '0';
      setTimeout(() => {
        lightboxImg.src = newImg.src;
        lightboxImg.alt = newImg.alt;
        lightboxImg.style.opacity = '1';
      }, 200);
    };

    if (lightboxPrev && lightboxNext) {
      lightboxPrev.addEventListener('click', () => showImage(currentImageIndex - 1));
      lightboxNext.addEventListener('click', () => showImage(currentImageIndex + 1));
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      } else if (e.key === 'ArrowLeft') {
        showImage(currentImageIndex - 1);
      } else if (e.key === 'ArrowRight') {
        showImage(currentImageIndex + 1);
      }
    });
  }

  // ----------------------------------------
  // 11. Testimonial Slider
  // ----------------------------------------
  const testimonialTrack = document.getElementById('testimonial-track');
  
  if (testimonialTrack) {
    let position = 0;
    let speed = 0.5; // pixels per frame
    let animationId: number;
    let isHovered = false;

    // Clone items for infinite scroll
    const cards = testimonialTrack.querySelectorAll('.testimonial-card');
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      testimonialTrack.appendChild(clone);
    });

    const scrollTestimonials = () => {
      if (!isHovered) {
        position -= speed;
        // Reset when half is scrolled
        if (Math.abs(position) >= testimonialTrack.scrollWidth / 2) {
          position = 0;
        }
        testimonialTrack.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(scrollTestimonials);
    };

    // Pause on hover
    testimonialTrack.addEventListener('mouseenter', () => isHovered = true);
    testimonialTrack.addEventListener('mouseleave', () => isHovered = false);

    // Touch support for pause
    testimonialTrack.addEventListener('touchstart', () => isHovered = true);
    testimonialTrack.addEventListener('touchend', () => isHovered = false);

    scrollTestimonials();
  }

  // ----------------------------------------
  // 12. Form Submission
  // ----------------------------------------
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = submitBtn.innerText;
      
      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.innerText = 'Message Sent Successfully!';
        submitBtn.style.background = '#25D366';
        submitBtn.style.color = '#fff';
        
        contactForm.reset();
        
        // Reset button
        setTimeout(() => {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
        }, 3000);
      }, 1500);
    });
  }

  // ----------------------------------------
  // 13. Set Current Year in Footer
  // ----------------------------------------
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  // ----------------------------------------
  // 14. Set Date input min to today
  // ----------------------------------------
  const dateInput = document.getElementById('date') as HTMLInputElement;
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // ----------------------------------------
  // 15. Smooth anchor scrolling
  // ----------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          // Adjust scroll position for fixed header
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
