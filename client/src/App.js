import { buildQueries } from "@testing-library/react";
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState({
    title: '',
    first_name: '',
    surname: '',
    dob: '',
    employment: '',
    income: '',
    house_number: '',
    postcode: ''
  });
  const [block, setBlock] = useState();
  const form = useRef(null);

  const submit = e => {
    e.preventDefault()
    console.log("CR7", user);
    fetch('/cards', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    console.log("Look: ", data);
    if(data) {
      listItems(data);
    }
  }, [data]);

  const listItems = (list) => {
    let listBlock;
    list.map((reptile) => listBlock += reptile.title);
    console.log("block: " + listBlock);
    setBlock(listBlock);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Card">
          <form ref={form} onSubmit={submit}>
          <input type="text" name="user[title]" value={!!user && user.title} placeholder="name" onChange={e => setUser({ ...user, title: e.target.value })}/>

            <input type="text" name="user[first_name]" value={!!user && user.first_name} placeholder="name" onChange={e => setUser({ ...user, first_name: e.target.value })}/>
      
            <input type="text" name="user[surname]" value={!!user && user.surname} placeholder="surname" onChange={e => setUser({ ...user, surname: e.target.value })}/>

            <input type="text" name="user[dob]" value={!!user && user.dob} placeholder="dob" onChange={e => setUser({ ...user, dob: e.target.value })}/>

            <input type="text" name="user[employment]" value={!!user && user.employment} placeholder="employment" onChange={e => setUser({ ...user, employment: e.target.value })}/>
            
            <input type="number" name="user[income]" value={!!user && user.income} placeholder="income" onChange={e => setUser({ ...user, income: e.target.value })}/>

            <input type="number" name="user[house_number]" value={!!user && user.house_number} placeholder="house_number" onChange={e => setUser({ ...user, house_number: e.target.value })}/>

            <input type="text" name="user[postcode]" value={!!user && user.postcode} placeholder="postcode" onChange={e => setUser({ ...user, postcode: e.target.value })}/>

            <input type="submit" name="Sign Up" />
          </form>
        </div>

        {block ? block : "no data"}
        
      </header>
    </div>
  );
}

export default App;
