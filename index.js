const express=require('express')
const app=express()
const port=3000;
app.get('/a',(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
    
})
