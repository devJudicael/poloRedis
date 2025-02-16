import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, History, Users, Shirt } from "lucide-react";

// Définir le type des props
interface HeaderProps {
  onCartClick: () => void; // Fonction sans argument qui ne retourne rien
}

// Appliquer le typage au composant
export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4">
            {/* <Menu className="h-6 w-6 text-gray-600" /> */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Polo Redis
            </h1>
          </Link>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Shirt className="h-5 w-5" />
              <span className="hidden sm:inline">Acceuil</span>
            </Link>

            <Link
              to="/history"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <History className="h-5 w-5" />
              <span className="hidden sm:inline">Historique</span>
            </Link>

            <Link
              to="/team"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Users className="h-5 w-5" />
              <span className="hidden sm:inline">Équipe</span>
            </Link>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
