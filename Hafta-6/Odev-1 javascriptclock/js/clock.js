// Kullanıcı adını almak ve ekrana yazmak için
const myName = prompt("Adınız nedir?");
document.getElementById("myName").innerText = myName;

window.onload = function () {
  showTime();
};

function showTime() {
  const myClock = document.getElementById("myClock");
  const date = new Date();
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  const d = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const dayName = d[date.getDay()];
  myClock.innerText = `${h}:${m}:${s} ${dayName}`;
  setTimeout(showTime, 1000);
}
