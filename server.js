// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, "home.html"))
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, "reservations.html"))
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"))
});

const reservations = [
  {
    name: 'reagan',
    email: 'reagan422440@gmail.com',
    phone: '4403706704',
    id: 'rrogers422'
  },
  {
    name: 'mike',
    email: 'mikek@gmail.com',
    phone: '543252664',
    id: 'mkotte'
  }
];

//post requests
app.post('/api/tables', (req, res) => {

    const newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
    console.log(newReservation);

    reservations.push(newReservation);
    res.json(newReservation);
});




// for (let i=0; i<reservations.length; i++) {
//     if()
// }


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
