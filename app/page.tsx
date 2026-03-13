export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-700 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Jenny's Peruvian Food</h1>
          <a 
            href="tel:6474102827"
            className="bg-white text-red-700 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
          >
            Order Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-red-900 to-red-700">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514326640560-7d063f2ff7ec?w=1200&q=80"
            alt="Peruvian Food"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start text-white">
          <h2 className="text-6xl font-bold mb-4">Authentic Peruvian Cuisine</h2>
          <p className="text-2xl mb-8">in Mississauga</p>
          <p className="text-xl mb-8 max-w-2xl">Experience the rich flavors of Peru with our traditional homemade dishes</p>
          <a 
            href="tel:6474102827"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Call to Order: (647) 410-2827
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">Our Menu</h2>
          <p className="text-center text-xl text-gray-600 mb-16">Traditional Peruvian dishes made with love</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ceviche */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80"
                alt="Ceviche"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Ceviche</h3>
                <p className="text-gray-600">Fresh fish marinated in lime juice with onions, cilantro, and ají peppers</p>
              </div>
            </div>

            {/* Lomo Saltado */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&q=80"
                alt="Lomo Saltado"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Lomo Saltado</h3>
                <p className="text-gray-600">Stir-fried beef with tomatoes, onions, and French fries served with rice</p>
              </div>
            </div>

            {/* Ají de Gallina */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80"
                alt="Ají de Gallina"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Ají de Gallina</h3>
                <p className="text-gray-600">Shredded chicken in a creamy, spicy yellow pepper sauce</p>
              </div>
            </div>

            {/* Arroz con Pollo */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1633964913295-ceb43826ab66?w=600&q=80"
                alt="Arroz con Pollo"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Arroz con Pollo</h3>
                <p className="text-gray-600">Peruvian-style chicken and rice with cilantro and vegetables</p>
              </div>
            </div>

            {/* Anticuchos */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
                alt="Anticuchos"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Anticuchos</h3>
                <p className="text-gray-600">Grilled beef heart skewers marinated in ají panca and spices</p>
              </div>
            </div>

            {/* Causa Limeña */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80"
                alt="Causa Limeña"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Causa Limeña</h3>
                <p className="text-gray-600">Layered potato dish with chicken, avocado, and mayonnaise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">About Jenny's</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Welcome to Jenny's Peruvian Food! We bring you authentic Peruvian flavors right here in Mississauga. 
            Every dish is prepared with traditional recipes and fresh ingredients, just like home. 
            From our famous ceviche to our hearty lomo saltado, we guarantee an unforgettable culinary experience.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
            alt="Peruvian cuisine"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <a href="tel:6474102827" className="hover:text-yellow-300 transition-colors">
                    (647) 410-2827
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">👩‍🍳</span>
                  <span>Jenny - Owner & Chef</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span>Mississauga, Ontario</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Hours</h3>
              <div className="space-y-3 text-lg">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">11:00 AM - 9:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">12:00 PM - 10:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">12:00 PM - 8:00 PM</span>
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="tel:6474102827"
                  className="block text-center bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  Call to Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">© 2024 Jenny's Peruvian Food - Mississauga</p>
          <p className="text-gray-400 mt-2">Bringing authentic Peruvian flavors to your table</p>
        </div>
      </footer>
    </div>
  );
}
