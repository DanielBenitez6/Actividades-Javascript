function cambiarFuente(fuente) {
      document.getElementById("miParrafo").style.fontFamily = fuente;
    }

    function cambiarImagen(ruta) {
      document.getElementById("miImagen").src = ruta;
    }

    function mostrarMensaje(mensaje) {
      document.getElementById("miMensaje").innerHTML = mensaje;
    }