import React, {useContext} from "react";

// Context
import {CartContext} from "../../context/CartContextProvider";

// Functions
import {shorten} from "../helper/functions";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Styles
import styles from "./Cart.module.css";

function Cart(props) {
  const {dispatch} = useContext(CartContext);
  const {image, title, price, quantity} = props.data;
  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="product" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>$ {price}</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button>
        ) : (
          <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}>
            <img src={trashIcon} alt="trash" style={{width: "20px"}} />
          </button>
        )}
        <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
      </div>
    </div>
  );
}

export default Cart;
