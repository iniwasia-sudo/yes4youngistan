// Youngistan (YES - Young Elite Success) Coming Soon Logic
document.addEventListener('DOMContentLoaded', () => {

  // --- Waitlist Form Submission Handling ---
  const form = document.getElementById('hero-waitlist-form');
  const input = document.getElementById('hero-email-input');
  const msg = document.getElementById('hero-waitlist-msg');

  if (form && input && msg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();

      if (!email || !email.includes('@')) {
        msg.className = 'waitlist-message error';
        msg.textContent = 'Please enter a valid email address.';
        return;
      }

      // Save locally
      try {
        const existing = JSON.parse(localStorage.getItem('yes_waitlist') || '[]');
        existing.push({ email, date: new Date().toISOString() });
        localStorage.setItem('yes_waitlist', JSON.stringify(existing));
      } catch (err) {
        // localStorage fallback
      }

      msg.className = 'waitlist-message success';
      msg.textContent = "🎉 You're on the list! Watch your inbox for your priority invitation.";
      input.value = '';

      setTimeout(() => {
        msg.style.display = 'none';
      }, 7000);
    });
  }

});
