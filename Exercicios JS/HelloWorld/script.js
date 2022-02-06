/* const message = "Hello Baby"; // Try edit me
// Update header text
document.querySelector(`h1#header`).innerHTML = message
// Log to console
console.log(message)
*/

function myFunction() {
  var x = document.getElementById("myDIV");
  x.querySelector(".example").innerHTML = "Hello World!";

  var y = document.getElementById("secondDiv");
  /* Variaveis x e y recebem valores dos elementos declarados  no id e classes
  esses valores recebido pela função que reotna outro texto anulando o primeiro */
  y.querySelector(".sdiv").innerHTML = "The End";
}