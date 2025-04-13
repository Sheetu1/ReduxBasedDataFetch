import React, { useState, useEffect } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full min-h-screen px-8 py-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[150px] h-[200px] object-contain mb-4"
            />
            <h4 className="text-sm font-semibold text-center mb-2 text-gray-800 dark:text-gray-100 line-clamp-2">
              {item.title}
            </h4>
            <h5 className="text-lg font-bold text-blue-600 dark:text-blue-300 mb-2">
              ₹{item.price}
            </h5>
            <button className="mt-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
