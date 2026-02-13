import React, { useState, useEffect, useRef } from 'react';
import { Heart, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

// Import music
import musicFile from '../assets/vals.mpeg';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const LOOP_START = 50;
    const LOOP_END = 100; // 1:40 is 100 seconds

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Set initial time
        audio.currentTime = LOOP_START;

        const handleTimeUpdate = () => {
            if (audio.currentTime >= LOOP_END) {
                audio.currentTime = LOOP_START;
            }
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);

        // Attempt autoplay on first user interaction
        const enableAudio = () => {
            if (audio.paused) {
                audio.play()
                    .then(() => setIsPlaying(true))
                    .catch(e => console.log("Autoplay prevented:", e));
            }
            // Remove listener after first interaction
            window.removeEventListener('click', enableAudio);
            window.removeEventListener('touchstart', enableAudio);
        };

        window.addEventListener('click', enableAudio);
        window.addEventListener('touchstart', enableAudio);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            window.removeEventListener('click', enableAudio);
            window.removeEventListener('touchstart', enableAudio);
        };
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().catch(e => console.log("Play failed:", e));
            setIsPlaying(true);
        }
    };

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

            {/* Audio Element */}
            <audio ref={audioRef} preload="auto">
                <source src={musicFile} type="audio/mpeg" />
            </audio>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleMusic}
                    className={`p-2 rounded-full transition ${isPlaying ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/50' : 'bg-pink-100 text-pink-600 hover:bg-pink-200'}`}
                >
                    {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </button>
                <span className="text-sm font-body text-pink-900/80 bg-pink-100/50 px-3 py-1 rounded-full border border-pink-200">
                    14 Feb 2026
                </span>
            </div>
        </motion.nav>
    );
};

export default Header;
