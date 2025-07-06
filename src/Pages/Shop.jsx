import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Store Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1280px] mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain p-4"
            />
            <div className="px-4 pb-4 flex flex-col justify-between flex-grow">
              <h2 className="text-md font-semibold text-gray-800 mb-2">
                {product.title.length > 50
                  ? product.title.slice(0, 50) + "..."
                  : product.title}
              </h2>
              <p className="text-blue-600 font-bold text-lg mb-4">
                ${product.price}
              </p>
              <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
