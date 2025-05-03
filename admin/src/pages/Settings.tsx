import React from "react";

export default function Settings() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
  
        <div className="grid gap-4 max-w-xl">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-medium mb-2">Store Info</h2>
            <p className="text-sm text-gray-600">Edit your store name, address, and branding settings here.</p>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-medium mb-2">Payment</h2>
            <p className="text-sm text-gray-600">Manage payment gateways, keys, and currency preferences.</p>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-medium mb-2">Security</h2>
            <p className="text-sm text-gray-600">Change admin password, enable 2FA, and manage sessions.</p>
          </div>
        </div>
      </div>
    );
  }
  