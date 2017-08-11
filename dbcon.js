var mysql      	= require('mysql');
var md5 		= require('md5');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'medica2_inventario'
});

var fechaHora = new Date();

connection.connect();

/* UNA FORMA DE INSERTAR */
// var insertaUser="INSERT into usuarios"+
// 				"(USU_nombrecompleto, USU_login, USU_psw, USU_activo, created_at, updated_at, PER_clave) "+
// 				"values('SAMUEL RAMIREZ', 'sramirez', "+"'"+md5("password")+"'"+", 1, NOW(), NOW(), 1);";

// connection.query(insertaUser, function (error, rows, fields) {
//   if (error){
//   	console.log(error.message);
//   }else{
//   	console.log('insertado correctamente');
//   };
// });

/* OTRA FORMA DE INSERTAR*/
// var insertaUser="INSERT into usuarios"+
// 				"(USU_nombrecompleto, USU_login, USU_psw, USU_activo, created_at, updated_at, PER_clave) "+
// 				"values(?, ?, ?, ?, ?, ?, ?);";

// var datos = ['OTRA PRUEBA',
// 			 'oprueba',
// 			 md5('prueba'),
// 			 1,
// 			 fechaHora,
// 			 fechaHora,
// 			 4];

// connection.query(insertaUser, datos, function (error, rows, fields) {
//   if (error){
//   	console.log(error.message);
//   }else{
//   	console.log('insertado correctamente');
//   };
// });

connection.query('SELECT * from usuarios', function (error, rows, fields) {
  if (error) throw error;
  // console.log('Resultado: ', rows[0].USU_nombrecompleto);

  rows.forEach(function(registro, key){
  	console.log('Usuario: '+registro.USU_nombrecompleto);
  });

  return rows;

});

connection.end();