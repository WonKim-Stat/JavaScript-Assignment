// Reference: https://eloquentjavascript.net/15_event.html#h_TcUD2vzyMe

document.querySelector("p").style.fontSize = "30px";
const resizeBalloon = (event) => {
  let balloon = event.target.querySelector("p");
  let size = parseFloat(balloon.style.fontSize);
  if (size >= 210) explode(balloon);
  if (event.key === "ArrowUp") inflate(balloon, size);
  if (event.key === "ArrowDown") deflate(balloon, size);
  event.stopPropagation();
};
function inflate(balloon, size) {
  balloon.style.fontSize = size + 10 + "px";
}
function deflate(balloon, size) {
  balloon.style.fontSize = size - 10 + "px";
}
function explode(balloon) {
  balloon.textContent = "💥";
  window.removeEventListener("keydown", resizeBalloon);
}
window.addEventListener("keydown", resizeBalloon);
