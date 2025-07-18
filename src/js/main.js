const btnPrev = document.querySelector(".btn-anterior");
const btnNext = document.querySelector(".btn-proximo");
const container = document.querySelector(".depoimentos");
const cards = document.querySelectorAll(".depoimento");
const verMaisButtons = document.querySelectorAll(".ver-mais");

let currentIndex = 0;

function getCardsPerView() {
  const width = window.innerWidth;
  if (width <= 600) return 1;
  if (width <= 992) return 2;
  return 3;
}

function updateCarousel() {
  const cardsPerView = getCardsPerView();
  const cardWidth = cards[0].offsetWidth + 20; // + gap
  const totalOffset = currentIndex * cardWidth;
  container.style.transform = `translateX(-${totalOffset}px)`;
}

btnNext.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  const maxIndex = cards.length - cardsPerView;

  // Recolhe todos os depoimentos expandidos
  document.querySelectorAll(".depoimento.expanded").forEach(dep => {
    dep.classList.remove("expanded");
    const btn = dep.querySelector(".ver-mais");
    if (btn) btn.textContent = "Ver mais";
  });

  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volta para o início
  }
  updateCarousel();
});


btnPrev.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  const maxIndex = cards.length - cardsPerView;

  // Recolhe todos os depoimentos expandidos
  document.querySelectorAll(".depoimento.expanded").forEach(dep => {
    dep.classList.remove("expanded");
    const btn = dep.querySelector(".ver-mais");
    if (btn) btn.textContent = "Ver mais";
  });

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex; // Vai pro final
  }
  updateCarousel();
});


window.addEventListener("resize", updateCarousel);
window.addEventListener("load", updateCarousel);

verMaisButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const depoimento = btn.closest(".depoimento");
    depoimento.classList.toggle("expanded");
    btn.textContent = depoimento.classList.contains("expanded") ? "Ver menos" : "Ver mais";
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carrosselProjetos");
  const slide = container.querySelector(".carrossel-slide");

  slide.innerHTML += slide.innerHTML;

  let position = 0;
  let speed = 0.5; 
  let paused = false;

  function animate() {
    if (!paused) {
      position -= speed;
      if (Math.abs(position) >= slide.scrollWidth / 2) {
        position = 0; // reinicia
      }
      slide.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
  }

  container.addEventListener("mouseenter", () => paused = true);
  container.addEventListener("mouseleave", () => paused = false);

  animate();
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
});
