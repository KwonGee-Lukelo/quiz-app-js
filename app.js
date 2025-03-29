const section = document.querySelector(".section");
const btnRun = document.querySelector(".btn__run");

btnRun.addEventListener("click", RunApp);

function RunApp() {
  section.textContent = "";
}
