const express = require('express');
const app = express();
const ticketRouter = require('./routes/tickets');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {

    res.render('index');
    
});


app.use('/tickets', ticketRouter);
app.listen(5000);