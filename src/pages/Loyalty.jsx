import React from 'react';
import { Gift, Award, Clock, ChevronRight, Star } from 'lucide-react';


const Loyalty = () => {
    const userPoints = 1250;
    const currentTier = 'Gold Member';
    const nextTierPoints = 2000;

    const rewards = [
        { id: 1, title: 'Free Dessert', points: 500, image: 'https://images.unsplash.com/photo-1551024601-564d6d6744f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: '20% Off Bill', points: 1000, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Free Main Course', points: 1500, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    const history = [
        { id: 1, action: 'Dine-in Order', date: '22 Nov 2023', points: '+150' },
        { id: 2, action: 'Reward Redeemed', date: '15 Nov 2023', points: '-500' },
        { id: 3, action: 'Party Order', date: '01 Nov 2023', points: '+450' },
    ];

    return (
        <div className="min-h-screen bg-surface pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">

                    <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Loyalty Program</span>
                    <h1 className="mb-6">My Rewards</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Earn points with every meal and unlock exclusive benefits.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Points Card */}
                    <div className="h-full">

                        <div className="bg-dark text-white p-8 rounded-lg shadow-lg relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Award size={120} />
                            </div>
                            <div className="relative z-10">
                                <p className="text-gold font-bold uppercase tracking-widest mb-2">Current Balance</p>
                                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">{userPoints} <span className="text-2xl text-gray-400">pts</span></h2>
                                <div className="flex items-center gap-2 mb-6">
                                    <Star className="text-gold fill-gold" size={20} />
                                    <span className="font-bold text-lg">{currentTier}</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-2">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Progress to Platinum</span>
                                        <span>{userPoints} / {nextTierPoints}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gold h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${(userPoints / nextTierPoints) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400">Earn {nextTierPoints - userPoints} more points to upgrade.</p>
                            </div>
                        </div>

                    </div>

                    {/* Recent Activity */}
                    <div className="h-full">

                        <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="text-gold" size={24} />
                                <h3 className="text-xl font-bold m-0">Recent Activity</h3>
                            </div>
                            <div className="space-y-4">
                                {history.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <div>
                                            <p className="font-bold text-gray-800">{item.action}</p>
                                            <p className="text-xs text-gray-500">{item.date}</p>
                                        </div>
                                        <span className={`font-bold ${item.points.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                            {item.points}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 text-gold font-bold text-sm hover:underline flex items-center justify-center gap-1">
                                View Full History <ChevronRight size={16} />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Redeem Rewards */}

                <h2 className="text-2xl font-bold mb-6">Redeem Rewards</h2>

                <div className="grid grid-3">
                    {rewards.map((reward, index) => (

                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={reward.image}
                                    alt={reward.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-white flex items-center gap-1">
                                    <Gift size={14} /> {reward.points} pts
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{reward.title}</h3>
                                <button
                                    className={`w-full btn ${userPoints >= reward.points ? 'btn-primary' : 'btn-outline opacity-50 cursor-not-allowed'}`}
                                    disabled={userPoints < reward.points}
                                >
                                    {userPoints >= reward.points ? 'Redeem Now' : 'Insufficient Points'}
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>

    );
};

export default Loyalty;
