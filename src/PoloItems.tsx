import React from "react";
import { PoloCard } from "./components/PoloCard";
import { Polo } from "./types";

interface PoloItemsProps {
  onSelect: (polo: Polo) => void; // Prop pour gérer la sélection d'un polo
}

export const PoloItems: React.FC<PoloItemsProps> = ({ onSelect }) => {
  // Liste des polos
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {polos.map((polo) => (
        <PoloCard
          key={polo.id}
          polo={polo}
          onSelect={() => onSelect(polo)} // Passer le polo sélectionné à la prop onSelect
        />
      ))}
    </div>
  );
};
