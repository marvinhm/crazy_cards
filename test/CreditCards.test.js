import { expect } from "chai";
import { CreditCards } from "../src/CreditCards";
import { Customer } from "../src/Customer";

describe("CreditCards", () => {
  it("Should respond to view_cards", () => {
    let account = new CreditCards();

    expect(account).to.respondTo("view_cards");
  });

  describe("#get_card", () => {
    it("should return Liquid Card", () => {
      let account = new CreditCards();

      expect(account.get_card("Liquid Card")).to.eql({
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
      });
    });
  });

  it("should return an array containing avaliable cards", () => {
    let account = new CreditCards();

    expect(account.avaliable_cards).to.be.an("array");
  });

  it("avaliable cards should contain Student Life Card", () => {
    let account = new CreditCards();

    const stringCards = account.avaliable_cards.map(
      (card) => `${card.title}, ${card.btod.label}, ${card.btod.value}`
    );

    expect(stringCards).to.contain(
      "Student Life, Balance Transfer Offer Duration, 0"
    );
  });

  it("should have an initiated Customer", () => {
    let cust1 = new Customer('MR','Harry', 'Riley', '130119080', 'self', 40000, '11', 'NW4');
    let account = new CreditCards(cust1);
    expect(account.active_customer()).to.eql('{"title":"MR","first_name":"Harry","surname":"Riley","dob":"130119080","employment":"self","income":40000,"house_number":"11","postcode":"NW4"}');
  })

  describe("#employmentCheck", () => {
    it("should return an true if customer is a student", () => {
      let cust1 = new Customer('MR','Barry', 'Moore', '130119068', 'student', 40000, '11', 'NW4');
      let account = new CreditCards(cust1);
      const card = {
        title: "Liquid Card",
        hasRequirements: {
          value: true,
          requirement: {
            field: "employment",
            value: "student"
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

      expect(account.employmentCheck(card)).to.eql(true);
    });
  })

  describe("#incomeCheck", () => {
    it("should return an true if customer earns more than 10000", () => {
      let cust1 = new Customer('MR','Barry', 'Moore', '130119068', 'student', 40000, '11', 'NW4');
      let account = new CreditCards(cust1);
      const card = {
        title: "Liquid Card",
        hasRequirements: {
          value: true,
          requirement: {
            field: "income",
            value: 10000
          }
        },
        apr: {
          label: "Apr",
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

      expect(account.incomeCheck(card)).to.eql(true);
    });
  })

  describe("#creditCheck", () => {
    it("should return an array with one card", () => {
      let cust1 = new Customer('MR','Gary', 'Neville', '13011999', 'student', 20000, '1', 'M23');
      let account = new CreditCards(cust1);

      expect(account.creditCheck().length).to.eql(3);
    });

    it("should return an array with one card", () => {
      let cust1 = new Customer('MR','Jamie', 'Carragher', '13011993', 'full', 17000, '12', 'L23');
      let account = new CreditCards(cust1);

      expect(account.creditCheck().length).to.eql(2);
    });

    it("should return an array with one card", () => {
      let cust1 = new Customer('MR','Roy', 'Keane', '13011989', 'self', 15000, '9', 'R93');
      let account = new CreditCards(cust1);

      expect(account.creditCheck().length).to.eql(1);
    });
  })
  
});
