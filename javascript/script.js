const navbar = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

// klik luar hamburger menu
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// search\
const search = document.querySelector(".search-form");
const box = document.querySelector("#search-box");

document.querySelector("#search").onclick = (e) => {
  search.classList.toggle("active");
  search.focus();
  search.preventDefault(e);
};

// search klik luar elemen
const sb = document.querySelector("#search");

document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }
});

// cart
const cart = document.querySelector(".shopping-cart");
document.querySelector("#trolly").onclick = () => {
  cart.classList.toggle("active");
};

// cart  klik luar elemen
const ct = document.querySelector("#trolly");

document.addEventListener("click", function (e) {
  if (!ct.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// model box
const model = document.querySelector("#item-detail-model");
const button = document.querySelectorAll(".fa-eye");
button.forEach((btn) => {
  btn.onclick = (e) => {
    model.style.display = "flex";
    e.preventDefault;
  };
});
// klik tombol close
document.querySelector(".model #close-icon").onclick = () => {
  model.style.display = "none";
};
