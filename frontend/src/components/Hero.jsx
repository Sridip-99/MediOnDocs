import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="text-center py-16 px-4 hero-bg text-white rounded-xl shadow-lg">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-4"
                >
                Upload & Manage Medical Documents
            </motion.h2>


            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg max-w-2xl mx-auto text-gray-200"
                >
                A modern medical document storage portal crafted for patients & healthcare users.
            </motion.p>
        </section>
    );
}