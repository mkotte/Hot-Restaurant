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

app.get('/api/tables', (req, res) => {
    res.json(reservations);
})

app.get('/api/waitlist', (req, res) => {
    res.json(waitData);
})



const reservations = [
  {
    customerName: 'reagan',
    phoneNumber: '4403706704',
    customerEmail: 'reagan422440@gmail.com',
    customerID: 'rrogers422'
  },
  {
    customerName: 'mike',
    phoneNumber: '543252664',
    customerEmail: 'mikek@gmail.com',
    customerID: 'mkotte'
  }
];

//post requests

if ( reservations.length <= 5){
    app.post('/api/tables', (req, res) => {

        const newReservation = req.body;

        newReservation.routeName = newReservation.customerName.replace(/\s+/g, '').toLowerCase();
        console.log(newReservation);

        reservations.push(newReservation);
        res.json(newReservation);
    });
}
else{
    app.post('/api/waitlist', (req, res) => {
        const waitData = req.body;

        // newReservation.routeName = newReservation.customerName.replace(/\s+/g, '').toLowerCase();
        // console.log(newReservation);

        reservations.push(waitData);
        res.json(waitData)
    });
}



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
