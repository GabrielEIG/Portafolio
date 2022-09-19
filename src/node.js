// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end("Respuesta a su solicitud v. 0.sCvsfv2")
// });

// const puerto = 3000;

// server.listen(puerto,()=>{
//     console.log('escucando su solicitud')
// })


// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.end('saefaef')
// })

// const puerto = 3000;
// server.listen(puerto, ()=>{
//     console.log('ecuchando')
// })




const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();




//PAHT
const rutPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname, '../templates/views')
const partialView = path.join(__dirname,'../templates/partials')


app.use(express.static(rutPath));
app.set('views',viewPath);
hbs.registerPartials(partialView);

//HBS
app.set('view engine','hbs');

app.get("",(req,res)=>{
    res.render('index')
})

app.get("/aboutMe",(req,res)=>{
    res.render("aboutMe")
})

app.get("/loteria",(req,res)=>{
    res.render("loteria")
})


app.get("/formulario",(req,res)=>{
    res.render("formulario")
})


app.get("/pokeDeck",(req,res)=>{
    res.render("pokeDeck")
})


app.get("/calculadora",(req,res)=>{
    res.render("calculadora")
})

app.listen(3000,()=>{
    console.log('Server running')
})













