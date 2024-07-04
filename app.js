const express = require('express')
const app = express()
const PORT = 8080
app.listen(PORT)

// endpoints del server
// .get()
// .post()
// .put()
// .delete()

app.get('/saludo', (req,res)=> {
    res.send('saludo desde mi primer endpoint')
})