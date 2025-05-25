function mostrarParrafos() {
      // Obtener todos los elementos <p>
      var parrafos = document.getElementsByTagName("p");
      var contenido = "";

      // Recorrerlos y añadir su contenido
      for (var i = 0; i < parrafos.length; i++) {
        contenido += "Párrafo " + (i + 1) + ": " + parrafos[i].innerText + "<br>";
      }

      // Mostrar en el div
      document.getElementById("resultado").innerHTML = contenido;
    }