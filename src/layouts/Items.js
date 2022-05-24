import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Items({}) {
  // useState
  const [items, setItems] = useState([]);

  // useEffect
  useEffect(() => getItems(), []);

  // functions
  const getItems = () => {
    fetch("http://localhost:7777/items")
      .then((response) => response.json())
      .then((data) => setItems(data)
      );
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:7777/items/${id}`, {
      method: "DELETE",
    });
  };

  const table = items.map((item, index) => (
    <tr key={index} className='row'>
      <td className='column'>{item.product}</td>
      <td className='column'> {item.quantity}</td>
      <td className='column'>{item.description}</td>
      <td className='column'>${item.price}</td>
      <td>
        <Button variant="warning">
          <Link to={`/edit/${item._id}`}>EDIT</Link>
        </Button>

        <Button variant='danger'
          onClick={() => {
            deleteItem(item._id);
            window.location.reload(true);
          }}
        >
          DELETE
        </Button>
      </td>
    </tr>
  ));

  // jsx
  return (
    <div>
      <h1>Store Inventory</h1>
      <table>
        <thead>
          <tr className='table'>
            <th className='column'></th> 
            <th className='column'>Product </th>
            <th className='column'>Quantity</th>
            <th className='column'>Description</th>
            <th className='column'>Price</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
      <br/>
      <a href="/add">
      <Button variant="primary"> ADD NEW item </Button>
      </a>
    </div>
  );
}
