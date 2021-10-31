import React, {useContext} from "react";
import {Link} from "react-router-dom";

// Functions
import {shorten, isInCart, quantinyCount} from "../helper/functions";

// Context
import {CartContext} from "./../../context/CartContextProvider";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Styles
import styles from "./Product.module.css";

function Product({productData}) {
  const {state, dispatch} = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={productData.image} alt="product" style={{width: "200px"}} />
      <h3>{shorten(productData.title)}</h3>
      <p>$ {productData.price}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantinyCount(state, productData.id) > 1 && (
            <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>
              -
            </button>
          )}
          {quantinyCount(state, productData.id) === 1 && (
            <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>
              <img src={trashIcon} alt="trash" style={{width: "20px"}} />
            </button>
          )}
          {quantinyCount(state, productData.id) > 0 && <span className={styles.counter} >{quantinyCount(state,productData.id)}</span>}
          {isInCart(state, productData.id) ? (
            <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>
              +
            </button>
          ) : (
            <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add To Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
