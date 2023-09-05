
const slider = document.querySelector(".input");
const inputNumber = document.querySelector(".inputnumber");

const value  =  document.querySelector(".value");

value.textContent =slider.value;
slider.oninput=function(){
    value.textContent= this.value;
}

value.textContent =inputNumber .value;
inputNumber.oninput=function(){
    value.textContent= this.value;
}
// this is a new comment
const btn = document.querySelector(".btn");

const serach = document.querySelector(".search");


const apartment = document.querySelector(".apart");
const condominium = document.querySelector(".condo");
const villa = document.querySelector(".villa");
const House = document.querySelector(".house");



serach.addEventListener("click", (e)=>{

    e.preventDefault();

    const dropdown = document.querySelector(".dropdown").value;
    const citydropdown=  document.querySelector(".location").value;
    

     let  room = document.querySelector(".room").value;

  

    

     if (room == "any") {
        room = 0;
    }
    console.log(citydropdown)
    console.log(dropdown)
    console.log(slider.value)
    console.log(room)
    
    console.log(inputNumber.value)
   
    console.log(citydropdown, "<--------------")
    let link = "http://localhost:3000/users/search/"
    link += room + "?"+"type" + "=" + dropdown + "&"+ "location"+"=" + citydropdown+  "&"+ "price" + "=" + (inputNumber.value || slider.value)

    console.log(link) 
    fetch(link)
    .then(res => res.json())
    .then(data =>{
        const resultContainer =  document.querySelector(".results");
           
        while (resultContainer.firstChild) {
         resultContainer.removeChild(resultContainer.lastChild);
         } 
         
        for (let i = 0; i < data.length; i++) {

            var newElement = document.createElement('div');
            var container = document.createElement('div');
            let imageElement = document.createElement('div');
        
            newElement.classList.add("results-container");
            let p1El = document.createElement('p');
            let p2El = document.createElement('p');
            let p3El = document.createElement('p');
            let imgEL = document.createElement('img');
            let spanElement = document.createElement('span');
            let spanElementcity = document.createElement('span');
        
            
          
        
            // let locationData = "";
        
            // locationData += data[i].data.city + "," + data[i].data.location;
        
            p1El.innerText = "location City";

            let cType = "";
        
            if (data[i].data.city == "addis") {
                cType += " Addis Ababa";
            } else if (data[i].data.city == "adama") {
                cType += " Adama";
            }
            else if (data[i].data.city == "jimma") {
                cType += " Jimma";
            }
            else if (data[i].data.city == "bishoftu") {
                cType += " Bishoftu";
            }
            else if (data[i].data.city == "arbaminch") {
                cType += " Arbaminch";
            }
            else if (data[i].data.city == "harar") {
                cType += " Harar";
            }
            else if (data[i].data.city == "hawasa") {
                cType += " Hawasa";
            }

             // city
             spanElementcity.innerText = cType;
             spanElementcity.classList.add("p-type-gray")
             p1El.appendChild(spanElementcity);
              console.log(spanElementcity);
 
           
            p2El.innerText = "Property type";
            let pType = "";
        
            if (data[i].data.type == "C") {
                pType += " Condominum";
            } else if (data[i].data.type == "A") {
                pType += " Apartment";
            }
            else if (data[i].data.type == "H") {
                pType += " House";
            }
            else if (data[i].data.type == "R") {
                pType += " Realstate";
            }

           
            // type


            spanElement.innerText = pType;
            spanElement.classList.add("p-type-gray");
            p2El.appendChild(spanElement);
           console.log(spanElement)
        
        
            p3El.innerText = data[i].data.price;
            imgEL.src = data[i].img;
        
        
            container.classList.add('results-container');
            imageElement.classList.add('img-container');
            p1El.classList.add('p-type');
            p2El.classList.add('p-type');
            p3El.classList.add('price');
        
        
        
        
        
            imageElement.append(imgEL);
            newElement.appendChild(imageElement);
            container.appendChild(imageElement);
            newElement.appendChild(container);
        
        
        
            newElement.appendChild(p1El);
            newElement.appendChild(p2El);
            newElement.appendChild(p3El);

           resultContainer.appendChild(newElement);
        
        }
    } )
    
}
)



fetch("http://localhost:3000/users")
.then(res => res.json())


.then(data =>{
    const resultContainer =  document.querySelector(".results");
       
    while (resultContainer.firstChild) {
     resultContainer.removeChild(resultContainer.lastChild);
     } 
     
    for (let i = 0; i < data.length; i++) {

        var newElement = document.createElement('div');
        var container = document.createElement('div');
        let imageElement = document.createElement('div');
    
        newElement.classList.add("results-container");
        let p1El = document.createElement('p');
        let p2El = document.createElement('p');
        let p3El = document.createElement('p');
        let imgEL = document.createElement('img');
        let spanElement = document.createElement('span');
        let spanElementcity = document.createElement('span');
    
        
      
    
        // let locationData = "";
    
        // locationData += data[i].data.city + "," + data[i].data.location;
    
        p1El.innerText = "location City";

        let cType = "";
    
        if (data[i].data.city == "addis") {
            cType += " Addis Ababa";
        } else if (data[i].data.city == "adama") {
            cType += " Adama";
        }
        else if (data[i].data.city == "jimma") {
            cType += " Jimma";
        }
        else if (data[i].data.city == "bishoftu") {
            cType += " Bishoftu";
        }
        else if (data[i].data.city == "arbaminch") {
            cType += " Arbaminch";
        }
        else if (data[i].data.city == "harar") {
            cType += " Harar";
        }
        else if (data[i].data.city == "hawasa") {
            cType += " Hawasa";
        }

         // city
         spanElementcity.innerText = cType;
         spanElementcity.classList.add("p-type-gray")
         p1El.appendChild(spanElementcity);
          console.log(spanElementcity);

       
        p2El.innerText = "Property type";
        let pType = "";
    
        if (data[i].data.type == "C") {
            pType += " Condominum";
        } else if (data[i].data.type == "A") {
            pType += " Apartment";
        }
        else if (data[i].data.type == "H") {
            pType += " House";
        }
        else if (data[i].data.type == "R") {
            pType += " Realstate";
        }

       
        // type


        spanElement.innerText = pType;
        spanElement.classList.add("p-type-gray");
        p2El.appendChild(spanElement);
       console.log(spanElement)
    
    
        p3El.innerText = data[i].data.price;
        imgEL.src = data[i].img;
    
    
        container.classList.add('results-container');
        imageElement.classList.add('img-container');
        p1El.classList.add('p-type');
        p2El.classList.add('p-type');
        p3El.classList.add('price');
    
    
    
    
    
        imageElement.append(imgEL);
        newElement.appendChild(imageElement);
        container.appendChild(imageElement);
        newElement.appendChild(container);
    
    
    
        newElement.appendChild(p1El);
        newElement.appendChild(p2El);
        newElement.appendChild(p3El);

       resultContainer.appendChild(newElement);
    
    }
} )


