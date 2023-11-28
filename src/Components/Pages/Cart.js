import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { GrClearOption } from "react-icons/gr";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const[orderr, setorder] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  
  const order = () => {
    const cc = localStorage.getItem('cart')
    if (cc == [] ){
      alert(" You're cart its Empty :/ ")
    }else{


    const userr = localStorage.getItem('users');
  
    const Name = prompt('Full Name');
    const Email = prompt('Email');
    const Phone = prompt('Mobile Number');
  
    if (Name && Email && Phone) {
      const orderDetails = {
        name: Name,
        email: Email,
        phone: Phone,
        items: cart, 
        totalPrice: totalPrice,
      };
  
    
      const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
  
     
      const updatedOrders = [...existingOrders, orderDetails];
  
      
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
  
     
      localStorage.removeItem('cart');
  
      alert('Your order has been sent successfully');
    } else {
      alert('Please provide valid information for the order.');
    }
    }

  };

  const calculateTotalPrice = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div>
      <Navbar />

      <div className='cartcon'>
        {cart.map((item, index) => (
          <div className='cc' key={index}>
            <div className="card-body">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="card-img-top"
              />
              <h5 className="card-title">{item.description}</h5>

              <div className='ss'>
                <button className='btn-outline-price'>{item.price} $</button>
                <button onClick={() => removeFromCart(index)} className='btn-danger'>Remove</button>
              </div>
            </div>
          </div>
        ))}
        <div className='checkout'>
          <div className="card-body-chek">
            <h2 className='primary-text'>Total Price: {totalPrice} $</h2>
            <button className='primary-button' onClick={calculateTotalPrice}>
              Checkout
            </button>
            <button className='primary-button' onClick={order}>
              Order
            </button>
            <button onClick={() => removeFromCart()} className='primary-button'> <GrClearOption /></button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Cart;
