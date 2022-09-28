import React, { useEffect, useState } from "react";
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

  const addToCartHandel = (id) => {
    console.log(id);
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
      <div>order</div>
    </div>
  );
};

export default Shop;
