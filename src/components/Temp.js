import React from "react";

export default function Temp(props) {
  return (
    <div>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.temp} °C</h5>
          <p className="card-text">
             {props.time}
             <p>Status : {props.condition}</p>
          </p>
        </div>
      </div>
    </div>
  );
}
