import React from "react";

const ProductItem = (props) => {
  return (
    <div className="one-item">
      <img src={props.product.image}></img>
      <p>{props.product.name}</p>
      <p>{props.product.price} </p>
    </div>
  );
};

export default ProductItem;
