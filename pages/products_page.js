import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
      console.log(`Product ${productId} added to cart`);
    }
  };

  return (
    <div className="bg-sky-500 w-full p-4">
      <h1 className="text-center text-white text-4xl font-bold underline mb-8">
        Shop your best product
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col bg-white p-2 md:p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-sky-500 font-semibold mb-2">{product.name}</h3>
            <div className="relative w-1/2 h-40 mx-auto mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <span className="text-orange-500 font-bold text-lg">
              ${product.price}
            </span>
            <button
              onClick={() => addToCart(product.id)}
              className="block mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <FaCartPlus style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
