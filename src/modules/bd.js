//Administracion de la conexion a la bd usando callbacks

const mysql = require('mysql2')

const cnx = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'interpolice',
});

cnx.query("SELECT * FROM citizen", (err, results) =>{
  console.log(results)
})  

cnx.connect((error)=>{
    if (error) {
        console.log(`Error en la conexión \n ${error}`)
    }else{
        console.log('conexion exitosa')
    }
})

module.exports = cnx