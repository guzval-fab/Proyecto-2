let botonResta = document.getElementById("botonresta");
let botonSuma = document.getElementById("botonsuma");
let reseteo = document.getElementById("reseteo");
const contador = document.getElementById("contadora");
let conta = 0;
botonResta.addEventListener('click', function() {
    conta -= 1;
    contador.innerHTML = conta;
    colores();
})
botonSuma.addEventListener('click', function() {
    conta += 1;
    contador.innerHTML = conta;
    colores();
}
)
reseteo.addEventListener('click', function() {
    conta = 0;
    contador.innerHTML = conta;
    colores();
}
)
function colores(){
    if (conta < 0){
       contador.classList.add("negativo")
    }
    else if (conta > 0){
        contador.classList.add("positivo")
    }
    else {
        contador.classList.remove("negativo")
        contador.classList.remove("positivo")
    }
   }
