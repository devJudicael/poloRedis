import React from "react";
import { ShoppingCart, Menu, History, Users } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  onCartClick: () => void;
  onHistoryClick: () => void;
  onTeamClick: () => void;
  onHomeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCartClick,
  onHistoryClick,
  onTeamClick,
  onHomeClick,
}) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo et bouton du menu */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onHomeClick}
            className="flex items-center space-x-2 sm:space-x-4">
            <Menu className="h-6 w-6 text-gray-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Polo Redis
            </h1>
          </motion.button>

          {/* Boutons de navigation */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Bouton Historique */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onHistoryClick}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <History className="h-5 w-5" />
              <span className="hidden sm:inline">Historique</span>
            </motion.button>

            {/* Bouton Équipe */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onTeamClick}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Users className="h-5 w-5" />
              <span className="hidden sm:inline">Équipe</span>
            </motion.button>

            {/* Bouton Panier */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {/* Badge pour le nombre d'éléments dans le panier */}

              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                {2}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
