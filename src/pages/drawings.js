import React from "react";
import DrawingsListing from "../features/drawings-product-listing/index.js";

import data from "../data/drawings.json";

export default function Drawings(props) {
  return (
    <div>
      <DrawingsListing drawings={data.drawings} />
    </div>
  );
}
