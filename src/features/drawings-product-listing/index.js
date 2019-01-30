import React from "react";
import DrawingListItem from "./product-list-item";

export default function DrawingsListing(props) {
  return (
    <div className="product-listing">
      {props.drawings.map(drawing => (
        <DrawingListItem drawing={drawing} key={drawing.id} />
      ))}
    </div>
  );
}
