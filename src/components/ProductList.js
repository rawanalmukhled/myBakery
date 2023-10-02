import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productList = products.map((product) => {
    return <ProductItem product={product} />;
  });
  return <div className="design">{productList}</div>;
};

export default ProductList;
