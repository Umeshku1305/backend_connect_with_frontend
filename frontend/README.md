app.use(cors({
    "origin":"http://localhost:5173"
}))
app.use(express.json())
const port = 8000
const password = "umesh123"

app.use((req,res,next)=>{
    if(req.body.pass!=password){
        res.send("password does not match !please try again")
    }
    next()
})
app.get("/",(req,res)=>{
    res.json({name:"Umesh", age:21})
})

app.post("/",(req,res)=>{
    console.log(req.body);
    res.status(200).send({success:true})
})

app.listen(port,()=>{
    console.log("server started");
    
})