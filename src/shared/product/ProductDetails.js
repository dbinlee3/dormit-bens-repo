import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/*
id={id} name={name} image={image} description={description} price={price} stock={stock}

*/

const ProductDetails = (props) => {
  const [count, setCount] = React.useState(1);

  const addToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div className={styles.container}>
      <CloseIcon
        onClick={() => props.onClose(false)}
        className={styles.close}
      />
      <div className={styles.content}>
        <img src={props.image} alt={props.name} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.stock}>{props.stock}</p>
        <p className={styles.description}>{props.description}</p>

        <div className={styles.priceCountContent}>
          <p className={styles.price}>{props.price}</p>

          <ButtonGroup className={styles.quantity}>
            <Button
              style={{
                maxWidth: "35px",
                maxHeight: "35px",
                minWidth: "35px",
                minHeight: "35px",
              }}
              aria-label="reduce"
              variant="text"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <KeyboardArrowDownIcon />
            </Button>

            <div className={styles.countBox}>{count}</div>

            <Button
              style={{
                maxWidth: "35px",
                maxHeight: "35px",
                minWidth: "35px",
                minHeight: "35px",
              }}
              aria-label="increase"
              variant="text"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <KeyboardArrowUpIcon />
            </Button>
          </ButtonGroup>
        </div>

        <button className={styles.addToCartButton} onClick={addToCart}>
          <p className={styles.addToCartText}>Add to Cart </p>
        </button>
      </div>
    </div>
  );
};
export default ProductDetails;
