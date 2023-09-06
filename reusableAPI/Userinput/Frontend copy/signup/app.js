const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")


const app=express();
const slider=document.querySelector(".input");
// document.getElementById("submit").addEventListener("click", function(){
//     window.location.href = "http://127.0.0.1:5503/Userinput/Frontend%20copy/upload.html";

// });
app.use(express.static("public"));
app.use(bodyParser.urlencoded(
    {extended:true}
))
app.get("/",function(req,res){
    res.sendFile(__dirname+"signup.html")
});
console.log(slider.value);

app.post("/",function(req,res){
    var fullName=document.querySelector(".fName");
    var email=document.querySelector(".email");
    var phoneNumber=document.querySelector(".PNumber");
   });
app.listen(5000,function(){
    console.log("server is running on port 5000")
   

});  


