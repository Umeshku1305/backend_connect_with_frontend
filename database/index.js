import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.send("chl raha hai")
})


app.listen("8000")
