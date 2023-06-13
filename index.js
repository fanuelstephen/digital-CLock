const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEL = document.getElementById("ampm");

function updateCLock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerHTML = h;
  minutesEl.innerHTML = m;
  secondEl.innerHTML = s;
  ampm.innerHTML = ampm;

  setTimeout(() => {
    updateCLock();
  }, 1000);
}
updateCLock();
