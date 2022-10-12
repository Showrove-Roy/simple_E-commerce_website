import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { name, price, quantity, shipping, img } = product;
  return (
    <div className='orderItem'>
      <div className='img'>
        <img src={img} alt='' />
      </div>
      <div className='item_body'>
        <div className='details'>
          <p>{name}</p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
        </div>
        <div className='btn-Delete'>
          <button>
            <FontAwesomeIcon
              style={{ height: "25px" }}
              icon={faTrashCan}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
