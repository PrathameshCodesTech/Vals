import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Plane, Home, Star } from 'lucide-react';

const events = [
    {
        date: 'February 14, 2022',
        title: 'The Day It All Started',
        description: 'The day I met my favorite person. Who knew a simple "hello" would lead to this?',
        icon: <Heart className="w-6 h-6 text-white" />,
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600',
    },
    {
        date: 'March 1, 2022',
        title: 'First Date',
        description: 'We went to that little coffee shop. I was so nervous, but your smile made everything perfect.',
        icon: <Coffee className="w-6 h-6 text-white" />,
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600',
    },
    {
        date: 'August 15, 2022',
        title: 'Our First Trip',
        description: 'Exploring new places with you is my favorite adventure. Those sunsets were magical.',
        icon: <Plane className="w-6 h-6 text-white" />,
        image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=600',
    },
    {
        date: 'December 25, 2022',
        title: 'First Christmas Together',
        description: 'The best gift I could ever ask for is just being with you.',
        icon: <Star className="w-6 h-6 text-white" />,
        image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=600',
    },
    {
        date: 'Today',
        title: 'Still Falling for You',
        description: 'Every day with you is a blessing. I love you more than words can say.',
        icon: <Home className="w-6 h-6 text-white" />,
        image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600',
    },
];

const TimelineItem = ({ event, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between w-full mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="hidden md:block w-full md:w-5/12"></div>

            <div className="z-20 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg border-4 border-white mb-6 md:mb-0">
                {event.icon}
            </div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-full md:w-5/12 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-t-4 border-pink-500 md:mt-0 ${isLeft ? 'md:text-right text-center' : 'md:text-left text-center'}`}
            >
                <div className="overflow-hidden rounded-lg mb-4 h-48 shadow-md">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-pink-600 font-semibold tracking-wider block mb-1 uppercase text-sm">{event.date}</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">{event.description}</p>
            </motion.div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <div className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
            {/* Floating Hearts Background (CSS or SVG) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-200"
                        initial={{
                            top: "100%",
                            left: `${Math.random() * 100}%`,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            top: "-10%",
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5],
                            rotate: [0, 180]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        <Heart size={Math.random() * 30 + 10} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-16 font-display"
            >
                Our Journey Together
            </motion.h2>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-red-300 to-pink-500 rounded-full hidden md:block"></div>

                {events.map((event, index) => (
                    <TimelineItem key={index} event={event} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
