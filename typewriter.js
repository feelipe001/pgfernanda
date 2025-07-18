const phrase = "Tenha o que postar. Todos os dias. Com foco em vender, sem travar e sem perder tempo.";
let i = 0;
const speed = 50;

function typeWriter() {
  if (i < phrase.length) {
    document.getElementById("typewriter").innerHTML += phrase.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
