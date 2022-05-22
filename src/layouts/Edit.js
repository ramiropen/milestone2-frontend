import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Edit() {
  let id = useLocation().pathname.substring(6); // employee's mongoDB id

  // useState
  const [item, setItem] = useState({
    product: "",
    quantity: "",
    description: "",
    price: "",
  });

  // useeffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:7777/items/" + id);
      const myItem = await response.json();
      setItem(myItem);
    };
  
    fetchData();
  });
  
  // functions
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:7777/items/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: item.product,
        quantity: item.quantity,
        description: item.description,
        price: item.price,
      }),
    });
  };

  // jsx
  return (
    <div>
      <h1>Edit Product</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "250px" }}
      >
        <input
          type='text'
          placeholder='product'
          value={item.product}
          onChange={(e) => setItem({ ...item, product: e.target.value })}
        />
        <input
          type='text'
          placeholder='quantity'
          value={item.quantity}
          onChange={(e) => setItem({ ...item, quantity: e.target.value })}
        />
        <input
          type='text'
          placeholder='description'
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
        />
        <input
          type='text'
          placeholder='price'
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
        />
        <input type='submit' value='Edit Product' />
      </form>
      <Link to='/'>Return to Inventory Page</Link>
    </div>
  );
}
