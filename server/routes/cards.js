const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const { Customer } = require("./../../src/Customer");
const { Bank } = require("./../../src/Bank");

let bank = new Bank();
let newUser;
// const cards = bank.avaliable_cards;

router.post('/', (req, res, next) => {
  const {body} = req;
  console.log("ETH: ", body.user);

  // if(typeof body.first_name !== 'string') {
  //   return next(createError(422, 'Validation Error!'));
  // }

  newUser = new Customer(body.user.title, body.user.first_name, body.user.surname, body.user.dob, body.user.employment, body.user.income, body.user.house_number, body.user.postcode);
  const bankAccount = new Bank(newUser);
  res.json(bankAccount.creditCheck());
});

module.exports = router;