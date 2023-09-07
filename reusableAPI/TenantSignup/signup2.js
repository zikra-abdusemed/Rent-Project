
const btn = document.querySelector(".btn");



btn.addEventListener("click", function(e){
   e.preventDefault()


   
      // window.location.href = "http://127.0.0.1:5503/FrontEndEx/rent.html";
      var Radbutton = document.querySelectorAll('input[name="gender"]');
      var selectedGender;
      for (var i = 0; i < Radbutton.length; i++) {
        if (Radbutton[i].checked) {
          selectedGender = Radbutton[i].value;
          break;
        }else{selectedGender=0}
      }
     
    

    let Gender=selectedGender;
   
    let  FirstName= document.getElementById("FirstName").value;
    let  LastName= document.getElementById("LastName").value;
    let  email= document.getElementById("Email").value;
    let  password= document.getElementById("Password").value;

    if(FirstName!=0 && LastName !=0 && email!=0&& password!=0 && Gender!=0){

   let FullName="";
    FullName += FirstName +"  " + LastName;
    let h1=document.createElement("h1");

    h1.classList.add("h1")
    h1.textContent=`Dear"${FullName}""you Have sucessfuly registerd`;
   
     
    const div=document.querySelector(".succses");
    div.appendChild(h1)
     let Tenant=[{
      FullName:FullName,
      Email:email,
      password:password,
      Gender:Gender,
   }]
      
    } 
   
 
   

    

 
//  fetch('http://localhost:3000/get', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//      body: JSON.stringify(data)
// })
});

document.getElementById("toSearch").addEventListener("click", function(e){
   e.preventDefault()
   var Radbutton = document.querySelectorAll('input[name="gender"]');
   var selectedGender;
   for (var i = 0; i < Radbutton.length; i++) {
     if (Radbutton[i].checked) {
       selectedGender = Radbutton[i].value;
       break;
     }else{selectedGender=0}
   }
  
 

 let Gender=selectedGender;

 let  FirstName= document.getElementById("FirstName").value;
 let  LastName= document.getElementById("LastName").value;
 let  email= document.getElementById("Email").value;
 let  password= document.getElementById("Password").value;
 if(FirstName!=0 && LastName !=0 && email!=0&& password!=0 && Gender!=0){

   window.location.href = "http://127.0.0.1:5503/FrontEndManual/rent.html";}
else alert("Please First Signin")
})