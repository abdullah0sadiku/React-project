import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';

function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div >
        <h2>Orders</h2>
        <ul className='ull'>
          {orders.map((order, index) => (
            <li key={index}>
              <h4>Order #{index + 1}</h4>
              <p>Name: {order.name}</p>
              <p>Email: {order.email}</p>
              <p>Phone: {order.phone}</p>
              
              <p>Items:</p>
              
              <ul>

                {order.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.title} - ${item.price}
                  </li>
                ))}

              </ul>

              <p>Total Price: ${order.totalPrice}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
