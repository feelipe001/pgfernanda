const phrase = "Transforme seu Instagram em uma máquina de atração de clientes com apenas 5 minutos por dia!";
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
