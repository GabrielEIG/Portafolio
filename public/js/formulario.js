let form = document.querySelector(".formulario");
let table1 = document.querySelector(".tbody");
var disableButton = function() { this.disabled = true; };
let btEnviar = document.querySelector(".bt-enviar");
let acumulador = [];
let idFile = 1;
let idEstudent=[];


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let getFormData = new FormData(form);

    let nombre = getFormData.get("nombre"),
    apellido = getFormData.get("apellido"),
    matricula = getFormData.get("matricula"),
    promedio = getFormData.get("promedio");


    let newFila = table1.insertRow(-1);
    let clasFila = 'fila-'+ idFile++;
    newFila.setAttribute('id',clasFila)
    idEstudent.push(clasFila)
    


        let newCelda = newFila.insertCell(0);
        newCelda.textContent = nombre;
    
        newCelda = newFila.insertCell(1);
        newCelda.textContent = apellido;
    
        newCelda = newFila.insertCell(2);
        newCelda.textContent = matricula;
    
        newCelda = newFila.insertCell(3);
        newCelda.textContent = promedio;
        acumulador.push(promedio)

        let newDeleteCelda = newFila.insertCell(4);
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','deletBtn');
    deleteBtn.textContent = 'Delete';
    newDeleteCelda.appendChild(deleteBtn)
    form.reset();

    deleteBtn.addEventListener('click',(event)=>{
        event.target.parentNode.parentNode.remove()

    })


    let newEditCelda = newFila.insertCell(5);
    let btnEdit = document.createElement('button');
    btnEdit.setAttribute('class','btnEdit');
    btnEdit.textContent = 'Edit';
    newEditCelda.appendChild(btnEdit);
    let q = [];
btnEdit.addEventListener('click',(event)=>{
        let fila = event.target.parentNode.parentNode;
           
           if(!document.querySelector('.newInput')){

            for(let i =0; i <4; i++){
            let x = fila.cells[i]

            let cajita = document.createElement('input')
            cajita.setAttribute('type','text')
            cajita.setAttribute('class','newInput')
            cajita.setAttribute('value',x.textContent)

                q.push(cajita.value)
            x.textContent = ''
            x.appendChild(cajita)
            console.log(cajita)
            console.log(cajita.value)
            btnEdit.textContent = 'Save Edit'

           }
           console.log(q)}
           
           else{
            for(let i =0; i <4; i++){
            let x = fila.cells[i];

            let cajita = document.querySelector('.newInput');
            x.textContent = cajita.value;
  
            console.log(cajita.value)
            btnEdit.textContent = 'Edit'
            }
            
            // document.querySelector('.newInput').remove();
           }
           
},)

      
const obtenerPromedio = ()=>{
    let cajaProm = document.querySelector('.h2Prom');
        let sumw = 0;
    
    let d = table1.children;
    for(let i = 0; i < table1.children.length; i++){
        if(d[i].cells[3].textContent){
            sumw += parseInt(d[i].cells[3].textContent);
        }else{
            sumw = 0
        }
     
    }
    let operacion = Math.round(sumw / table1.children.length);
    cajaProm.textContent = operacion
}

obtenerPromedio()
    
        
})



 

    

    //Columna para eliminar directamente una fil


let btPromedio = document.querySelector(".totalPromedio");














































// var datos = new Array();
// var nodoTd = document.getElementsByTagName('td');
// var numFila;
// var enEdicion = true;
// function creaCajasTexto(inicio, fin){
// 	var nameForm = ['alimento', 'calorias', 'grasas', 'proteina', 'carbohidratos'];
// 	var instruccion = new Array();
// 	for(var i=inicio; i<fin; i++){
// 			datos[i-inicio] = nodoTd[i].textContent;
// 			instruccion[i-inicio] = '<input type=\'text\' style=\'width:70px\' name=\'' + nameForm[i-inicio] + '\' value=\'' + datos[i-inicio] + '\'>';
// 			nodoTd[i].innerHTML = instruccion[i-inicio];
// 		}
// 		cambiarEnEdicion(fin);
// }
// function editarFila(numeroFila){
// 	if(numeroFila==1 && enEdicion==true){creaCajasTexto(0, 5);}
// 	if(numeroFila==2 && enEdicion==true){creaCajasTexto(6, 11);}
// 	if(numeroFila==3 && enEdicion==true){creaCajasTexto(12, 17);}
// 	if(numeroFila==4 && enEdicion==true){creaCajasTexto(18, 23);}
// 	if (enEdicion==true){
// 		var nodoDiv = document.getElementById('botonesForm');
// 		nodoDiv.innerHTML = '<span id=\'texto1\'>Pulse Aceptar para guardar los cambios o cancelar para anularlos.</span><br/>' +
// 			'<input type=\'submit\' value=\'Aceptar\' class=\'botonForm\'><input type=\'reset\' value=\'Cancelar\' class=\'botonForm\' onclick=\'reiniciarFila()\'>';
// 		numFila = numeroFila;
// 		enEdicion = false;
// 	}else{
// 		alert('Solo se puede editar una línea. Recargue la página para poder editar.')
// 	}
// }
// function reiniciarFila(){
// 	var inicio; var fin;
// 	var nodoDiv = document.getElementById('botonesForm');
// 	if(numFila==1){inicio=0; fin=5;}
// 	if(numFila==2){inicio=6; fin=11;}
// 	if(numFila==3){inicio=12; fin=17;}
// 	if(numFila==4){inicio=18; fin=23;}
// 	var instruccion = new Array();
// 	for(var i=inicio; i<fin; i++){
// 		instruccion[i-inicio] = datos[i-inicio];
// 		nodoTd[i].innerHTML = instruccion[i-inicio];
// 	}
// 	cambiarEnEdicion(fin);
// 	enEdicion = true;
// 	nodoDiv.innerHTML = '';
// }
// function cambiarEnEdicion(numEdicion){
// 	if(enEdicion==true){
// 		nodoTd[numEdicion].textContent = 'En edición';
// 		nodoTd[numEdicion].style.color = 'gray';
// 	}else{
// 		nodoTd[numEdicion].textContent = 'Editar';
// 		nodoTd[numEdicion].style.color = '#3300FF';
// 	}
// }















// let form = document.querySelector(".formulario");
// let table1 = document.querySelector(".table1");
// var disableButton = function() { this.disabled = true; };
// let btEnviar = document.querySelector(".bt-enviar");
// let acumulador = [];
// let idFile = 1;
// let idEstudent=[];


// form.addEventListener("submit",(event)=>{
//     event.preventDefault();

//     let getFormData = new FormData(form);

//     let nombre = getFormData.get("nombre"),
//     apellido = getFormData.get("apellido"),
//     matricula = getFormData.get("matricula"),
//     promedio = getFormData.get("promedio");


//     let newFila = table1.insertRow(1);
//     let clasFila = 'fila-'+ idFile++;
//     newFila.setAttribute('id',clasFila)
//     idEstudent.push(clasFila)
    


//         let newCelda = newFila.insertCell(0);
//         newCelda.textContent = nombre;
    
//         newCelda = newFila.insertCell(1);
//         newCelda.textContent = apellido;
    
//         newCelda = newFila.insertCell(2);
//         newCelda.textContent = matricula;
    
//         newCelda = newFila.insertCell(3);
//         newCelda.textContent = promedio;

//         let newDeleteCelda = newFila.insertCell(4);
//     let deleteBtn = document.createElement('button');
//     deleteBtn.setAttribute('class','deletBtn');
//     deleteBtn.textContent = 'Delete';
//     newDeleteCelda.appendChild(deleteBtn)
//     form.reset();

//     deleteBtn.addEventListener('click',(event)=>{
//         event.target.parentNode.parentNode.remove()

//     })


//     let newEditCelda = newFila.insertCell(5);
//     let btnEdit = document.createElement('button');
//     btnEdit.setAttribute('class','btnEdit');
//     btnEdit.textContent = 'Edit';
//     newEditCelda.appendChild(btnEdit);
//     let q = [];
// btnEdit.addEventListener('click',(event)=>{


//         let fila = event.target.parentNode.parentNode;
        
        
           
           
//            if(!document.querySelector('.newInput')){

//             for(let i =0; i <4; i++){
//             let x = fila.cells[i]

//             let cajita = document.createElement('input')
//             cajita.setAttribute('type','text')
//             cajita.setAttribute('class','newInput')
//             cajita.setAttribute('value',x.textContent)

//                 q.push(cajita.value)
//             x.textContent = ''
//             x.appendChild(cajita)
//             console.log(cajita)
//             console.log(cajita.value)
//             btnEdit.textContent = 'Save Edit'

//            }
//            console.log(q)}
           
//            else{
//             for(let i =0; i <4; i++){
//             let x = fila.cells[i];

//             let cajita = document.querySelector('.newInput');
//             x.textContent = cajita.value;
  
//             console.log(cajita.value)
//             btnEdit.textContent = 'Edit'
//             }
            
//             // document.querySelector('.newInput').remove();
//            }
           
        
        
// })


// const obtenerPromedio = ()=>{

//    let promedio =0;
//     let a = parseInt(newFila.cells[3].textContent);  
//     let s = [];
    
   

// for(let i=0; i < 2; i++ ){
//     s.push(a)
//  promedio += a;
 
//  console.log(promedio)
 
//  console.log(s)
// }
//     //     let newPromedio = table1.insertRow(-1);

//     // let newCelda = newPromedio.insertCell(0);
//     //  newCelda.textContent = "Total Promedio";
//     //  newCelda = newPromedio.insertCell(1);
//     //  newCelda.textContent = resultado;


//      btEnviar.addEventListener('click', disableButton , false);

// }


// btPromedio.addEventListener("click", obtenerPromedio )
// btPromedio.addEventListener('click', disableButton , false);
   

    

//     //Columna para eliminar directamente una fila
    

// },)


// let btPromedio = document.querySelector(".totalPromedio");
