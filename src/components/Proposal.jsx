import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const Proposal = () => {
    const [accepted, setAccepted] = useState(false);
    const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

    const moveNoButton = () => {
        // Generate random position relative to current
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setButtonPos({ x, y });
    };

    if (accepted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 relative overflow-hidden">
                <Confetti className="w-full h-full" recycle={true} numberOfPieces={500} />
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="z-10 text-center px-4"
                >
                    <h1 className="text-6xl md:text-8xl font-display text-red-600 mb-8 drop-shadow-md">
                        Yaaay!!! 💖
                    </h1>
                    <p className="text-2xl md:text-3xl text-pink-800 font-body">
                        See you on our Date! 🌹
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="py-20 flex flex-col items-center justify-center bg-white text-center px-4 relative overflow-hidden min-h-[500px]">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-display text-pink-600 mb-12"
            >
                Will you be my Valentine?
            </motion.h2>

            <div className="flex gap-8 items-center justify-center relative w-full h-64">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setAccepted(true)}
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-2xl shadow-xl transition-all z-10"
                >
                    Yes! 💖
                </motion.button>

                <motion.button
                    animate={buttonPos}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-4 px-12 rounded-full text-2xl shadow-xl"
                >
                    No 😢
                </motion.button>
            </div>
        </div>
    );
};

export default Proposal;
