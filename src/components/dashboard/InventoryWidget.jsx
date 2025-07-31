import React from 'react';
import { Package, AlertTriangle, Clock } from 'lucide-react';

const InventoryWidget = ({ data }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-medium text-stone-900">Inventory Overview</h3>
      <Package className="w-6 h-6 text-stone-600" />
    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="text-center p-3 bg-stone-50 rounded-lg">
        <AlertTriangle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
        <p className="text-xl font-medium text-stone-900">{data.lowStock}</p>
        <p className="text-xs text-stone-500">Low Stock</p>
      </div>
      <div className="text-center p-3 bg-stone-50 rounded-lg">
        <Clock className="w-6 h-6 text-red-500 mx-auto mb-2" />
        <p className="text-xl font-medium text-stone-900">{data.expiringSoon}</p>
        <p className="text-xs text-stone-500">Expiring Soon</p>
      </div>
    </div>

    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-stone-600">Total Items</span>
        <span className="font-medium text-stone-900">{data.totalItems}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-stone-600">Total Value</span>
        <span className="font-medium text-stone-900">₹{data.value.toLocaleString()}</span>
      </div>
    </div>

    <div>
      <h4 className="font-medium text-sm text-stone-600 mb-3">Top Products</h4>
      <div className="space-y-2">
        {data.topProducts.map((product, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-stone-50 rounded">
            <div>
              <span className="font-medium text-stone-900">{product.name}</span>
              <p className="text-xs text-stone-500">Stock: {product.stock}</p>
            </div>
            <div className="text-right">
              <span className="font-medium text-stone-900">₹{product.revenue.toLocaleString()}</span>
              <p className="text-xs text-stone-500">{product.sold} sold</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default InventoryWidget;
