function mostrarNombre() {
  var nombre = document.getElementById("nombreInput").value;
  document.getElementById("nombreResultado").innerHTML = "Tu nombre es: " + nombre;
}

function sumarNumeros() {
  var numero1 = parseFloat(document.getElementById("num1").value);
  var numero2 = parseFloat(document.getElementById("num2").value);
  var suma = numero1 + numero2;
  document.getElementById("sumaResultado").innerHTML = "La suma es: " + suma;
}

function mostrarCiudad() {
  var ciudad = document.getElementById("ciudadInput").value;
  document.getElementById("ciudadResultado").innerHTML = "Ciudad favorita: " + ciudad;
}