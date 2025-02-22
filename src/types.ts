export interface Polo {
  id: number;
  nom: string;
  prix: number; // Si le prix est toujours une chaîne, sinon number si c'est un nombre
  img: string;
  sizes: string[]; // Tableau de tailles en string
}

export interface CommandPolo {
  nom_et: string;
  tel_et: string;
  email_et: string;
  id_polo: number; // ou string si l'ID est stocké sous forme de texte
  qt_polo: number; // quantité de polos commandés
  taille: string; // ex: "S", "M", "L", etc.
}
