const {Pool,Client} = require('pg')
const connectionString = 'postgres://postgres:storm@localhost:5432/review'
client.connect()

pool.query("INSERT INTO rev(id,title,review,dater)values(1,"Harry Potter","Good movie",2020-12-10)",(err,res)=>{
	console.log(err,res)
	pool.end
})


pool.query("SELECT * FROM rev",(err,res)=>{
	console.log(err,res)
	pool.end
})

