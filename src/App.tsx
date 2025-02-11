import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { PreorderModal } from "./components/PreorderModal";
import { LandingPage } from "./components/LandingPage";
import { OrderHistory } from "./components/OrderHistory";
import { PoloCard } from "./components/PoloCard";
import { Team } from "./components/Team";
import type { Polo, CartItem } from "./types";

const polos: Polo[] = [
  {
    id: 1,
    name: "Polo Premium Coton",
    price: 5000,
    description: "Polo en coton pima avec finitions élégantes",
    imageUrl:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
    colors: ["#000000", "#FFFFFF", "#87CEEB", "#FFB6C1"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Polo Sport Performance",
    price: 7000,
    description: "Tissu technique respirant pour un confort optimal",
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#000080"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Polo Classic Fit",
    price: 8000,
    description: "Coupe classique intemporelle",
    imageUrl:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    colors: ["#000000", "#FFFFFF", "#008000", "#800080"],
    sizes: ["S", "M", "L", "XL"],
  },
];

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

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {polos.map((polo) => (
                      <PoloCard
                        key={polo.id}
                        polo={polo}
                        onSelect={(polo) => {
                          setSelectedPolo(polo);
                          setIsModalOpen(true);
                        }}
                      />
                    ))}
                  </div>
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
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Panier</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700">
                    Fermer
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center">
                    Votre panier est vide
                  </p>
                ) : (
                  <div className="space-y-4">
                    <div className="max-h-[350px] overflow-y-auto pr-2">
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-semibold">{item.polo.name}</h3>
                            <p className="text-sm text-gray-600">
                              {item.customerInfo.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              Taille: {item.size} | Couleur:{" "}
                              <span
                                style={{ backgroundColor: item.color }}
                                className="h-4 w-4 rounded-full inline-block"></span>
                            </p>
                            <p className="text-sm text-gray-600">
                              Quantité: {item.quantity}
                            </p>
                          </div>
                          <p className="font-bold">
                            {item.polo.price * item.quantity} FCFA
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-xl">
                          {cart.reduce(
                            (total, item) =>
                              total + item.polo.price * item.quantity,
                            0
                          )}
                          FCFA
                        </span>
                      </div>

                      <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                        Finaliser la précommande
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
