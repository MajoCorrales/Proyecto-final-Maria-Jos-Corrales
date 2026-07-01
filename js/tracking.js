function buscarPaquete(){

let codigo=document.getElementById("tracking").value;

let resultado=document.getElementById("resultado");

resultado.innerHTML=`

<div class="alert alert-success">

Guía: ${codigo}<br>

Estado: En tránsito<br>

Ubicación: Miami, USA<br>

Entrega estimada: 2 días

</div>

`;

}