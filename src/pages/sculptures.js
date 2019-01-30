import React from "react";
import ProductListing from "../features/sculptures-product-listing/index.js";

import data from "../data/sculptures.json";

export default function Sculptures(props) {
  return (
    <div>
      <ProductListing products={data.products} />
    </div>
  );
}
