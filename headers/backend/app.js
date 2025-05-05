import express from "express"

const app = express();
app.use(express.json())

app.get("/", (req,res)=>{
    res.header("e-username ","umesh")
    res.json({name:"umesh",age:21})
})

app.listen(8000,()=>{
    console.log("server chal rah hai");
})
