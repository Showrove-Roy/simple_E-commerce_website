import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { clearCart, removeFromCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  // Clear all item from cart
  const clearCartHandel = () => {
    setCart([]);
    clearCart();
  };
  const handelRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromCart(id);
  };
  return (
    <div className='shop-container'>
      <div className='order-container'>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handelRemoveItem={handelRemoveItem}></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h1 style={{ marginTop: "50px", marginLeft: "150px" }}>
            No Items selected! &nbsp; &nbsp; Please go to the{" "}
            <Link to='/'>SHOP</Link>
          </h1>
        )}
      </div>
      <div className='cart-container'>
        <Cart clearCartHandel={clearCartHandel} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
