import React from "react";

function Context(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.condition}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">{props.status}</h6> */}
          <p className="card-text">
            {props.status} {props.unit}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Context;
