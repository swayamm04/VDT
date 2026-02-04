import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BannerSlider = () => {
    const [index, setIndex] = useState(0);

    // 3 distinct banner backgrounds (Professional Business/Tech Images)
    // Using objects to support image loading if needed, but strings are fine for bg-image style
    const banners = [
        "bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center",
        "bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center",
        "bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')] bg-cover bg-center"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 5000); // 5 seconds per banner
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full">
            <AnimatePresence initial={false}>
                <motion.div
                    key={index}
                    className={`absolute inset-0 w-full h-full ${banners[index]}`}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                </motion.div>
            </AnimatePresence>

            {/* Darker transparency overlay for "slightly dark theme" - MOVED OUTSIDE to prevent flickering */}
            <div className="absolute inset-0 bg-slate-950/70" />

            {/* Persistent soft orbs for depth overlay */}
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]" />
        </div>
    );
};
