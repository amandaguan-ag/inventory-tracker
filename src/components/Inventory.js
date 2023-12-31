import React from "react";

function Inventory(props) {
  return (
    <React.Fragment>
      <h3>
        {props.name} - {props.origin}
      </h3>
      <p>
        Price: <em>${props.price}</em>
      </p>
      <p>Roast: {props.roast}</p>
      <p>Remaining: {props.remaining} pounds</p>
      <hr />
    </React.Fragment>
  );
}

export default Inventory;
