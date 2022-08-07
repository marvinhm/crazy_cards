class Customer {
  constructor(title, first_name, surname, dob, employment, income, house_number, postcode) {
    this.title = title;
    this.first_name = first_name;
    this.surname = surname;
    this.dob = dob;
    this.employment = employment;
    this.income = income;
    this.house_number = house_number;
    this.postcode = postcode;
  }

  getTitle() {
    return this.title;
  }

  getFirstName() {
    return this.first_name;
  }

  getSurname() {
    return this.surname;
  }

  getDOB() {
    return this.dob;
  }

  getEmployment() {
    return this.employment;
  }

  getIncome() {
    return this.income;
  }

  getHouseNumber() {
    return this.house_number;
  }

  getPoscode() {
    return this.postcode;
  }

  view_details() {
    return JSON.stringify({
      title: this.title,
      first_name: this.first_name,
      surname: this.surname,
      dob: this.dob,
      employment: this.employment,
      income: this.income,
      house_number: this.house_number,
      postcode: this.postcode
    })
  }
}

module.exports = {
  Customer
}