import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const LandingPage: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920)",
          backgroundAttachment: "fixed",
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-center mb-6">
          Style et Code : l'Alliance Parfaite.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-center mb-12 max-w-2xl">
          Une collection de polos Redis stylés conçus pour les informaticiens,
          où luxe et confort s'allient pour sublimer votre quotidien.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}>
          Découvrir la Collection
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity }}
          className="absolute bottom-8">
          <ArrowDown className="h-8 w-8" />
        </motion.div>
      </div>
    </div>
  );
};
