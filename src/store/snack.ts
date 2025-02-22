import { create } from "zustand";

// Définir un type pour l'état
interface SnackState {
  message: string;
  severity: "error" | "info" | "success" | "warning";
  setSnackMessage: (payload: {
    message: string;
    severity: SnackState["severity"];
  }) => void;
  clearSnackMessage: () => void;
}

// Créer le store Zustand
const useSnackStore = create<SnackState>((set) => ({
  message: "", // État initial du message
  severity: "info", // État initial de la sévérité

  // Action pour définir le message et la sévérité
  setSnackMessage: ({ message, severity }) => set({ message, severity }),

  // Action pour effacer le message et réinitialiser la sévérité
  clearSnackMessage: () => set({ message: "", severity: "info" }),
}));

export default useSnackStore;
