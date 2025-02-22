import { create } from "zustand";
import { fetchPolos, postCommand } from "../services/client"; // Assure-toi que cet import est correct
import { Polo, CommandPolo } from "../types"; // Assure-toi d'avoir un type Polo défini

// Définition du type du store
interface PolosStore {
  polos: Polo[];
  loadingFtPl: boolean;
  errorMessage: string | null;
  fetchPolos: () => Promise<void>;
  sendCommand: (data: CommandPolo) => Promise<void>;
  loadingPstCmd: boolean;
}

// Création du store avec Zustand
const usePolosStore = create<PolosStore>((set) => ({
  polos: [],
  loadingFtPl: true,
  errorMessage: null,
  loadingPstCmd: false,

  fetchPolos: async () => {
    set({ loadingFtPl: true, errorMessage: null });

    try {
      const polos = await fetchPolos(); // `fetchPolos` retourne déjà les données

      set({ polos, loadingFtPl: false });
    } catch (error) {
      set({
        errorMessage: "Erreur lors du chargement des polos",
      });
      console.error("Error fetching polos:", error);
      throw error;
    } finally {
      set({ loadingFtPl: false });
    }
  },

  sendCommand: async (data: CommandPolo) => {
    set({ loadingPstCmd: true });
    try {
      await postCommand(data);
    } catch (error) {
      set({
        errorMessage: "Erreur lors de la commande",
      });
      console.error("Error posting command:", error);
      throw error;
    } finally {
      set({ loadingPstCmd: false });
    }
  },
}));

export default usePolosStore;
