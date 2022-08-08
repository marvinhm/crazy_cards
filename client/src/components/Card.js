import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function Card(props) {

  const [data, setData] = useState(null);

  // const getData = () => {
  //   setTimeout(() => {
  //     setData(props.data);
  //   }, 2000);
  // }

  // useEffect(() => {
  //   getData();
  // })




    return (
      <div className="Card">
        <h1>{props.data ? props.data.title : "title"}</h1>
        <div className="field apr">
          <p className="label">label</p><p className="value">value</p>
        </div>
        <div className="field btod">
          <p className="field label">label</p><p className="value">value</p>
        </div>
        <div className="field pod">
        <p className="label">label</p><p className="value">value</p>
        </div>
        <div className="field credit">
          <p className="label">label</p><p className="value">value</p>
        </div>
      </div>
    );

}
Card.propTypes = {
  title: PropTypes.string,
  first_name: PropTypes.string,
  surname: PropTypes.number,
  dob: PropTypes.string,
  employment: PropTypes.string,
  income: PropTypes.number,
  house_number: PropTypes.string,
  postode: PropTypes.string
};

export default Card;