const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
app.post("/save",(req,res)=>{
    let name1 = req.body.nn;

    let revname = name1.split("").reverse().join("");
    if(name1 === revname){
        res.json(" is Palindrome");
    } 
    else{
        res.json(" is not a Palindrome");
    } 
});



app.listen(7002,()=>{console.log("Server ready at http://localhost:7002");});