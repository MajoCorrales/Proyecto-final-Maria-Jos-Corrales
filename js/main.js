// FORMULARIO

const formulario = document.getElementById("formCotizador");

const modal = document.getElementById("resultadoCotizacion");

const precio = document.getElementById("precioFinal");

const cerrar = document.getElementById("cerrarModal");


// CALCULO

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value);

    let largo = parseFloat(document.getElementById("largo").value);

    let ancho = parseFloat(document.getElementById("ancho").value);

    let alto = parseFloat(document.getElementById("alto").value);


    if(!peso || !largo || !ancho || !alto){

        alert("Completa todos los campos");

        return;

    }


    // FORMULA EJEMPLO

    let volumen = (largo * ancho * alto) / 5000;

    let pesoFinal = Math.max(peso, volumen);

    let total = 3500 + (pesoFinal * 4200);


    precio.innerHTML = "₡ " + total.toFixed(2);


    modal.style.display = "flex";

});


// CERRAR

cerrar.addEventListener("click", function(){

    modal.style.display = "none";

});


// CERRAR SI DA CLICK AFUERA

window.addEventListener("click", function(e){

    if(e.target === modal){

        modal.style.display = "none";

    }

});