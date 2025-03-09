import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Polo } from "../types";
import Button from "@mui/material/Button";
import useSnackStore from "../store/snack";
import usePolosStore from "../store/client";

interface PreorderModalProps {
  polo: Polo;
  isOpen: boolean;
  onClose: () => void;
}

export const PreorderModal: React.FC<PreorderModalProps> = ({
  polo,
  isOpen,
  onClose,
}) => {
  // states
  const [selectedSize, setSelectedSize] = useState(polo.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // store
  const { clearSnackMessage, setSnackMessage } = useSnackStore();

  const { sendCommand, loadingPstCmd } = usePolosStore();

  // Fonction de validation du formulaire
  const validateForm = (): boolean => {
    const { name, email, phone } = customerInfo;

    // Validation du nom
    if (name.trim() === "") {
      return false; // Le nom est vide
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider un email
    if (!emailRegex.test(email)) {
      return false; // L'email est invalide
    }

    // Validation du téléphone
    const phoneRegex = /^\d{10}$/; // Expression régulière pour valider un numéro de 10 chiffres
    if (!phoneRegex.test(phone)) {
      return false; // Le téléphone est invalide
    }

    // Si toutes les validations passent, retourne true
    return true;
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearSnackMessage();

    // Valider le formulaire
    if (!validateForm()) {
      setTimeout(() => {
        setSnackMessage({
          message: "Remplissez correctement tous les champs",
          severity: "error",
        });
      }, 0);
      return; // Arrêter l'exécution si le formulaire est invalide
    }

    try {
      // Envoyer la commande à l'API
      await sendCommand({
        nom_et: customerInfo.name,
        tel_et: customerInfo.phone,
        email_et: customerInfo.email,
        id_polo: polo.id,
        qt_polo: quantity,
        taille: selectedSize,
      });

      // Afficher un message de succès
      setSnackMessage({
        message: "Commande enregistrée avec succès",
        severity: "success",
      });

      // Reset les champs du formulaire
      setCustomerInfo({ name: "", email: "", phone: "" });
      setQuantity(1);
      setSelectedSize(polo.sizes[0]);

      //  fermer la modal
      onClose();
    } catch (error) {
      console.error("Erreur lors de l'envoi de la commande:", error);
      setSnackMessage({
        message: "Erreur lors de l'envoi de la commande",
        severity: "error",
      });
      return; // Arrêter l'exécution si une erreur est survenue
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto scrollbar-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{polo.nom}</h2>
              <button onClick={onClose}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                {/* Champ Nom Complet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-all"
                  />
                </div>

                {/* Champ Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        email: e.target.value,
                      })
                    }
                    className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-all"
                  />
                </div>

                {/* Champ Téléphone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-all"
                  />
                </div>
              </div>

              {/* Sélection de la Taille */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Taille
                </label>
                <div className="mt-2 flex gap-2">
                  {polo.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 rounded-md ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-gray-100 border border-gray-300"
                      }`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sélection de la Quantité */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantité
                </label>
                <div className="mt-1 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors border border-gray-300">
                    -
                  </button>
                  <div className="px-4 py-2 bg-blue-400 rounded-md text-center text-white font-bold border border-blue-500">
                    {quantity}
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.min(5, prev + 1))}
                    className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors border border-gray-300">
                    +
                  </button>
                </div>
              </div>

              {/* Bouton de Soumission */}
              {!loadingPstCmd && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 font-bold bg-[#2b97c1] text-white rounded-lg hover:bg-gray-800 transition-colors border ">
                  Enregistrer la commande - {polo.prix * quantity} FCFA
                </motion.button>
              )}

              {/* Bouton de Chargement */}
              {loadingPstCmd && (
                <Button
                  disabled={true}
                  loading
                  variant="contained"
                  className="w-full py-3  text-white rounded-lg bg-[#34b6e8] transition-colors border border-black">
                  Submit
                </Button>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
