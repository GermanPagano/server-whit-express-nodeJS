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

app.get('/alumnos/:idAlumno', (req, res)=>{
    let idAlumno = req.params.idAlumno
    let alumno = alumnos.find(e => e.id === idAlumno) 
    if( !alumno ) return res.send({error: " no se encontro ese alumno"})
    res.send({ alumno })
    console.log(alumno )
})


//los filtros y paginados de los datos que mostramos se hace en el backend
