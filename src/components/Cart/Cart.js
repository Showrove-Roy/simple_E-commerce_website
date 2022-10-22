import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCartHandel, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  let tax = (total * 0.1).toFixed(2);
  let grandTotal = total + shipping + +tax;

  return (
    <div className='cart'>
      <h5>Order Summary</h5>
      <p>Selected Items : {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping cost: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h6>Grand Total: ${grandTotal}</h6>

      <button onClick={clearCartHandel} className='btn-clear-cart'>
        Clear Cart
        <FontAwesomeIcon
          style={{ marginLeft: "8px" }}
          icon={faTrash}></FontAwesomeIcon>
      </button>
      <br />
      {children}
    </div>
  );
};

export default Cart;
