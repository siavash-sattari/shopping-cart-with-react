import React from "react";

// Functions
import {shorten} from "../helper/functions";

function Product({productData}) {
  return (
    <div>
      <img src={productData.image} alt="product" style={{width: "200px"}} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <a href="">Details</a>
        <div>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
