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
  const gap = parseInt(getComputedStyle(container).gap) || 20;
  const cardWidth = cards[0].offsetWidth + gap;
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

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10, // 👈 menor espaçamento entre slides
    slidesPerView: 1, // 👈 no mobile mostra 2 já de início
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2, // 👈 no celular paisagem
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      }
    }
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".carrossel", {
      loop: true,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 15,
      navigation: {
        nextEl: ".btn-proximo",
        prevEl: ".btn-anterior"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    });
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

const botao = document.getElementById('lerMaisBtn');
  const textoExtra = document.querySelector('.extra-texto');

  botao.addEventListener('click', () => {
    textoExtra.classList.toggle('mostrar');
    botao.innerText = textoExtra.classList.contains('mostrar') ? 'Ler menos' : 'Ler mais';
  });
