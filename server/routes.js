const routes = require('express').Router();
const payment = require('./controllers/payment');


routes.get('/', (req, res) => {
  return res.json({ message: 'Server is running...'});
});

routes.get('/payment/get-prices', payment.getPrices);
routes.get('/payment/get-card-flags', payment.getCardFlags);
routes.post('/payment/effect-payment', payment.effectPayment);

module.exports = routes;
