import React from "react";

function Card(props) {
  return (
    <div className="Card">
      <h4 className="card-title">{props.title}</h4>
      <div className="card-contents">
        <div className="field apr">
          <div className="label-container">
            <p className="label">{props.apr.label}</p>
          </div>
          <div className="value-container">
            <p className="value">{props.apr.value}</p>
          </div>
        </div>
        <div className="field btod">
          <div className="label-container">
            <p className="label">{props.btod.label}</p>
          </div>
          <div className="value-container">
            <p className="value">{props.btod.value} months</p>
          </div>
        </div>
        <div className="field pod">
          <div className="label-container">
            <p className="label">{props.pod.label}</p>
          </div>
          <div className="value-container">
            <p className="value">{props.pod.value} months</p>
          </div>
        </div>
        <div className="field ca">
          <div className="label-container">
            <p className="label">{props.ca.label}</p>
          </div>
          <div className="value-container">
            <p className="value">£{props.ca.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
