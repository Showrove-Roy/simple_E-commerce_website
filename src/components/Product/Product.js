import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, ratings,id } = props.product;
  return (
    <div className='product-cart'>
      <img className='product-img' src={img} alt='' />
      <div className='cart-body'>
        <h6 className='product-name'>{name}</h6>
        <p className='price'>Price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button onClick={()=>props.clickHandel(id)} className='btn-cart'>
        Add to Cart
        <i class='fa-solid fa-cart-plus'></i>
      </button>
    </div>
  );
};

export default Product;
