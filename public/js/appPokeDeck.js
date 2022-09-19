
let form = document.querySelector(".formulario");
let boton = document.querySelector(".search");

let bodys = document.body


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let getFormdata = new FormData(form);
  let nombre = getFormdata.get("nombre").toLowerCase();
  
    async function getUsers() {
      let url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
      try {
        let res = await fetch(url);
        let data = await res.json();
        let input;
        if(input != nombre){
        createPokemon(data);
        input = nombre
        }
      } catch (error) {
        console.log(error)
        let body = document.querySelector('.div')
      body.innerHTML = `<div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      <strong>Alerta!</strong> escriba el nombre correcto del pokemon o llene el campo correctamente.
  </div>`;
      }
    }
  
  
  //CREACION DE CAJA CONTENEDORA DEL POKEMON
  const createPokemon = (pokemon)=>{
    let content = document.querySelector('.content')
    if(content){
      bodys.removeChild(content)
      createPokemon(pokemon)
    }else{
      content = document.createElement('div')
    content.setAttribute('class','content');

    let foto = document.createElement('div')
    foto.setAttribute('class','foto');
    let img = document.createElement('img');
    img.src = pokemon.sprites.other.dream_world.front_default;

    let nombre = document.createElement('div');
    nombre.setAttribute('class','nombre');
    let text1 = document.createElement('h2');
    text1.textContent = pokemon.name.toUpperCase();

    let tipo = document.createElement('div');
    tipo.setAttribute('class','tipo');
    let text2 = document.createElement('h3');
    let arraTypes = pokemon.types;
    arraTypes.forEach((x) =>{
      text2.innerHTML += `Tipo: ${x.type.name}<br>`
    });


    let height = document.createElement('div');
    height.setAttribute('class','height');
    let text3 = document.createElement('h3');
    text3.textContent = `height: ${pokemon.height}`

    let weight = document.createElement('div');
    weight.setAttribute('class','weight');
    let text4 = document.createElement('h3');
    text4.textContent = `weight: ${pokemon.weight}`

    let stats  = document.createElement('div');
    stats.setAttribute('class','stats')
    let text5 = document.createElement('h3');
    let objetStats = pokemon.stats;
    objetStats.forEach((x) =>{
      text5.innerHTML += `<ol>Stats:
    <li>Name:${x.stat.name}</li>
    <li>Valor: ${x.base_stat}</li>
    </ol>`
    })

    let moves  = document.createElement('div');
    moves.setAttribute('class','movimientos')
    let text6 = document.createElement('h3');
    let objetMoves = pokemon.moves;
    let acumu = 0;
    objetMoves.forEach((x) =>{
     let a = x.version_group_details;
     a.forEach((q) => {
      if(acumu < 6){
        text6.innerHTML += `<ol>Moves:<br>
            <li>Name: ${q.version_group.name}</li>
            </ol>`
       }
       acumu++;
     })
     
    } )

    let contentDiv = [foto,nombre,tipo,height,weight,stats,moves];
    let contentDiv1 = [img,text1,text2,text3,text4,text5,text6]
    for(let i = 0;i< contentDiv.length; i++){
      content.appendChild(contentDiv[i])
      contentDiv[i].appendChild(contentDiv1[i])
    }
    bodys.appendChild(content)
    console.log(content)
    }
  }

  getUsers()
});










// const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
// let response = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

// const pokemones = document.getElementById("pokemones");


// response
//   .then((response) => {
//     let content = document.querySelector('.content');
//     content.textContent = response.json()
    
//   })
//   .catch((error) => {
//     console.log(error);
//   });







// async function renderUsers() {
//   let users = await getUsers();
//   let html = "";
//   users.forEach(user => {
//     let htmlSegment = `<div class="user">
//                             <img src="${user.name}" >
//                             <h2>${user.name} ${user.name}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                         </div>`;

//     html += htmlSegment;
//   });

//   let container = document.querySelector(".container");
//   container.innerHTML = html;
// }

// renderUsers();
