document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const ipInput = document.getElementById("ipInput");
    const ipInfo = document.getElementById("ipInfo");
    const optionsButton = document.getElementById("optionsButton");
    const additionalOptions = document.getElementById("additionalOptions");

    // Mostrar el cuadro emergente al hacer clic en el botón
    const option2Button = document.getElementById("option2Button");
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("closePopupButton");

    option2Button.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Cerrar el cuadro emergente al hacer clic en el botón "Cerrar"
    closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
  
    searchButton.addEventListener("click", function () {
        const ip = ipInput.value;
        if (ip) {
            fetchIpAddressInfo(ip);
        }
    });

    optionsButton.addEventListener("click", function () {
        // Toggle the visibility of the additional options when clicking the "Options" button
        additionalOptions.classList.toggle("hidden");
    });

    async function fetchIpAddressInfo(ip) {
        try {
            const response = await fetch(`https://ipapi.co/${ip}/json/`);
            if (response.ok) {
                const data = await response.json();
                ipInfo.innerHTML = `
                    <h3>Información de la IP: ${ip}</h3>
                    <p>🌍 País: ${data.country_name}</p>
                    <p>📍 Región: ${data.region}</p>
                    <p>🏙️ Ciudad: ${data.city}</p>
                    <p>📮 Código postal: ${data.postal}</p>
                    <p>🌐 Latitud: ${data.latitude}</p>
                    <p>🌐 Longitud: ${data.longitude}</p>
                    <p>⏰ Zona horaria: ${data.timezone}</p>
                    <p>🌐 ISP: ${data.org}</p>
                    <p>📞 Código de llamada de país: ${data.country_calling_code}</p>
                    <p>🗣️ Lenguaje: ${data.languages}</p>
                    <p>🔢 Código ISO 3166-1 alfa-2: ${data.country_code}</p>
                    <p>🔢 Código ISO 3166-1 alfa-3: ${data.country_code_iso3}</p>
                `;
            } else {
                ipInfo.innerHTML = "No se pudo obtener información de la IP. Inténtalo de nuevo.";
            }
        } catch (error) {
            console.error("Error:", error);
            ipInfo.innerHTML = "Ocurrió un error al procesar la solicitud. Inténtalo de nuevo más tarde.";
        }
    }
});

function showPopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.classList.add("hidden");
}




 // Simular tiempo de carga
         setTimeout(function() {
            // Ocultar el elemento de carga
            document.querySelector('.loading').style.display = 'none';
            // Mostrar el menú
            document.querySelector('.menu').style.display = 'block';
         }, 3000); // Cambia el tiempo de espera a tu preferencia (en milisegundos)

         function closeMenu() {
            document.querySelector('.menu').style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
         }

       

         function closeMenuAndPlayMusic() {
            closeMenu();
            playMusic();
         }

         function playMusic() {
            var music = document.getElementById("music");
            music.play();
         }



function checkTildes(text) {
  const tildes = /[áéíóúÁÉÍÓÚ]/;
  return tildes.test(text);
}

function openPopup() {
            document.getElementById("popupOverlay2").style.display = "block";
         }

         function closePopup() {
            document.getElementById("popupOverlay2").style.display = "none";
         }

function scrollPage(direction) {
  const scrollFraction = 0.2; // Puedes ajustar la fracción de desplazamiento aquí (0.2 = 20% de la altura de la ventana)
  const windowHeight = window.innerHeight;
  const scrollAmount = windowHeight * scrollFraction;

  if (direction === "up") {
    window.scrollBy(0, -scrollAmount); // Desplazamiento hacia arriba (negativo)
  } else if (direction === "down") {
    window.scrollBy(0, scrollAmount); // Desplazamiento hacia abajo (positivo)
  }
}

// Detectar evento de desplazamiento de la rueda del ratón
document.addEventListener("wheel", function(event) {
  if (event.deltaY > 0) {
    // Desplazar hacia abajo si la rueda del ratón se desplaza hacia abajo
    scrollPage("down");
  } else if (event.deltaY < 0) {
    // Desplazar hacia arriba si la rueda del ratón se desplaza hacia arriba
    scrollPage("up");
  }
});

function changeVolume(action) {
  const music = document.getElementById('music');
  const currentVolume = music.volume;
  const step = 0.1; // Incremento/decremento del volumen

  if (action === 'up') {
    if (currentVolume + step <= 1.0) {
      music.volume += step;
    }
  } else if (action === 'down') {
    if (currentVolume - step >= 0) {
      music.volume -= step;
    }
  }
}
