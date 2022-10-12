import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
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
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
