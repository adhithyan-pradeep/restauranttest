import React, { useState } from 'react';
import { menuItems } from '../data/menuItems';
import { Filter } from 'lucide-react';


const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Starters', 'Mains', 'Desserts'];

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-surface pt-24 pb-16">
            {/* Header */}
            <div className="container text-center mb-12">

                <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Discover Our Flavors</span>
                <h1 className="mb-6">Our Menu</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our curated selection of traditional Kerala dishes, prepared with authentic spices and love.
                </p>

            </div>

            {/* Filter */}
            <div className="container mb-24">

                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeCategory === category
                                ? 'bg-gold text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                } `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

            </div>

            {/* Menu Grid */}
            <div className="container">
                <div className="grid grid-3">
                    {filteredItems.map((item, index) => (

                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-800">
                                    ₹{item.price}
                                </div>
                                {item.isVegetarian && (
                                    <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold border border-green-200">
                                        VEG
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-heading font-bold text-gray-900">{item.name}</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                                <button className="w-full btn btn-outline py-2 text-sm">
                                    Add to Order
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
