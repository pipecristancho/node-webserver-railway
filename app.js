//importaciones  necesarias 

const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const hbs = require('hbs');

//handlebars paquete



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



// servir contenido estatico 

app.use(express.static('public'));


// express para trabajar en web metodo y sus rutas si ya mando la respuesta arriba en el use no se ejecuta el home page

app.get('/',  (req, res) => {
  res.render('home',{
    nombre: 'pipe diaz',
    titulo: 'curso de node'
  });
});

app.get('/generic',  (req, res) => {
  res.render('generic',{
    nombre: 'pipe diaz',
    titulo: 'generic'
  })
});

app.get('/elements',  (req, res) => {
  res.render('elements',{
    nombre: 'pipe diaz',
    titulo: 'elements'
  })
});
// funcion con flecha 
app.get('/generic',  (req, res) => {
    res.sendFile(__dirname +'/public/generic.html')
  });

  app.get('/elements',  (req, res) => {
    res.sendFile(__dirname +'/public/elements.html')
  });

  

  // puerto de la pagina
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })