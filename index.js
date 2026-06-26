document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".navbar").classList.toggle("active");
    });
});const bookButtons = document.querySelectorAll(".book-now");

bookButtons.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "form.html";
    });
});


    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();
 
    // Back to top visibility
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('back-to-top');
      if (window.scrollY > 300) btn.classList.add('visible');
      else btn.classList.remove('visible');
    });
 
    // Newsletter subscribe
    function subscribeNewsletter() {
      const input = document.getElementById('nl-email');
      const email = input.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 
      if (!valid) {
        input.style.outline = '2px solid #ef4444';
        setTimeout(() => { input.style.outline = ''; }, 2000);
        return;
      }
 
      input.value = '';
      const toast = document.getElementById('nl-toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
 
    // Allow Enter key on newsletter input
    document.getElementById('nl-email').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') subscribeNewsletter();
    });
 
    // WhatsApp link
    function openWhatsApp(e) {
      e.preventDefault();
      window.open('https://wa.me/254707761326?text=' + 
        encodeURIComponent('Hello! I would like to enquire about a room booking at Shamas Hotel.'), '_blank');
    }
 