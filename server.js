// sk_test_51MycIqD2171rDQ1bM2Vo43LraZJVqjoKBvTbP7yl52C5ShEqWmsSrT7kktdyrtUAuRwrOD8HRmqXnfFOXPULc7Xr00A9NYeUOU
// coffee: price_1MycSDD2171rDQ1bnbM18dAH
// jacket: price_1MycUvD2171rDQ1bKnBShmm8
// macbook: price_1MycVnD2171rDQ1b7o7lE0jc

const express = require('express');
const cors = require('cors');
const app = express();
const stripe = require('stripe')('sk_test_51MycIqD2171rDQ1bM2Vo43LraZJVqjoKBvTbP7yl52C5ShEqWmsSrT7kktdyrtUAuRwrOD8HRmqXnfFOXPULc7Xr00A9NYeUOU');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/checkout', async (req, res) => {
    items = req.body.items;
    lineItems = [];
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity,
        })
    });
    // create a session
    const stripeSession = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    // send back the url
    
})