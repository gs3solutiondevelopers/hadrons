/* ==========================================================================
   HADRONS ELECTRICALS — INTERACTIVE LOGIC (app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Navbar Sticky & Scroll Shadow Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '78px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = '#FFFFFF';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 30px rgba(10,30,74,0.12)';
        navMenu.style.borderBottom = '1px solid #E6EEF8';
      }
    });

    // Close mobile menu when a nav link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
          navMenu.style.display = 'none';
        }
      });
    });
  }

  // 3. Product Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Multi-Page Navigation Active State Detection
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  if (currentPath && currentPath !== 'index.html' && currentPath !== '') {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(currentPath)) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  // 5. Hero Stage Parallax & Tilt Effect
  const stageImg = document.getElementById('heroStageImg');
  const visualStage = document.getElementById('heroVisualStage');

  if (visualStage && stageImg && window.innerWidth > 992) {
    visualStage.addEventListener('mousemove', (e) => {
      const rect = visualStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      stageImg.style.transform = `perspective(1000px) rotateX(${y * -0.02}deg) rotateY(${x * 0.02}deg) scale(1.02)`;
    });

    visualStage.addEventListener('mouseleave', () => {
      stageImg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }

  // 6. Automated Page Loading Top Progress Indicator
  const topLoader = document.createElement('div');
  topLoader.className = 'page-top-loader';
  document.body.appendChild(topLoader);

  requestAnimationFrame(() => {
    topLoader.style.width = '65%';
    setTimeout(() => {
      topLoader.style.width = '100%';
      setTimeout(() => {
        topLoader.style.opacity = '0';
        setTimeout(() => {
          topLoader.remove();
        }, 400);
      }, 200);
    }, 120);
  });

  // 7. Staggered Scroll Reveal System (Intersection Observer)
  const revealTargets = document.querySelectorAll(`
    .product-card,
    .oem-card,
    .feature-card,
    .quality-pillar-card,
    .quality-process-step,
    .roadmap-row,
    .portfolio-mini-card,
    .about-point-item,
    .contact-card,
    .spec-badge,
    .section-header-center,
    .section-header,
    .hero-stat-card,
    .ribbon-item,
    .cooler-feature-item,
    .spec-table-container
  `);

  revealTargets.forEach(el => el.classList.add('reveal-on-scroll'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Calculate stagger cascade delay if inside a grid or row
        const parent = entry.target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(entry.target);
          if (index > 0 && index < 12) {
            entry.target.style.transitionDelay = `${index * 60}ms`;
          }
        }
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  revealTargets.forEach(el => revealObserver.observe(el));

  // URL Filter Parameter Detection on products.html
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    const matchingBtn = document.querySelector(`.filter-btn[data-filter="${filterParam}"]`);
    if (matchingBtn) {
      matchingBtn.click();
    }
  }

});

// 6. Filter and Smooth Scroll from Hero Showcase Cards
function filterAndScroll(category, productName) {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPath === 'index.html' || currentPath === '') {
    window.location.href = `products.html?filter=${category}`;
    return;
  }

  // Find matching filter button
  const filterBtns = document.querySelectorAll('.filter-btn');
  let matched = false;

  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      matched = true;
    }
  });

  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    const cat = card.getAttribute('data-category');
    if (!matched || category === 'all' || cat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });

  // Scroll smoothly to products section
  const productSection = document.getElementById('products');
  if (productSection) {
    productSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// 7. Timeline Interactive Milestone Selection
function selectMilestone(year, title, desc) {
  const nodes = document.querySelectorAll('.timeline-node');
  nodes.forEach(node => node.classList.remove('active'));

  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('active');
  }

  const detailYear = document.getElementById('detailYear');
  const detailTitle = document.getElementById('detailTitle');
  const detailDesc = document.getElementById('detailDesc');

  if (detailYear && detailTitle && detailDesc) {
    detailYear.textContent = year;
    detailTitle.textContent = title;
    detailDesc.textContent = desc;
  }
}

// 8. Product Spec Details -> Direct WhatsApp Inquiry Redirect
function openModal(title, description) {
  const phone = "918826722400";
  const rawTitle = title ? title.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim() : "Hadrons Electrical Products";
  const message = `Hello Hadrons Electricals, I am interested in placing an inquiry for: ${rawTitle}. Please share technical specifications, MOQ, and wholesale pricing.`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  window.open(whatsappUrl, '_blank');
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// 9. Contact & Inquiry Form Live Submission -> Direct WhatsApp Redirect
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;

  // Extract values flexibly across contact.html, index.html, etc.
  const name = form.querySelector('#contactName, #fullName, [name="name"], input[type="text"]')?.value || 'Valued Customer';
  const phone = form.querySelector('#contactPhone, #phoneNum, [name="phone"], input[type="tel"]')?.value || 'Not provided';
  const email = form.querySelector('#contactEmail, #emailAddr, [name="email"], input[type="email"]')?.value || 'Not provided';
  const productSelect = form.querySelector('#contactProduct, #productCategory, [name="product"], select');
  const product = productSelect ? (productSelect.options[productSelect.selectedIndex]?.text || productSelect.value) : 'General Inquiry';
  const userMsg = form.querySelector('#contactMessage, #inquiryMsg, [name="message"], textarea')?.value || '';

  const whatsappPhone = "918826722400";
  
  let formattedText = `*NEW PRODUCT INQUIRY — HADRONS ELECTRICALS*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `📧 *Email:* ${email}\n` +
    `📦 *Product Interest:* ${product}\n`;

  if (userMsg.trim()) {
    formattedText += `📝 *Requirement / Message:* ${userMsg.trim()}\n`;
  }
  formattedText += `\n_Please send the official product catalog, MOQ, and quotation._`;

  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(formattedText)}`;

  // Show inline feedback on the webpage
  const feedback = form.querySelector('#formFeedback') || document.getElementById('formFeedback');
  if (feedback) {
    feedback.style.display = 'block';
    feedback.style.background = '#EFF6FF';
    feedback.style.color = '#1E3A8A';
    feedback.style.border = '1.5px solid #3B82F6';
    feedback.innerHTML = `✓ Thank you, <strong>${name}</strong>! Redirecting your inquiry to WhatsApp...`;
  }

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');

  // Reset form
  form.reset();

  if (feedback) {
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 6000);
  }
}

// 10. Horizontal Category Filter Track Navigation & Drag-to-Scroll
function scrollFilterTrack(distance) {
  const track = document.getElementById('productsFilterTrack');
  if (track) {
    track.scrollBy({ left: distance, behavior: 'smooth' });
  }
}

// Enable desktop mouse drag-to-scroll on filter track
document.addEventListener('DOMContentLoaded', () => {
  const filterTrack = document.getElementById('productsFilterTrack');
  if (filterTrack) {
    let isDown = false;
    let startX;
    let scrollLeft;

    filterTrack.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - filterTrack.offsetLeft;
      scrollLeft = filterTrack.scrollLeft;
    });

    filterTrack.addEventListener('mouseleave', () => {
      isDown = false;
    });

    filterTrack.addEventListener('mouseup', () => {
      isDown = false;
    });

    filterTrack.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - filterTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      filterTrack.scrollLeft = scrollLeft - walk;
    });
  }
});

