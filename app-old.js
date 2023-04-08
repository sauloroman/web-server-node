const http = require('http')

const server = http.createServer( ( req, res ) => {

  // res.writeHead( 202, { 
  //   'Content-Type': 'application/json'
  // })

  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  // res.writeHead( 200, {
  //   'Content-Type': 'application/csv'
  // })

  // const roman = {
  //   name: 'Saulo Roman',
  //   age: 24,
  //   profession: 'Developer'
  // }



  // res.write( JSON.stringify( roman ) )

  // res.write('id, nombre\n')
  // res.write('1, Roman\n')
  // res.write('2, Danna\n')
  // res.write('3, Daniel\n')
  // res.write('4, Carlos\n')
  // res.write('5, Erika\n')

  res.write('Hola Mundo')
  res.end()
})

server.listen( 8080 )

console.log('Server listening', 8080 )