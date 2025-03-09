import axios from "axios";
import { CommandPolo } from "../types";

// API endpoint

const apiUrl = import.meta.env.VITE_API_URL;
// console.log(apiUrl);

// recuperer les polos
export const fetchPolos = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/liste/polo`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // console.log(response.data);
    if (response.data.status !== 1) {
      throw new Error("Error fetching polos");
    }
    return response.data.polos;
  } catch (error) {
    console.error("Error fetching polos:", error);
    throw error;
  }
};

// effectuer une commande
export const postCommand = async (data: CommandPolo) => {
  try {
    const response = await axios.post(`${apiUrl}/api/commande/polo`, data);
    // console.log(response.data);
    if (response.data.status !== 1) {
      throw new Error("Error Post polos");
    }
    return response.data;
  } catch (error) {
    console.error("Error posting command:", error);
    throw error;

    return null;
  }
};
