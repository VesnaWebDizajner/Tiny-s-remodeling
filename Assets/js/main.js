//Pojavljivanje ikone hamburger pri smanjenju ekrana na mobilnu verziju

let hamburgerIcon = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobile-menu");
let closeMobileMenu = document.getElementById("close");

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    mobileMenu.classList.remove("active");
  }
});

// Kada se skroluje ekran nav sekcija dobija tamnu pozadinu i ostaje u okviru ekrana

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Menjanje naslova kada ekran bude na mobilnoj verziji

function updateTitleText() {
  const title = document.getElementById("main-title");

  if (!title) return;

  if (window.innerWidth <= 768) {
    title.textContent = "WHERE VISION MEETS CRAFTSMANSHIP";
  } else {
    title.textContent = "RENOVATE YOUR HOME WITH US";
  }
}

window.addEventListener("DOMContentLoaded", updateTitleText);

window.addEventListener("resize", updateTitleText);

// Menjanje broja na stranici about.html, sekciji experience kada se ekran smanji

function updateYearsNumber() {
  const yearsNumber = document.querySelector(".years__number");
  if (window.innerWidth <= 768) {
    yearsNumber.textContent = "10";
  } else {
    yearsNumber.textContent = "30";
  }
}

// Poziv prilikom učitavanja
updateYearsNumber();

// Poziv prilikom promene veličine ekrana
window.addEventListener("resize", updateYearsNumber);

//Promena linka u footer-u smanjenjem ekrana na mobilnu verziju, umesto contact pojavljuje se read sa linkom blog.html

function updateFooterLink() {
  const link = document.getElementById("contactLink");

  if (!link) {
    console.warn("Element with id 'contactLink' not found.");
    return;
  }

  if (window.innerWidth <= 768) {
    link.href = "blog.html";
    link.textContent = "read";
  } else {
    link.href = "contact.html";
    link.textContent = "contact";
  }
}

function updateYearsNumber() {
  const yearSpan = document.getElementById("year");
  if (!yearSpan) {
    console.warn("Element with id 'year' not found.");
    return;
  }

  yearSpan.textContent = new Date().getFullYear();
}

window.addEventListener("DOMContentLoaded", () => {
  updateFooterLink();
  updateYearsNumber();
});

window.addEventListener("resize", updateFooterLink);
