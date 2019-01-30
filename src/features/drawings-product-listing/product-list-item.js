import React from "react";

export default function DrawingListItem(props) {
  return (
    <div className="product-list-item">
      <h3>{props.drawing.name}</h3>
      <img
        height={100}
        width={100}
        alt={props.drawing.name}
        src={`photos/drawings/${props.drawing.image}`}
      />
      <div>{props.drawing.description}</div>
    </div>
  );
}
