import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { PreorderModal } from "./components/PreorderModal";
import { LandingPage } from "./components/LandingPage";
import { OrderHistory } from "./components/OrderHistory";

import { Team } from "./components/Team";
import type { Polo, CartItem } from "./types";
import Cart from "./components/Cart";
import { PoloItems } from "./PoloItems";

function App() {
  const [selectedPolo, setSelectedPolo] = useState<Polo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (
    color: string,
    size: string,
    quantity: number,
    customerInfo: { name: string; email: string; phone: string }
  ) => {
    if (selectedPolo) {
      setCart([
        ...cart,
        {
          polo: selectedPolo,
          color,
          size,
          quantity,
          customerInfo,
        },
      ]);
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/** navbar */}
        <Header onCartClick={() => setIsCartOpen(true)} />

        <Routes>
          {/* Page d'accueil */}
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <LandingPage />
                <main className="container mx-auto px-4 py-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Notre Collection
                    </h2>
                    <p className="text-xl text-gray-600">
                      Découvrez nos polos de luxe et précommandez dès maintenant
                    </p>
                  </motion.div>

                  {/** les polos */}
                  <PoloItems
                    onSelect={(polo) => {
                      setSelectedPolo(polo);
                      setIsModalOpen(true);
                    }}
                  />
                </main>
              </motion.div>
            }
          />

          {/* Page Historique */}
          <Route
            path="/history"
            element={
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}>
                <OrderHistory orders={cart} />
              </motion.div>
            }
          />

          {/* Page Équipe */}
          <Route
            path="/team"
            element={
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}>
                <Team />
              </motion.div>
            }
          />
        </Routes>

        {/* Modal de précommande */}
        {selectedPolo && (
          <PreorderModal
            polo={selectedPolo}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* Panier */}
        <AnimatePresence>
          {isCartOpen && (
            <Cart cart={cart} onClick={() => setIsCartOpen((prev) => !prev)} />
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
