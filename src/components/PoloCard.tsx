import React from "react";
import { motion } from "framer-motion";
import type { Polo } from "../types";

interface PoloCardProps {
  polo: Polo;
  onSelect: (polo: Polo) => void;
}

export const PoloCard: React.FC<PoloCardProps> = ({ polo, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={polo.img}
          alt={polo.nom}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{polo.nom}</h3>
        {/* <p className="text-gray-600 mt-2">{polo.description}</p> */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">
            {polo.prix} FCFA
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(polo)}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Précommander
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
