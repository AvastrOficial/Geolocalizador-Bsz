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

 
    searchButton.addEventListener("click", function () {
        const ip = ipInput.value;
        if (ip) {
            fetchIpAddressInfo(ip);
        }
    });



    async function fetchIpAddressInfo(ip) {
        try {
            const response = await fetch(`https://ipapi.co/${ip}/json/`);
            if (response.ok) {
                const data = await response.json();
               ipInfo.innerHTML = `
                   <h3>Información de la IP: ${ip}</h3>
    <p>&#127757; País: ${data.country_name}</p>
    <p>&#128497; Región: ${data.region}</p>
    <p>&#127960; Ciudad: ${data.city}</p>
    <p>&#128236; Código postal: ${data.postal}</p>
    <p>&#127759; Latitud: ${data.latitude}</p>
    <p>&#127760; Longitud: ${data.longitude}</p>
    <p>&#8986; Zona horaria: ${data.timezone}</p>
    <p>&#127758; ISP: ${data.org}</p>
    <p>&#9990; Código de llamada de país: ${data.country_calling_code}</p>
    <p>&#128073; Lenguaje: ${data.languages}</p>
    <p>&#128290; Código ISO 3166-1 alfa-2: ${data.country_code}</p>
    <p>&#128290; Código ISO 3166-1 alfa-3: ${data.country_code_iso3}</p>
    <p>&#128274; Código postal seguro: ${data.in_eu ? "Sí" : "No"}</p>
    <p>&#128225; ASN: ${data.asn || "No disponible"}</p>
    <p>&#128241; Tipo de conexión: ${data.connection_type || "No disponible"}</p>
    <p>&#128187; Dominio: ${data.domain || "No disponible"}</p>
    <p>&#127759; Utiliza VPN: ${data.isp_vpn ? "Sí" : "No"}</p>
    <p>&#9990; Código de área: ${data.area_code || "No disponible"}</p>
    <p>&#128241; Código de red móvil: ${data.mobile || "No disponible"}</p>
    <p>&#128187; Tipo de dispositivo: ${data.device_type || "No disponible"}</p>
    <p>&#127760; Tipo de navegador: ${data.browser || "No disponible"}</p>
    <p>&#127758; Código de país: ${data.country_code || "No disponible"}</p>
    <p>&#127758; Región de la Unión Europea: ${data.in_eu || "No disponible"}</p>
    <p>&#127758; Ciudad en la Unión Europea: ${data.eu_city || "No disponible"}</p>
    <p>&#127758; Código postal en la Unión Europea: ${data.eu_postal || "No disponible"}</p>
    <p>&#128241; Código de área telefónica: ${data.area_code || "No disponible"}</p>
    <p>&#128241; Código de país telefónico: ${data.country_code || "No disponible"}</p>
    <p>&#128241; Código de red móvil: ${data.mobile || "No disponible"}</p>
    <p>&#128241; Tipo de uso: ${data.usage_type || "No disponible"}</p>
    <p>&#128201; IPv4: ${data.ip || "No disponible"}</p>
    <p>&#128201; Versión de IP: ${data.version || "No disponible"}</p>
    <p>&#128201; Tipo de IP: ${data.type || "No disponible"}</p>
    <p>&#128201; Clase de IP: ${data.ip_class || "No disponible"}</p>
    <p>&#127752; Proxy: ${data.proxy ? "Sí" : "No"}</p>
    <p>&#127752; Tipo de IP: ${data.type || "No disponible"}</p>
    <p>&#128295; Dominio secundario: ${data.domain_secondary || "No disponible"}</p>
    <p>&#127758; Número de bloque de IP: ${data.ip_block || "No disponible"}</p>
    <p>&#128274; Secure Proxy: ${data.secure_proxy ? "Sí" : "No"}</p>
    <p>&#128274; Seguridad: ${data.security || "No disponible"}</p>
    <p>&#128241; Tipo de conexión: ${data.connection_type || "No disponible"}</p>
    <p>&#127758; Velocidad de conexión: ${data.connection_speed || "No disponible"}</p>
    <p>&#128241; Tipo de red móvil: ${data.mobile_type || "No disponible"}</p>
    <p>&#128269; Propósito de uso de la IP: ${data.ip_purpose || "No disponible"}</p>
    <p>&#128197; Fecha y hora de la consulta: ${data.request_time || "No disponible"}</p>
    <p>&#128197; Hora local: ${data.localtime || "No disponible"}</p>
    <p>&#127758; Organización: ${data.org || "No disponible"}</p>
    <p>&#127758; Tipo de conexión móvil: ${data.mobile_type || "No disponible"}</p>
    <p>&#127758; Carrier móvil: ${data.carrier || "No disponible"}</p>
    <p>&#127758; Proveedor de Hosting: ${data.hosting || "No disponible"}</p>
    <p>&#128649; Tipo de mercado: ${data.market || "No disponible"}</p>
    <p>&#128649; Descripción del mercado: ${data.market_description || "No disponible"}</p>
    <p>&#128279; URL: ${data.url || "No disponible"}</p>
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




 


document.addEventListener("DOMContentLoaded", function() {
    const numeros = document.querySelectorAll('.num');
    const input = document.getElementById('ipInput');
    
    numeros.forEach(num => {
        num.addEventListener('click', function() {
            input.value += num.innerText;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const punto = document.getElementById('punto');
    const coma = document.getElementById('coma');
    const espacio = document.getElementById('espacio');
    const buscar = document.getElementById('search');
    const input = document.getElementById('ipInput');
    
    punto.addEventListener('click', function() {
        input.value += '.';
    });
    
    coma.addEventListener('click', function() {
        input.value += ',';
    });
    
    espacio.addEventListener('click', function() {
        input.value += ' ';
    });
    
});
