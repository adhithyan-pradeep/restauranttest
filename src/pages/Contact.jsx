import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';


const Contact = () => {
    return (
        <div className="min-h-screen bg-surface pt-24 pb-16">
            <div className="container">
                <div className="text-center mb-12">

                    <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Get in Touch</span>
                    <h1 className="mb-6">Contact Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Visit us, give us a call, or drop us an email. We're here to serve you.
                    </p>

                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="h-full">

                        <div className="bg-white p-8 rounded-lg shadow-md h-full">
                            <h2 className="text-2xl font-bold mb-6">Restaurant Info</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold mb-1">Address</h3>
                                        <p className="text-gray-600">Kunnamkulam, Thrissur, Kerala - 680503</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="text-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold mb-1">Phone</h3>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                        <p className="text-gray-600">+91 484 2345678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="text-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold mb-1">Email</h3>
                                        <p className="text-gray-600">hello@kl10restaurant.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="text-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold mb-1">Opening Hours</h3>
                                        <p className="text-gray-600">Mon - Sun: 11:00 AM - 11:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Map Placeholder */}
                    <div className="h-full">

                        <div className="bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden group min-h-[300px] h-full">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Map Location"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
                            />
                            <div className="relative z-10 bg-white/90 px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                                <MapPin className="text-red-500" size={20} />
                                <span className="font-bold text-dark">View on Google Maps</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
