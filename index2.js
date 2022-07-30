const PORT = 8000
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// mod.cjs
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

require('dotenv').config()

const app=express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//get all the restaurant data
app.get('/burgers',(req,res)=>{
    const url = process.env.ENDPOINT
    const options = {
        method: 'GET',
        headers:{
            Accept:"application/json",
            'X-Cassandra-Token':process.env.ASTRAKEY
        }
    }
    fetch(url,options)
        .then(res => res.json())
        .then(json => res.json(json))
        .then(err => console.log('errors: '+err))


})  

function notFound(req,res,next){
    res.status(404)
    const error = new ERROR('Not Founded')
    next(error)
} 

function errorHandler(error,req,res){
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

app.use(notFound)
app.use(errorHandler)

app.listen(PORT,()=> console.log("sereer running"))