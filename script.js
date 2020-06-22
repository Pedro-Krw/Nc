const ganti = document.getElementById("tombol");
ganti.addEventListener("click", function () {
  document.body.style.backgroundColor = "darkcyan";
  satu.style.color = "white";
});

const gantiSatu = document.getElementById("tombol1");
gantiSatu.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
const gantiDua = document.getElementById("tombol2");
gantiDua.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

const gantiTiga = document.getElementById("tombol3");
gantiTiga.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

const gantiEmpat = document.getElementById("tombol4");
gantiEmpat.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  satu.style.color = "black";
});

// ini bagian tombol dark mode
const angkasa = document.querySelector(".angkasa");
const sa = document.querySelectorAll(".card");
angkasa.addEventListener("click", function () {
  document.body.classList.toggle("warnaku");
  // ini bagian card yang di looping dan di masukan warnaku
  sa.forEach(function (pil) {
    pil.classList.toggle("warnaku");
    // ini akhirnya
  });
});
//akhir bagian dark mode

const loading = document.getElementById("load");
window.addEventListener("load", function () {
  loading.style.display = "none";
});

// const sa = document.querySelectorAll(".card");
// sa.forEach(function (pil) {
//   pil.style.backgroundColor = "black";
//   pil.style.color = "white";
// });

// let body = document.querySelector("body");
// let eneble = document.getElementById("eneble");
// var darkMode = false;

// eneble.addEventListener("click", function () {
//   darkMode = !darkMode;
//   body.classList.add("dark-mode");
//   body.classList.toggle("dark-mode");
// });
