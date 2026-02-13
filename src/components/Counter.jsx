import React, { useState, useEffect } from 'react';

const Counter = ({ startDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date() - +new Date(startDate);
            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
                    days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 365),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            setTimeLeft(timeLeft);
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [startDate]);

    return (
        <div className="flex flex-wrap justify-center gap-4 text-center mt-8">
            {Object.keys(timeLeft).map((interval) => (
                <div key={interval} className="flex flex-col items-center bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 min-w-[80px]">
                    <span className="text-3xl font-bold text-pink-600">
                        {timeLeft[interval] || 0}
                    </span>
                    <span className="text-sm uppercase text-pink-800 font-semibold tracking-wider">
                        {interval}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Counter;
