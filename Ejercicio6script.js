const citas = [
      { texto: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", autor: "John Lennon" },
      { texto: "El único modo de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
      { texto: "No cuentes los días, haz que los días cuenten.", autor: "Muhammad Ali" },
      { texto: "La felicidad no es algo hecho. Proviene de tus propias acciones.", autor: "Dalai Lama" },
      { texto: "Sé tú el cambio que deseas ver en el mundo.", autor: "Mahatma Gandhi" },
      { texto: "Nunca es demasiado tarde para ser quien podrías haber sido.", autor: "George Eliot" }
    ];

    function nuevaCita() {
      const indice = Math.floor(Math.random() * citas.length);
      const cita = citas[indice];
      document.getElementById("quote").textContent = `"${cita.texto}"`;
      document.getElementById("author").textContent = `— ${cita.autor}`;
    }