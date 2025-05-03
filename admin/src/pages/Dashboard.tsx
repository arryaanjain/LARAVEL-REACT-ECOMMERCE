import React from "react";

export default function Dashboard() {
    const stats = [
      { label: "Total Products", value: 128, color: "bg-blue-500" },
      { label: "Orders", value: 245, color: "bg-green-500" },
      { label: "Customers", value: 89, color: "bg-yellow-500" },
      { label: "Revenue", value: "$12,540", color: "bg-purple-500" },
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`p-4 rounded-lg shadow text-white ${stat.color}`}
            >
              <h2 className="text-sm font-medium">{stat.label}</h2>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  