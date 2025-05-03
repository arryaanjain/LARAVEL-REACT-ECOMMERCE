import React from "react";

const dummyCustomers = [
    {
      id: 1,
      name: "Ayaan Jain",
      email: "ayaan@example.com",
      totalOrders: 5,
      totalSpent: 320.5,
    },
    {
      id: 2,
      name: "Neha Kapoor",
      email: "neha@example.com",
      totalOrders: 3,
      totalSpent: 150.0,
    },
    {
      id: 3,
      name: "Ishaan Mehta",
      email: "ishaan@example.com",
      totalOrders: 8,
      totalSpent: 870.2,
    },
  ];
  
  export default function Customers() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-6">Customers</h1>
  
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-300 bg-white">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-4 py-2 font-medium text-gray-700">#</th>
                <th className="px-4 py-2 font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 font-medium text-gray-700">Email</th>
                <th className="px-4 py-2 font-medium text-gray-700">Orders</th>
                <th className="px-4 py-2 font-medium text-gray-700">Total Spent</th>
              </tr>
            </thead>
            <tbody>
              {dummyCustomers.map((cust, i) => (
                <tr key={cust.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{cust.name}</td>
                  <td className="px-4 py-2">{cust.email}</td>
                  <td className="px-4 py-2">{cust.totalOrders}</td>
                  <td className="px-4 py-2">${cust.totalSpent.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  