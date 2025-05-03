import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Box,
  ShoppingCart,
  Users,
  Settings,
  Menu,
} from "lucide-react";

const links = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Products", icon: Box, path: "/products" },
  { label: "Orders", icon: ShoppingCart, path: "/orders" },
  { label: "Customers", icon: Users, path: "/customers" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <h1 className="text-lg font-bold whitespace-nowrap overflow-hidden transition-all duration-300">
          {collapsed ? "A" : "Admin Panel"}
        </h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {links.map(({ label, icon: Icon, path }) => (
          <NavLink
            to={path}
            key={label}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-all duration-200 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <Icon className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="whitespace-nowrap">{label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
