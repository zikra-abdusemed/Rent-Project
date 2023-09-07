
const slider = document.querySelector(".input");
const inputNumber = document.querySelector(".inputnumber");

const value = document.querySelector(".value");



value.textContent = slider.value;
slider.oninput = function () {
    value.textContent = this.value;
}

value.textContent = inputNumber.value;
inputNumber.oninput = function () {
    value.textContent = this.value;
}
// this is a new comment
const btn = document.querySelector(".btn");

const serach = document.querySelector(".search");


const apartment = document.querySelector(".apart");
const condominium = document.querySelector(".condo");
const villa = document.querySelector(".villa");
const House = document.querySelector(".house");



serach.addEventListener("click", (e) => {

    e.preventDefault();

    const dropdown = document.querySelector(".dropdown").value;
    const citydropdown = document.querySelector(".location").value;


    let room = document.querySelector(".room").value;





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
    link += room + "?" + "type" + "=" + dropdown + "&" + "location" + "=" + citydropdown + "&" + "price" + "=" + (inputNumber.value || slider.value)

    console.log(link)
    fetch(link)
        .then(res => res.json())
        .then(data => {
            const resultContainer = document.querySelector(".results");

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
        })

}
)



fetch("http://localhost:3000/users")
    .then(res => res.json())


    .then(data => {
        const resultContainer = document.querySelector(".results");

        while (resultContainer.firstChild) {
            resultContainer.removeChild(resultContainer.lastChild);
        }

        for (let i = 0; i < data.length; i++) {


            var newElement = document.createElement('div');
            var container = document.createElement('div');
            let imageElement = document.createElement('div');
            var MoreInfo = document.createElement('div');
            MoreInfo.className = "more-info"
            newElement.classList.add("results-container");
            let p1El = document.createElement('p');
            let p2El = document.createElement('p');
            let p3El = document.createElement('p');
            let imgEL = document.createElement('img');
            let spanElement = document.createElement('span');
            let spanElementcity = document.createElement('span');
            let Floor = document.createElement('p');
            let Bathroom = document.createElement('p');
            let Bedroom = document.createElement('p');
            let Size = document.createElement('p');
            let Furniture = document.createElement('p');
            let message = document.createElement('p')
            let morebtn = document.createElement("button")

            morebtn.id = "hide";
            morebtn.className="more-btn";
            morebtn.innerHTML = "More";
            Bedroom.id = "Bed";
            Bedroom.innerText = "Bedroom";
            Bathroom.className = "Bath";
            Bathroom.innerText = "Bathroom";
            Floor.id = "floor";
            Floor.innerText = "Floor";
            Size.id = "size";
            Size.innerText = "Size";
            Furniture.id = "furniture";
            Furniture.innerText = "Furniture";
            message.innerText = "Message";
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


            p3El.innerText = "Price " + data[i].data.price;
            imgEL.src = data[i].img;

            MoreInfo.classList.add('results-container')
            container.classList.add('results-container');
            imageElement.classList.add('img-container');
            p1El.classList.add('p-type');
            p2El.classList.add('p-type');
            p3El.classList.add('price');




            MoreInfo.append(Bathroom);
            MoreInfo.append(Bedroom);
            MoreInfo.append(Furniture);

            MoreInfo.append(Floor);
            MoreInfo.append(Size);
            imageElement.append(imgEL);
            newElement.appendChild(imageElement);
            container.appendChild(imageElement);
            newElement.appendChild(container);

           
            

           

            newElement.appendChild(p1El);
            newElement.appendChild(p2El);
            newElement.appendChild(p3El);
            newElement.append(morebtn);
            newElement.appendChild(MoreInfo);
          
            resultContainer.appendChild(newElement);
            
            
            // moreButton.addEventListener("click", function (event) {
            //     //alert('!');

            //     event.preventDefault();

            //     console.log('clicked');

            //     var element = document.getElementById("Bed");
            //     if(element.style != null){
            //         element.style.display = "none";
            //         console.log ("Here");
            //     }
            //     else{
            //         console.log("it's null")
            //     }

            // });

            
            

        }
        // document.getElementById("hide").addEventListener("click", function(event){
        //     event.preventDefault();
        //     console.log("clicked")
        // })
        
        let moreButtons = document.getElementsByClassName("more-btn")
        let moreInfo = document.getElementsByClassName('more-info')

        console.log(moreButtons.length)
         console.log(moreInfo.length)
           for(let z=0;z<moreInfo.length;z++){
            console.log(moreInfo[z]);
           
        for (let i = 0; i<moreButtons.length; i++){
           moreButtons[i].addEventListener('click',function(event){
            event.preventDefault();
            
            moreInfo[z].classList.toggle('Showmenu')
            // innerHTML=<div>all the extra information</div>
           }) 
        }}

    })


   