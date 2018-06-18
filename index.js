const express = require('express');
const app = express();
const contacts = require('./contacts');
const static = express.static;
const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// tell express to look in this directory whenever a file is referenced
app.use(static('public'));

// Show the user a welcome message
app.get('/', (req, res) => {
    // res.send('Welcome to the machine');
    res.render('home', {
        message: 'Hello Handlebars',
        ptext: 'Welcome to the world of the plastic beach.',
        layout: 'homepage'
    })
});


// Contact list page. Show the user all contacts
app.get('/contacts', (req, res) => {
    // res.send(contacts.users)
    res.render('people', {
    list: contacts.users        
    })
})
// Contact detailed page. Show the user all info for one cantact.
app.get('/contacts/:id', (req, res) => {
    let userID = req.params.id
    let contact = contacts.users.find((user) => {
        return user.id === userID;
    })
    // check if contact exists
    if (!contact){
        res.redirect('/');
    } else {
       res.render('person', {
           contact
           // fname: contact.firstName,
           // lname: contact.lastName,
           // phone: contact.phone,
           // email: contact.email
       })
    }
        
})



app.listen(5000, () => {
    console.log('Theyre heeerrrrreeeee')
});
