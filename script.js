const satu = document.getElementById("satu");
const ganti = document.getElementById("tombol");
ganti.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
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

// ini bagian dark mode
const angkasa = document.getElementById("angkasa");
angkasa.addEventListener("click", function () {
  document.body.classList.toggle("warnaku");
});
//akhir bagian dark mode

// let body = document.querySelector("body");
// let eneble = document.getElementById("eneble");
// var darkMode = false;

// eneble.addEventListener("click", function () {
//   darkMode = !darkMode;
//   body.classList.add("dark-mode");
//   body.classList.toggle("dark-mode");
// });
