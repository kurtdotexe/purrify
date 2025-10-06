import { Recycle, Leaf, DollarSign, Package } from 'lucide-react';

export function RefillSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
            Sustainable Refill System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your favorite Purrify pen forever with our eco-friendly refill packs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Benefits */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Refills?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">80% Less Plastic Waste</h4>
                  <p className="text-gray-600">Each refill pack eliminates the need for a new container, dramatically reducing plastic waste.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-xl">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">50% Cost Savings</h4>
                  <p className="text-gray-600">Refill packs cost half the price of a new pen, making it budget-friendly for students.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-xl">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Biodegradable Formula</h4>
                  <p className="text-gray-600">Our cleaning formula breaks down naturally, protecting waterways and soil.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-xl">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy Refilling Process</h4>
                  <p className="text-gray-600">Simple twist-off cap makes refilling quick and mess-free in under 30 seconds.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Refill showcase */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Refill Pack Options</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Single Refill</span>
                  <span className="text-teal-600 font-bold">$6</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">3-Pack Bundle</span>
                  <span className="text-teal-600 font-bold">$15 <span className="text-sm text-gray-500">($5 each)</span></span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">6-Month Supply</span>
                  <span className="text-teal-600 font-bold">$25 <span className="text-sm text-gray-500">($4.17 each)</span></span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Mix & Match Scents</span>
                  <span className="text-green-600 font-bold">Available</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 mb-2">💡 Pro Tip</p>
                <p className="text-sm font-medium">Subscribe for monthly refills and save an additional 15%</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How to refill */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">How to Refill Your Purrify Pen</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2">Twist Off Cap</h4>
              <p className="text-sm text-gray-600">Gently twist the cat cap counter-clockwise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2">Pour Refill</h4>
              <p className="text-sm text-gray-600">Empty the refill pack into the container</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2">Replace Cap</h4>
              <p className="text-sm text-gray-600">Twist the cap back on until secure</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold mb-2">Ready to Go!</h4>
              <p className="text-sm text-gray-600">Your Purrify pen is ready for action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}