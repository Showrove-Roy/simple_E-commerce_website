import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import "./Product.css";

const Product = ({product,clickHandel}) => {
  const { name, price, img, seller, ratings } = product;
  return (
    <div className='product-cart'>
      <img className='product-img' src={img} alt='' />
      <div className='cart-body'>
        <h6 className='product-name'>{name}</h6>
        <p className='price'>Price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button onClick={()=>clickHandel(product)} className='btn-cart'>
        Add to Cart 
        <FontAwesomeIcon style={{marginLeft:'8px'}} icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
