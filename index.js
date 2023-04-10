const path=require('path')
const express=require('express');
const nav=express();
const port=3000;


const staticPath=path.join(__dirname,'../static website');
nav.use(express.static(staticPath));

nav.get('/',(req,res)=>{
    res.send("welcome to my page")
});
nav.get('/aboutus',(req,res)=>{
    res.send("welcome to my about page")
});
nav.get('/temp',(req,res)=>{
    res.status(404).send("welcome to my temp page")
});
nav.listen(port,()=>{
    console.log(`listening to port ${port}`)
})
