// const { Customer } = require("./src/Customer.js")

class CreditCards {
  constructor(customer) {
    this.customer = customer;
    this.avaliable_cards = [
      {
        title: "Student Life",
        hasRequirements: {
          value: true,
          requirement: {
            field: "employment",
            value: "student"
          }
        },
        apr: {
          label: "Annual Percentage Rate",
          value: 18.9
        },
        btod: {
          label: "Balance Transfer Offer Duration",
          value: 0
        },
        pod: {
          label: "Purchase Offer Duration",
          value: 6
        },
        ca: {
          label: "Credit Available",
          value: 1200
        }
      },
      {
        title: "Anywhere Card",
        hasRequirements: {
          value: false,
          requirement: {}
        },
        apr: {
          label: "Annual Percentage Rate",
          value: 33.9
        },
        btod: {
          label: "Balance Transfer Offer Duration",
          value: 0
        },
        pod: {
          label: "Purchase Offer Duration",
          value: 0
        },
        ca: {
          label: "Credit Available",
          value: 300
        }
      },
      {
        title: "Liquid Card",
        hasRequirements: {
          value: true,
          requirement: {
            field: "income",
            value: 16000
          }
        },
        apr: {
          label: "Annual Percentage Rate",
          value: 33.9
        },
        btod: {
          label: "Balance Transfer Offer Duration",
          value: 12
        },
        pod: {
          label: "Purchase Offer Duration",
          value: 6
        },
        ca: {
          label: "Credit Available",
          value: 3000
        }
      }
    ];
  }

  view_cards() {
    return this.avaliable_cards;
  }

  get_card(card_name) {
    let card_obj;
    this.avaliable_cards.map(card => {
      if(card.title === card_name) {
        card_obj = card;
      }
    })
    return card_obj;
  }

  active_customer() {
    return this.customer.view_details();
  }

  hasRequirements = (card) => {
    return card.hasRequirements.value;
  }

  employmentCheck = (card) => {
    return this.customer.getEmployment() === card.hasRequirements.requirement.value;
  }

  incomeCheck = (card) => {
    return this.customer.getIncome() > card.hasRequirements.requirement.value;
  }

  creditCheck() {
    const array = [];
    this.avaliable_cards.forEach((card) => {
      if(this.hasRequirements(card)) {
        if(this.incomeCheck(card)) {
          array.push(card);
        }
  
        if(this.employmentCheck(card)) {
          array.push(card);
        }
      } else {
        array.push(card);
      }
    })
    return array;
  }
}

module.exports = {
  CreditCards
}