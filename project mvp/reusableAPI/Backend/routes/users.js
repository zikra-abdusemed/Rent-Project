import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from "cors";

const router = express.Router();
router.use(cors())
let users = [
    {
        img: "http://localhost:5000/images/h1.jpg",
        id: 1,
        data: {
            location: "Ethiopia",
            city: "Arba Minch",
            room: 2,
            type: "R",
            price: 900
        }

    },
    {
        img: "http://localhost:5000/images/a1.jpg",
        id: 2,
        data: {
            location: "Ethiopia",
            city: "Addis Ababa",
            room: 4,
            type: "A",
            price: 900
        }

    },
    {
        img: "http://localhost:5000/images/house1.jpg",
        id: 22,
        data: {
            location: "Ethiopia",
            city: "Addis Ababa",
            room: 4,
            type: "H",
            price: 900
        }

    },
    {
        img: "http://localhost:5000/images/a2.jpg",
        id: 3,
        data: {
            location: "Ethiopia",
            city: "Hawasa",
            room: 1,
            type: "R",
            price: 1000
        }

    },
    {
        img: "http://localhost:5000/images/house2.jpg",
        id: 4,
        data: {
            location: "Ethiopia",
            city: " Bishoftu",
            room: 3,
            type: "A",
            price: 1100
        }

    },
    {
        img: "http://localhost:5000/images/c1.jpg",
        id: 5,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 3,
            type: "C",
            price: 3000
        }

    },
    {
        img: "http://localhost:5000/images/h5.jpg",
        id: 6,
        data: {
            location: "Ethiopia",
            city: "Bahir Dar",
            room: 3,
            type: "H",
            price: 1500
        }

    },
    {
        img: "http://localhost:5000/images/house1.jpg",
        id: 7,
        data: {
            location: "Ethiopia",
            city: "Addis Ababa",
            room: 1,
            type: "H",
            price: 2000
        }

    },
    {
        img: "http://localhost:5000/images/a3.jpg",
        id: 8,
        data: {
            location: "Ethiopia",
            city: "Addis Ababa",
            room: 2,
            type: "A",
            price: 900
        }

    },
    {
        img: "http://localhost:5000/images/h6.jpg",
        id: 9,
        data: {
            location: "Ethiopia",
            city: "Addis ",
            room: 5,
            type: "H",
            price: 2500
        }

    },
    {
        img: "http://localhost:5000/images/a2.jpg",
        id: 10,
        data: {
            location: "Ethiopia",
            city: "Afar",
            room: 5,
            type: "A",
            price: 2500
        }

    },
    {
        img: "http://localhost:5000/images/a5.jpg",
        id: 11,
        data: {
            location: "Ethiopia",
            city: "Jimma",
            room: 2,
            type: "C",
            price: 1000
        }

    },
    {
        img: "http://localhost:5000/images/c4.jpg",
        id: 12,
        data: {
            location: "Ethiopia",
            city: "Addis Ababa",
            room: 1,
            type: "C",
            price: 3000
        }

    },
    {
        img: "http://localhost:5000/images/c1.jpg",
        id: 13,
        data: {
            location: "Ethiopia",
            city: "Bishoftu",
            room: 4,
            type: "C",
            price: 1000
        }

    },
    {
        img: "http://localhost:5000/images/house2.jpg",
        id: 14,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 5,
            type: "C",
            price: 900
        }

    },
    {
        img: "http://localhost:5000/images/c2.jpg",
        id: 15,
        data: {
            location: "Ethiopia",
            city: "Jimma",
            room: 3,
            type: "C",
            price: 2000
        }

    },

    {
        img: "http://localhost:5000/images/house3.jpg",
        id: 16,
        data: {
            location: "Ethiopia",
            city: "Dire Dawa",
            room: 5,
            type: "A",
            price: 1000
        }

    },

     {
        img: "http://localhost:5000/images/h1.jpg",
        id: 17,
        data: {
            location: "Ethiopia",
            city: "Harar",
            room: 5,
            type: "H",
            price: 1000
        }

    },
    {
        img: "http://localhost:5000/images/c1.jpg",
        id: 18,
        data: {
            location: "Ethiopia",
            city: "Harar",
            room: 5,
            type: "C",
            price: 1500
        }

    },
    {
        img: "http://localhost:5000/images/house2.jpg",
        id: 19,
        data: {
            location: "Ethiopia",
            city: "Debre Birhan",
            room: 2,
            type: "A",
            price: 3700
        }

    },
    {
        img: "http://localhost:5000/images/h2.jpg",
        id: 20,
        data: {
            location: "Ethiopia",
            city: "Afar",
            room: 5,
            type: "A",
            price: 3000
        }

    },
    {
        img: "http://localhost:5000/images/h6.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 1,
            type: "A",
            price: 1500
        }

    },
    {
        img: "http://localhost:5000/images/a6.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "adama",
            room: 1,
            type: "A",
            price: 3500
        }

    },
    {
        img: "http://localhost:5000/images/h6.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 3,
            type: "A",
            price: 4500
        }

    },
    {
        img: "http://localhost:5000/images/h1.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 5,
            type: "A",
            price: 5000
        }

    },
    {
        img: "http://localhost:5000/images/h8.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "adama",
            room: 5,
            type: "A",
            price: 5000
        }

    },
    {
        img: "http://localhost:5000/images/h7.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "adama",
            room: 5,
            type: "H",
            price: 3500
        }

    },
    {
        img: "http://localhost:5000/images/h3.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "adama",
            room: 5,
            type: "H",
            price: 1500
        }

    },
    {
        img: "http://localhost:5000/images/a6.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "adama",
            room: 5,
            type: "A",
            price: 4500
        }

    },
    {
        img: "http://localhost:5000/images/a5.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 5,
            type: "A",
            price: 2000
        }

    },
    {
        img: "http://localhost:5000/images/a4.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 5,
            type: "A",
            price: 4500
        }

    },
    {
        img: "http://localhost:5000/images/h2.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 5,
            type: "H",
            price: 1800
        }


    },
    {
        img: "http://localhost:5000/images/h6.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 5,
            type: "H",
            price: 3300
        }

    },
    {
        img: "http://localhost:5000/images/a3.jpg",
        id: 21,
        data: {
            location: "Ethiopia",
            city: "Adama",
            room: 5,
            type: "A",
            price: 2500
        }

    }
    
    








]


router.get('/', (req, res) => {
    res.send(users)
});

router.post("/", (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    res.send(`New user added: name: ${req.body.firstname}`);
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
    let filtered=[]
    if (room !=0){
         filtered = users.filter(function (value) {
    
            return (
                value.data.room == room &&
                value.data.price >= (price - 500) && value.data.price <= (price + 500)  &&
                value.data.type == type
            )
        });
    } else {
         filtered = users.filter(function (value) {
            return ( value.data.price >= (price - 500) && value.data.price <= (price + 500) && value.data.type == type
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