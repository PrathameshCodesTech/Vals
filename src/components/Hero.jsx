import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const Hero = ({ startDate }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 text-center px-4">

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <Heart className="w-24 h-24 text-red-500 fill-current drop-shadow-lg mx-auto mb-6 animate-pulse" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-display text-pink-600 mb-4"
            >
                Happy Valentine's Day
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xl md:text-2xl text-gray-700 font-body mb-8"
            >
                Every second with you is precious.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <Counter startDate={startDate} />
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10"
            >
                <p className="text-gray-500 text-sm">Scroll Down ↓</p>
            </motion.div>
        </div>
    );
};

export default Hero;
