import React, { useState } from 'react';
import { Star, User, MessageSquare, Send } from 'lucide-react';


const Reviews = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Arjun Nair', rating: 5, comment: 'The most authentic Kerala sadhya I have had outside Kerala! The service was impeccable.', date: '2 days ago' },
        { id: 2, name: 'Sarah Jenkins', rating: 4, comment: 'Loved the Appam and Stew. The ambience is very calming and elegant.', date: '1 week ago' },
        { id: 3, name: 'Rahul V.', rating: 5, comment: 'A hidden gem! The Beef Fry is a must-try. Will definitely visit again.', date: '2 weeks ago' },
    ]);

    const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.comment) {
            setReviews([{ id: Date.now(), ...newReview, date: 'Just now' }, ...reviews]);
            setNewReview({ name: '', rating: 5, comment: '' });
        }
    };

    return (
        <div className="min-h-screen bg-surface pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">

                    <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Testimonials</span>
                    <h1 className="mb-6">Customer Reviews</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Read what our guests have to say about their dining experience.
                    </p>

                </div>
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Reviews List */}
                    <div className="lg:col-span-2 space-y-6">
                        {reviews.map((review, index) => (

                            <div className="bg-white p-6 rounded-lg shadow-md flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                    <User className="text-gray-400" size={24} />
                                </div>
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-bold text-gray-900">{review.name}</h3>
                                            <p className="text-xs text-gray-500">{review.date}</p>
                                        </div>
                                        <div className="flex text-gold">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">"{review.comment}"</p>
                                </div>
                            </div>

                        ))}
                    </div>

                    {/* Review Form */}
                    <div className="lg:col-span-1">

                        <div className="bg-white p-8 rounded-lg shadow-lg sticky top-24">
                            <div className="flex items-center gap-3 mb-6 text-gold">
                                <MessageSquare size={24} />
                                <h3 className="text-xl font-bold m-0">Write a Review</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:border-gold"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                                className={`transition-colors ${newReview.rating >= star ? 'text-gold' : 'text-gray-300'}`}
                                            >
                                                <Star size={24} fill={newReview.rating >= star ? "currentColor" : "none"} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Experience</label>
                                    <textarea
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:border-gold h-32 resize-none"
                                        placeholder="Tell us what you liked..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2">
                                    <Send size={18} /> Submit Review
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
