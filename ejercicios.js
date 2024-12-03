// ejercicio 1
document.write("<h1>Ejercicio 1</h1>");
let name = prompt("Ingrese su nombre");
document.write("Bienvenido " + name);
document.write(" a JavaScript");
// ejercicio 2
document.write("<h1>Ejercicio 2</h1>");
var num1 = parseInt(prompt("Ingrese un número"));
if (num1 > 0) {
  var resultado = "positivo";
} else {
  var resultado = "negativo";
}
document.write("El número ingresado es: " + num1);
document.write("<br>");
document.write("El número es " + resultado);
// ejercicio 3 (sin terminar)
document.write("<h1>Ejercicio 3</h1>");
let nombre = prompt("Ingrese el nombre del vendedor");
var autos = parseInt(prompt("Ingrese la cantidad de autos vendidos"));
var sueldo = parseInt(prompt("Ingrese su sueldo"));
let total = autos * 5000;

document.write("El vendedor es: " + nombre);
