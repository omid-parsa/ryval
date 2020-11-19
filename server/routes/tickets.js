const express = require('express');
const router = express.Router();

const tickets = [{
    index: '1',
    departureCity: 'Oslo',
    arrivalCity: 'Skien',
    departureTime: '12:00',
    arrivalTime: '14:30',
    duration: '2:30',
    adults: '1',
    children: '1',
    price: '599',
    departureDate: '15 Nov'
},
{
    index: '2',
    departureCity: 'Oslo',
    arrivalCity: 'Skien',
    departureTime: '14:00',
    arrivalTime: '16:30',
    duration: '2:30',
    adults: '1',
    children: '1',
    price: '599',
    departureDate: '15 Nov'
},
{
    index: '3',
    departureCity: 'Oslo',
    arrivalCity: 'Skien',
    departureTime: '16:00',
    arrivalTime: '18:30',
    duration: '2:30',
    adults: '1',
    children: '1',
    price: '599',
    departureDate: '15 Nov'
}]



//GET ROUTES
router.get('/search', (req, res) => {
    res.render('searchTicket', { tickets: tickets })
})

router.get('/display', (req, res) => {
    res.render('displayItems', { tickets: tickets })
})

router.get('/checkout', (req, res) => {
    res.render('checkout', { tickets: tickets })
})

router.get('/final', (req, res) => {
    res.render('displayTickets', { tickets: tickets })
})

//POST ROUTES
router.post('/search', (req, res) => {
    res.redirect('/tickets/display')
})
module.exports =  router;