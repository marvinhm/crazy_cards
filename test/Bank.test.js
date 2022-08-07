import { expect } from "chai";
import { Bank } from "../src/Bank";
import { Customer } from "../src/Customer";

describe("Bank", () => {
  it("Should respond to view_cards", () => {
    let bank = new Bank();

    expect(bank).to.respondTo("view_cards");
  });

  describe("#get_card", () => {
    it("should return Liquid Card", () => {
      let bank = new Bank();

      expect(bank.get_card("Liquid Card")).to.eql({
        title: "Liquid Card",
        hasRequirements: {
          value: true,
          requirement: {
            field: "income",
            value: 16000
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
      });
    });
  });

  it("should return an array containing avaliable cards", () => {
    let bank = new Bank();

    expect(bank.avaliable_cards).to.be.an("array");
  });

  it("avaliable cards should contain Student Life Card", () => {
    let bank = new Bank();

    const stringCards = bank.avaliable_cards.map(
      (card) => `${card.title}, ${card.btod.label}, ${card.btod.value}`
    );

    expect(stringCards).to.contain(
      "Student Life, Balance Transfer Offer Duration, 0"
    );
  });

  it("should have an initiated Customer", () => {
    let cust1 = new Customer('MR','Harry', 'Riley', '130119080', 'self', 40000, '11', 'NW4');
    let bank = new Bank(cust1);
    expect(bank.active_customer()).to.eql('{"title":"MR","first_name":"Harry","surname":"Riley","dob":"130119080","employment":"self","income":40000,"house_number":"11","postcode":"NW4"}');
  })

  describe("#employmentCheck", () => {
    it("should return an true if customer is a student", () => {
      let cust1 = new Customer('MR','Barry', 'Moore', '130119068', 'student', 40000, '11', 'NW4');
      let bank = new Bank(cust1);
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

      expect(bank.employmentCheck(card)).to.eql(true);
    });
  })

  describe("#incomeCheck", () => {
    it("should return an true if customer earns more than 10000", () => {
      let cust1 = new Customer('MR','Barry', 'Moore', '130119068', 'student', 40000, '11', 'NW4');
      let bank = new Bank(cust1);
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

      expect(bank.incomeCheck(card)).to.eql(true);
    });
  })

  describe("#creditCheck", () => {
    it("should return an array with one card", () => {
      let cust1 = new Customer('MR','Gary', 'Neville', '13011999', 'student', 20000, '1', 'M23');
      let bank = new Bank(cust1);

      expect(bank.creditCheck().length).to.eql(3);
    });

    it("should return an array with one card", () => {
      let cust1 = new Customer('MR','Jamie', 'Carragher', '13011993', 'full', 17000, '12', 'L23');
      let bank = new Bank(cust1);

      expect(bank.creditCheck().length).to.eql(2);
    });

    it("should return an array with one card", () => {
      let cust1 = new Customer('MR','Roy', 'Keane', '13011989', 'self', 15000, '9', 'R93');
      let bank = new Bank(cust1);

      expect(bank.creditCheck().length).to.eql(1);
    });
  })
  
});
