/* ==========================================================================
   HADRONS ELECTRICALS — INTERACTIVE LOGIC (app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
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
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = '#061224';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid rgba(155,190,230,0.2)';
      }
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

  // 4. Smooth Navigation Active State
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 5. Hero Stage 3D Tilt & Parallax Effect
  const heroStageFrame = document.getElementById('heroStageFrame');
  const heroStageImg = document.getElementById('heroStageImg');

  if (heroStageFrame && window.innerWidth > 992) {
    heroStageFrame.addEventListener('mousemove', (e) => {
      const rect = heroStageFrame.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / rect.height) * -6;
      const tiltY = (x / rect.width) * 6;

      heroStageFrame.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
      if (heroStageImg) {
        heroStageImg.style.transform = `scale(1.025) translate(${x * 0.015}px, ${y * 0.015}px)`;
      }
    });

    heroStageFrame.addEventListener('mouseleave', () => {
      heroStageFrame.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      if (heroStageImg) {
        heroStageImg.style.transform = 'scale(1) translate(0, 0)';
      }
    });
  }
});

// 5. Timeline Interactive Milestone Selection
function selectMilestone(year, title, desc) {
  const nodes = document.querySelectorAll('.timeline-node');
  nodes.forEach(node => node.classList.remove('active'));

  // Find the clicked node
  event.currentTarget.classList.add('active');

  const detailYear = document.getElementById('detailYear');
  const detailTitle = document.getElementById('detailTitle');
  const detailDesc = document.getElementById('detailDesc');

  if (detailYear && detailTitle && detailDesc) {
    detailYear.textContent = year;
    detailTitle.textContent = title;
    detailDesc.textContent = desc;
  }
}

// 6. Product Modal Management
function openModal(title, description) {
  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  if (modal && modalTitle && modalDesc) {
    modalTitle.textContent = title;
    modalDesc.textContent = description;
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Close modal when clicking on overlay background
document.addEventListener('click', (e) => {
  const modal = document.getElementById('productModal');
  if (e.target === modal) {
    closeModal();
  }
});

// 7. Contact Form Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const feedback = document.getElementById('formFeedback');
  const name = document.getElementById('fullName').value;

  if (feedback) {
    feedback.style.display = 'block';
    feedback.style.background = '#E8F2FC';
    feedback.style.color = '#0F3B7A';
    feedback.style.border = '1px solid #9BBEE6';
    feedback.innerHTML = `✓ Thank you, <strong>${name}</strong>! Your inquiry has been submitted to Hadrons Electricals. Our sales engineering team (+91 8826722400) will contact you shortly.`;

    document.getElementById('contactForm').reset();

    setTimeout(() => {
      feedback.style.display = 'none';
    }, 8000);
  }
}
