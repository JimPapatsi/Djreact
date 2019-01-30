import React from "react";
import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <h4>{props.product.name}</h4>
      <img
        height={100}
        width={100}
        alt={props.product.name}
        src={`photos/sculptures/${props.product.image}`}
        //src={process.env.PUBLIC_URL + '/$ {props.product.image}'}
      />
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
        {props.cartItem ? (
          <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
}
