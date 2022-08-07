import { expect } from "chai";
import { Customer } from "../src/Customer";

describe("Customer", () => {
  it("returns customers title", function () {
    let customer = new Customer(
      "MRS",
      "Charlie",
      "Bronson",
      "100792",
      "full",
      100000,
      "23",
      "IG11"
    );
    expect(customer.getTitle()).to.eql("MRS");
  });

  it("returns customers name", function () {
    let customer = new Customer(
      "MRS",
      "Charlie",
      "Bronson",
      "100792",
      "full",
      100000,
      "23",
      "IG11"
    );
    let customer_name = `${customer.getFirstName()} ${customer.getSurname()}`;
    expect(customer_name).to.eql("Charlie Bronson");
  });

  it("returns customers date", function () {
    let customer = new Customer(
      "MRS",
      "Charlie",
      "Bronson",
      "100792",
      "full",
      100000,
      "23",
      "IG11"
    );
    expect(customer.getDOB()).to.eql("100792");
  });

  it("returns customers employment status", function () {
    let customer = new Customer(
      "MRS",
      "Charlie",
      "Bronson",
      "100792",
      "full",
      100000,
      "23",
      "IG11"
    );
    expect(customer.getEmployment()).to.eql("full");
  });

  it("returns customer income", function () {
    let customer = new Customer(
      "MRS",
      "Charlie",
      "Bronson",
      "100792",
      "full",
      100000,
      "23",
      "IG11"
    );
    expect(customer.getIncome()).to.eql(100000);
  });

  it("returns customer's house number", function () {
    let customer = new Customer(
      "MRS",
      "Charlie",
      "Bronson",
      "100792",
      "full",
      100000,
      "23",
      "IG11"
    );
    expect(customer.getHouseNumber()).to.eql("23");
  });

  it("returns customer's postcode", function () {
    let customer = new Customer(
      "MRS",
      "Charlie",
      "Bronson",
      "10071992",
      "full",
      100000,
      "23",
      "IG11"
    );
    expect(customer.getPoscode()).to.eql("IG11");
  });
  describe ('#view_details', function() {
    it('returns a customer JSON', function() {
      let customer = new Customer('MR','Harry', 'Riley', '130119080', 'self', 40000, '11', 'NW4');
      expect(customer.view_details()).to.eql('{"title":"MR","first_name":"Harry","surname":"Riley","dob":"130119080","employment":"self","income":40000,"house_number":"11","postcode":"NW4"}')
    })
  })
});
