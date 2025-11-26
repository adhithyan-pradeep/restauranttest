import React, { useState } from 'react';
import { Check, MapPin, Truck, Calendar } from 'lucide-react';


const Mess = () => {
    const [pincode, setPincode] = useState('');
    const [checkStatus, setCheckStatus] = useState(null); // 'checking', 'available', 'unavailable'

    const checkDelivery = (e) => {
        e.preventDefault();
        setCheckStatus('checking');
        setTimeout(() => {
            if (pincode.startsWith('68') && pincode.length === 6) {
                setCheckStatus('available');
            } else {
                setCheckStatus('unavailable');
            }
        }, 1000);
    };

    const plans = [
        {
            id: 1,
            name: 'Weekly Plan',
            price: 800,
            features: ['Lunch & Dinner', 'Mon-Sat', 'Veg & Non-Veg Options', 'Free Delivery'],
            recommended: false
        },
        {
            id: 2,
            name: 'Monthly Plan',
            price: 3000,
            features: ['Lunch & Dinner', 'Mon-Sat', 'Veg & Non-Veg Options', 'Free Delivery', 'Weekend Special Included'],
            recommended: true
        }
    ];

    return (
        <div className="min-h-screen bg-surface pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">

                    <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Daily Meals</span>
                    <h1 className="mb-6">Mess Registration</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Homely meals delivered to your doorstep. Choose a plan that suits your schedule.
                    </p>

                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Subscription Plans */}
                    <div className="grid gap-6">
                        {plans.map((plan, index) => (

                            <div className={`bg-white p-8 rounded-lg shadow-md border-2 transition-all duration-300 relative ${plan.recommended ? 'border-gold transform scale-105 z-10' : 'border-transparent hover:border-gray-200'}`}>
                                {plan.recommended && (
                                    <div className="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                        Best Value
                                    </div>
                                )}
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                                    <div className="text-right">
                                        <span className="text-3xl font-bold text-gold">₹{plan.price}</span>
                                        <span className="text-gray-500 text-sm block">/ person</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-600">
                                            <Check size={18} className="text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`}>
                                    Subscribe Now
                                </button>
                            </div>

                        ))}
                    </div>
                </div>

                {/* Delivery Checker */}
                <div className="lg:w-full">

                    <div className="bg-dark text-white p-8 rounded-lg shadow-lg sticky top-24">
                        <div className="flex items-center gap-3 mb-6 text-gold">
                            <Truck size={32} />
                            <h2 className="text-2xl m-0">Check Availability</h2>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Enter your pincode to see if we deliver to your area. We currently serve major areas in Thrissur.
                        </p>

                        <form onSubmit={checkDelivery} className="mb-6">
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        maxLength="6"
                                        value={pincode}
                                        onChange={(e) => {
                                            setPincode(e.target.value.replace(/\D/g, ''));
                                            setCheckStatus(null);
                                        }}
                                        className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
                                        placeholder="Enter Pincode (e.g. 682001)"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary px-6">
                                    Check
                                </button>
                            </div>
                        </form>

                        {checkStatus === 'checking' && (
                            <div className="text-gold flex items-center gap-2 animate-pulse">
                                <Truck size={20} /> Checking availability...
                            </div>
                        )}

                        {checkStatus === 'available' && (
                            <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-lg flex items-center gap-3">
                                <Check size={24} />
                                <div>
                                    <p className="font-bold">Good news!</p>
                                    <p className="text-sm">We deliver to your area.</p>
                                </div>
                            </div>
                        )}

                        {checkStatus === 'unavailable' && (
                            <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center gap-3">
                                <MapPin size={24} />
                                <div>
                                    <p className="font-bold">Sorry!</p>
                                    <p className="text-sm">We don't deliver here yet.</p>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <div className="flex items-start gap-4">
                                <Calendar className="text-gold shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold mb-1">Flexible Scheduling</h4>
                                    <p className="text-sm text-gray-400">
                                        Pause or cancel your subscription anytime with 24 hours notice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mess;
