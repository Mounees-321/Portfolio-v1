/**
 * Global Architecture Layout Navigation Engine
 * Switches layout context states and launches interactive component events
 * @param {string} id - The destination screen identity hash sequence
 * @param {Event} e - Contextual interface user action parameter
 */
function showSection(id, e) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  
  const targetSection = document.getElementById('section-' + id);
  if (targetSection) targetSection.classList.add('active');
  
  if (e && e.currentTarget) {
    e.currentTarget.classList.add('active');
  }
  
  window.scrollTo(0, 0);
  if (id === 'contact') launchFireworks();
}

/**
 * Hero Character Sprite Jump Animation Handler
 */
function marioJump(el) {
  el.style.animation = 'none';
  setTimeout(() => { el.style.animation = ''; }, 10);
}

/**
 * Graphical Emojis Explosion Cluster Engine
 */
function launchFireworks() {
  const container = document.getElementById('contact-fireworks');
  if (!container) return;
  
  const emojis = ['⭐', '🎉', '🏆', '💫', '✨', '🌟', '🎊'];
  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      const fw = document.createElement('div');
      fw.className = 'firework';
      fw.textContent = emojis[i % emojis.length];
      fw.style.left = (20 + Math.random() * 60) + '%';
      fw.style.top = (10 + Math.random() * 60) + '%';
      container.appendChild(fw);
      setTimeout(() => fw.remove(), 1000);
    }, i * 150);
  }
}

/**
 * Opens the retro image overlay modal takeover
 * @param {string} imageSrc - Path URL target of the project asset
 * @param {string} projectTitle - Title text to display in the modal header
 */
function openPreviewModal(imageSrc, projectTitle) {
  const modal = document.getElementById('retroImageModal');
  const modalImg = document.getElementById('retroModalImg');
  const modalTitle = document.getElementById('retroModalTitle');

  if (modal && modalImg) {
    modalImg.src = imageSrc;
    if (modalTitle) modalTitle.textContent = "VIEW // " + projectTitle;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Stop background page scrolling
  }
}

/**
 * Closes the retro image overlay modal frame
 */
function closePreviewModal() {
  const modal = document.getElementById('retroImageModal');
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore background page scrolling
  }
}