import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Utensils, Calendar, Award } from 'lucide-react';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container text-center">

          <span className="block text-gold font-bold tracking-[0.2em] uppercase mb-4">Welcome to God's Own Country</span>
          <h1 className="mb-6 leading-tight">
            Authentic Flavors of <br />
            <span className="text-gold">Kerala Tradition</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Experience the rich culinary heritage of Kerala, from spicy fish curries to comforting stews, prepared with love and served with elegance.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/menu" className="btn btn-primary">
              Explore Menu <ArrowRight size={18} />
            </Link>
            <Link to="/party" className="btn btn-white-outline">
              Book a Table
            </Link>
          </div>

        </div>
      </section>

      {/* Highlights Section */}
      <section className="section bg-surface">
        <div className="container">

          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>


          <div className="grid grid-3">
            {/* Feature 1 */}

            <div className="bg-white p-8 rounded shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                <Utensils size={32} />
              </div>
              <h3 className="mb-4">Authentic Recipes</h3>
              <p className="text-gray-600">
                Our chefs use traditional recipes passed down through generations to bring you the true taste of Kerala.
              </p>
            </div>


            {/* Feature 2 */}

            <div className="bg-white p-8 rounded shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                <Award size={32} />
              </div>
              <h3 className="mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                We source the finest spices and freshest ingredients directly from local farms to ensure quality.
              </p>
            </div>


            {/* Feature 3 */}

            <div className="bg-white p-8 rounded shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                <Calendar size={32} />
              </div>
              <h3 className="mb-4">Events & Parties</h3>
              <p className="text-gray-600">
                Host your special occasions with us. We offer customized menus and party packages for all events.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Dish Preview (New Section) */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">

              <img
                src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Signature Dish"
                className="w-full h-[500px] object-cover rounded shadow-lg"
              />

            </div>
            <div className="flex-1">

              <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Signature Dish</span>
              <h2 className="mb-6">Karimeen Pollichathu</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Pearl spot fish marinated in a rich blend of spices, wrapped in a banana leaf, and grilled to perfection. A delicacy that captures the essence of the backwaters.
              </p>
              <Link to="/menu" className="btn btn-outline">
                View Full Menu
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
