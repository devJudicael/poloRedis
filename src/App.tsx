import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { PreorderModal } from "./components/PreorderModal";
import { LandingPage } from "./components/LandingPage";
import useSnackStore from "./store/snack";
import SnackNotif from "./components/ui/SnackNotif";
import { Team } from "./components/Team";
import type { Polo } from "./types";

import { PoloItems } from "./PoloItems";

import usePolosStore from "./store/client";

function App() {
  const [selectedPolo, setSelectedPolo] = useState<Polo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { message, severity } = useSnackStore();

  const { fetchPolos } = usePolosStore();

  // Fetch les polos au montage du composant
  useEffect(() => {
    fetchPolos();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {message !== "" && <SnackNotif severity={severity} message={message} />}
        {/** navbar */}
        <Header />

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
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
