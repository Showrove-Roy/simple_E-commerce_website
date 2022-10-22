import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addCartToDB,
  clearCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const { products } = useLoaderData();

  const [cart, setCart] = useState([]);

  // Clear all item from cart
  const clearCartHandel = () => {
    setCart([]);
    clearCart();
  };

  const addToCartHandel = (selectedProduct) => {
    let newCart = [];
    let exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      let rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addCartToDB(selectedProduct.id);
  };

  // get shopping cart from local storage
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            clickHandel={addToCartHandel}></Product>
        ))}
      </div>
      <div className='cart-container'>
        <Cart clearCartHandel={clearCartHandel} cart={cart}>
          <Link to='/order'>
            <button className='btn-review-order'>
              Review Order
              <FontAwesomeIcon
                style={{ marginLeft: "8px" }}
                icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
