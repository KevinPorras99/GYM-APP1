import React from 'react';
import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';

const gyms = [
  {
    id: 1,
    name: 'FitnessFusion Elite Gym',
    address: '123 Fitness Street, New York, NY 10001',
    phone: '(555) 123-4567',
    rating: 4.8,
    reviews: 128,
    hours: '24/7',
    distance: '0.8',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    amenities: ['Cardio Zone', 'Free Weights', 'Personal Training', 'Sauna'],
  },
  {
    id: 2,
    name: 'PowerHouse Gym',
    address: '456 Strength Avenue, New York, NY 10002',
    phone: '(555) 234-5678',
    rating: 4.6,
    reviews: 95,
    hours: '5:00 AM - 11:00 PM',
    distance: '1.2',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800',
    amenities: ['CrossFit Area', 'Swimming Pool', 'Group Classes', 'Spa'],
  },
];

export default function GymLocator() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Find a Gym Near You</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Navigation className="w-4 h-4 mr-2" />
          Use Current Location
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Enter your location"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Amenities</option>
                <option>Cardio Zone</option>
                <option>Free Weights</option>
                <option>Swimming Pool</option>
                <option>Group Classes</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {gyms.map((gym) => (
              <div key={gym.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover"
                      src={gym.image}
                      alt={gym.name}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">{gym.name}</h2>
                        <div className="flex items-center mt-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium text-gray-600">
                            {gym.rating}
                          </span>
                          <span className="mx-1 text-gray-500">·</span>
                          <span className="text-sm text-gray-500">{gym.reviews} reviews</span>
                        </div>
                      </div>
                      <span className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {gym.distance} miles
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-start text-gray-600">
                        <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{gym.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 mr-2" />
                        <span>{gym.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{gym.hours}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {gym.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block bg-gray-200 rounded-xl" style={{ height: '600px' }}>
          {/* Map placeholder - In a real application, integrate with a mapping service */}
          <div className="h-full flex items-center justify-center text-gray-500">
            Map View
          </div>
        </div>
      </div>
    </div>
  );
}