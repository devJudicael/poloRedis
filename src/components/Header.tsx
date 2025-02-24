import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Shirt } from "lucide-react";

import iuaredis from "../assets/iuaredis.jpg";
export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <section className="flex items-center gap-3 ">
            <img src={iuaredis} alt="" className="size-10 rounded-full" />
            <Link to="/" className="flex items-center space-x-2 sm:space-x-4">
              <h1 className="text-xl sm:text-2xl font-bold text-[#34b6e8]">
                Polo Redis
              </h1>
            </Link>
          </section>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <NavLink
              to="/"
              className=" flex items-center space-x-2 text-gray-600 hover:text-[#3c86a4]"
              style={({ isActive }) => ({
                color: isActive ? "#34b6e8" : "",
              })}>
              <Shirt className="h-5 w-5" />
              <span className="hidden sm:inline">Acceuil</span>
            </NavLink>

            {/* <Link
              to="/history"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <History className="h-5 w-5" />
              <span className="hidden sm:inline">Historique</span>
            </Link> */}

            <NavLink
              to="/team"
              className=" flex items-center space-x-2 text-gray-600 hover:text-[#3c86a4]"
              style={({ isActive }) => ({
                color: isActive ? "#34b6e8" : "",
              })}>
              <Users className="h-5 w-5" />
              <span className="hidden sm:inline">Équipe</span>
            </NavLink>

            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </motion.button> */}
          </div>
        </div>
      </div>
    </motion.header>
  );
};
