/*let cantidad = prompt("Cuanto alumnos son?");
let alumnosTotales = [];

for(i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i + 1)),0]
}

const asistenciasTotales = (nombre,p)=> {
    let presente = prompt(nombre); 
    if(presente == "p" || presente == "P") {
        alumnosTotales[p][1]++;
    }
}

for(i = 0; i < 30; i++) {
    for(alumno in alumnosTotales) {
        asistenciasTotales(alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br> 
    ________prensente: ${alumnosTotales[alumno][1]}<br>
    ________ausencias: ${30 - alumnosTotales[alumno][1]}`;
    if(30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b>Reprobado por inasistencia</b>"
        resultado += "<br><br>" 
    }
    document.write(resultado)
}

*/

/*
class Celular{
    constructor(color,peso,pantalla,camara,ram){
    this.color = color;
    this.peso = peso;
    this.pantalla = pantalla;
    this.camara = camara;
    this.ram = ram;
    this.encendido = false;
    }

    botonDeEncendido(){
        if (this.encendido == false){
            alert("Celular encendido");
            this.encendido = true;
        }
        else {
            alert("El celular esta apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("Reiniciando celular");
        } else {
            alert("No se puede rainiciar ya que el celular esta apagado");
        }
    }

    tomarFotos(){
        alert(`el celular ha tomado una foto con una resolucion de ${this.camara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Pantalla: <b>${this.pantalla}</b></br>
        Camara: <b>${this.camara}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>`
        ;
    } 
}

celular1 = new Celular("azul","150g","6p","25mg","3 Ram")
celular2 = new Celular("azl","150g","6p","25mg","3 Ram")
celular3 = new Celular("zul","150g","6p","25mg","3 Ram")

celular1.botonDeEncendido();
celular1.reiniciar();
celular1.tomarFotos(); 

document.write(
    `${celular1.mobileInfo()}<br>
    ${celular2.mobileInfo()}<br>
    ${celular3.mobileInfo()}<br>`
);

*/


/*
let paloma = ["Juan", "Marcos", "Felipe"];

document.write(paloma + "</br>");

let resultado = paloma.join("<br>me gusta:");

document.write("Me gusta:" + resultado + "<br>");
*/

/*

 class Calculadora{
     constructor(){
     }
        sumar(num1,num2){
            return parseInt(num1) + parseInt(num2);
        } 
        restar(num1,num2){
            return parseInt(num1) - parseInt(num2);
        }
        multiplicar(num1,num2){
            return parseInt(num1) * parseInt(num2)
        }
        dividir(num1,num2){
            return parseInt(num1) / parseInt(num2);
        }   
    }

const calculadora = new Calculadora();

alert("Welcome to the world of numbers");
let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division");

if(operacion == 1){
    let numero1 = prompt("Por favor, digite el primer numero a sumar");
    let numero2 = prompt("Por favor, digite el segundo numero a sumar");
    resultado = calculadora.sumar(numero1, numero2)
    alert(`Su resultado es ${resultado}`)
}

else if(operacion == 2){
    let num1 = prompt("Por favor, digite el primer numero a sumar");
    let num2 = prompt("Por favor, digite el segundo numero a sumar");
    resultado = calculadora.restar(num1, num2)
    alert(`Su resultado es ${resultado}`)
}

else if(operacion == 3){
    let num1 = prompt("Por favor, digite el primer numero a sumar");
    let num2 = prompt("Por favor, digite el segundo numero a sumar");
    resultado = calculadora.multiplicar(num1, num2)
    alert(`Su resultado es ${resultado}`)
}

else if(operacion == 4){
    let num1 = prompt("Por favor, digite el primer numero a sumar");
    let num2 = prompt("Por favor, digite el segundo numero a sumar");
    resultado = calculadora.dividir(num1,num2)
    alert(`Su resultado es ${resultado}`)
}

else{
    alert("No se ha encontrado la opcion")
}

*/

/*
const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Palomares","Pedro","Cofla","Maria"],
        programacion: ["Gabriel","Pedro","Pepito","Maria"],
        logica: ["Rosa","Pedro","Cofla","Maria"],
        quimica: ["Carla","Pedro","Pepito","Cofla"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia];
    }
    else {
        return false;
    }
}


const mostrarInformacion = (materia)=> {

    let informacion = obtenerInformacion(materia);

if(informacion !== false){
    let profesor = obtenerInformacion(materia)[0][0];
    alumnos = obtenerInformacion(materia)[0];
    alumnos.shift()
document.write(`El profesor de ${informacion[1]} es: <b >${profesor}</b><br> Sus alumnos son:${alumnos}`)
}
}

mostrarInformacion("fisica");"<br>"
mostrarInformacion("programacion");"<br>"
mostrarInformacion("logica");"<br>"
mostrarInformacion("quimica");"<br>"
*/

/*
let dineroCofla = prompt("Cofla dime cuantos cualtos tiene miop??");
 dineroCofla = parseInt(dineroCofla);

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("comprate el helado de agua")
    alert("Y te sobran " + (dineroCofla - 0.6))
}

else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("comprate el helado de crema")
    alert("Y te sobran " + (dineroCofla - 1))

}

else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("comprate el helado de chicle")
    alert("Y te sobran " + (dineroCofla - 1.6))

}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("comprate el helado de fresa")
    alert("Y te sobran " + (dineroCofla - 1.7))

}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("comprate el helado de mango")
    alert("Y te sobran " + (dineroCofla - 1.8))

}

else if(dineroCofla >= 2.9) {
    alert("comprate el helado de cereza");
    alert("Y te sobran " + (dineroCofla - 2.9))

}
*/


/*
let moneda = {
    marca: prompt("Que windows posee?"),
    cpu: prompt("Procesador?"),
    ram: prompt("Cuanto de RAM?"),
    interna: prompt("Cuanto de memoria interna?")
};

let marca = moneda["marca"];
let cpu = moneda["cpu"];
let ram = moneda["ram"];
let interna = moneda["interna"];


frase = `${marca}, es tu Windows<br>
El ${cpu}, es tu procesador <br>
El ${ram}, es tu memoria RAM <br>
Tienes de ${interna}, es tu cantidad de Memoria Interna
`;

document.write(frase);

*/

/*
nombres1 = ["Juana", "pedro", "marco"];
nombres2 = ["pablo", "carlos", nombres1];


for (let nombres in nombres2) {
    if(nombres == 2) {
        
        for(nombres of nombres1){
            
        }
        document.write(nombres + "<br>");
    }
    else{
        document.write(nombres2[nombres] + "<br>");
    }
}
*/
/*
function sumar(){
    let num1=prompt("dime el primer numero a sumar");
    num1=parseInt(num1);
    let num2= prompt("dime el segundo numero a sumar");
    num2=parseInt(num2);
    let resultado = num1 + num2;
    document.write(resultado + "<br>")
}
*/


/*
let free = false;

const entradaDisco = (hora)=>{
    let edad= prompt("Digame su edad");
    if(edad >= 18){  
        if (hora >= 2 && hora < 7 && !free){
            alert(`Son las ${hora}00Hs, por ende puedes pasar gratis`)
            free = true
        }
        else{
            alert(`Puedes entrar pero son las ${hora}00Hs, asi que tienes que pagar la entrada`);
        }
    }
    else {
        alert("no podes entrar eres menor")
    }

}


entradaDisco(4);
entradaDisco(19);
entradaDisco(12);
entradaDisco(2);

*/

/*
let cantidad = prompt("Manin dame lo alumnos de una ve al favol' ");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del Alumno" + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for(alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales){
   let resultado = `Nombre: ${alumnosTotales[alumno][0]} <br>
   Cantidad de presencia: ${alumnosTotales[alumno][1]}<br>
   Cantidad de ausencias: ${30 - alumnosTotales[alumno][1]}`;

   if (30 - alumnosTotales[alumno][1] > 18) {
    resultado+= "<b> Reprobado por innasistencia </b><br>";
   }
   else{
       resultado+= "<br><br>"
   }
   document.write(resultado);
}
*/

/*
class Calculadora {
 sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
    }
 restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
    }
 multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
    }
 dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
    }
potencial (num,exp){
    return num**exp;
    }
raizCuadrada(num){
    return Math.sqrt(num);
    }
raizCubica(num){
    return Math.cbrt(num);
}
}
const calculadora = new Calculadora();

alert("Que operacion desea realizar");
while(operacion = prompt("1: Sumar,2: Restar, 3: Multiplicar, 4: Dividir, 5:Potencial, 6: Raiz Cuadrada, 7: Raiz cubica")){


    if(operacion <= 5){
        numero1 = prompt("Digite primer numero");
        numero2 = prompt("Digite el segundo numero");
   }
      if (operacion == 1){
           resultado = calculadora.sumar(numero1,numero2)
       alert(`tu resultado es ${resultado}`);
       }
       if (operacion == 2){
           resultado = calculadora.restar(numero1,numero2)
       alert(`tu resultado es ${resultado}`);
       }
       if(operacion == 3){
           resultado = calculadora.multiplicar(numero1,numero2)
       alert(`tu resultado es ${resultado}`);
       }
       if (operacion == 4){
           resultado = calculadora.dividir(numero1,numero2)
       alert(`tu resultado es ${resultado}`);
       }
       if (operacion == 5){
           resultado = calculadora.potencial(numero1,numero2)
       alert(`tu resultado es ${resultado}`);
       }
   
       if (operacion == 6){
           let numero1 = prompt("Raiz cuadrada de");
           resultado = calculadora.raizCuadrada(numero1)
           alert(`tu resultado es ${resultado}`);
       }
       
       if (operacion == 7){
           let numero1 = prompt("Raiz cuadrada de");
           resultado = calculadora.raizCubica(numero1)
           alert(`tu resultado es ${resultado}`);
       }
       
       }


if (operacion == 1){
    let numero1 = prompt("Digite primer numero");
    let numero2 = prompt("Digite el segundo numero");
    resultado = calculadora.sumar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}

if (operacion == 2){
    let numero1 = prompt("Digite primer numero");
    let numero2 = prompt("Digite el segundo numero");
    resultado = calculadora.restar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
if (operacion == 3){
    let numero1 = prompt("Digite primer numero");
    let numero2 = prompt("Digite el segundo numero");
    resultado = calculadora.multiplicar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
if (operacion == 4){
    let numero1 = prompt("Digite primer numero");
    let numero2 = prompt("Digite el segundo numero");
    resultado = calculadora.dividir(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}

if (operacion == 5){
    let numero1 = prompt("Digite primer numero");
    let numero2 = prompt("Digite el exponente");
    resultado = calculadora.potencial(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
*/







/*
class celulares {
    constructor(color,peso,tamano,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Esta prendido");
            this.encendido = true;
        }
        else{
            alert("Esta apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
            if(this.encendido == true){ alert("Reiniciando celular")
            
        }
        else{
            alert("El celular esta apagado")
        } 
        }

    tomarFoto(){
        alert(`Se ha tirado una foto con una resolucion de ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Se ha grabado un video con una resolucion de ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamano}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
		Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
		
        `;
    }
}

    class altaGama extends celulares {
        constructor(color,peso,tamano,rdc,ram,rdce){
            super(color,peso,tamano,rdc,ram);
            this.resolucionDeCamaraExtra = rdce;
        }
        grabarVideoLento(){
            alert("estas grabando en camara lenta");
        }
        reconocmientoFacial(){
            alert("vamos a iniciar un reconocimiento facial")
        }
        infoAltaGama(){
            return this.mobileInfo() + `Resolución de Camara Extra: ${this.resolucionDeCamaraExtra}`;
        
    }
}


celular1 = new altaGama("rojo","150","5'2","45MPX","2GB","50MPX");
celular2 = new altaGama("azul","150","5'2","45MPX","2GB","60MPX");
celular3 = new celulares("verde","150","5'2","45MPX","2GB");


/*
celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();


document.write(
    `${celular1.infoAltaGama()}<br>
     ${celular2.infoAltaGama()}<br>`
)

*/





/*
class app {
constructor(nombre,descargas,puntuacion,peso){
    this.nombre = nombre;
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
    }

    abrir (){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("la app esta abierta")
        }
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("Cerrando app")
        }
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada")
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada")
        }
    }

    mosrarInfo(){
        return `
        ${this.nombre}<br>
        Descargas : <b>${this.descargas}</b><br>
        Puntuacion : <b>${this.puntuacion}</b><br>
        Peso : <b>${this.peso}</b><br>
        
        `
    }

}

facebook = new app("Facebook","100K","9/7", "50mb");
youtube = new app("Youtube","1M","10", "85mb");
spotify = new app("Spotify","10m","9/5", "43mb");

/*
facebook.instalar()
facebook.abrir()
facebook.cerrar()
facebook.desinstalar()

document.write(`

${facebook.mosrarInfo() + "<br>"}
${youtube.mosrarInfo()+ "<br>"}
${spotify.mosrarInfo()+ "<br>" }

`
)

*/





/*
cadena1 = "Pablo es un tarado inmaduro";
cadena2 =""

resultado = cadena1.repeat(5,"tarado");

document.write(resultado);
*/

/*

const obtenerInformacion = (materia)=>{
    materias ={
        fisica: ["Perez","Pablo", "Pedro", "Juan", "Wini"],
        programacion: ["Dalto","Pedro", "Juan", "Maria", "Wini"],
        logica: ["Micu","Pablo", "Pedro", "Juan", "Maria", "Wini"],
        quimica: ["Zara","Pablo", "Juan", "Maria", "Wini"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia];
    }else {
        return false;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
if(informacion !== false){
let Profesor = obtenerInformacion(materia)[0][0];
let alumnos = obtenerInformacion(materia)[0]
alumnos.shift();

document.write(
    `${Profesor} imparte clases de <b>${informacion[1]}</b> y estos son sus alumnos: <b>${alumnos}</b>` + "<br>")
}
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion")
*/


/*
const materias = {

    fisica: [90,8,3,"fisica"],
    quimica: [86,7,4,"quimica"],
    programacion: [96,9,2,"programacion"],
    logica: [55,6,3,"logica"],
    matematica: [93,9,4,"matematica"]
}

const obtenerInfo = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);
        if(asistencias >= 90){
           
            console.log("%c   Asistencias aprobada","color:green")
        }else{
            console.log("%c   Falta de Asistencias","color:red");
        }
        if(promedio >= 7 ){
           
            console.log("%c Promedio aprobada","color:green")
        }else{
            console.log("%c   Promedio No suficiente","color:red");
        }
        if(trabajos >= 3 ){
            
            console.log("%c Trabajos aprobados aprobada","color:green")
        }else{
            console.log("%c   Trabajos No suficiente","color:red");
        }


    }
}

obtenerInfo();

*/



/*

let tp = "100 minutos hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for(i = 0; i < 14; i++){
    if(i == 0){
        console.group("Semana 1");
    }
    console.groupCollapsed(`Dia `, i + 1)
    console.log(tp);
    console.log(estudio);
    console.log(trabajo);
    console.log(homework);
    console.log(descanso);
    console.groupEnd();

    if(i == 7){
        console.groupEnd();
        console.group("Semana 2");
    }
}

console.groupEnd();
console.groupEnd();

*/


/*
const contenedor = document.querySelector(".flex-container")

const crearLlave = (nombre,modelo,precio)=>{
    img = "<img class='img-llave' src='llave.png' >";
    nombre = `<h2>${nombre}</h2>`;
    modelo =  `<h3>${modelo}</h3>`;
    precio =  `<p>${precio}</p>`;
    return [img,nombre,modelo,precio];
}

let documentFragment = document.createDocumentFragment();

for (var i= 1; i<=20; i++){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10*30);
    let llave = crearLlave(`Llave ${i}`,`Modelo ${modeloRandom}`, `Precio $${precioRandom}`);
    let div = document.createElement("DIV");
    div.tabIndex = i;
    div.addEventListener("click",()=>{
    	document.querySelector(".key-data").value = modeloRandom
    });
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

*/

/*
const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".primero");
const contenedor2 = document.querySelector(".segundo");

contenedor1.addEventListener("click",(e)=>{
    alert("contenedor 1");
})

button.addEventListener("dblclick",(e)=>{
    alert("boton");
})

contenedor2.addEventListener("contextmenu",(e)=>{
    alert("Contenedor 2");
},true)


*/

/*
const intervalo = setInterval(()=>{
    document.write("hola")
},2000);

setTimeout(()=>{
    clearInterval(intervalo);
},7000)

*/


/*
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add(".red");
    }else{
        resultado.innerHTML= "Solicitud enviada correctamente";
        resultado.classList.add(".green");
    }
})

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5){
        error[0]=true;
        error[1]="El nombre no puede contener menos de 5 caracteres"
        return error;
    }else if(nombre.value.length > 40){
        error[0]=true;
        error[1]="El nombre no puede contener mas de 40 caracteres"
        return error;
    }
    if(email.value.length < 5 ||
             email.value.indexOf("@")== -1 ||
             email.value.length > 40){
        error[0] = true;
        error[1] = "Email no valido"
    }

    if(materia.value > 40 ||
        materia.value < 5){
        error[0]=true;
        error[1]="Materia no puede tener menos de 5 y mas de 40 caracteres"
        return error;
    }


    error[0]=false;
    return error
}












/*


alumnos = [{
    nombre: "Juan",
    email: "juan@gmail.com",
    materia: "fisica"
},
    {
        nombre: "Pedro",
        email: "Pedro@gmail.com",
        materia: "fisica"
    },
    {
        nombre: "Lucas",
        email: "Lucas@gmail.com",
        materia: "fisica"
    },
    {
        nombre: "Marcos",
        email: "Marcos@gmail.com",
        materia: "fisica"
    }];


const boton = document.querySelector(".boton-confirmar");


for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"]
    let email= datos["email"];
    let materia = datos ["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana"><select class="semana-elegida">
            <option value="semana 1">Semana 1</option>
            <option value="semana 2">Semana 2</option>
        </select>
        </div>
    `;
    document.querySelector(".grid-container").innerHTML += htmlCode;
}


boton.addEventListener("click",()=>{
    let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semana_elegida");
    for(elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanaElegida[elemento].value;
    }
})
*/


const primerValor= document.querySelector(".primer-valor");

const segundoValor= document.querySelector(".segundo-valor");

const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");


const pantallita = new Pantallita(primerValor,segundoValor);

botonesNumeros.forEach(boton => { 
    boton.addEventListener("click",()=>{
        pantallita.agregarNumero(boton.innerHTML);
    })
})



botonesOperadores.forEach(boton =>{
    boton.addEventListener("click",()=> pantallita.computar(boton.value))
})

