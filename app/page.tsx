export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-primary">stripe</div>
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-primary">Products</a>
            <a href="#" className="hover:text-primary">Solutions</a>
            <a href="#" className="hover:text-primary">Developers</a>
            <a href="#" className="hover:text-primary">Resources</a>
            <a href="#" className="hover:text-primary">Pricing</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm hover:text-primary">Sign in</button>
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700">Contact sales</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-sm border border-gray-200">
            <span className="text-sm">Sessions 2026 · Early-bird registration now open</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-secondary leading-tight mb-8">
          Financial infrastructure<br />
          to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">grow your revenue</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, and build a more profitable business.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 mb-20">
          <button className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800">Start now</button>
          <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50">Contact sales</button>
        </div>

        {/* Payment Card Demo */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Abstraction Magazine</div>
                    <div className="text-xs text-gray-600">CA$19 per month</div>
                  </div>
                </div>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">Pay</button>
              </div>
              <div className="text-center text-sm text-gray-500 mb-4">Or pay with card</div>
              <div className="space-y-3">
                <input type="text" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200" />
                <div className="flex space-x-2">
                  <input type="text" placeholder="Card information" className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200" />
                </div>
                <div className="flex space-x-2">
                  <input type="text" placeholder="MM / YY" className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200" />
                  <input type="text" placeholder="CVC" className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200" />
                </div>
                <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200">
                  <option>Canada</option>
                </select>
                <input type="text" placeholder="Postcode" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-secondary text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">Millions</div>
            <div className="text-gray-400">of businesses</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">$1T+</div>
            <div className="text-gray-400">processed annually</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">135+</div>
            <div className="text-gray-400">currencies supported</div>
          </div>
        </div>
      </div>
    </main>
  );
}
