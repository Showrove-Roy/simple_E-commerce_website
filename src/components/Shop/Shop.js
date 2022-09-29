import React, { useEffect, useState } from "react";
import { addCartToDB } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);


  const [cart, setCart] = useState([]);
  
  const addToCartHandel = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
    addCartToDB(product.id);

  };
  return (
    <div className='shop-container'>
      <div className='product-container'>
              {
                  products.map((product) => (
                      <Product
                          key={product.id}
                      product={product}
                      clickHandel={addToCartHandel}
                    >                        
                      </Product>
                  ))
              }
      </div>
      <div className="cart-container">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
