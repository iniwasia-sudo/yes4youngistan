// Youngistan (YES - Young Elite Success) Coming Soon Logic
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Mobile Navigation Toggle ---
  const navHamburger = document.getElementById('nav-hamburger');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

  if (navHamburger && mobileNavDrawer) {
    navHamburger.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('is-open');
    });

    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('is-open');
      });
    });
  }

  // --- 2. Live Countdown Timer ---
  // Target launch date: 28 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 28);
  targetDate.setHours(targetDate.getHours() + 14);

  const daysElem = document.getElementById('countdown-days');
  const hoursElem = document.getElementById('countdown-hours');
  const minElem = document.getElementById('countdown-minutes');
  const secElem = document.getElementById('countdown-seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      if (daysElem) daysElem.textContent = '00';
      if (hoursElem) hoursElem.textContent = '00';
      if (minElem) minElem.textContent = '00';
      if (secElem) secElem.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysElem) daysElem.textContent = days < 10 ? '0' + days : days;
    if (hoursElem) hoursElem.textContent = hours < 10 ? '0' + hours : hours;
    if (minElem) minElem.textContent = minutes < 10 ? '0' + minutes : minutes;
    if (secElem) secElem.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // --- 3. Waitlist Form Submission Handling ---
  function handleWaitlistForm(formId, inputId, msgId) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const msg = document.getElementById(msgId);

    if (!form || !input || !msg) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();

      if (!email || !email.includes('@')) {
        msg.className = 'waitlist-message error';
        msg.textContent = 'Please enter a valid email address.';
        return;
      }

      // Simulate registration
      const position = Math.floor(Math.random() * 80) + 3820;
      
      // Save locally
      try {
        const existing = JSON.parse(localStorage.getItem('yes_waitlist') || '[]');
        existing.push({ email, position, date: new Date().toISOString() });
        localStorage.setItem('yes_waitlist', JSON.stringify(existing));
      } catch (err) {
        // localStorage fallback
      }

      msg.className = 'waitlist-message success';
      msg.textContent = `🎉 You're on the list! Position #${position.toLocaleString()} secured. Watch your inbox for priority access.`;
      input.value = '';

      setTimeout(() => {
        msg.style.display = 'none';
      }, 8000);
    });
  }

  handleWaitlistForm('hero-waitlist-form', 'hero-email-input', 'hero-waitlist-msg');
  handleWaitlistForm('footer-waitlist-form', 'footer-email-input', 'footer-waitlist-msg');

});
