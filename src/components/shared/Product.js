import React from "react";
import {Link} from "react-router-dom";

// Functions
import {shorten} from "../helper/functions";

function Product({productData}) {
  return (
    <div>
      <img src={productData.image} alt="product" style={{width: "200px"}} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
