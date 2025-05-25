    function borrarElemento() {
      const lista = document.getElementById("myList");
      if (lista.firstElementChild) {
        lista.removeChild(lista.firstElementChild);
      }
    }