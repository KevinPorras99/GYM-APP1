import React from 'react';
import { ShoppingCart, Star, Tag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Resistance Bands Set',
    price: 29.99,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800',
    category: 'Equipment',
  },
  {
    id: 2,
    name: 'Smart Fitness Tracker Pro',
    price: 99.99,
    rating: 4.9,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Premium Yoga Mat',
    price: 49.99,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=800',
    category: 'Yoga',
  },
];

export default function Marketplace() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Fitness Marketplace</h1>
        <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Cart (0)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 px-2 py-1 bg-blue-600 text-white text-sm font-medium rounded">
                {product.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-600">
                    {product.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Tag className="w-5 h-5 text-gray-400 mr-1" />
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Free Shipping</h2>
          <p className="text-blue-100">On orders over $50</p>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Member Discount</h2>
          <p className="text-purple-100">Save 10% with annual membership</p>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
          <p className="text-green-100">Expert assistance available</p>
        </div>
      </div>
    </div>
  );
}