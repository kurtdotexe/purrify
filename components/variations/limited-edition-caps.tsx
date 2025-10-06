'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

const limitedEditionCaps = [
  {
    name: 'Classic Whiskers',
    description: 'Our signature cat design with adorable whiskers',
    color: 'bg-gradient-to-br from-orange-400 to-amber-500',
    emoji: '🐱',
    limited: false
  },
  {
    name: 'Sleeping Kitty',
    description: 'Peaceful cat with closed eyes - perfect for calm vibes',
    color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    emoji: '😺',
    limited: true
  },
  {
    name: 'Sparkle Paws',
    description: 'Glittery paw print design that catches the light',
    color: 'bg-gradient-to-br from-pink-400 to-purple-500',
    emoji: '✨',
    limited: true
  },
  {
    name: 'Heart Ears',
    description: 'Cat ears shaped like hearts - adorably unique',
    color: 'bg-gradient-to-br from-rose-400 to-pink-500',
    emoji: '💖',
    limited: true
  },
  {
    name: 'Midnight Shadow',
    description: 'Sleek black cat silhouette for a mysterious look',
    color: 'bg-gradient-to-br from-gray-700 to-gray-900',
    emoji: '🌙',
    limited: false
  },
  {
    name: 'Rainbow Whiskers',
    description: 'Multi-colored whiskers for the bold and playful',
    color: 'bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-400',
    emoji: '🌈',
    limited: true
  }
];

export function LimitedEditionCaps() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % limitedEditionCaps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + limitedEditionCaps.length) % limitedEditionCaps.length);
  };

  const currentCap = limitedEditionCaps[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
            Limited Edition "Anik-Anik" Caps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handcrafted cat-shaped caps that make each Purrify pen a unique collectible
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className={`${currentCap.color} p-12 flex items-center justify-center relative`}>
                {currentCap.limited && (
                  <div className="absolute top-4 right-4 bg-white text-teal-600 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Limited</span>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-8xl mb-4 sparkle-animation">
                    {currentCap.emoji}
                  </div>
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto backdrop-blur-sm flex items-center justify-center">
                    <div className="text-white text-6xl">🐱</div>
                  </div>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentCap.name}</h3>
                <p className="text-gray-600 text-lg mb-6">{currentCap.description}</p>

                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-teal-600">Handcrafted Design:</span> Each cap is carefully
                    designed by our student artists to add personality to your Purrify pen.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    {currentIndex + 1} of {limitedEditionCaps.length}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Previous cap"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Next cap"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {limitedEditionCaps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Limited edition caps are only available while supplies last
          </p>
          <Link href="/order">
            <button className="btn-primary">
              Order Your Favorite Cap Design
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
