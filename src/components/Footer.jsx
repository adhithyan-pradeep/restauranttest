import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-6">
                            KL10 <span className="text-gold">RESTAURANT</span>
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Authentic flavors of God's Own Country, served with love and tradition in a modern setting.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gold"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gold">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="/menu" className="hover:text-white">Our Menu</a></li>
                            <li><a href="/party" className="hover:text-white">Party Orders</a></li>
                            <li><a href="/mess" className="hover:text-white">Mess Registration</a></li>
                            <li><a href="/loyalty" className="hover:text-white">Loyalty Program</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gold">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="mt-1 text-gold" />
                                <span>Kunnamkulam, Thrissur,<br />Kerala, India 680503</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-gold" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-gold" />
                                <span>hello@kl10restaurant.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kerala Spice Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
