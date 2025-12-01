import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary-green via-primary-green to-primary-dark text-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-xs sm:text-sm font-semibold text-white/90">🚀 Premium E-Commerce Platform</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-balance px-2">
            Premium Organic Meat & Farm Products<br className="hidden sm:block" /> <span className="sm:hidden"> </span>Delivered to Your Door
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-green-50 max-w-3xl mx-auto leading-relaxed px-2">
            Fast, modern, and trust-focused e-commerce platform. Farm-to-table tracking, freshness-based delivery slots, and real-time transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <Button href="/products" variant="secondary" size="large" className="shadow-2xl w-full sm:w-auto min-w-[140px]">
              View Demo
            </Button>
            <Button href="#features" variant="outline" size="large" className="shadow-xl w-full sm:w-auto min-w-[140px]">
              Explore Features
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-green-100 px-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Certified Organic</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Farm Fresh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Harvest Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-neutral-beige to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-green/10 text-primary-green rounded-full text-sm font-semibold mb-4">
              Real-Time Stock
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">
              Today's Harvest
            </h2>
            <p className="text-lg text-neutral-grey max-w-2xl mx-auto">
              Fresh organic meat, eggs, and farm products harvested today. Real-time stock updates with batch transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Button href="/products" variant="primary" size="large" className="w-full sm:w-auto">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section id="features" className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-3 sm:mb-4 px-2">
              Premium Features Beyond Typical Marketplaces
            </h2>
            <p className="text-base sm:text-lg text-neutral-grey max-w-2xl mx-auto px-2">
              Fast, modern, and trust-focused platform with features that go beyond what typical marketplaces offer
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-light hover:border-primary-green/20 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Farm-to-Table Tracking</h3>
              <p className="text-neutral-grey leading-relaxed">Track your order from farm to your doorstep in real-time with complete transparency</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-light hover:border-primary-green/20 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-green to-primary-dark rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-dark mb-2 sm:mb-3">Freshness-Based Delivery Slots</h3>
              <p className="text-sm sm:text-base text-neutral-grey leading-relaxed">Choose delivery slots based on product freshness to ensure maximum quality</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-light hover:border-primary-green/20 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-green to-primary-dark rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-dark mb-2 sm:mb-3">Farm Videos for Transparency</h3>
              <p className="text-sm sm:text-base text-neutral-grey leading-relaxed">Short farm videos showing how products are raised and harvested with care</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-light hover:border-primary-green/20 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-green to-primary-dark rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-dark mb-2 sm:mb-3">Daily Hygiene Score</h3>
              <p className="text-sm sm:text-base text-neutral-grey leading-relaxed">Transparent daily hygiene ratings for all products ensuring quality and safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-neutral-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-3 sm:mb-4 px-2">
              Complete Platform Features
            </h2>
            <p className="text-base sm:text-lg text-neutral-grey max-w-2xl mx-auto px-2">
              Everything you expect from a top-tier online store, plus innovative features
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-dark mb-2">Nutrition + Batch Clarity</h3>
              <p className="text-xs sm:text-sm text-neutral-grey">Complete nutrition info and batch transparency on every product</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">Weekly Subscriptions</h3>
              <p className="text-sm text-neutral-grey">Set up weekly subscription-based deliveries for convenience</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">Android & iOS Apps</h3>
              <p className="text-sm text-neutral-grey">Full native mobile app support for both platforms</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">UPI/COD Payments</h3>
              <p className="text-sm text-neutral-grey">Multiple payment options including UPI and Cash on Delivery</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">Fast Mobile-First UI</h3>
              <p className="text-sm text-neutral-grey">Lightning-fast, responsive design optimized for mobile devices</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">WhatsApp Notifications</h3>
              <p className="text-sm text-neutral-grey">Automated WhatsApp notifications for orders and updates</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">Admin Dashboard</h3>
              <p className="text-sm text-neutral-grey">Complete admin dashboard for managing orders and inventory</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">Delivery Partner Integration</h3>
              <p className="text-sm text-neutral-grey">Seamless integration with delivery partners for fast shipping</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-neutral-light">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">Under 10 Days Delivery</h3>
              <p className="text-sm text-neutral-grey">Complete platform development and deployment in under 10 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="w-full py-8 sm:py-12 px-4 sm:px-6 bg-neutral-light border-t border-neutral-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-green mb-1 sm:mb-2">&lt;10</div>
              <div className="text-xs sm:text-sm text-neutral-grey">Days Delivery</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-green mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-neutral-grey">Trust-Focused</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-green mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-neutral-grey">Real-Time Tracking</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-green mb-1 sm:mb-2">2</div>
              <div className="text-xs sm:text-sm text-neutral-grey">Mobile Apps</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary-green to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Ready to Build Your Premium E-Commerce Platform?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-green-50 px-2">
            Fast, modern, and trust-focused platform delivered in under 10 days
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button href="/products" variant="secondary" size="large" className="shadow-2xl w-full sm:w-auto min-w-[160px]">
              View Full Demo
            </Button>
            <Button href="mailto:hello@vamsifarms.com" variant="outline" size="large" className="shadow-xl w-full sm:w-auto min-w-[160px]">
              Get in Touch
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 px-2">
            <p className="text-green-100 mb-2 sm:mb-4 text-sm sm:text-base">Built by Project Pilot</p>
            <p className="text-xs sm:text-sm text-green-200">
              Complete platform development • Android & iOS apps • Full backend integration
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
