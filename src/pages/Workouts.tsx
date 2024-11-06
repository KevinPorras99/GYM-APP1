import React from 'react';
import { Calendar, Filter, ChevronRight } from 'lucide-react';

const workouts = [
  {
    id: 1,
    title: 'Full Body HIIT',
    duration: '45 min',
    difficulty: 'Intermediate',
    calories: 450,
    category: 'HIIT',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Core Strength',
    duration: '30 min',
    difficulty: 'Beginner',
    calories: 250,
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Power Yoga Flow',
    duration: '60 min',
    difficulty: 'Advanced',
    calories: 350,
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Workouts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Workout Library</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Workout
        </button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {['All', 'HIIT', 'Strength', 'Cardio', 'Yoga', 'Pilates'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              category === 'All'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
          <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700">
            <option>Sort by</option>
            <option>Duration</option>
            <option>Difficulty</option>
            <option>Calories</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <div key={workout.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
            <div className="relative h-48">
              <img
                src={workout.image}
                alt={workout.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">{workout.title}</h3>
                <p className="text-sm text-gray-200">{workout.category}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {workout.difficulty}
                  </span>
                  <span className="text-sm text-gray-600">{workout.duration}</span>
                </div>
                <span className="text-sm text-gray-600">{workout.calories} cal</span>
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Start Workout
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}