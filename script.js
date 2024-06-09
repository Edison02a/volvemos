let clickCount = 0;
let siButton = document.getElementById("si");
let noButton = document.getElementById("no");
let messagesDiv = document.getElementById("messages");

let messages = [
  "Como que no?",
  "Deja de darle click al no, escuchame un momento porfavor",
  "Mira me pase de pendejo, pero enserio te extraño",
  "¿Cómo te hago entender que a nadie extraño más Que nada me hace falta más que tu presencia?",
  "¿Y qué más puedo hacer para complacerte? Con todo lo que te digo no logro convencerte",
  "Deja de darle al no porfavor",
  "Creo que estas de obstinada con el boton no, vamos a empezar de nuevo"
];

noButton.addEventListener("click", function() {
  clickCount++;
  if (clickCount <= 8) {
    let message = messages[clickCount - 1];
    messagesDiv.innerHTML += `<p class="message">${message}</p>`; 

    // Make the "Si" button bigger
    siButton.style.padding = `${15 + clickCount * 5}px ${32 + clickCount * 5}px`; 
    siButton.style.fontSize = `${16 + clickCount * 2}px`;

    // Cambia el color del botón "Sí" a rojo después del primer clic
    if (clickCount === 1) {
      siButton.style.backgroundColor = "red";
    }
  }

  if (clickCount === 8) {
    clickCount = 0;
    messagesDiv.innerHTML = "";
    siButton.style.padding = "15px 32px";
    siButton.style.fontSize = "16px";
    siButton.style.backgroundColor = "#4CAF50"; // Restablece el color original del botón "Sí"
  }
});

siButton.addEventListener("click", function() {
    let message = "Sí?, gracias dios por esta oportunidad";
    let messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML += `<p class="message">${message}</p>`; 
    
    setTimeout(function() {
      let fullScreenDiv = document.createElement("div");
      fullScreenDiv.className = "full-screen-div";
      document.body.appendChild(fullScreenDiv);
    
      let heartImg = document.createElement("img");
      heartImg.src = "corazon.gif"; // Reemplaza con la ruta de tu archivo GIF
      heartImg.style.width = "100%";
      heartImg.style.height = "100%";
      fullScreenDiv.appendChild(heartImg);
    
      fullScreenDiv.style.display = "block";
  
      // Opcional: Ocultar el div de pantalla completa después de 5 segundos
      setTimeout(function() {
        fullScreenDiv.style.display = "none";
        document.body.removeChild(fullScreenDiv);
      }, 5000); // 5000 milisegundos = 5 segundos
  
    }, 0); // Tiempo de espera para mostrar el div de pantalla completa
  });
  