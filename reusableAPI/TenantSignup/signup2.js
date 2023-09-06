
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(e){
   e.preventDefault()


   
      // window.location.href = "http://127.0.0.1:5503/FrontEndEx/rent.html";
   

    

    let  FirstName= document.querySelector(".FirstName").value;
    let  LastName= document.querySelector(".LastName").value;
    let  email= document.querySelector(".Email").value;
    let  password= document.querySelector(".Password").value;
   let FullName="";
    FullName += FirstName +"  " + LastName;
    let h1=document.createElement("h1");

    h1.classList.add("h1")
    h1.textContent=`Dear"${FullName}""you Have sucessfuly registerd`;
   
     
    const div=document.querySelector(".succses");
    div.appendChild(h1)

 
//  fetch('http://localhost:3000/get', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//      body: JSON.stringify(data)
// })
});