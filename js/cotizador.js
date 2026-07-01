function calcularEnvio(){

let peso=parseFloat(document.getElementById("peso").value);

let tarifa=parseFloat(document.getElementById("tipo").value);

let subtotal=peso*tarifa;

let impuestos=subtotal*0.13;

let total=subtotal+impuestos;

document.getElementById("precio").innerHTML=`

<div class="alert alert-primary">

Subtotal: $${subtotal}<br>

Impuestos: $${impuestos.toFixed(2)}<br>

Total final: $${total.toFixed(2)}

</div>

`;

}