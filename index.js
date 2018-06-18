const express = require('express');
const app = express();




// Show the user a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the machine');
});


// Contact list page. Show the user all contacts
app.get('/contacts', (req, res) => {
    res.send('You are on the listing page.')
})
// Contact detailed page. Show the user all info for one cantact.
app.get('/contacts/:id', (req, res) => {
    res.send(`You are viewing details for ${req.params.id}`);
})


app.listen(5000, () => {
    console.log('Theyre heeerrrrreeeee')
});
