import React from "react";
import { connect } from "react-redux";

function sort(items) {
  return items.sort((a, b) => a.id - b.id);
}
function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => props.AddToCart(item)}>+</button>
            </td>
            <td>
              <button onClick={() => props.RemoveFromCart(item)}>-</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    AddToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    RemoveFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
