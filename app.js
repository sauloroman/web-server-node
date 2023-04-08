require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')

// HBS - Handlebars

app.set('view engine', 'hbs')

hbs.registerPartials( __dirname + '/views/partials', (err) => {
  console.log(err)
})

app.get('/', ( req, res ) => {
  res.render('home', {
    nombre: 'Roman',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', ( req, res ) => {
  res.render('generic', {
    nombre: 'Roman',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', ( req, res ) => {
  res.render('elements', {
    nombre: 'Roman',
    titulo: 'Curso de Node'
  })
})


app.use( express.static('./public') )

// app.get('/generic', ( req, res ) => {
//   res.sendFile( __dirname + '/public/generic.html' )
// })

// app.get('/elements', ( req, res ) => {
//   res.sendFile( __dirname + '/public/elements.html' )
// })

// app.get('*', ( _req, res ) => {
//   res.sendFile( __dirname + '/public/404.html')
// })

const port = process.env.PORT || 8080
app.listen( port, () => console.log(`Serve listening at port ${port}`))