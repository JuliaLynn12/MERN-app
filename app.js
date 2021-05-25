const express = require('express')
app = express()

app.get('/', (req, res)=> {
  res.send('hello')
})

const PORT = process.env.port || 3000

app.listen(PORT, ()=>{
  console.log(`Listening on Port: ${PORT}`)
})
