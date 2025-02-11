import React from "react";
import { motion } from "framer-motion";
import type { CartItem } from "../types";

interface OrderHistoryProps {
  orders: CartItem[];
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12">
        Historique des Précommandes
      </motion.h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">
          Aucune précommande pour le moment
        </p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {orders.map((order, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{order.polo.name}</h3>
                <span className="text-lg font-bold">
                  {order.polo.price * order.quantity} FCFA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p>
                    <span className="font-medium">Client:</span>{" "}
                    {order.customerInfo.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {order.customerInfo.email}
                  </p>
                  <p>
                    <span className="font-medium">Téléphone:</span>{" "}
                    {order.customerInfo.phone}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-medium">Taille:</span> {order.size}
                  </p>
                  <p>
                    <span className="font-medium">Couleur:</span> {order.color}
                  </p>
                  <p>
                    <span className="font-medium">Quantité:</span>{" "}
                    {order.quantity}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
