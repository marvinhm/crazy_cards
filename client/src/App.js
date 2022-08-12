import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";

function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState({
    title: "",
    first_name: "",
    surname: "",
    dob: "",
    employment: "",
    income: "",
    house_number: "",
    postcode: "",
  });
  const [block, setBlock] = useState();
  const form = useRef(null);

  useEffect(() => {
    if (data) {
      setBlock(data);
    }
  }, [data]);

  const submit = (e) => {
    e.preventDefault();
    fetch("/cards", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const buildCards = (list) => {
    return list.map((card) => (
      <Card
        key={card.key}
        title={card.title}
        apr={card.apr}
        btod={card.btod}
        pod={card.pod}
        ca={card.ca}
      />
    ));
  };

  const handleEmploymentChange = (e) => {
    setUser({ ...user, employment: e.target.value });
  };

  const handleTitleChange = (e) => {
    setUser({ ...user, title: e.target.value });
  };

  return (
    <div className="App-Container">
      <Header title="Crazy Cards Application" />
      <div className="container">
        <section>
          <form ref={form} onSubmit={submit}>
            <Dropdown
              label="title"
              options={[{ value: "mr" }, { value: "miss" }, { value: "mrs" }]}
              value={user.title}
              onChange={handleTitleChange}
              required="required"
            />
            <input
              type="text"
              name="user[first_name]"
              value={!!user && user.first_name}
              placeholder="first name"
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              required="required"
            />

            <input
              type="text"
              name="user[surname]"
              value={!!user && user.surname}
              placeholder="surname"
              onChange={(e) => setUser({ ...user, surname: e.target.value })}
              required="required"
            />

            <input
              type="number"
              name="user[dob]"
              value={!!user && user.dob}
              placeholder="birth year (e.g. 1994)"
              onChange={(e) => setUser({ ...user, dob: e.target.value })}
            />

            <Dropdown
              label="employment"
              options={[
                { value: "full-time" },
                { value: "part-time" },
                { value: "student" },
              ]}
              value={user.employment}
              onChange={handleEmploymentChange}
              required="required"
            />

            <input
              type="number"
              name="user[income]"
              value={!!user && user.income}
              placeholder="income"
              onChange={(e) => setUser({ ...user, income: e.target.value })}
              required="required"
            />

            <input
              type="number"
              name="user[house_number]"
              value={!!user && user.house_number}
              placeholder="house number"
              onChange={(e) =>
                setUser({ ...user, house_number: e.target.value })
              }
              required="required"
            />

            <input
              type="text"
              name="user[postcode]"
              value={!!user && user.postcode}
              placeholder="postcode"
              onChange={(e) => setUser({ ...user, postcode: e.target.value })}
              required="required"
            />

            <input type="submit" name="Submit" />
          </form>
        </section>
        <section className="cards">
          {block
            ? buildCards(data)
            : "Fill out the form to find out which cards are avaliable to you"}
        </section>
      </div>
    </div>
  );
}

export default App;
