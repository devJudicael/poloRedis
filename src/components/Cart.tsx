import { CartItem } from "../types";
import { motion } from "framer-motion";

interface CartProps {
  cart: CartItem[];
  onClick: () => void;
}

const Cart = ({ cart, onClick }: CartProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Panier</h2>
          <button
            onClick={onClick}
            className="text-gray-500 hover:text-gray-700">
            Fermer
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Votre panier est vide</p>
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
                    (total, item) => total + item.polo.price * item.quantity,
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
  );
};

export default Cart;

// () => setIsCartOpen(false)
