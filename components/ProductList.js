import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductList = () => {
  const [products, setProducts] = useState([]);

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
    // add to cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="bg-sky-500 w-full p-4">
      <h1 className="text-center text-white text-4xl font-bold underline mb-8">
        Hot Deals
      </h1>
      <div className="flex flex-wrap justify-center -mx-4">
        {products.map((product) => (
          <div key={product.id} className="w-1/3 md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl  text-sky-500 font-semibold mb-2">{product.name}</h3>
              <div className="relative w-40 h-40 mx-auto mb-4">
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
                className="block w-full mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
