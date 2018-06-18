const express = require('express');
const app = express();
const contacts = require('./contacts');




// Show the user a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the machine');
});


// Contact list page. Show the user all contacts
app.get('/contacts', (req, res) => {
    res.send(contacts.users)
})
// Contact detailed page. Show the user all info for one cantact.
app.get('/contacts/:id', (req, res) => {
    let userID = req.params.id
    let contact = contacts.users.find((user) => {
        return user.id === userID;
    })
    // check if contact exists
    res.send(contact);
})


app.listen(5000, () => {
    console.log('Theyre heeerrrrreeeee')
});
