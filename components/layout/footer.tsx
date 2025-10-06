import { Heart, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-green-400 fill-current" />
              <span className="text-2xl font-bold">Purrify</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Make It Clean, Make It Purr
            </p>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Eco-friendly, portable stain remover by Pawlish Co. — a student-led cooperative from Naga City Science High School
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                Facebook
              </a>
              <span>•</span>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/product-info" className="text-gray-300 hover:text-green-400 transition-colors">Product Info</a></li>
              <li><a href="/variations" className="text-gray-300 hover:text-green-400 transition-colors">Variations</a></li>
              <li><a href="/how-to-use" className="text-gray-300 hover:text-green-400 transition-colors">How to Use</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-gray-300">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">pawlish.co.purrify@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Peñafrancia Avenue, Naga City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Pawlish Co. | Purrify | Naga City Science High School | &copy; 2025</p>
          <p className="mt-2 text-sm text-gray-500">Made with care by STEM students</p>
        </div>
      </div>
    </footer>
  );
}