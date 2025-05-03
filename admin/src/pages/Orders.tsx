import React from "react";

const dummyOrders = [
    {
      id: "ORD-001",
      customer: "Ayaan Jain",
      date: "2025-05-01",
      total: 129.99,
      status: "Shipped",
    },
    {
      id: "ORD-002",
      customer: "Neha Kapoor",
      date: "2025-04-29",
      total: 89.5,
      status: "Pending",
    },
    {
      id: "ORD-003",
      customer: "Ishaan Mehta",
      date: "2025-04-25",
      total: 220.0,
      status: "Delivered",
    },
  ];
  
  const statusColors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
    Delivered: "bg-green-100 text-green-800",
  };
  
  export default function Orders() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-6">Orders</h1>
  
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-300 bg-white">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-4 py-2 font-medium text-gray-700">Order ID</th>
                <th className="px-4 py-2 font-medium text-gray-700">Customer</th>
                <th className="px-4 py-2 font-medium text-gray-700">Date</th>
                <th className="px-4 py-2 font-medium text-gray-700">Total</th>
                <th className="px-4 py-2 font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.customer}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2">${order.total.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  