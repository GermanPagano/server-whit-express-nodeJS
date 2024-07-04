const express = require('express')
const app = express()
const PORT = 8080
app.listen(PORT,() => { console.log(`server running on PORT ${PORT}`)})
//Middlewares
app.use(express.urlencoded({extended:true}))



// endpoints del server
// .get()
// .post()
// .put()
// .delete()

// app.get('/saludo', (req,res)=> {
//     res.send('saludo desde mi primer endpoint')
// })
// app.get('/holamundo', (req,res)=> {
//     res.send('Hola mundo !')
// })


const alumnos =[
    {id:"1" , nombre: "franco" },
    {id:"2" , nombre: "maria" },
    {id:"3" , nombre: "cristian" }
]


// params
app.get('/alumnos/:idAlumno', (req, res)=>{
    let idAlumno = req.params.idAlumno
    let alumno = alumnos.find(e => e.id === idAlumno) 
    if( !alumno ) return res.send({error: " no se encontro ese alumno"})
    res.send({ alumno })
    console.log(alumno )
})


//los filtros y paginados de los datos que mostramos se hace en el backend
// todos los parametros recibidos de la url son siempre string
// como limitar la cantidad de alumnos a mostrar


//query , este permite concatenar filtrar en varias instancias (&&)
app.get('/limitados', (req, res) => {
    let limit = parseInt(req.query.limit)
    let limitedAlumnos = [...alumnos]
    if ( !isNaN(limit) && limit > 0){
        limitedAlumnos = limitedAlumnos.slice(0,limit)// limitamos la cantidad
    }
    res.json(limitedAlumnos)
})
//http://localhost:8080/limitados?limit=2