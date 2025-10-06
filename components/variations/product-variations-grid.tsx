'use client';

import { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import Link from 'next/link';

const variations = [
  {
    name: 'Fresh Mint Spark',
    color: 'from-green-400 to-mint-400',
    capColor: 'bg-green-500',
    scent: ['Fresh Mint', 'Eucalyptus', 'Cool Breeze'],
    vibe: 'Energizing and refreshing, perfect for morning classes',
    emoji: '🌿',
    popular: true
  },
  {
    name: 'Lavender Calm',
    color: 'from-purple-400 to-pink-400',
    capColor: 'bg-purple-500',
    scent: ['French Lavender', 'Vanilla', 'Soft Musk'],
    vibe: 'Soothing and relaxing, ideal for study sessions',
    emoji: '💜',
    popular: false
  },
  {
    name: 'Citrus Pop',
    color: 'from-orange-400 to-yellow-400',
    capColor: 'bg-orange-500',
    scent: ['Orange Zest', 'Lemon', 'Grapefruit'],
    vibe: 'Bright and uplifting, brings sunshine to any day',
    emoji: '🍊',
    popular: true
  },
  {
    name: 'Ocean Breeze',
    color: 'from-blue-400 to-cyan-400',
    capColor: 'bg-blue-500',
    scent: ['Sea Salt', 'Fresh Air', 'Clean Cotton'],
    vibe: 'Clean and crisp, like a walk by the ocean',
    emoji: '🌊',
    popular: false
  },
  {
    name: 'Cherry Blossom',
    color: 'from-pink-400 to-rose-400',
    capColor: 'bg-pink-500',
    scent: ['Cherry Blossom', 'Light Floral', 'Soft Powder'],
    vibe: 'Delicate and feminine, inspired by spring gardens',
    emoji: '🌸',
    popular: false
  },
  {
    name: 'Vanilla Dream',
    color: 'from-amber-400 to-yellow-300',
    capColor: 'bg-amber-500',
    scent: ['Madagascar Vanilla', 'Warm Caramel', 'Cozy Comfort'],
    vibe: 'Warm and comforting, like your favorite sweater',
    emoji: '🍰',
    popular: true
  }
];

export function ProductVariationsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
            Choose Your Purr-fect Scent
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Six delightful variations, each with its own personality and signature scent blend
          </p>
          <div className="flex items-center justify-center space-x-2 text-amber-500">
            <Star className="h-5 w-5 fill-current" />
            <span className="text-gray-600 font-medium">Most Popular</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {variations.map((variation, index) => (
            <div
              key={index}
              className="group relative card-hover cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Popular badge */}
              {variation.popular && (
                <div className="absolute -top-2 -right-2 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-current" />
                  <span>Popular</span>
                </div>
              )}
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                {/* Product visual */}
                <div className={`h-48 bg-gradient-to-br ${variation.color} relative flex items-center justify-center`}>
                  <div className="text-6xl mb-4 transform transition-transform group-hover:scale-110">
                    {variation.emoji}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className={`w-8 h-8 ${variation.capColor} rounded-full shadow-lg`}></div>
                  </div>
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-2">
                        <Heart className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Product info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{variation.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Scent Notes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {variation.scent.map((note, noteIndex) => (
                        <span
                          key={noteIndex}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm italic">{variation.vibe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Can't decide? Try our sample pack with mini versions of all 6 scents!
          </p>
          <Link href="/order">
            <button className="btn-primary">
              Order Sample Pack - PHP 600
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}