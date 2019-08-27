// Simulated database
function getProduct() {
  return { price: 12000, maxInstallments: 12 };
}

function getCardFlags(){
  const flags = [
    {code: 123, description: 'Visa', logo: 'visa.jpg' },
    {code: 141, description: 'Mastercard', logo: 'master.jpg' },
    {code: 145, description: 'Hipercard', logo: 'hipercard.jpg' },
    {code: 147, description: 'Elo', logo: 'elo.jpg' }
  ]
  return flags;

}

module.exports =  {
  async getCardFlags(req, res){
    try{
      // Simulating get data flags in DB
      const response = await new Promise( (res,rej) => {
        setTimeout( () => {
          const result = getCardFlags(); // Go get database...
          res(result);
        }, 1000);
      });
      return res.json(response);

    }catch(Error){
      console.error(`Api Payment (getCardFlags): ${Error}`);
    }
  },
  async getPrices(req, res){
    try{

      // Simulating search by value and quantity of installments of a particular product or service...
      const response = await new Promise( (res,rej) => {
        setTimeout( () => {
          const result = getProduct(); // Go get database...
          res(result);
        }, 3000);
      });
      return res.json(response);
    }catch(Error){
      console.error(`Api Payment (getPrices): ${Error}`);
    }
  },
  async effectPayment(req, res){
    try{
      const { ammount, cvv, expiryMonth, flagCard, holderName, installments, number } = req.body;

      console.log('body:', req.body);

      //Simulating server-side data validation and paying for the product or service
      const response = await new Promise( (res,rej) => {
        setTimeout( () => {
          const { price, maxInstallments } = getProduct();
          let result = null;

          // Simulating a possible validation of data
          if(installments <= maxInstallments && (ammount*installments) == price ){
            result = { status: "success", message: "Payment successful"};
          }else{
            result = { status: "error", message: "Payment error"};
          }
          res(result);
        }, 3000);
      });

      return res.json(response);
    }catch(Error){
      console.error(`Api Payment Error (effectPayment): ${Error}`);
    }
  }
}
