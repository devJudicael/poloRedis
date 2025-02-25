import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Polo } from "../types";

interface PoloCardProps {
  polo: Polo;
  onSelect: (polo: Polo) => void;
}

export const PoloCard: React.FC<PoloCardProps> = ({ polo, onSelect }) => {
  const originalPrice = 9000; // Prix d'origine barré

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
      <div className="relative h-64">
        <img
          src={polo.img}
          alt={polo.nom}
          className="w-full h-full object-cover"
        />

        {/* Badge Exclusivité (en haut à droite) */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-3 py-1 rounded-full flex items-center shadow-md">
          <Star className="w-4 h-4 mr-1" />
          <span className="text-xs font-semibold">Prix exclusif</span>
        </div>
      </div>

      <div className="p-4">
        {/* Nom du produit et deuxième mention du prix exclusif */}
        <section className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{polo.nom}</h3>
          {/* <div className="bg-yellow-400 text-white px-3 py-1 rounded-full flex items-center shadow-md">
            <Star className="w-4 h-4 mr-1" />
            <span className="text-xs font-semibold">Prix exclusif</span>
          </div> */}
        </section>

        {/* Prix */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-500 line-through text-sm">
            {originalPrice} FCFA
          </span>
          <span className="text-2xl font-bold text-[#1e7394]">
            {polo.prix} FCFA
          </span>
        </div>

        {/* Bouton de précommande */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(polo)}
          className="w-full px-4 py-2 bg-[#1e7394] text-white rounded-lg hover:bg-[#155f7a] transition-colors">
          Précommander
        </motion.button>
      </div>
    </motion.div>
  );
};
