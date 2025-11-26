import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, LogIn, UserPlus, LogOut, MapPin, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { user, login, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect if already logged in
    useEffect(() => {
        if (user) {
            // If coming from a protected page, go back there. Otherwise stay here (profile view).
            const from = location.state?.from?.pathname;
            if (from) {
                navigate(from, { replace: true });
            }
        }
    }, [user, navigate, location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication
        if (formData.email && formData.password) {
            const userData = {
                name: formData.name || 'Test User',
                email: formData.email,
                joined: new Date().toLocaleDateString()
            };
            login(userData);
        }
    };

    if (user) {
        return (
            <div className="min-h-screen bg-surface pt-24 pb-16">
                <div className="container max-w-4xl">

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-dark p-8 text-white flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                    {user.name ? user.name[0].toUpperCase() : 'U'}
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold mb-1 text-white">{user.name}</h1>
                                    <p className="text-gray-400">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={logout}
                                className="btn btn-outline border-white text-white hover:bg-white hover:text-dark flex items-center gap-2"
                            >
                                <LogOut size={18} /> Logout
                            </button>
                        </div>

                        <div className="p-8 grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-bold mb-6 border-b pb-2">My Profile</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Phone size={20} className="text-gold" />
                                        <span>+91 98765 43210</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPin size={20} className="text-gold" />
                                        <span>Kunnamkulam, Thrissur, Kerala</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold mb-6 border-b pb-2">Recent Orders</h2>
                                <div className="space-y-4">
                                    <div className="bg-surface p-4 rounded-lg">
                                        <div className="flex justify-between mb-1">
                                            <span className="font-bold">Order #1234</span>
                                            <span className="text-green-600 text-sm font-bold">Delivered</span>
                                        </div>
                                        <p className="text-sm text-gray-500">2 items • ₹450</p>
                                    </div>
                                    <div className="bg-surface p-4 rounded-lg">
                                        <div className="flex justify-between mb-1">
                                            <span className="font-bold">Order #1230</span>
                                            <span className="text-green-600 text-sm font-bold">Delivered</span>
                                        </div>
                                        <p className="text-sm text-gray-500">1 item • ₹180</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-surface pt-24 pb-16 flex items-center justify-center">
            <div className="container max-w-md">

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    {/* Toggle Header */}
                    <div className="flex">
                        <button
                            className={`flex-1 py-4 font-bold text-center transition-colors ${isLogin ? 'bg-gold text-white' : 'bg-gray-100 text-gray-500'}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`flex-1 py-4 font-bold text-center transition-colors ${!isLogin ? 'bg-gold text-white' : 'bg-gray-100 text-gray-500'}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Register
                        </button>
                    </div>

                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                            <p className="text-gray-500 text-sm">
                                {isLogin ? 'Enter your credentials to access your account' : 'Join us for exclusive rewards and faster checkout'}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!isLogin && (
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-gold"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            )}

                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-gold"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-gold"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                            </div>

                            <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2 mt-6">
                                {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
                                {isLogin ? 'Login' : 'Create Account'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <a href="#" className="text-sm text-gold hover:underline">Forgot Password?</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
