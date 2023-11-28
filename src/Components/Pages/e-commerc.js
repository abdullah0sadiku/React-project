import React, { useEffect , useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';


const Ecommerc = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]);
  
  const userlogin = localStorage.getItem('users' );

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then(res => setProducts(res.data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const addToCart = (product) => {
    if (userlogin === null) {
      alert('You have to sign up first');
    } else {
      
      setCart((prevCart) => {
        const newCart = [...prevCart, { ...product, addedBy: userlogin }];
        localStorage.setItem('cart', JSON.stringify(newCart));
  
        alert(`${product.title} was successfully added to the cart`);
        
        console.log([product]);
        console.log(`Product "${product.title}" added to cart!`);
  
        return newCart; 
      });
    }
  };
  


  return (

    <div className="Store-con-Container">
     
      <nav className='bett'>
          <Navbar/>
      </nav>

      <div className="Products">
        <div className="Navi">
          <h1>SN</h1>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>

         
        </div>
      
        <div className='Proo'>      
              {products.map((product ,i) => (
                <div className='cc' key={i}>

                  <div className="card-body">
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="card-img-top"
                    />
                      <h5 className="card-title">{product.description}</h5>

                    <div className='ss'>
                      <button className='btn-outline'  onClick={ () => addToCart(product)}>Shto ne shport</button>
                      <button className='btn-outline-price'>{product.price} $</button>
                      
                      <br/>

                      
                    </div>
                  </div>
                </div>
              ))}
        </div>  
      </div>
    </div>
 
  );
};

export default Ecommerc;
