    function agregarImagen() {
      // Crear el elemento imagen
      var img = document.createElement("img");
      img.src = "perro.jpg"; // Imagen de prueba
      img.alt = "Imagen de ejemplo";

      // Obtener el div y vaciar su contenido anterior (opcional)
      var contenedor = document.getElementById("contenedor");
      contenedor.innerHTML = ""; // Borra contenido anterior

      // Agregar la imagen al div
      contenedor.appendChild(img);
    }