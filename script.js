const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  document.querySelectorAll('.delay').forEach(section => {
    observer.observe(section);
  });





  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");
  
  navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
  });