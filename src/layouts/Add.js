import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Add() {
  // useState
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // functions
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:7777/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: product,
        quantity: quantity,
        description: description,
        price: price,
      }),
    });
  };

  // jsx
  return (
    <div>
      <h1>Add Product</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "250px" }}
      >
        <input
          type='text'
          placeholder='product'
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type='text'       
          placeholder='quantity'
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type='text'       
          placeholder='description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='text'
          placeholder='price'
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type='submit' value='Add Product' />
      </form>
      <Link to='/'>Return to Inventory</Link>
    </div>
  );
}
