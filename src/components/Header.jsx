import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="flex items-center gap-2">
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <Heart className="w-6 h-6 text-red-500 fill-current" />
                </motion.div>
                <span className="font-display text-xl text-pink-600 font-bold">Us</span>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-sm font-body text-pink-900/80 bg-pink-100/50 px-3 py-1 rounded-full border border-pink-200">
                    14 Feb 2026
                </span>
            </div>
        </motion.nav>
    );
};

export default Header;
