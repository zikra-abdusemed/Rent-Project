import express, { json } from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from "cors";

const router = express.Router();
router.use(cors())


import fs from "fs";
var owners=fs.readFileSync('owners.txt','utf8')
let users = JSON.parse(owners);

// console.log(users)




router.get('/', (req, res) => {
    res.send(users)
});

router.post("/addowners", (req, res) => {
    const user = req.body;
    console.log(user[0], "<00000000000")
    users.push({ ...user[0], id: uuidv4() });

fs.writeFile("owners.txt",JSON.stringify(users),(err)=>{
    console.log("saved")
});

    res.send("New User Added");
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    console.log(foundUser)
    res.send(foundUser);
});


router.get("/search/:room", (req, res) => {
    const { room } = req.params;
    const price = parseInt(req.query.price);
    const type = req.query.type;
    const city=req.query.location;

    console.log(city, "city  ")
    let filtered=[]
    if (room !=0){
         filtered = users.filter(function (value) {
    
            return (
                value.data.room == room &&
                value.data.price >= (price - 500) && value.data.price <= (price + 500)  &&
                value.data.type == type &&
                value.data.city == city
                
            )
        });
    } else {
         filtered = users.filter(function (value) {
            return (  value.data.city == city && value.data.price >= (price - 500) && value.data.price <= (price + 500) && value.data.type == type
            )
        });
    }
    console.log(filtered)
    res.send(filtered);
});


router.delete("/:id", (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id)
    res.send(`user with the id ${id} deleted from the database.`)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const user = users.find((user) => user.id == id);


    if (firstname) user.firstname = firstname;
    if (lastname) user.lastName = lastname;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);
})
export default router;