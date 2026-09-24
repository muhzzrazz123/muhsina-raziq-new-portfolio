/**
 * MUHSINA RAZIQ — AI CONTENT CREATOR PORTFOLIO
 * Core Interactive Engine: Parallax, Custom Cursor, Cursor Trail,
 * Floating Previews, Bento Video Lightbox, and Section Transitions
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 01 — Projects Database for Lightbox & Services
  // ==========================================================================
  const projectsData = {
    'velora-parfum': {
      title: 'Velora Parfum — Haute Parfumerie',
      category: 'AI COMMERCIAL',
      concept: 'Conceived, prompted, generated, and directed by Muhsina Raziq. Synthesizing photorealistic ruby glass caustics, slow-motion fluid dynamics, atmospheric chiaroscuro lighting, and high-precision model choreography into a seamless 30-second luxury commercial.',
      video: 'assets/videos/muhsina-ai-work.mp4',
      image: 'assets/images/projects/perfume-commercial.jpg',
      tools: ['Kling AI', 'Midjourney', 'CapCut', 'Hugging Face'],
      prompt: 'Cinematic luxury perfume commercial advertisement for Velora Parfum, dramatic ruby red glass flacon emerging from obsidian shadows with gold typography, high fashion silhouette model with golden backlight halo, high-speed fluid caustics and amber liquid droplets, monumental architecture staircase with crimson neon strip lighting, slow-motion atomized mist spray, 4k ultra-high definition cinematic grade --ar 9:16'
    },
    'dior-eyewear': {
      title: 'Luxury Eyewear — Dior Spec Commercial',
      category: 'AI COMMERCIAL',
      concept: 'High-speed camera maneuvers and holographic optic refractions. Directed to demonstrate futuristic spatial eyewear through dramatic light sweeps and micro-facial choreography.',
      video: 'assets/videos/dior-eyewear.mp4',
      image: 'assets/images/projects/smart-eyewear.jpg',
      tools: ['Kling AI', 'Midjourney', 'CapCut'],
      prompt: 'Cinematic luxury eyewear commercial for high fashion house, sleek obsidian and chrome sunglasses catching dramatic horizontal anamorphic lens flares, high-fashion model walking in minimal concrete brutalist gallery, rapid macro focal shift from eye to frame, 8k resolution --ar 9:16'
    },
    'galaxy-chocolate': {
      title: 'Galaxy Silk — Melted Sensations',
      category: 'PRODUCT ADVERTISEMENT',
      concept: 'Confectionery commercial simulation testing fluid viscosity and generative culinary physics. Seamless macro swirls of silk milk chocolate blending with golden caramel ribbons.',
      video: 'assets/videos/galaxy-chocolate.mp4',
      image: 'assets/images/projects/perfume-commercial.jpg',
      tools: ['Kling AI', 'Midjourney', 'Topaz Video AI'],
      prompt: 'High-speed macro commercial advertisement of velvety liquid milk chocolate waves colliding with molten golden caramel ribbons, hyper-realistic fluid splash physics, rich studio golden lighting, 1000fps slow-motion phantom camera style, 4k ultra realistic --ar 16:9'
    },
    'titan-watch': {
      title: 'Titan Chrono — Women\'s Horology',
      category: 'AI COMMERCIAL',
      concept: 'Precision engineering meets feminine elegance. Exploring microscopic gear mechanics, rose-gold diamond bezel reflections, and dramatic shadow cuts.',
      video: 'assets/videos/titan-watch.mp4',
      image: 'assets/images/projects/smart-eyewear.jpg',
      tools: ['Kling AI', 'Midjourney', 'CapCut'],
      prompt: 'Luxury timepiece commercial advertisement for Titan women\'s collection, intricate rose gold watch mechanics turning in slow motion, diamond hour markers glistening under soft studio rim light, elegant feminine wrist in charcoal silk sleeve, macro cinematic lens 8k --ar 9:16'
    },
    'yardley-memories': {
      title: 'Yardley Memories — Ethereal Lavender',
      category: 'CINEMATIC VIDEO',
      concept: 'A nostalgic fragrance memory piece exploring rolling lavender meadows, morning mist, and warm cinematic 35mm film emulation.',
      video: 'assets/videos/yardley-memories.mp4',
      image: 'assets/images/projects/bioluminescent-story.jpg',
      tools: ['Kling AI', 'ChatGPT', 'CapCut'],
      prompt: 'Cinematic nostalgic fragrance story ad for Yardley, sweeping drone shot over morning lavender meadows bathed in golden dawn mist, delicate dew drops scattering light, gentle slow breeze, warm cinematic 35mm film grain aesthetic, peaceful and evocative --ar 16:9'
    },
    'aethelgard-city': {
      title: 'Aethelgard 2088 — The Starlight Nomad',
      category: 'AI STORYTELLING',
      concept: 'An atmospheric sci-fi narrative sequence exploring a towering futuristic cyberpunk metropolis and a solitary wanderer observing the cosmic skyline.',
      video: null,
      image: 'assets/images/projects/sci-fi-city.jpg',
      tools: ['ChatGPT', 'Kling AI', 'Midjourney', 'Claude'],
      prompt: 'Cinematic AI visual storytelling, atmospheric sci-fi scene of an ethereal traveler in high-tech flowing garments standing on a towering precipice overlooking an illuminated futuristic neon metropolis, volumetric golden hour haze, subtle purple and magenta atmospheric backlighting, cinematic anamorphic composition, 8k render --ar 16:9'
    },
    'liquid-iridescence': {
      title: 'Liquid Iridescence — Kinetic Couture',
      category: 'CREATIVE EXPERIMENT',
      concept: 'Zero-gravity avant-garde digital fashion experiment combining fluid metallic physics and generative micro-textiles.',
      video: null,
      image: 'assets/images/projects/avant-garde-fashion.jpg',
      tools: ['Midjourney', 'Nano Banana', 'Flow AI', 'CapCut'],
      prompt: 'Avant-garde AI high fashion visual experiment, iridescent metallic liquid fabric floating in zero gravity around a sculptural mannequin form, dark charcoal studio background, cinematic dramatic rim lighting in electric violet and soft rose gold, hyper-detailed textile weave, 8k editorial photography --ar 16:9'
    },
    'apex-hypercar': {
      title: 'Apex Hypercar — Autonomous Velocity',
      category: 'PRODUCT ADVERTISEMENT',
      concept: 'Synthesizing motion-blur aerodynamics with architectural twilight reflections on wet asphalt runways.',
      video: null,
      image: 'assets/images/projects/futuristic-auto.jpg',
      tools: ['Kling AI', 'Midjourney', 'Topaz Video AI'],
      prompt: 'Cinematic AI commercial for a futuristic electric luxury hypercar on a wet reflective asphalt surface at twilight, dramatic moody violet and soft cyan atmospheric volumetric lighting, sleek aerodynamic carbon fiber body, sharp LED headlamp glow, ultra photorealistic cinematic octane render 8k --ar 16:9'
    },
    'abyssal-bloom': {
      title: 'Abyssal Bloom — Luminescent Depths',
      category: 'AI STORYTELLING',
      concept: 'Deep-ocean bioluminescent botanical ecosystems rendered with ethereal aquatic light scattering and surreal flora choreography.',
      video: null,
      image: 'assets/images/projects/bioluminescent-story.jpg',
      tools: ['Midjourney', 'Gemini', 'Flow AI'],
      prompt: 'Bioluminescent deep sea flora and floating radiant jellyfish tendrils glowing in deep twilight cyan and amber, ethereal subsurface water caustics, cinematic documentary lighting, national geographic meets avatar aesthetic, ultra detailed macro photography --ar 16:9'
    }
  };


  // Check if touch device / mobile
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==========================================================================
  // 03 — 09: Custom Cursor & Dynamic Hover States (Desktop Only)
  // ==========================================================================
  const cursorDot = document.getElementById('custom-cursor-dot');
  const cursorRing = document.getElementById('custom-cursor-ring');
  const cursorText = document.getElementById('cursor-text');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  if (!isTouchDevice && cursorDot && cursorRing) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth Spring Lag for Outer Ring
    function updateCursorRing() {
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(updateCursorRing);
    }
    requestAnimationFrame(updateCursorRing);

    // Hover Listeners for Cursor State
    function setupCursorHovers() {
      // Elements with data-cursor
      document.querySelectorAll('[data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const type = el.getAttribute('data-cursor');
          if (type === 'VIEW') {
            document.body.setAttribute('data-cursor-state', 'view');
            cursorText.textContent = 'VIEW';
          } else if (type.includes('OPEN')) {
            document.body.setAttribute('data-cursor-state', 'open');
            cursorText.textContent = 'OPEN ↗';
          }
        });
        el.addEventListener('mouseleave', () => {
          document.body.removeAttribute('data-cursor-state');
          cursorText.textContent = '';
        });
      });

      // Navigation Links Hover: shrink cursor
      document.querySelectorAll('.nav-link, .nav-brand, .nav-cta-pill').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          document.body.setAttribute('data-cursor-state', 'nav');
        });
        el.addEventListener('mouseleave', () => {
          document.body.removeAttribute('data-cursor-state');
        });
      });
    }
    setupCursorHovers();
  }

  // ==========================================================================
  // 04 — 25: Signature AI Glowing Cursor Trail (Canvas Dust)
  // ==========================================================================
  const trailCanvas = document.getElementById('cursor-trail-canvas');
  if (trailCanvas && !isTouchDevice && !prefersReducedMotion) {
    const ctx = trailCanvas.getContext('2d');
    let width = (trailCanvas.width = window.innerWidth);
    let height = (trailCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = trailCanvas.width = window.innerWidth;
      height = trailCanvas.height = window.innerHeight;
    });

    const particles = [];
    const colors = [
      'rgba(255, 77, 46, ',   // Coral primary
      'rgba(255, 101, 71, ',  // Coral bright
      'rgba(255, 190, 150, ', // Warm peach
      'rgba(221, 212, 242, '  // Soft lavender
    ];

    let lastSpawn = 0;
    window.addEventListener('mousemove', (e) => {
      const now = performance.now();
      if (now - lastSpawn > 25) { // spawn rate control
        lastSpawn = now;
        const colorBase = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.5,
          radius: Math.random() * 3 + 2,
          alpha: 0.28,
          colorBase: colorBase,
          life: 1.0,
          decay: Math.random() * 0.02 + 0.015
        });
      }
    });

    function renderTrail() {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const currentAlpha = p.alpha * p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${currentAlpha})`;
        ctx.shadowColor = `${p.colorBase}0.4)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(renderTrail);
    }
    requestAnimationFrame(renderTrail);
  }

  // ==========================================================================
  // 05 — 07 & 08: Hero Avatar Cursor Tracking & Multi-Layer Parallax
  // ==========================================================================
  const heroSection = document.getElementById('hero');
  const heroStage = document.getElementById('hero-stage');
  const characterTiltBox = document.getElementById('character-tilt-box');
  const characterLightSheen = document.getElementById('character-light-sheen');
  const heroParallaxElements = document.querySelectorAll('[data-parallax]');

  if (heroSection && !isTouchDevice && !prefersReducedMotion) {
    let heroNormX = 0;
    let heroNormY = 0;
    let currentHeroX = 0;
    let currentHeroY = 0;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      // Normalized coordinates: -1 to 1
      heroNormX = (relX / rect.width) * 2 - 1;
      heroNormY = (relY / rect.height) * 2 - 1;

      // Update light sheen on Muhsina's portrait
      if (characterLightSheen) {
        const charRect = characterTiltBox.getBoundingClientRect();
        const charX = ((e.clientX - charRect.left) / charRect.width) * 100;
        const charY = ((e.clientY - charRect.top) / charRect.height) * 100;
        characterTiltBox.style.setProperty('--mouse-rel-x', `${charX}%`);
        characterTiltBox.style.setProperty('--mouse-rel-y', `${charY}%`);
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      heroNormX = 0;
      heroNormY = 0;
    });

    function updateHeroParallax() {
      // Spring smoothing
      currentHeroX += (heroNormX - currentHeroX) * 0.08;
      currentHeroY += (heroNormY - currentHeroY) * 0.08;

      // 1. Character 3D Head/Body Tilt & Gaze
      if (characterTiltBox) {
        const tiltX = currentHeroY * -7; // natural tilt bounds
        const tiltY = currentHeroX * 8;
        const transX = currentHeroX * 10;
        const transY = currentHeroY * 8;

        characterTiltBox.style.transform = `
          rotateX(${tiltX.toFixed(2)}deg) 
          rotateY(${tiltY.toFixed(2)}deg) 
          translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0)
        `;
      }

      // 2. Parallax Layers (Stickers, Text, Backdrop Circle)
      heroParallaxElements.forEach((el) => {
        const factor = parseFloat(el.getAttribute('data-parallax')) || 10;
        const pX = (currentHeroX * factor).toFixed(2);
        const pY = (currentHeroY * factor).toFixed(2);

        // Keep initial rotation if set in CSS
        if (el.classList.contains('badge-top-left')) {
          el.style.transform = `translate(${pX}px, ${pY}px) rotate(-4deg)`;
        } else if (el.classList.contains('badge-top-right')) {
          el.style.transform = `translate(${pX}px, ${pY}px) rotate(3deg)`;
        } else if (el.classList.contains('badge-mid-left')) {
          el.style.transform = `translate(${pX}px, ${pY}px) rotate(2deg)`;
        } else if (el.classList.contains('badge-bottom-right')) {
          el.style.transform = `translate(${pX}px, ${pY}px) rotate(-3deg)`;
        } else if (el.classList.contains('badge-bottom-left')) {
          el.style.transform = `translate(${pX}px, ${pY}px) rotate(4deg)`;
        } else {
          el.style.transform = `translate3d(${pX}px, ${pY}px, 0)`;
        }
      });

      requestAnimationFrame(updateHeroParallax);
    }
    requestAnimationFrame(updateHeroParallax);
  }

  // ==========================================================================
  // 06 — 06: Floating Nav Pill Theme & Section Spy
  // ==========================================================================
  const floatingNav = document.getElementById('floating-nav');
  const sections = document.querySelectorAll('section[data-section]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionTheme = entry.target.getAttribute('data-section');
          const sectionId = entry.target.getAttribute('id');

          // Adapt Nav Pill contrast
          if (sectionTheme === 'cream' || sectionTheme === 'lavender') {
            floatingNav.classList.add('nav-dark-mode');
            document.body.classList.remove('in-dark-section');
          } else {
            floatingNav.classList.remove('nav-dark-mode');
            if (sectionTheme === 'black' || sectionTheme === 'darkred') {
              document.body.classList.add('in-dark-section');
            } else {
              document.body.classList.remove('in-dark-section');
            }
          }

          // Active Link Highlight
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  // Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileToggle.setAttribute('aria-expanded', 'true');
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileToggle.setAttribute('aria-expanded', 'false');
    };

    if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
    mobileLinks.forEach((link) => link.addEventListener('click', closeDrawer));

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // ==========================================================================
  // 07 — 14: Services Section Interactive Cursor Preview
  // ==========================================================================
  const serviceRows = document.querySelectorAll('.service-row');
  const servicePreview = document.getElementById('service-preview');
  const previewImg = document.getElementById('service-preview-img');
  const previewVideo = document.getElementById('service-preview-video');
  const previewTitle = document.getElementById('service-preview-title');
  const previewTag = document.getElementById('service-preview-tag');

  let previewTargetX = 0;
  let previewTargetY = 0;
  let previewCurrX = 0;
  let previewCurrY = 0;
  let isHoveringService = false;

  if (servicePreview && !isTouchDevice) {
    window.addEventListener('mousemove', (e) => {
      previewTargetX = e.clientX + 25; // slight offset from cursor
      previewTargetY = e.clientY + 25;
    });

    function updateServicePreviewPos() {
      if (isHoveringService) {
        previewCurrX += (previewTargetX - previewCurrX) * 0.15;
        previewCurrY += (previewTargetY - previewCurrY) * 0.15;
        servicePreview.style.left = `${previewCurrX}px`;
        servicePreview.style.top = `${previewCurrY}px`;
      }
      requestAnimationFrame(updateServicePreviewPos);
    }
    requestAnimationFrame(updateServicePreviewPos);

    serviceRows.forEach((row) => {
      row.addEventListener('mouseenter', () => {
        const previewSrc = row.getAttribute('data-preview');
        const videoSrc = row.getAttribute('data-video');
        const title = row.getAttribute('data-title');
        const tag = row.getAttribute('data-tag');

        previewTitle.textContent = title;
        previewTag.textContent = tag;

        if (videoSrc) {
          previewImg.classList.remove('active');
          previewVideo.src = videoSrc;
          previewVideo.classList.add('active');
          previewVideo.play().catch(() => {});
        } else if (previewSrc) {
          previewVideo.pause();
          previewVideo.classList.remove('active');
          previewImg.src = previewSrc;
          previewImg.classList.add('active');
        }

        isHoveringService = true;
        servicePreview.classList.add('visible');
      });

      row.addEventListener('mouseleave', () => {
        isHoveringService = false;
        servicePreview.classList.remove('visible');
        previewVideo.pause();
      });
    });
  }

  // ==========================================================================
  // 08 — 15 & 16: Portfolio Filter Pills & Video Hover Previews
  // ==========================================================================
  const filterPills = document.querySelectorAll('.filter-pill');
  const bentoCards = document.querySelectorAll('.bento-card');

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-filter');

      bentoCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Play video on bento card hover
  bentoCards.forEach((card) => {
    const video = card.querySelector('.bento-video');
    if (video) {
      card.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        video.pause();
      });
    }
  });

  // ==========================================================================
  // 09 — Interactive Cinema Lightbox Modal
  // ==========================================================================
  const cinemaModal = document.getElementById('cinema-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalVideo = document.getElementById('modal-video');
  const modalImage = document.getElementById('modal-image');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalConcept = document.getElementById('modal-concept');
  const modalTools = document.getElementById('modal-tools');
  const modalPromptContent = document.getElementById('modal-prompt-content');
  const copyPromptBtn = document.getElementById('copy-prompt-btn');

  function openCinemaModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalConcept.textContent = data.concept;
    modalPromptContent.textContent = data.prompt;

    // Build tools tags
    modalTools.innerHTML = '';
    data.tools.forEach((tool) => {
      const tag = document.createElement('span');
      tag.className = 'modal-tool-tag';
      tag.textContent = tool;
      modalTools.appendChild(tag);
    });

    if (data.video) {
      modalImage.classList.remove('active');
      modalVideo.src = data.video;
      modalVideo.classList.add('active');
      modalVideo.play().catch(() => {});
    } else {
      modalVideo.pause();
      modalVideo.classList.remove('active');
      modalImage.src = data.image;
      modalImage.classList.add('active');
    }

    cinemaModal.classList.add('open');
    cinemaModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCinemaModal() {
    cinemaModal.classList.remove('open');
    cinemaModal.setAttribute('aria-hidden', 'true');
    modalVideo.pause();
    document.body.style.overflow = '';
  }

  // Open modal on card click
  bentoCards.forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      if (id) openCinemaModal(id);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCinemaModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeCinemaModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cinemaModal.classList.contains('open')) {
      closeCinemaModal();
    }
  });

  // Copy Prompt to Clipboard
  if (copyPromptBtn) {
    copyPromptBtn.addEventListener('click', () => {
      const text = modalPromptContent.textContent;
      navigator.clipboard.writeText(text).then(() => {
        const original = copyPromptBtn.textContent;
        copyPromptBtn.textContent = 'COPIED ✓';
        copyPromptBtn.style.background = 'var(--coral-primary)';
        setTimeout(() => {
          copyPromptBtn.textContent = original;
          copyPromptBtn.style.background = '';
        }, 2000);
      });
    });
  }

  // ==========================================================================
  // 10 — 17: Creative Toolkit Interactive 3D Tilt
  // ==========================================================================
  const toolChips = document.querySelectorAll('.tool-chip');
  if (!isTouchDevice && !prefersReducedMotion) {
    toolChips.forEach((chip) => {
      chip.addEventListener('mousemove', (e) => {
        const rect = chip.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const inner = chip.querySelector('.chip-inner');
        if (inner) {
          inner.style.transform = `
            translateY(-8px) 
            rotateX(${(-y * 0.2).toFixed(2)}deg) 
            rotateY(${(x * 0.2).toFixed(2)}deg) 
            scale(1.06)
          `;
        }
      });
      chip.addEventListener('mouseleave', () => {
        const inner = chip.querySelector('.chip-inner');
        if (inner) {
          inner.style.transform = '';
        }
      });
    });
  }

  // ==========================================================================
  // 11 — 21 & 22: Minimal Contact Form Handling
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const projectType = document.getElementById('form-type').value;
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !projectType || !message) {
        formStatus.textContent = 'Please complete all required fields.';
        formStatus.style.color = '#B82A1B';
        return;
      }

      // Button loading state
      const btnText = submitBtn.querySelector('.btn-text');
      const origText = btnText.textContent;
      btnText.textContent = 'TRANSMITTING...';
      submitBtn.disabled = true;

      setTimeout(() => {
        btnText.textContent = 'MESSAGE SENT ✓';
        submitBtn.style.background = '#120B0B';
        formStatus.textContent = 'Thank you! Muhsina will be in touch within 24 hours.';
        formStatus.style.color = 'var(--coral-bright)';
        contactForm.reset();

        setTimeout(() => {
          btnText.textContent = origText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 4000);
      }, 1000);
    });
  }

});
