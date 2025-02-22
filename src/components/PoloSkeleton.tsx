import React from "react";
import Skeleton from "@mui/material/Skeleton";

export const PoloSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Skeleton pour l'image */}
      <div className="relative h-64">
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </div>

      {/* Skeleton pour le contenu */}
      <div className="p-4">
        {/* Skeleton pour le titre */}
        <Skeleton variant="text" width="60%" height={32} />

        {/* Skeleton pour le prix et le bouton */}
        <div className="mt-4 flex justify-between items-center">
          {/* Skeleton pour le prix */}
          <Skeleton variant="text" width="30%" height={40} />

          {/* Skeleton pour le bouton */}
          <Skeleton variant="rectangular" width={120} height={40} />
        </div>
      </div>
    </div>
  );
};
