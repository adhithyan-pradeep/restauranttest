import React, { useState } from 'react';
import { ThumbsUp, TrendingUp, Award } from 'lucide-react';


const Vote = () => {
    const [votes, setVotes] = useState([
        { id: 1, name: 'Arabian Mandhi', votes: 1240, image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 2, name: 'Pazhampori-Beef Combo', votes: 980, image: 'https://images.unsplash.com/photo-1606491956689-2ea28c674675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 3, name: 'Thalassery Dum Biriyani', votes: 850, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ]);

    const [hasVoted, setHasVoted] = useState(false);
    const totalVotes = votes.reduce((acc, curr) => acc + curr.votes, 0);

    const handleVote = (id) => {
        if (!hasVoted) {
            setVotes(votes.map(item =>
                item.id === id ? { ...item, votes: item.votes + 1 } : item
            ));
            setHasVoted(true);
        }
    };

    return (
        <div className="min-h-screen bg-surface pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">

                    <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Community Choice</span>
                    <h1 className="mb-6">Vote for Next Month's Special</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Help us decide what to feature on our menu next month. Your voice matters!
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Voting Cards */}
                        <div className="space-y-6">
                            {votes.map((item, index) => (

                                <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 items-center group hover:shadow-lg transition-all duration-300">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-xl mb-1">{item.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <TrendingUp size={16} className="text-green-500" />
                                            <span>Currently {Math.round((item.votes / totalVotes) * 100)}% trending</span>
                                        </div>

                                        {hasVoted ? (
                                            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                                                <div
                                                    className="bg-gold h-full rounded-full transition-all duration-1000"
                                                    style={{ width: `${(item.votes / totalVotes) * 100}%` }}
                                                ></div>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleVote(item.id)}
                                                className="btn btn-outline py-2 px-6 text-sm flex items-center gap-2 hover:bg-gold hover:text-white hover:border-gold"
                                            >
                                                <ThumbsUp size={16} /> Vote This Dish
                                            </button>
                                        )}
                                    </div>
                                    {hasVoted && (
                                        <div className="text-center min-w-[60px]">
                                            <span className="block font-bold text-xl text-gold">{item.votes}</span>
                                            <span className="text-xs text-gray-400">Votes</span>
                                        </div>
                                    )}
                                </div>

                            ))}
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="lg:w-full">

                        <div className="bg-dark text-white p-8 rounded-lg shadow-lg sticky top-24">
                            <div className="flex items-center gap-3 mb-6 text-gold">
                                <Award size={32} />
                                <h2 className="text-2xl m-0">How It Works</h2>
                            </div>
                            <ul className="space-y-6 text-gray-300">
                                <li className="flex gap-4">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold shrink-0">1</span>
                                    <p>Browse the nominated dishes for the upcoming month.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold shrink-0">2</span>
                                    <p>Cast your vote for your favorite. You can only vote once per month.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold shrink-0">3</span>
                                    <p>The winning dish will be featured as the "Chef's Special" with a 15% discount for all of next month!</p>
                                </li>
                            </ul>

                            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                                <p className="text-sm text-center text-gold">
                                    Voting closes on the 28th of this month.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vote;
