import React, { useState } from 'react';
import { menuItems } from '../data/menuItems';
import { Check, Calculator, Users } from 'lucide-react';


const PartyOrders = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [guestCount, setGuestCount] = useState(50);

    const toggleItem = (id) => {
        setSelectedItems(prev =>
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    const calculateTotal = () => {
        const selectedDishes = menuItems.filter(item => selectedItems.includes(item.id));
        const costPerHead = selectedDishes.reduce((sum, item) => sum + item.price, 0);
        // Applying a bulk discount of 20% for party orders
        const discountedCostPerHead = costPerHead * 0.8;
        return Math.round(discountedCostPerHead * guestCount);
    };

    return (
        <div className="min-h-screen bg-surface pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">

                    <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Celebrate With Us</span>
                    <h1 className="mb-6">Party Orders</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Plan your perfect event menu. Select your dishes, estimate the cost, and let us handle the rest.
                    </p>

                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Menu Selection */}
                    <div className="flex-1">

                        <h2 className="text-2xl mb-6">Select Dishes</h2>
                        <div className="grid gap-4">
                            {menuItems.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => toggleItem(item.id)}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-between ${selectedItems.includes(item.id)
                                        ? 'border-gold bg-white shadow-md'
                                        : 'border-transparent bg-white hover:border-gray-200'
                                        } `}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${selectedItems.includes(item.id) ? 'bg-gold border-gold text-white' : 'border-gray-300'
                                            } `}>
                                            {selectedItems.includes(item.id) && <Check size={14} />}
                                        </div>
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        <div>
                                            <h3 className="font-bold text-gray-900">{item.name}</h3>
                                            <p className="text-sm text-gray-500">₹{item.price} / head</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Cost Estimator */}
                    <div className="lg:w-1/3">

                        <div className="bg-white p-8 rounded-lg shadow-lg sticky top-24">
                            <div className="flex items-center gap-3 mb-6 text-gold">
                                <Calculator size={28} />
                                <h2 className="text-2xl m-0">Estimator</h2>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Number of Guests
                                </label>
                                <div className="flex items-center gap-4 border rounded p-2">
                                    <Users size={20} className="text-gray-400" />
                                    <input
                                        type="number"
                                        min="10"
                                        value={guestCount}
                                        onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                                        className="w-full outline-none font-bold text-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="border-t border-b py-4 mb-6 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Selected Dishes</span>
                                    <span className="font-bold">{selectedItems.length}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Cost Per Head (approx)</span>
                                    <span className="font-bold">
                                        ₹{Math.round(menuItems.filter(i => selectedItems.includes(i.id)).reduce((a, b) => a + b.price, 0) * 0.8)}
                                    </span>
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                    *Includes 20% bulk discount
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-8">
                                <span className="text-gray-600 font-bold">Total Estimate</span>
                                <span className="text-3xl font-heading font-bold text-gold">
                                    ₹{calculateTotal().toLocaleString()}
                                </span>
                            </div>

                            <button className="w-full btn btn-primary">
                                Request Quote
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-4">
                                *Final price may vary based on customization and seasonal availability.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartyOrders;
