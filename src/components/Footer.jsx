import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 text-center">
            <p className="flex items-center justify-center gap-2 font-body text-lg">
                Made with <Heart className="w-5 h-5 text-red-500 fill-current" /> for My Valentine
            </p>
            <p className="text-sm mt-2 opacity-70">Forever & Always</p>
        </footer>
    );
};

export default Footer;
