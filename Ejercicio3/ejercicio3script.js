function cambiaImagen(idImagen, selectId) {
            const nuevaImagen = document.getElementById(selectId).value;
            document.getElementById(idImagen).src = nuevaImagen;
            localStorage.setItem(idImagen, nuevaImagen);
        }

        function cambiarEstilo(select) {
            const estiloSeleccionado = select.value;
            document.getElementById('estilo1').disabled = true;
            document.getElementById('estilo2').disabled = true;
            document.getElementById(estiloSeleccionado).disabled = false;
            localStorage.setItem("estilo", estiloSeleccionado);
        }

        function restaurarPreferencias() {
            const cocheGuardado = localStorage.getItem("imgCoche");
            const spidermanGuardado = localStorage.getItem("imgSpiderman");
            const estiloGuardado = localStorage.getItem("estilo");

            if (cocheGuardado) {
                document.getElementById("imgCoche").src = cocheGuardado;
                document.getElementById("selectCoche").value = cocheGuardado;
            }
            if (spidermanGuardado) {
                document.getElementById("imgSpiderman").src = spidermanGuardado;
                document.getElementById("selectSpiderman").value = spidermanGuardado;
            }
            if (estiloGuardado) {
                document.getElementById('estilo1').disabled = true;
                document.getElementById('estilo2').disabled = true;
                document.getElementById(estiloGuardado).disabled = false;
                document.getElementById("selectorEstilo").value = estiloGuardado;
            }
        }

        window.onload = restaurarPreferencias;