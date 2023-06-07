import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='flex items-center justify-evenly'>
      {products.map((product) => (
        <div key={product.id} className="">
          <div
            
            className='w-3/7 bg-white text-sky-500 p-8 border-s-white m-2 flex-col'
            
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          <button>Add Cart</button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
