import React, { useEffect, useState } from "react";

function Form() {
  const [first_name, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [dob, setDob] = useState();
  const [employment, setEmployment] = useState();
  const [income, setIncome] = useState();
  const [house_number, setHouseNumber] = useState();
  const [postode, setPostcode] = useState();
  const [title, setTitle] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(first_name + surname);
  }

  return (
    <div className="Card">
      <form onSubmit={handleSubmit}>
      <label>Enter your first name:
        <input 
          type="text" 
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      <label>Enter your surname:
        <input 
          type="text" 
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </label>

      <label>Enter your title:
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>Enter your income:
        <input 
          type="text" 
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </label>

      <label>Enter your dob:
        <input 
          type="text" 
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>

      <label>Enter your employment:
        <input 
          type="text" 
          value={employment}
          onChange={(e) => setEmployment(e.target.value)}
        />
      </label>

      <label>Enter your house number:
        <input 
          type="text" 
          value={house_number}
          onChange={(e) => setHouseNumber(e.target.value)}
        />
      </label>

      <label>Enter your postcode:
        <input 
          type="text" 
          value={postode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>

    </div>
  );
}

export default Form;
