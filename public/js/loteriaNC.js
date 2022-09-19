//Variable donde se almacenaran los numeros de la loteria

let resultado = document.querySelector(".display");

let boton = document.querySelector(".boton");



const numerosLoteria = ()=>{
  let numerosGanadores = [];
// bucle para insertar numeros de la loteria
    for(let i = 0; i < 6; i++){
// Numeros aleatorios
        let x = Math.floor(Math.random(1)*80);
  //Condicion para aceptar solo los numeros que no esten repetidos en el Array
        if(!numerosGanadores.includes(x)){
          numerosGanadores.push(x);
    //Si son iguales, le resta un ciclo al bucle, haiendo que se repita nuevamente en el indice que se quedo
        }else{i--;}
    }
    numerosGanadores.forEach(x => resultado.innerHTML += `<div>${x}</div>`)
    console.log(resultado)
}


var disableButton = function() { this.disabled = true; };

boton.addEventListener('click', numerosLoteria);
boton.addEventListener('click', disableButton , false);



