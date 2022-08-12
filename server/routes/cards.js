const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const { Customer } = require("./../../src/Customer");
const { CreditCards } = require("./../../src/CreditCards");
let newUser;
// const cards = bank.avaliable_cards;

router.post('/', (req, res, next) => {
  const {body} = req;

  // if(typeof body.first_name !== 'string') {
  //   return next(createError(422, 'Validation Error!'));
  // }

  newUser = new Customer(body.user.title, body.user.first_name, body.user.surname, body.user.dob, body.user.employment, body.user.income, body.user.house_number, body.user.postcode);
  const account = new CreditCards(newUser);
  res.json(account.creditCheck());
});

module.exports = router;