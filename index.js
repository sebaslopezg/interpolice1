const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())



app.listen(4100, ()=>{
    console.log(`Server running in: 4100`)
})