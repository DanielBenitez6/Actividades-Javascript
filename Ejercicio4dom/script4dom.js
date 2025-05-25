    console.log("Título de la página:");
    console.log(document.title);

    console.log("Imágenes en la página:");
    const imagenes = document.images;
    for (let i = 0; i < imagenes.length; i++) {
      console.log(imagenes[i].src);
    }

    console.log("Enlaces en la página:");
    const enlaces = document.links;
    for (let i = 0; i < enlaces.length; i++) {
      console.log(enlaces[i].href);
    }