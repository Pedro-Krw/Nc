const ganti = document.getElementById("tombol");
ganti.addEventListener("click", function () {
  document.body.classList.add("darkcyan");
  setTimeout(function () {
    document.body.classList.remove("darkcyan");
  }, 500);
  // document.body.style.backgroundColor = "darkcyan";
  // satu.style.color = "white";
});

const gantiSatu = document.getElementById("tombol1");
gantiSatu.addEventListener("click", function () {
  document.body.classList.add("blue");
  setTimeout(function () {
    document.body.classList.remove("blue");
  }, 500);
});
const gantiDua = document.getElementById("tombol2");
gantiDua.addEventListener("click", function () {
  document.body.classList.add("green");
  setTimeout(function () {
    document.body.classList.remove("green");
  }, 500);
});

const gantiTiga = document.getElementById("tombol3");
gantiTiga.addEventListener("click", function () {
  document.body.classList.add("red");
  setTimeout(function () {
    document.body.classList.remove("red");
  }, 500);
});

const gantiEmpat = document.getElementById("tombol4");
gantiEmpat.addEventListener("click", function () {
  document.body.classList.add("none");
  setTimeout(function () {
    document.body.classList.remove("none");
  }, 500);
});

// ?ini bagian tombol dark mode dan mengunakan perulangan for dan forEach
const angkasa = document.querySelector(".angkasa");
const sa = document.querySelectorAll(".card");
angkasa.addEventListener("click", function () {
  document.body.classList.toggle("warnaku");
  // ini bagian card yang di looping dan di masukan warnaku
  for (let i = 0; i < sa.length; i++) {
    sa[i].classList.toggle("warnaku");
  }

  // !sa.forEach(function (pil) {
  //  ! pil.classList.toggle("warnaku");
  // !ini akhirnya
  // !});
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
