
// ======================================
// RH - DIGITAL PORTFOLIO
// RAPHAEL HENRIQUE
// ======================================

document.documentElement.classList.add("js-enabled");

// MENU MOBILE

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );

  });

  // Fecha o menu ao clicar em um link

  navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navigation.classList.remove("is-open");

      menuButton.setAttribute("aria-expanded", "false");

      menuButton.setAttribute("aria-label", "Abrir menu");

    });

  });

}

// ANIMAÇÕES AO ROLAR A PÁGINA

const animatedElements = document.querySelectorAll(
  ".section-index, .about-layout, .skill-card, .project-card, .education-item, .contact h2"
);

animatedElements.forEach(element => {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.12
  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });

} else {

  animatedElements.forEach(element => {
    element.classList.add("visible");
  });

}

// ANO AUTOMÁTICO NO RODAPÉ

const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// MENSAGEM NO CONSOLE

console.log(
  "%c RAPHAEL HENRIQUE ",
  "background:#1557b0;color:#fff;padding:10px;font-weight:bold;"
);

console.log("Portfólio carregado com sucesso!");
