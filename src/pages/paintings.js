import React from "react";
import PaintingsListing from "../features/paintings-product-listing/index.js";

import data from "../data/paintings.json";

export default function Paintings(props) {
  return (
    <div>
      <PaintingsListing paintings={data.paintings} />
    </div>
  );
}
