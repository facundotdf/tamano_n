let N: number = Number(prompt("ingrese N"));
let numeroIngresado: number[] = new Array(N);
for (let i: number = 0; i < numeroIngresado.length; i++) {
  numeroIngresado[i] = Number(prompt("ingrese numeros"));

  console.log(" el numero ingresado es: ";
}
for (let i = numeroIngresado.length - 1; i >= 0; i--) {
  console.log("Array invertido", numeroIngresado[i]);
}
//revisar