import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import Card from './Card';

import { getCart } from './cartHelpers';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {[...items].length} items</h2>
        <hr />
        {items.map((product, idx) => (
          <Card key={idx} product={product}></Card>
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to='/shop'>Continue shopping</Link>
    </h2>
  );
  return (
    <Layout
      title='Shopping Cart'
      description='Manage your cart items. Add remove, checkout or continue shopping.'
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-6'>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>

        <div className='col-6'>
          <p>Show checkout options/shipping adress/total/update quantity</p>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;