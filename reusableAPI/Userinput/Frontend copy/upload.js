




const Upload = document.querySelector(".Upload");
const Apartment = document.querySelector(".Apartment");
const Condominium = document.querySelector(".Condominium");
const Villa = document.querySelector(".Villa");
const House = document.querySelector(".House");




const  Addisabeba = document.querySelector(".Addis abeba");
const Adama= document.querySelector(".Adama");
const Bishoftu = document.querySelector(".Bishoftu");
const Harer= document.querySelector(".Harer");



Upload.addEventListener("click", (e)=>{

    e.preventDefault();
    
    const dropdown=document.querySelector(".dropdown").value ;
    const labeldropdown=document.querySelector(".labeldropdown").value;

   
    let inputnumber = document.querySelector(".inputnumber").value;
    let  room = document.querySelector(".room").value;

    let  bedroom = document.querySelector(".bedroom").value;

    let  bathroom = document.querySelector(".bathroom").value;
   
    let  area = document.querySelector(".area").value;

    let  floor = document.querySelector(".floor").value;
    // var rad1=document.getElementById("rad1")
    // var rad2=document.getElementById("rad2")
    
   
    let textarea=document.querySelector(".textarea").value;
  
   
console.log(textarea);

var radioButtons = document.querySelectorAll('input[name="Fur"]');
  var selectedValue;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedValue = radioButtons[i].value;
      break;
    }
  }
  console.log(selectedValue);






// let furnisher=""
// if(rad1.Checked==true){
// furnisher+="Furnished";}
// else if(rad2.checked==true){
// furnisher+="Unfurnished";}


    let type = "";

    if (dropdown == "Apartment") type = "A";
    else if (dropdown == "Condominium") type = "C";
    else if (dropdown == "Realstate") type = "R";
    else if (dropdown == "House") type = "H";
    // for city
    let city=""
    if(labeldropdown=="Addisabeba") city="addis";
    else if(labeldropdown="Adama")  city="adama"
    else if(labeldropdown="Bishoftu") city="bishoftu"
    else if(labeldropdown="Harar")   city="harar"
    
   

    
    let data = [
        {
            img:"123",
            data: {
                location: "Ethiopia",
                city: city,
                room: room,
                type: type,
                price: inputnumber,
               
                area:area,
                bedroom: bedroom,
                bathroom: bathroom,
                floor:floor,
                discription: textarea,
                Furnicher:selectedValue
               
            }
        
        }
    
    ]

    console.log(data);
    


    fetch('http://localhost:5000/users/addowners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(data => console.log(data) );

 });  

 