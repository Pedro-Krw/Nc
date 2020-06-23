// ? setTimeout()
//  ?setInterval()

// setTimeout(function () {
//   console.log("napi biak");
// }, 3000);

//program hitung Mundur
const tujuan = new Date("Mar 10 2023 16:00:00").getTime();

const hitung = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tujuan - sekarang;
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24 * 12));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);
  const teks = document.getElementById("teks");
  teks.innerHTML =
    "Ago Biak Comming Soon :" +
    hari +
    " days " +
    jam +
    " hours " +
    menit +
    " minutes " +
    detik +
    " seconds " +
    "";
}, 1000);
