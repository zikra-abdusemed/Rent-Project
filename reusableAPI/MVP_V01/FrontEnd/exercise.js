const users = [
  
    {
        img: "house1.jpg",
        id: 2,
        data: {
            location: "Ethiopia",
            city: "Bishoftu",
            room: 4,
            type: "A",
            price: 3000
        }

    }
]



filtered = users.filter(function (value) {
    
    return (
        value.data.price >= 1000 - 500 && value.data.price <= 1000 + 500  &&
        value.data.type == "A"
    )
})

var Type=""

const LOC  = document.querySelector(".users");
if (users[0].data.city == "Bishoftu") {
    Type == "Bishoftu";
   
}  console.log(Type)

console.log(filtered);
function returnText(){
    let input=
    document.getElementById("users").value
   
}



