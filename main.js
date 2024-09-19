const palabraCorrecta = "amor"; // Palabra a adivinar

function verificarPalabra() {
  const adivinanza = document.getElementById("entradaAdivinanza").value.toLowerCase();
  const mensaje = document.getElementById("mensaje");

  //Si el usuario no completo la palabra...
  if (adivinanza.length !== 4) {
    mensaje.textContent = "Ingresá una palabra de 4 letras";
    return;
  }

  //Si el usuario completo la palabra con exito...
  if (adivinanza === palabraCorrecta) {
    mensaje.textContent = "¡Correcto! Palabra adivinada 🦋";
    colorearPalabra();

    setTimeout(function() {
        window.location.href = "video.html";
    }, 5000);
  } else { //Si el usuario completo la palabra con error...
    colorearPalabraIncorrecta();
    mensaje.textContent = "¡Incorrecto! Intentálo de nuevo ❌";
  }
}

function colorearPalabra() {
  const letras = document.querySelectorAll(".letra");

  const colores = [
    {letra: "A", color: "amarillo"},
    {letra: "M", color: "verde"},
    {letra: "O", color: "violeta"},
    {letra: "R", color: "celeste" },
  ];

  colores.forEach((item, index) => {
    setTimeout(() => {
      letras[index].textContent = item.letra;
      letras[index].classList.add(item.color, "animacion-casilla");
    }, index * 500); //Retraso de 500ms entre cada letra
  });
}

function colorearPalabraIncorrecta() {
  const letras = document.querySelectorAll(".letra");

  letras.forEach((letra, index) => {
    setTimeout(() => {
      letra.textContent = "X";
      letra.classList.add("rojo", "animacion-casilla");
    }, index * 500); //Retraso de 500ms entre cada letra
  });
}
