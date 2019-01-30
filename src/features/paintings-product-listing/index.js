import React from "react";
import PaintingListItem from "./product-list-item";

export default function PaintingsListing(props) {
  return (
    <div className="product-listing">
      {props.paintings.map(painting => (
        <PaintingListItem painting={painting} key={painting.id} />
      ))}
    </div>
  );
}
