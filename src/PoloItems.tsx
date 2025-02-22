import React from "react";

import { PoloCard } from "./components/PoloCard";
import { PoloSkeleton } from "./components/PoloSkeleton";
import { Polo } from "./types";
import usePolosStore from "./store/client";
interface PoloItemsProps {
  onSelect: (polo: Polo) => void; // Prop pour gérer la sélection d'un polo
}

export const PoloItems: React.FC<PoloItemsProps> = ({ onSelect }) => {
  const { loadingFtPl, polos } = usePolosStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
      {loadingFtPl && (
        <>
          <PoloSkeleton />
          <PoloSkeleton />
          <PoloSkeleton />
          <PoloSkeleton />
        </>
      )}
      {!loadingFtPl &&
        polos.map((polo) => (
          <PoloCard key={polo.id} polo={polo} onSelect={() => onSelect(polo)} />
        ))}
    </div>
  );
};
