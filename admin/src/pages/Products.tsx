import React from "react";

const dummyProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 79.99,
      stock: 34,
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Footwear",
      price: 49.99,
      stock: 12,
    },
    {
      id: 3,
      name: "Smartwatch",
      category: "Wearables",
      price: 99.99,
      stock: 5,
    },
  ];
  
  export default function Products() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-6">Products</h1>
  
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-300 bg-white">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-4 py-2 font-medium text-gray-700">#</th>
                <th className="px-4 py-2 font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 font-medium text-gray-700">Category</th>
                <th className="px-4 py-2 font-medium text-gray-700">Price</th>
                <th className="px-4 py-2 font-medium text-gray-700">Stock</th>
              </tr>
            </thead>
            <tbody>
              {dummyProducts.map((product, i) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.category}</td>
                  <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  