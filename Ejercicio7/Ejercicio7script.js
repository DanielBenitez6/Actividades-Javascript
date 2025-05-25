const imagenes = [
    "ferrari.jpg",
    "rsq8.jpg",
    "rs6.jpg"
  ];

  let indice = 0;

  function mostrarImagen() {
    document.getElementById("imagen").src = imagenes[indice];
  }

  function siguiente() {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
  }

  function anterior() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
  }