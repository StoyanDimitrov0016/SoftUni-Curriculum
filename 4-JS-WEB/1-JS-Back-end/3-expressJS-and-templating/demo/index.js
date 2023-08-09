const express = require('express');
const hbr = require('express-handlebars');


const handlebars = hbr.create({ extname: '.hbs' });
const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('home', {
        username: 'Peter',
        title: 'Handlebars demo',
        message: 'Hello there',
        product: {
            name: 'Product 1',
            price: 4.99,
            color: 'turquoise'
        },
        contacts: [
            {
                name: 'Peter',
                email: 'peter@abv.bg'
            },
            {
                name: 'Mary',
                email: 'mary@abv.bg'
            },
            {
                name: 'Jimmy',
                email: 'jimmy@abv.bg'
            }
        ]
    });
});

app.listen(3000);
// the folder must be named views or we explicitly changed the settings in handlebars
//the render method will find the views folder and will match the given name with the
// html file from the folder and will render it