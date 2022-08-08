import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function Card(props) {

  const [data, setData] = useState(null);

  // const getData = () => {
  //   setTimeout(() => {
  //     setData(props.data);
  //   }, 2000);
  // }

  useEffect(() => {

  })




    return (
      <div className="Card">
        <h1>{props.title}</h1>
        <div className="field apr">
        <p className="label">{props.apr.label}</p><p className="value">{props.apr.value}</p>
      </div>
      <div className="field btod">
        <p className="field label">{props.btod.label}</p><p className="value">{props.btod.value}</p>
      </div>
      <div className="field pod">
      <p className="label">{props.pod.label}</p><p className="value">{props.pod.value}</p>
      </div>
      <div className="field credit">
        <p className="label">{props.ca.label}</p><p className="value">{props.ca.value}</p>
      </div>
       
      </div>
    );

}

export default Card;