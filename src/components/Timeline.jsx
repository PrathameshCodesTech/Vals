import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Plane, Home, Star, Camera, Smile, Volume2, VolumeX } from 'lucide-react';

// Import assets
import img1 from '../assets/WhatsApp Image 2026-02-13 at 7.13.21 PM.jpeg';
import img2 from '../assets/WhatsApp Image 2026-02-13 at 7.13.22 PM.jpeg';
import img3 from '../assets/WhatsApp Image 2026-02-13 at 7.13.23 PM.jpeg';
import img4 from '../assets/WhatsApp Image 2026-02-13 at 7.13.24 PM.jpeg';
import img5 from '../assets/WhatsApp Image 2026-02-13 at 7.13.25 PM (1).jpeg';
import img6 from '../assets/WhatsApp Image 2026-02-13 at 7.13.25 PM.jpeg';
import img7 from '../assets/WhatsApp Image 2026-02-13 at 7.13.29 PM.jpeg';
import img8 from '../assets/WhatsApp Image 2026-02-13 at 7.13.30 PM.jpeg';
import img9 from '../assets/WhatsApp Image 2026-02-13 at 7.13.32 PM.jpeg';
import img10 from '../assets/WhatsApp Image 2026-02-13 at 7.35.14 PM (1).jpeg';

import vid1 from '../assets/WhatsApp Video 2026-02-13 at 7.13.22 PM.mp4';
import vid2 from '../assets/WhatsApp Video 2026-02-13 at 7.13.28 PM.mp4';
import vid3 from '../assets/WhatsApp Video 2026-02-13 at 7.13.31 PM (1).mp4';
import vid4 from '../assets/WhatsApp Video 2026-02-13 at 7.13.32 PM.mp4';
import vid5 from '../assets/WhatsApp Video 2026-02-13 at 7.13.33 PM.mp4';

const events = [
    {
        title: 'Beautiful Moments',
        description: 'All the cute photos of you that I adore.',
        icon: <Camera className="w-6 h-6 text-white" />,
        type: 'image',
        images: [img1, img2, img3]
    },
    {
        title: 'Just Us',
        description: 'Simple moments captured by me, but they mean everything.',
        icon: <Heart className="w-6 h-6 text-white" />,
        type: 'video',
        videoSrc: vid1
    },
    {
        title: 'Silly & Fun Times',
        description: 'Just us being us, having fun and making time fly.',
        icon: <Plane className="w-6 h-6 text-white" />,
        type: 'image',
        images: [img4, img5, img6, img7]
    },
    {
        title: 'Laughter & Joy',
        description: 'Your smile is my favorite thing in the world.',
        icon: <Smile className="w-6 h-6 text-white" />,
        type: 'video',
        videoSrc: vid2
    },
    {
        title: 'Sweet Memories',
        description: 'Sweet memories and beautiful sunsets.',
        icon: <Star className="w-6 h-6 text-white" />,
        type: 'image',
        images: [img8, img9, img10]
    },
    {
        title: 'Making Memories',
        description: 'Every second with you is a gift.',
        icon: <Coffee className="w-6 h-6 text-white" />,
        type: 'video',
        videoSrc: vid3
    },
    {
        title: 'Forever & Always',
        description: 'Looking forward to creating many more memories with you.',
        icon: <Home className="w-6 h-6 text-white" />,
        type: 'video',
        videoSrc: vid5
    }
];

const VideoPlayer = ({ src }) => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = React.useRef(null);

    const toggleMute = (e) => {
        e.stopPropagation(); // prevent card click
        setIsMuted(!isMuted);
    };

    return (
        <div className="relative w-full h-full group">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover rounded-lg"
            >
                <source src={src} type="video/mp4" />
                Your browser does not support video.
            </video>

            <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
            >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
        </div>
    );
};


const MediaCarousel = ({ event }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll logic for images
    useEffect(() => {
        if (event.type === 'image' && event.images && event.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % event.images.length);
            }, 3000); // Faster Image change (3s)

            return () => clearInterval(interval);
        }
    }, [event]);

    if (event.type === 'video') {
        return (
            <div className="overflow-hidden rounded-lg mb-4 h-64 md:h-80 shadow-md bg-black relative">
                <VideoPlayer src={event.videoSrc} />
            </div>
        );
    }

    // Default to image carousel
    if (event.type === 'image' && event.images) {
        return (
            <div className="overflow-hidden rounded-lg mb-4 h-64 md:h-80 shadow-md bg-gray-200 relative group">
                {event.images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: idx === currentIndex ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={img}
                            alt={event.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                ))}

                {/* Dots indicator */}
                {event.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                        {event.images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return null;
}

const TimelineItem = ({ event, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between w-full mb-16 ${isLeft ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="hidden md:block w-full md:w-5/12"></div>

            <div className="z-20 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg border-4 border-white mb-6 md:mb-0 transform hover:scale-110 transition-transform">
                {event.icon}
            </div>

            <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full md:w-5/12 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-t-4 border-pink-500 md:mt-0 ${isLeft ? 'md:text-right text-center' : 'md:text-left text-center'}`}
            >
                <MediaCarousel event={event} />

                <h3 className="text-3xl font-bold text-gray-800 mb-2 font-display">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body text-lg">{event.description}</p>
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
