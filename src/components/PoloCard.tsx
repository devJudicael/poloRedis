import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
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

        {/* Exclusivité */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center shadow-md">
          <Star className="w-4 h-4 mr-1" />
          <span className="text-xs font-semibold">Exclusivité</span>
        </div>
      </div>
      <div className="p-4">
        <section className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{polo.nom}</h3>
          <div className=" bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center shadow-md">
            <Star className="w-4 h-4 mr-1" />
            <span className="text-xs font-semibold">Exclusivité</span>
          </div>
        </section>
        {/* <p className="text-gray-600 mt-2">{polo.description}</p> */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">
            {polo.prix} FCFA
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(polo)}
            className="px-4 py-2 bg-[#1e7394] text-white rounded-lg hover:bg-gray-800 transition-colors">
            Précommander
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
